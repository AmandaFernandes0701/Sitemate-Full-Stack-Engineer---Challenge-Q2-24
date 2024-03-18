const readline = require('readline');
const managerService = require('./services/ManagerService');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createIssue() {
  let validTitle = false;
  let title;

  do {
    title = await new Promise((resolve) => {
      rl.question(
        '\nTitle --> Must be between 2 and 30 characters long\n✏️  Enter issue title: ',
        (input) => {
          if (input.length < 2 || input.length > 30) {
            console.error(
              chalk.red('\nError: Incorrect value, please enter again!'),
            );
          } else {
            validTitle = true;
          }
          resolve(input);
        },
      );
    });
  } while (!validTitle);

  let validDescription = false;
  let description;

  do {
    description = await new Promise((resolve) => {
      rl.question(
        '\nIssue Description --> Must be between 50 and 200 characters long.\n✏️  Enter issue description: ',
        (input) => {
          if (input.length < 50 || input.length > 200) {
            console.error(
              chalk.red('\nError: Incorrect value, please enter again!'),
            );
          } else {
            validDescription = true;
          }
          resolve(input);
        },
      );
    });
  } while (!validDescription);

  try {
    const issueData = {
      title: title,
      description: description,
    };

    await managerService.useCreateIssue(issueData);
    console.log(chalk.green('\n✅ Issue created successfully!!!'));
  } catch (error) {
    console.log('o erro é:', error.response.data);
    console.error(
      chalk.red('Error creating issue:'),
      error.response.data.message,
    );
  } finally {
    rl.close();
  }
}

function editIssue() {
  rl.question('Enter issue ID to edit: ', async (id) => {
    rl.question('Enter new issue title: ', async (title) => {
      rl.question('Enter new issue description: ', async (description) => {
        try {
          const result = await managerService.useUpdateIssue(id, {
            title,
            description,
          });
          console.log('Issue updated successfully:', result);
        } catch (error) {
          console.error('Error updating issue:', error.message);
        } finally {
          rl.close();
        }
      });
    });
  });
}

async function viewIssues() {
  try {
    const issues = await managerService.useGetAllIssues();
    console.log('All Issues:', issues);
  } catch (error) {
    console.error('Error fetching issues:', error.message);
  } finally {
    rl.close();
  }
}

function deleteIssue() {
  rl.question('Enter issue ID to delete: ', async (id) => {
    try {
      await managerService.useDeleteIssue(id);
      console.log(chalk.green('\n✅ Issue deleted successfully!!!'));
    } catch (error) {
      console.error('Error deleting issue:', error.message);
    } finally {
      rl.close();
    }
  });
}

function start() {
  console.log(
    chalk.bold.magenta(
      '\nIssue Management System - By Amanda Fernandes (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\n',
    ),
  );

  console.log('1- Create Issue');
  console.log('2- Edit Issue');
  console.log('3- View All Issues');
  console.log('4- Delete Issue');

  rl.question('\nEnter your choice (1-4): ', (choice) => {
    switch (choice) {
      case '1':
        createIssue();
        break;
      case '2':
        editIssue();
        break;
      case '3':
        viewIssues();
        break;
      case '4':
        deleteIssue();
        break;
      default:
        console.log('Invalid choice.');
        rl.close();
    }
  });
}

start();
