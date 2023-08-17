# Bootcamp README Generator

Create a CLI README generator that prompts the user for input.

## Sources

- Mainly used the Mini-Project in the 09-NodeJS Module
- Spoke with Nedda, Donnie, and Chelsea while finishing up to make sure everything was included

## Description

This code, when run, prompts the user to input data using the "inquirer" function loaded through npm. There are input, list, and editor prompts that the user will have to fill in to complete the form. It uses template literals to take the user input and place the responses into a pre-written and formatted form. This is done once the prompt is completed. In the .then() function, before the template literal is filled out, an if statement uses the user selected lisence choice to add a variable with a link to an image of the used lisence that is then put at the top of the README.

At the very end, the created README is saved using fs.writeFile.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Link to Repo:

https://github.com/Kylyote/bootcamp-readme-gen
