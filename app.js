new Vue({
	el: '#app',
	data: {
		person: {
			name: 'SLE',
			height: 175,
		},
		
		website: 'http://www.google.de',
		
		atag: '<a href="http://google.de">Testing html</a>',
	},
	
	methods: {
		sayHi: function(greeting) {
			return greeting+' ' + this.person.name;
		},
	},
});
