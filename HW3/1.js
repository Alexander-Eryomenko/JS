var body = {
    tagName: 'body',
    subTags: [
        {
            tagName: 'div',
            subTags: [
                {
                    tagName: 'span',
                    text: 'Enter a data please:',
                },
                {
                    tagName: 'input',
                    attrs: {
                        id: 'name',
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        id: 'surname',
                    }
                }
            ],
        },
        {
            tagName: 'div',
            subTags: [
                {
                    tagName: 'button', id: 'ok',
                    text: 'OK',
                },
                {
                    tagName: 'button', id: 'cancel',
                    text: 'Cancel',
                },
            ],
        },
    ],
};

console.log(body.subTags[1].subTags[1].text);
console.log(body.subTags[0].subTags[0].tagName.attrs);