# React Email Starter

A live preview right in your browser so you don't need to keep sending real emails during development.

## Getting Started

First, install the dependencies:

```sh
pnpm i
```

Then, run the development server:

```sh
pnpm dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Designing

- The fallback fonts are more important than the ones you pick because of [compatibility](https://www.caniemail.com/features/css-at-font-face/), so design with that in mind.
- Only pick fonts that exist in google fonts.

## Developing

- Check already made templates to see how things are being done.
- Pratically only css 1.8 is allowed check [caniemail.com](https://www.caniemail.com/) to decide what to use.
- To know what html tags it supports also use [caniemail.com](https://www.caniemail.com/).
- Don't try to make unenven shapes, just use images, the compatibility for pure css is not good.
- There are some [dark mode hacks](https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers) for preventing inverting colors.
- Use the [React Email](https://react.email/docs/components/image) docs to see how to use the components.

### How to upload images

- Download and import the infotravel-media-upload.postman_collection.json in postman
- Go into body and in the file parameter select the image you want to upload and send the request
- To use it get the `fileName` from the request, remove the final dot: `.` and put it in this url: https://media.infotravel.com.br/image/upload/`fileName`

### How to use images

- All email clients can display .png, .gif, and .jpg images. Unfortunately, .svg images are not well supported, regardless of how they’re referenced, so avoid using these. See [Can I Email](https://www.caniemail.com/features/image-svg/) for more information.
- Only use background images in tables like `<Section>` and `<Container>`.

## On exporting the html

Run

```sh
pnpm export
```

- If you use a background image in tailwind it will replace the `""` for: `&#x27;`. example:
- background-image: url(`&#x27;`https://media.infotravel.com.br/image/upload/1622c81af98742f93e373b85f8deab0e.png`&#x27;`);
- Just replace the `&#x27;` with `"`.
- background-image: url("https://media.infotravel.com.br/image/upload/1622c81af98742f93e373b85f8deab0e.png");

## Gather more info here

- https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/
