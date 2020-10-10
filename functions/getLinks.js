const { GET_LINKS } = require("$functions/utils/linkQueries");
const sendQuery = require("$functions/utils/sendQuery");
const formattedResponse = require("$functions/utils/formattedResponse");

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS);
        const data = res.allLinks.data;
        return formattedResponse(200, data);
    } catch (error) {
        console.error(error);
        return formattedResponse(500, { error: 'Something went wrong' });
    }
}