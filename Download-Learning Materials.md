# Get Your PWNEU Documents in PDF Format 📥
 
This guide will walk you through how to add the "Docs to PDF" feature to your PWNEU Learning Materials.

### 1. Clone the Repository <br>
First, clone this repository to your local machine:

```
$ git clone https://github.com/pwneu/learn.git
```

### 2. Install the docs-to-pdf Tool <br>

Before proceeding, ensure that you have the docs-to-pdf npm package installed. If not, install it globally by running:

```
$ npm install -g docs-to-pdf
```

### 3.  Generate PDF from All Document

To generate a PDF from multiple sections of the documentation, simply run this command:

```
npx docs-to-pdf --initialDocURLs="https://pwneu.github.io/learn/modules/introduction,https://pwneu.github.io/learn/toolkit/introduction,https://pwneu.github.io/learn/article/introduction,https://pwneu.github.io/learn/ra-cybercrime/category" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://pwneu.github.io/learn/img/PWNEU_LightGreenLogo.svg"
```

<img
  src=""
  alt="Sample_Table-of-Contents"
/>

### 4. Set Up the Command for Specific Module <br> 

To generate a PDF from a specific module in PWNEU Documentation, run the following command:

```
$ npx docs-to-pdf --initialDocURLs="https://pwneu.github.io/learn/modules/introduction" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://pwneu.github.io/learn/img/PWNEU_LightGreenLogo.svg"
```

This command is configured for a selected module but can be customized to other modules.


### 5. Customizing the URL <br>
Replace https://pwneu.github.io/learn/modules/introduction with the URL of the module or documentation you want to generate the PDF for. Here are some examples:

- /learn/modules/introduction
- /learn/toolkit/introduction
- /learn/article/introduction
- /learn/ra-cybercrime/category

The command will generate a PDF based on the content at the URL you provide.


### 6. Customize the Command <br>
You can further customize the PDF generation by adjusting parameters in the command. Some options include:

- Margins: Adjust margins for your PDF.
- Cover Image: Use a custom cover image.
- Excluding Elements: Remove unwanted elements like sidebars or navigation links.

You can also modify the **contentSelector, paginationSelector,** and other parameters to suit your needs.


### 7. Run the Command <br>
Once everything is set up, run the command from your terminal. This will generate a PDF version of your documentation.


# Handling Missing Dependencies (fs-extra)
If you encounter an error indicating that the fs-extra module is missing, you can resolve this by installing it manually.

## 1. Steps to Install fs-extra <br>
Install fs-extra globally:

```
$ npm install -g fs-extra
```
## 2. After installing the dependency, run the docs-to-pdf command again: <br>

```
$ npx docs-to-pdf --initialDocURLs="https://pwneu.github.io/learn/modules/introduction" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://pwneu.github.io/learn/img/PWNEU_LightGreenLogo.svg"
```


