React Development Toolkit
=========================

Overview
--------

This repository serves as a comprehensive toolkit for scaling large-scale React (NextJS) projects. It includes a collection of boilerplate projects, each demonstrating key aspects of modern React development, such as feature flags, bundling techniques, UI frameworks like Ant Design and Material-UI (MUI), linting, and testing with Jest and RTL (React Testint Library). Designed as a Lerna monorepo, this toolkit allows for modular development and maintenance of each feature set within a unified ecosystem.

Features
--------

*   **Feature Flags**: Example setup for managing feature toggling.
*   **Bundlers**: Configurations for efficient code bundling.
*   **UI Libraries**: Boilerplates for Ant Design and MUI.
*   **Linting**: Pre-configured linting tools for code quality.
*   **RTL Support**: Right-to-Left layout examples.
*   **Jest**: Setup for unit and integration testing.


Running Individual Projects
-----------------

This toolkit uses `cross-env` to provide a cross-platform way of setting environment variables. This approach allows you to specify the project name when running a project in the monorepo.

### Steps to Run a Project

1.  **Start the Project**
    
    To start a specific project, use the `npm_config_project` argument with the `start-project` script. For example, to run `project1`, execute:
    
    
    `npm run start-project --project=project1`
    
    Replace `project1` with the name of the project you want to start.
    

### Note

*   This method allows you to switch between projects easily without modifying the `package.json` file each time.
*   This method ensures compatibility across different operating systems.
*   Ensure that the project names in the `packages` directory match the names used in the command.

Using `cross-env`, you can seamlessly manage and run multiple projects within the monorepo, facilitating a smoother development experience across various platforms.


Setting Up a Lerna Monorepo
-----------------------

As this entire project also serves to show how a lerna monorepo can be created, here is a general guide:

### Prerequisites

*   Node.js installed (preferably the latest stable version).
*   Yarn or npm for package management.

### Installation

1. **Install Lerna Globally**
    
    `npm install -g lerna # or yarn global add lerna`
    
2.  **Initialize Lerna**
    
    `lerna init`
    
    This command creates a `lerna.json` file and a `packages` folder.
    
3.  **Organize Projects**
    
    Move each Next.js project into the `packages` directory. Each project should reside in its own folder within `packages`.
    
4.  **Update `lerna.json`**
    
    `{   "version": "0.0.0",   "npmClient": "yarn",   "useWorkspaces": true,   "packages": ["packages/*"] }`
    
5.  **Configure Workspaces in `package.json`**
    
    For Yarn:
    
    `{   "private": true,   "workspaces": ["packages/*"] }`
    
    For npm:
    
    `{   "workspaces": ["packages/*"] }`
    
6.  **Install Dependencies**
    
    With Yarn:
    
    `yarn install`
    
    With npm:
    
    `npm install`
    
7.  **Run Individual Projects**
    
    *   Using Lerna with Yarn:
        
        `lerna run --scope project-name start`
        
    *   Directly with Yarn Workspaces:
        
        `yarn workspace project-name start`
        
    *   Directly with npm Workspaces:
        
        `npm run start --workspace=project-name`
        
    
    Replace `project-name` with the actual name of the project.
    
8.  **Further Configuration**
    
    Customize Lerna and workspace settings as needed for your specific use case.
    

Contributing
------------

Contributions to this toolkit are welcome. Please follow the standard pull request process for any changes.

License
-------

\[Specify License Here\]
