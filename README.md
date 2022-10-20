# Opening hours
In this app we are using ReactJS, Typescript and Styled components for styling.


## How to use

### Step 1: NodeJS and npm
Download and install __[Node.js v16.13.1](https://nodejs.org/dist/v16.13.1/)__.(preferabally latest stable version)

### Step 2: Get dependency packages

    npm install or yarn

### Step 3: Start project
To run the development server:

```bash
npm run start
# or
yarn

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Hooks
We are using a hook called `useFetchOpeningHours` which basically responsible for providing us the data that needs to be displayed. 

The major logic of formatting the data into the displayable format takes place in the file called `src/utils/timing-utils.ts`

### Styling
We are using ThemeProvider from `styled-components` and `styled-system` which lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme as design tokens. Refer to `src/components/theme/ThemeProvider.tsx`

### Testing
Run the following command: `npm run test`, this also provides the coverage of the test files.
Refer to `jest.config.js` to make any changes to test configurations.
All the tests are written under the sub folders called `__tests__`

Refer to test-utils file which provides methods that wrap the providers `src/utils/tests/test-utils`


* Typescript Types are mentioned under `interfaces` folder (Example: IStoreTimings, IOpenings in timings.ts) 

