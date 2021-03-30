const express = require("express");
const router = express.Router();


router.get("/get_navigationbar_info", function (request, response) {
    const data = {
        name: "Bob",
        navigation_fields: ["Jaarplanning", "Agenda", "Log Out"]
    }
    response.status(200).send(data).end();
});

module.exports = router;