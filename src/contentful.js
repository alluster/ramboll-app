const contentful = require('contentful');
var _ = require('lodash');


function createClient() {
    const options = {
        host: 'cdn.contentful.com',
        space:  process.env.REACT_APP_CTF_SPACE_ID,
        accessToken: process.env.REACT_APP_CTF_CDA_TOKEN
    };

    return contentful.createClient(options);
}


module.exports.getContent = getContent;
module.exports.getEntry = getEntry;

function getContent(type) {
    return new Promise((resolve, reject) => {
        const client = createClient();

        client.getEntries({ 'content_type': type })
            .then(entries => {
                resolve(entries.items);
                console.log(entries)

            })
            .then()
            .catch(error => {
                reject(error);
            });
    });
}

function getEntry(id) {
    return new Promise((resolve, reject) => {
        const client = createClient();

        client.getEntry(id)
            .then(entry => {
                resolve(entry);
                console.log(entry)

            })
            .then()
            .catch(error => {
                reject(error);
            });
    });
}