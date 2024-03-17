const readline = require('readline');
const IssueController = require('../controllers/IssueController');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createIssue() {
  rl.question('Enter issue title: ', async (title) => {
    if (title.length < 2 || title.length > 30) {
      console.error(
        'Error: Title must be between 2 and 30 characters long.\nPlease, try again',
      );
      createIssue();
      return;
    }

    rl.question('Enter issue description: ', async (description) => {
      if (description.length < 50 || description.length > 200) {
        console.error(
          'Error: Description must be between 50 and 200 characters long.\nPlease, try again',
        );
        createIssue();
        return;
      }

      try {
        const issueData = {
          title: title.trim(),
          description: description.trim(),
        };

        const result = await IssueController.create({
          issueData,
        });
        console.log('Issue created successfully:', result);
      } catch (error) {
        console.error('Error creating issue:', error.message);
      } finally {
        rl.close();
      }
    });
  });
}

function editIssue() {
  rl.question('Enter issue ID to edit: ', async (id) => {
    rl.question('Enter new issue title: ', async (title) => {
      rl.question('Enter new issue description: ', async (description) => {
        try {
          const result = await IssueController.update({
            params: { id },
            body: { title, description },
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
function viewIssues() {
  console.log('oi');
  rl.close();
}

function deleteIssue() {
  rl.question('Enter issue ID to delete: ', async (id) => {
    try {
      const result = await IssueController.destroy({ params: id });
      console.log('Issue deleted successfully:', result);
    } catch (error) {
      console.error('Error deleting issue:', error.message);
    } finally {
      rl.close();
    }
  });
}

function start() {
  console.log('Issue Management System');
  console.log('1- Create Issue');
  console.log('2- Edit Issue');
  console.log('3- View All Issues');
  console.log('4- Delete Issue');

  rl.question('Enter your choice (1-4): ', (choice) => {
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
    }
  });
}

start();
