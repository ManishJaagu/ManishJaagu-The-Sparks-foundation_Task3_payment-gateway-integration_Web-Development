var options = {
"key": "rzp_test_FUj3cCj6dIAmw1",
"amount": "100000",
"currency": "INR",
"description": "Donor Vault",
"image": "example.com/image/rzp.jpg",
"prefill":
{
    "email": "manishpikachu@example.com",
    "contact": +919900000000,
},
config: {
    
    display: {
    blocks: {
        utib: { 
        name: "Pay using Axis Bank",
        instruments: [
            {
            method: "card",
            issuers: ["UTIB"]
            },
            {
            method: "netbanking",
            banks: ["UTIB"]
            },
        ]
        },
        other: { 
        name: "Other Payment modes",
        instruments: [
            {
            method: "card",
            issuers: ["ICIC"]
            },
            {
            method: 'netbanking',
            }
        ]
        }
    },
    hide: [
        {
        method: "upi"
        }
    ],
    sequence: ["block.utib", "block.other"],
    preferences: {
        show_default_blocks: false
    }
    }
},
"handler": function (response) {
    alert(response.razorpay_payment_id);
},
"modal": {
    "ondismiss": function () {
    if (confirm("Are you sure, you want to close the form?")) {
        txt = "You pressed OK!";
        console.log("Checkout form closed by the user");
    } else {
        txt = "You pressed Cancel!";
        console.log("Complete the Payment")
    }
    }
}
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function (e) {
rzp1.open();
e.preventDefault();
}



document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
        observer.observe(section);
    });
});
