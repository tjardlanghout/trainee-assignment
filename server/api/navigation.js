const express = require("express");
const router = express.Router();


router.get("/get_navigationbar_info", function (request, response) {
    const data = {
        name: "Laurens",
        navigation_fields: ["Jaar-planning", "Agenda", "Uitloggen"]
    }
    response.status(200).send(data).end();
});

module.exports = router;