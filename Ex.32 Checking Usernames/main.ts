/*Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let currentUsers: string[] = ["Hadiqa", "Mariam", "Laraib", "Fatima", "Eshal"];
let newUsers: string[] = ["Hadiqa", "Mariam", "Sarah", "Alia", "Mehak"];

// Function to check if a username is a duplicate
function isDuplicateUsername(username: string, existingUsernames: string[]): boolean {
    return existingUsernames.some(existingUsername => existingUsername.toLowerCase() === username.toLowerCase());
}

// Function to print a message indicating the availability of a username
function printUsernameAvailability(username: string, isDuplicate: boolean): void {
    if (isDuplicate) {
        console.log(`Sorry, the username '${username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${username}' is available.`);
    }
}

// Function for checking username availability
function checkUsernameAvailability(newUsers: string[], currentUsers: string[]): void {
    newUsers.forEach(newUser => {
        let isDuplicate = isDuplicateUsername(newUser, currentUsers);
        printUsernameAvailability(newUser, isDuplicate);
    });
}

checkUsernameAvailability(newUsers, currentUsers);

