var app = angular.module("filterApp", []);

app.controller("filterAppCntrl", function($scope){
	$scope.stdDetails = [
		{
			name: 'Raj',
			gender: 'male',
			dob: new Date(),
			feePaid: 2000,
			isBalExist: true,
			location: 'Hyderabad'
		},
		{
			name: 'Teena',
			gender: 'Female',
			dob: new Date(),
			feePaid: 29000,
			isBalExist: false,
			location: 'Delhi'
		},
		{
			name: 'Sheen',
			gender: 'Female',
			dob: new Date(),
			feePaid: 29000,
			isBalExist: false,
			location: 'Delhi'
		},
		{
			name: 'Teena',
			gender: 'Female',
			dob: new Date(),
			feePaid: 29000,
			isBalExist: false,
			location: 'Delhi'
		},
		{
			name: 'Meena',
			gender: 'Female',
			dob: new Date(),
			feePaid: 29000,
			isBalExist: false,
			location: 'Delhi'
		},
		{
			name: 'John',
			gender: 'Male',
			dob: new Date(),
			feePaid: 1110,
			isBalExist: true,
			location: 'Pune'
		},
		{
			name: 'Suresh',
			gender: 'Male',
			dob: new Date(),
			feePaid: 212312,
			isBalExist: false,
			location: 'Delhi'
		},
		{
			name: 'Krish',
			gender: 'Male',
			dob: new Date(),
			feePaid: 12989,
			isBalExist: false,
			location: 'Mumbai'
		}
	];

});