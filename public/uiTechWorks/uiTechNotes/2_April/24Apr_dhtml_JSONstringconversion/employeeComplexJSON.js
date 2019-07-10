var contactDetails = {
	fName: "Razz",
	"LName": "Sri",
	address: {
		personal: {
			streetName: 'realiANCE',
			pin: 500016
		},
		office: {
			streetName: 'Spencer',
			"pin": 530011
		}
	},
	email: {
		personal: ["test1@gmail.com", "test2@gmail.com"],
		office: "company@company.com"
	},
	contactImg: '.../contact.jpg',
	dob: "23/1/2017",
	contactNo: {
		personal: [234234234, 23423423, 23423423],
		office: "040-234234"
	}
};

console.log(contactDetails.fName);
console.log(contactDetails.address.personal.pin);
for(var temp in contactDetails){
	console.log(temp);
	console.log(contactDetails[temp]);
}

