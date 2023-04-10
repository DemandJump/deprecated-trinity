# Trinity

![Trinity](https://c.tenor.com/QPQLFeLVSnYAAAAC/trinity-neotrin.gif)


# THIS PROJECT WAS DEPRECATED IN FAVOR OF MOVING UI COMPONENTS INTO OUR MORPEUS APP'S /SRC/COMPONENTS/SHARED FOLDER

Public Demandjump React Component Library and UIKit based on Material Design with MaterialUI.

## Installation Instructions

If you are using npm, you can run the following command:
     npm install @demandjump/trinity

For yarn users:
     yarn add @demandjump/trinity

Then import the components like so:

     import { DJTextField } from '@demandjump/trinity';

     ...

     <DJTextField name="myFieldName" id="myFieldId">

     ...

See the storybook for more information about props
## Storybook

See the components live at [Our Storybook](https://demandjump.github.io/trinity/)

-- Storybook is deployed with github actions via the .github/workflows/storybook.yaml file and the npm package @storybook/storybook-deployer and the package.json script:
     "deploy-storybook": "storybook-to-ghpages"

-- I had to add a personal access token to the github action called GH_TOKEN for the action to be able to deploy the storybook.
