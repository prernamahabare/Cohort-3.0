const express = require("express");
const app = express();

let users = [{
    name: "Prerna",

    kidneys: [{
        healty: false,
    }, {
        healty: true,
    }]
}]
// GET - Going for consultation and doing count of kidneys.
app.get("/", function (req, res) {
    let userKidneys = users[0].kidneys;
    let countNumberOfKideys = userKidneys.length;

    let noOfHealtyKid = 0;

    for (let i = 0; i < userKidneys.length; i++) {
        if (userKidneys[i].healty) {
            noOfHealtyKid = noOfHealtyKid + 1;
        }
    }

    const noOfUnHealtyKid = countNumberOfKideys - noOfHealtyKid;

    res.json({
        countNumberOfKideys,
        noOfHealtyKid,
        noOfUnHealtyKid
    })
})

app.use(express.json());

// POST - Going to add a new Kidney. It is either healty or not healty.
app.post("/", function (req, res) {
    const isHealty = req.body.isHealty;

    users[0].kidneys.push({
        healty: isHealty
    })

    res.json({
        msg: "Done!!"
    });
})

// PUT - Replace all the unhealthy kidneys with healty one.

app.put("/", function (req, res) {
    let countUnHealthyKidneys = countUnHealthyKid();
    // console.log("Count of unhealthy kidneys:", count);

    if (countUnHealthyKidneys == 0) {
        res.json({
            msg: "No UnHealty Kidney found to make it Healty"
        })
    } else{
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healty = true;
        }
        res.json({
            msg: "Put Done!!"
        })

    }    
})

// DELETE - Going to remove all unhealthy kidneys.
app.delete("/", function (req, res) {

    let countUnHealthyKidneys = countUnHealthyKid();
    // console.log("Count of unhealthy kidneys:", count);

    if (countUnHealthyKidneys == 0) {
        res.json({
            msg: "No UnHealty Kidney"
        })
    } else {
        const newKidArr = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healty) {
                newKidArr.push({
                    healty: true
                })
            }
        }

        users[0].kidneys = newKidArr;

        res.json({
            msg: "Delete Done!!"
        })

    }
})


function countUnHealthyKid() {
    let count = 0;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healty) {
            count++;
        }
    }
    return count;

}
app.listen(3000);