Overall Application Structure
======

Here is my implementation of a contact list Vue application. The code challenge requirements called for a simple UI for searching through a contacts list.
Here are the basic foundational factors that I had to keep in mind for this project:
- Email validation on form submission, with UI alerts/notifications of errors
- Being able to search more than just the email, optionally
- Ability to sort results, based on custom parameters
- Allow users to be able to highlight/save contacts to their bookmarks, allowing for more opportunities such as data collection for custom personalization.

My goal was to build an interface and application structure that lays the foundation for allowing user’s to ability to fully “manage” a customers list.

UI Framework
======
As for the framework, I went with Bootstrap. I usually setup a SASS/LESS implementation but decided to keep the styling files to a minimum for this project.

Linting & Prettier
======
Leveraged ESlint and prettier to keep the format of code consistent across all application files.

Vuex Store
======
Leveraged ESlint and prettier to keep the format of code consistent across all application files.

Validation & Searching
======
I used a simple regex validation that displays the format error to the user, but since I’m running the search on @keyup instead of @click button, the validation runs on the fly, and only impacts the UI visually.




==============






# vue-contacts-searching

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
