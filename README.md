This is a [Next.js](https://nextjs.org/) and Typescript simple todo App.

Forms are fully validated, and the project is fully responsinve, thanks to [Emotion Js](https://emotion.sh/docs/introduction) styled component conventions.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project setup:

1. Create Next App
   npx create-next-app@latest

2. Install Eslinst and prettier
   npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node

npm i --save-dev prettier eslint

3. Install bootstrap
   npm install react-bootstrap bootstrap

4. For react Icons: 4. npm install react-icons --save

5. For Form validation used [Zod](https://github.com/react-hook-form/resolvers#zod): npm install zod

5. For React hook form:

npm i react-hook-form
npm i @hookform/resolvers


## Errors and fixes:

1. Error:
 - Warning: Each child in a list should have a unique "key" prop.

SOLVED: Key in rendering were not direct child of my map function, so fixed by inserting the key directly to the first child on the div
, this was done by using the Fragment tag

2. Error

- after clicking on Edit icon, forms were showing the errors, fixed by removing the condition for error rendering from:
   {!editingTodo && errors.description && (
            <Styled.Error>{errors.description.message}</Styled.Error>
          )}
to: 
<Styled.Error>
            {errors.description && errors.description.message}
          </Styled.Error>

## Deployment:

The project is deployed using [Netlify](https://app.netlify.com/), you can find the link [here](https://my-new-branch--splendid-travesseiro-a5947b.netlify.app/)

Netlify plug in download step:
- first creat netlify.toml file
then run npm i @netlify/plugin-nextjs@4.36.1 version