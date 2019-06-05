//angular dataService to pass data between pages.
myApp.factory("dataService", function(localStorageService) {
	var savedData = {};
	var token = "lms";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular dataService to pass data between pages.
myApp.factory("seqenceService", function(localStorageService) {
	var savedData = {};
	var token = "billing";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular dataService to pass data between pages.
myApp.factory("dataSideService", function(localStorageService) {
	var savedData = {};
	var token = "invoice";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular datepicker service
myApp.service('datepickerService', function($rootScope) {
	// temp variable
	var factory = {};

	//get today's date
	factory.today = new Date();
	// calendar 1
	factory.open1 = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened2 = false;
		this.opened1 = true;
		this.opened3 = false;
		this.opened4 = false;
	};
	// calendar 2
	factory.open2 = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened1 = false;
		this.opened2 = true;
		this.opened3 = false;
		this.opened4 = false;
	};
	// calendar 3
	factory.open3 = function($event, picker) {

		$event.preventDefault();
		$event.stopPropagation();
		this.opened2 = false;
		this.opened1 = false;
		this.opened3 = true;
		this.opened4 = false;

	};
	// calendar 4
	factory.open4 = function($event, picker) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened1 = false;
		this.opened2 = false;
		this.opened3 = false;
		this.opened4 = true;

	};
});






//factory 
myApp.factory("countryService", ['$filter', function ($filter) {
	var service = {};
  
	var countrycode = [
	  {"code": " +93" },
	  {"code": " +213" },
	  {"code": " +244" },
	  {"code": " +1-268" },
	  {"code": " +297" },
	  {"code": " +994" },
	  {"code": " +358" },
	  {"code": " +684" },
	  {"code": " +264" },
	  {"code": " +54" },
	  {"code": " +358" },
	  {"code": " +61" },
	  {"code": " +355" },
	  {"code": " +376" },
	  {"code": " +672" },
	  {"code": " +374" },
	  {"code": " +43" },
	  {"code": " +242" },
	  {"code": " +246" },
	  {"code": " +501" },
	  {"code": " +975" },
	  {"code": " +267" },
	  {"code": " +246" },
	  {"code": " +359" },
	  {"code": " +973" },
	  {"code": " +375" },
	  {"code": " +229" },
	  {"code": " +591" },
	  {"code": " +1" },
	  {"code": " +226" },
	  {"code": " +880" },
	  {"code": " +32" },
	  {"code": " +441" },
	  {"code": " +387" },
	  {"code": " +55" },
	  {"code": " +673" },
	  {"code": " +257" },
	  {"code": " +855" },
	  {"code": " +238" },
	  {"code": " +235" },
	  {"code": " +57" },
	  {"code": " +243" },
	  {"code": " +225" },
	  {"code": " +357" },
	  {"code": " +237" },
	  {"code": " +1-345" },
	  {"code": " +56" },
	  {"code": " +0011" },
	  {"code": " +269" },
	  {"code": " +682" },
	  {"code": " +385" },
	  {"code": " +420" },
	  {"code": " +1" },
	  {"code": " +236" },
	  {"code": " +86" },
	  {"code": " +891" },
	  {"code": " +242" },
	  {"code": " +506" },
	  {"code": " +53" },
	  {"code": " +45" },
	  {"code": " +1-809" },
	  {"code": " +253" },
	  {"code": " +1-767" },
	  {"code": " +593" },
	  {"code": " +240" },
	  {"code": " +251" },
	  {"code": " +20" },
	  {"code": " +291" },
	  {"code": " +503" },
	  {"code": " +372" },
	  {"code": " +500" },
	  {"code": " +679" },
	  {"code": " +594" },
	  {"code": " +298" },
	  {"code": " +358" },
	  {"code": " +689" },
	  {"code": " +691" },
	  {"code": " +33" },
	  {"code": " +662" },
	  {"code": " +241" },
	  {"code": " +49" },
	  {"code": " +30" },
	  {"code": " +590" },
	  {"code": " +44" },
	  {"code": " +224" },
	  {"code": " +220" },
	  {"code": " +233" },
	  {"code": " +299" },
	  {"code": " +1-671" },
	  {"code": " +224" },
	  {"code": " +995" },
	  {"code": " +350" },
	  {"code": " +473" },
	  {"code": " +502" },
	  {"code": " +245" },
	  {"code": " +509" },
	  {"code": " +852" },
	  {"code": " +36" },
	  {"code": " +504" },
	  {"code": " +91" },
	  {"code": " +354" },
	  {"code": " +964" },
	  {"code": " +44" },
	  {"code": " +353" },
	  {"code": " +972" },
	  {"code": " +62" },
	  {"code": " +98" },
	  {"code": " +39" },
	  {"code": " +876" },
	  {"code": " +962" },
	  {"code": " +81" },
	  {"code": " +44" },
	  {"code": " +6" },
	  {"code": " +850" },
	  {"code": " +383" },
	  {"code": " +686" },
	  {"code": " +965" },
	  {"code": " +254" },
	  {"code": " +996" },
	  {"code": " +856" },
	  {"code": " +266" },
	  {"code": " +423" },
	  {"code": " +371" },
	  {"code": " +231" },
	  {"code": " +370" },
	  {"code": " +961" },
	  {"code": " +218" },
	  {"code": " +352" },
	  {"code": " +853" },
	  {"code": " +60" },
	  {"code": " +356" },
	  {"code": " +222" },
	  {"code": " +52" },
	  {"code": " +976" },
	  {"code": " +212" },
	  {"code": " +261" },
	  {"code": " +960" },
	  {"code": " +692" },
	  {"code": " +230" },
	  {"code": " +373" },
	  {"code": " +382" },
	  {"code": " +258" },
	  {"code": " +265" },
	  {"code": " +223" },
	  {"code": " +596" },
	  {"code": " +262" },
	  {"code": " +377" },
	  {"code": " +664" },
	  {"code": " +95" },
	  {"code": " +47"  },
	  {"code": " +264" },
	  {"code": " +31" },
	  {"code": " +64" },
	  {"code": " +234" },
	  {"code": " +670" },
	  {"code": " +674" },
	  {"code": " +599" },
	  {"code": " +505" },
	  {"code": " +683" },
	  {"code": " +977" },
	  {"code": " +687" },
	  {"code": " +227" },
	  {"code": " +672" },
	  {"code": " +968" },
	  {"code": " +92" },
	  {"code": " +507" },
	  {"code": " +51" },
	  {"code": " +48" },
	  {"code": " +680" },
	  {"code": " +675" },
	  {"code": " +63" },
	  {"code": " +351" },
	  {"code": " +970" },
	  {"code": " +595" },
	  {"code": " +870" },
	  {"code": " +787" },
	  {"code": " +974" },
	  {"code": " +82" },
	  {"code": " +40" },
	  {"code": " +389" },
	  {"code": " +7" },
	  {"code": " +262" },
	  {"code": " +250" },
	  {"code": " +590" },
	  {"code": " +758" },
	  {"code": " +784" },
	  {"code": " +239" },
	  {"code": " +381" },
	  {"code": " +65" },
	  {"code": " +677" },
	  {"code": " +500" },
	  {"code": " +249" },
	  {"code": " +268" },
	  {"code": " +963" },
	  {"code": " +290" },
	  {"code": " +1" },
	  {"code": " +685" },
	  {"code": " +966" },
	  {"code": " +248" },
	  {"code": " +421" },
	  {"code": " +252" },
	  {"code": " +24" },
	  {"code": " +597" },
	  {"code": " +46" },
	  {"code": " +1-869" },
	  {"code": " +508" },
	  {"code": " +378" },
	  {"code": " +221" },
	  {"code": " +232" },
	  {"code": " +386" },
	  {"code": " +27" },
	  {"code": " +94" },
	  {"code": " +47" },
	  {"code": " +41" },
	  {"code": " +992" },
	  {"code": " +670" },
	  {"code": " +228" },
	  {"code": " +90" },
	  {"code": " +688" },
	  {"code": " +255" },
	  {"code": " +228" },
	  {"code": " +868" },
	  {"code": " +993" },
	  {"code": " +66" },
	  {"code": " +690" },
	  {"code": " +216" },
	  {"code": " +649" },
	  {"code": " +256" },
	  {"code": " +44" },
	  {"code": " +598" },
	  {"code": " +380" },
	  {"code": " +1" },
	  {"code": " +1" },
	  {"code": " +598" },
	  {"code": " +998" },
	  {"code": " +678" },
	  {"code": " +84" },
	  {"code": " +379" },
	  {"code": " +1-340" },
	  {"code": " +58" },
	  {"code": " +681" },
	  {"code": " +212" },
	  {"code": " +967" },
	  {"code": " +260" },
	  {"code": " +263" }
  
					   ]
	//countries list
	var countrylist = [
	  { "country": "Afghanistan","code": " +93" },
	  { "country": "Algeria","code": " +213" },
	  { "country": "Angola","code": " +244" },
	  { "country": "Antigua and Barbuda","code": " +1-268" },
	  { "country": "Aruba","code": " +297" },
	  { "country": "Azerbaijan","code": " +994" },
	  { "country": "Åland Islands","code": " +358" },
	  { "country": "American Samoa","code": " +684" },
	  { "country": "Anguilla","code": " +264" },
	  { "country": "Argentina","code": " +54" },
	  { "country": "Aland Islands ","code": " +358" },
	  { "country": "Australia","code": " +61" },
	  { "country": "Albania","code": " +355" },
	  { "country": "Andorra","code": " +376" },
	  { "country": "Antarctica","code": " +672" },
	  { "country": "Armenia","code": " +374" },
	  { "country": "Austria","code": " +43" },
	  { "country": "Bahamas","code": " +242" },
	  { "country": "Barbados","code": " +246" },
	  { "country": "Belize","code": " +501" },
	  { "country": "Bhutan","code": " +975" },
	  { "country": "Botswana","code": " +267" },
	  { "country": "British Ocean Territory","code": " +246" },
	  { "country": "Bulgaria","code": " +359" },
	  { "country": "Bahrain","code": " +973" },
	  { "country": "Belarus","code": " +375" },
	  { "country": "Benin","code": " +229" },
	  { "country": "Bolivia","code": " +591" },
	  { "country": "British Virgin Islands","code": " +1" },
	  { "country": "Burkina Faso","code": " +226" },
	  { "country": "Bangladesh","code": " +880" },
	  { "country": "Belgium","code": " +32" },
	  { "country": "Bermuda","code": " +441" },
	  { "country": "Bosnia and Herzegovina","code": " +387" },
	  { "country": "Brazil","code": " +55" },
	  { "country": "Brunei Darussalam","code": " +673" },
	  { "country": "Burundi","code": " +257" },
	  { "country": "Cambodia","code": " +855" },
	  { "country": "Cape Verde","code": " +238" },
	  { "country": "Chad","code": " +235" },
	  { "country": "Chinese Taipei" },
	  { "country": "Colombia","code": " +57" },
	  { "country": "Congo (Democratic Republic of the congo)","code": " +243" },
	  { "country": "Côte d’Ivoire","code": " +225" },
	  { "country": "Cyprus","code": " +357" },
	  { "country": "Cameroon","code": " +237" },
	  { "country": "Cayman Islands","code": " +1-345" },
	  { "country": "Chile","code": " +56" },
	  { "country": "Christmas Island","code": " +0011" },
	  { "country": "Comoros","code": " +269" },
	  { "country": "Cook Islands","code": " +682" },
	  { "country": "Croatia","code": " +385" },
	  { "country": "Czech Republic","code": " +420" },
	  { "country": "Canada","code": " +1" },
	  { "country": "Central African Republic","code": " +236" },
	  { "country": "People`s Republic of China","code": " +86" },
	  { "country": "Cocos (Keeling) Islands","code": " +891" },
	  { "country": "Congo","code": " +242" },
	  { "country": "Costa Rica","code": " +506" },
	  { "country": "Cuba","code": " +53" },
	  { "country": "Denmark","code": " +45" },
	  { "country": "Dominican Republic","code": " +1-809" },
	  { "country": "Djibouti","code": " +253" },
	  { "country": "Dominica","code": " +1-767" },
	  { "country": "Ecuador","code": " +593" },
	  { "country": "Equatorial Guinea","code": " +240" },
	  { "country": "Ethiopia","code": " +251" },
	  { "country": "Egypt","code": " +20" },
	  { "country": "Eritrea","code": " +291" },
	  { "country": "El Salvador","code": " +503" },
	  { "country": "Estonia","code": " +372" },
	  { "country": "Falkland Islands (Malvinas)","code": " +500" },
	  { "country": "Fiji","code": " +679" },
	  { "country": "French Guiana","code": " +594" },
	  { "country": "Faroe Islands","code": " +298" },
	  { "country": "Finland","code": " +358" },
	  { "country": "French Polynesia","code": " +689" },
	  { "country": "Federated States of Micronesia","code": " +691" },
	  { "country": "France","code": " +33" },
	  { "country": "French Southern Territories","code": " +662" },
	  { "country": "Gabon","code": " +241" },
	  { "country": "Germany","code": " +49" },
	  { "country": "Greece","code": " +30" },
	  { "country": "Guadeloupe","code": " +590" },
	  { "country": "Guernsey","code": " +44" },
	  { "country": "Guyana","code": " +224" },
	  { "country": "Gambia","code": " +220" },
	  { "country": "Ghana","code": " +233" },
	  { "country": "Greenland","code": " +299" },
	  { "country": "Guam","code": " +1-671" },
	  { "country": "Guinea","code": " +224" },
	  { "country": "Georgia","code": " +995" },
	  { "country": "Gibraltar","code": " +350" },
	  { "country": "Grenada","code": " +473" },
	  { "country": "Guatemala","code": " +502" },
	  { "country": "Guinea-Bissau","code": " +245" },
	  { "country": "Haiti","code": " +509" },
	  { "country": "Hong Kong, China","code": " +852" },
	  { "country": "Hungary","code": " +36" },
	  { "country": "Honduras","code": " +504" },
	  { "country": "India" ,"code": " +91" },
	  { "country": "Iceland ","code": " +354" },
	  { "country": "Iraq","code": " +964" },
	  { "country": "Isle of Man","code": " +44" },
	  { "country": "Ireland","code": " +353" },
	  { "country": "Israel","code": " +972" },
	  { "country": "Indonesia","code": " +62" },
	  { "country": "Islamic Republic of Iran","code": " +98" },
	  { "country": "Italy","code": " +39" },
	  { "country": "Jamaica","code": " +876" },
	  { "country": "Jordan","code": " +962" },
	  { "country": "Japan","code": " +81" },
	  { "country": "Jersey","code": " +44" },
	  { "country": "Kazakhstan","code": " +6" },
	  { "country": "North Korea","code": " +850" },
	  { "country": "South Korea","code": "+82" },
	  { "country": "Kosovo","code": " +383" },
	  { "country": "Kiribati","code": " +686" },
	  { "country": "Kuwait","code": " +965" },
	  { "country": "Kenya","code": " +254" },
	  { "country": "Kyrgyzstan","code": " +996" },
	  { "country": "Lao People`s Democratic Republic","code": " +856" },
	  { "country": "Lesotho","code": " +266" },
	  { "country": "Liechtenstein","code": " +423" },
	  { "country": "Latvia","code": " +371" },
	  { "country": "Liberia","code": " +231" },
	  { "country": "Lithuania","code": " +370" },
	  { "country": "Lebanon","code": " +961" },
	  { "country": "Libyan Arab Jamahiriya","code": " +218" },
	  { "country": "Luxembourg","code": " +352" },
	  { "country": "Macau","code": " +853" },
	  { "country": "Malaysia","code": " +60" },
	  { "country": "Malta","code": " +356" },
	  { "country": "Mauritania","code": " +222" },
	  { "country": "Mexico","code": " +52" },
	  { "country": "Mongolia","code": " +976" },
	  { "country": "Morocco","code": " +212" },
	  { "country": "Madagascar","code": " +261" },
	  { "country": "Maldives","code": " +960" },
	  { "country": "Marshall Islands","code": " +692" },
	  { "country": "Mauritius","code": " +230" },
	  { "country": "Moldova (Republic of Moldova) ","code": " +373" },
	  { "country": "Montenegro","code": " +382" },
	  { "country": "Mozambique","code": " +258" },
	  { "country": "Malawi","code": " +265" },
	  { "country": "Mali","code": " +223" },
	  { "country": "Martinique","code": " +596" },
	  { "country": "Mayotte","code": " +262" },
	  { "country": "Monaco","code": " +377" },
	  { "country": "Montserrat","code": " +664" },
	  { "country": "Myanmar","code": " +95" },
	  { "country": "Norway","code": " +47"  },
	  { "country": "Namibia","code": " +264" },
	  { "country": "Netherlands","code": " +31" },
	  { "country": "New Zealand","code": " +64" },
	  { "country": "Nigeria","code": " +234" },
	  { "country": "Northern Mariana Islands","code": " +670" },
	  { "country": "Nauru","code": " +674" },
	  { "country": "Netherlands Antilles","code": " +599" },
	  { "country": "Nicaragua","code": " +505" },
	  { "country": "Niue","code": " +683" },
	  { "country": "Nepal","code": " +977" },
	  { "country": "New Caledonia","code": " +687" },
	  { "country": "Niger","code": " +227" },
	  { "country": "Norfolk Island","code": " +672" },
	  { "country": "Oman","code": " +968" },
	  { "country": "Pakistan","code": " +92" },
	  { "country": "Panama","code": " +507" },
	  { "country": "Peru","code": " +51" },
	  { "country": "Poland","code": " +48" },
	  { "country": "Palau","code": " +680" },
	  { "country": "Papua New Guinea","code": " +675" },
	  { "country": "Philippines","code": " +63" },
	  { "country": "Portugal","code": " +351" },
	  { "country": "Palestine","code": " +970" },
	  { "country": "Paraguay","code": " +595" },
	  { "country": "Pitcairn","code": " +870" },
	  { "country": "Puerto Rico","code": " +787" },
	  { "country": "Qatar","code": " +974" },
	  { "country": "Romania","code": " +40" },
	  { "country": "Macedonia (Republic of Macedonia)","code": " +389" },
	  { "country": "Russian Federation","code": " +7" },
	  { "country": "Réunion","code": " +262" },
	  { "country": "Rwanda","code": " +250" },
	  { "country": "Saint Barthélemy","code": " +590" },
	  { "country": "Saint Lucia","code": " +758" },
	  { "country": "Saint Vincent and the Grenadines","code": " +784" },
	  { "country": "São Tomé and Príncipe","code": " +239" },
	  { "country": "Serbia","code": " +381" },
	  { "country": "Singapore","code": " +65" },
	  { "country": "Solomon Islands","code": " +677" },
	  { "country": "Sth Georgia and the Sth Sandwich Islands","code": " +500" },
	  { "country": "Sudan","code": " +249" },
	  { "country": "Swaziland","code": " +268" },
	  { "country": "Syria","code": " +963" },
	  { "country": "Saint Helena","code": " +290" },
	  { "country": "Saint Martin","code": " +1" },
	  { "country": "Samoa","code": " +685" },
	  { "country": "Saudi Arabia","code": " +966" },
	  { "country": "Seychelles","code": " +248" },
	  { "country": "Slovakia","code": " +421" },
	  { "country": "Somalia","code": " +252" },
	  { "country": "Spain","code": " +24" },
	  { "country": "Suriname","code": " +597" },
	  { "country": "Sweden","code": " +46" },
	  { "country": "Saint Kitts and Nevis","code": " +1-869" },
	  { "country": "Saint Pierre and MiquelonSaint Pierre and Miquelon","code": " +508" },
	  { "country": "San Marino","code": " +378" },
	  { "country": "Senegal","code": " +221" },
	  { "country": "Sierra Leone","code": " +232" },
	  { "country": "Slovenia","code": " +386" },
	  { "country": "South Africa","code": " +27" },
	  { "country": "Sri Lanka","code": " +94" },
	  { "country": "Svalbard and Jan Mayen","code": " +47" },
	  { "country": "Switzerland","code": " +41" },
	  { "country": "Tajikistan","code": " +992" },
	  { "country": "Timor-Leste","code": " +670" },
	  { "country": "Tonga","code": " +228" },
	  { "country": "Turkey","code": " +90" },
	  { "country": "Tuvalu","code": " +688" },
	  { "country": "Tanzania(United Republic of Tanzania)","code": " +255" },
	  { "country": "Togo","code": " +228" },
	  { "country": "Trinidad and Tobago","code": " +868" },
	  { "country": "Turkmenistan","code": " +993" },
	  { "country": "Thailand","code": " +66" },
	  { "country": "Tokelau","code": " +690" },
	  { "country": "Tunisia","code": " +216" },
	  { "country": "Turks and Caicos Islands","code": " +649" },
	  { "country": "Uganda","code": " +256" },
	  { "country": "United Kingdom(UK)" ,"code": " +44" },
	  { "country": "Ukraine","code": " +380" },
	  { "country": "United States Min. Outlying Islands","code": " +1" },
	  { "country": "United States of America(US)","code": " +1" },
	  { "country": "Uruguay","code": " +598" },
	  { "country": "Uzbekistan","code": " +998" },
	  { "country": "Vanuatu","code": " +678" },
	  { "country": "Vietnam","code": " +84" },
	  { "country": "Vatican City","code": " +379" },
	  { "country": "Virgin Islands","code": " +1-340" },
	  { "country": "Venezuela","code": " +58" },
	  { "country": "Wallis and Futuna","code": " +681" },
	  { "country": "Western Sahara","code": " +212" },
	  { "country": "Yemen","code": " +967" },
	  { "country": "Zambia","code": " +260" },
	  { "country": "Zimbabwe","code": " +263" }
	  
	  
	];
	//state list with respective country
	var statelist = [
	
	  { "state": "Andaman and Nicobar Islands union territory", "countryId": "India" },
	  { "state": "Andhra Pradesh", "countryId": "India" },
	  { "state": "Arunachal Pradesh", "countryId": "India" },
	  { "state": "Assam", "countryId": "India" },
	  { "state": "Bihar", "countryId": "India" },
	  { "state": "Chandigarh", "countryId": "India" },
	  { "state": "Chhattisgarh", "countryId": "India" },
	  { "state": "Dadra and Nagar Haveli", "countryId": "India" },
	  { "state": "Daman and Diu", "countryId": "India" },
	  { "state": "Delhi", "countryId": "India" },
	  { "state": "Goa", "countryId": "India" },
	  { "state": "Gujarat", "countryId": "India" },
	  { "state": "Haryana", "countryId": "India" },
	  { "state": "Himachal Pradesh", "countryId": "India" },
	  { "state": "Jammu and Kashmir", "countryId": "India" },
	  { "state": "Jharkhand", "countryId": "India" },
	  { "state": "Karnataka", "countryId": "India" },
	  { "state": "Kerala", "countryId": "India" },
	  { "state": "Lakshadweep", "countryId": "India" },
	  { "state": "Madhya Pradesh", "countryId": "India" },
	  { "state": "Maharashtra", "countryId": "India" },
	  { "state": "Manipur", "countryId": "India" },
	  { "state":"Meghalaya", "countryId": "India" },
	  { "state": "Mizoram", "countryId": "India" },
	  { "state": "Nagaland", "countryId": "India" },
	  { "state": "Odisha", "countryId": "India" },
	  { "state": "Puducherry", "countryId": "India" },
	  { "state": "Punjab", "countryId": "India" },
	  { "state": "Rajasthan", "countryId": "India" },
	  { "state": "Sikkim", "countryId": "India" },
	  { "state":"Tamil Nadu", "countryId": "India" },
	  { "state": "Telangana", "countryId": "India" },
	  { "state": "Tripura", "countryId": "India" },
	  { "state": "Uttar Pradesh", "countryId": "India" },
	  { "state": "Uttarakhand", "countryId": "India" },
	  { "state": "West Bengal", "countryId": "India" },
	  
	  
	  { "state": "Bedfordshire", "countryId": "United Kingdom(UK)" },
	  { "state":"Berkshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Buckinghamshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Cambridgeshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Cheshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Cornwall", "countryId": "United Kingdom(UK)" },
	  { "state": "Cumbria", "countryId": "United Kingdom(UK)" },
	  { "state": "Derbyshire", "countryId": "United Kingdom(UK)" },
	  { "state":"Devon", "countryId": "United Kingdom(UK)" },
	  { "state": "Dorset", "countryId": "United Kingdom(UK)" },
	  { "state": "Durham", "countryId": "United Kingdom(UK)" },
	  { "state": "East Riding", "countryId": "United Kingdom(UK)" },
	  { "state": "East Sussex", "countryId": "United Kingdom(UK)" },
	  { "state": "East Yorkshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Essex", "countryId": "United Kingdom(UK)" },
	  { "state": "Gloucestershire", "countryId": "United Kingdom(UK)" },
	  { "state": "Greater London", "countryId": "United Kingdom(UK)" },
	  { "state": "Hampshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Hertfordshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Huntingdonshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Kent", "countryId": "United Kingdom(UK)" },
	  { "state": "Lancashire", "countryId": "United Kingdom(UK)" },
	  { "state": "Leicestershire", "countryId": "United Kingdom(UK)" },
	  { "state": "Lincolnshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Hertfordshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Huntingdonshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Kent", "countryId": "United Kingdom(UK)" },
	  { "state": "Lancashire", "countryId": "United Kingdom(UK)" },
	  { "state": "Leicestershire", "countryId": "United Kingdom(UK)" },
	  { "state": "Lincolnshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Merseyside", "countryId": "United Kingdom(UK)" },
	  { "state": "Middlesex", "countryId": "United Kingdom(UK)" },
	  { "state": "Norfolk", "countryId": "United Kingdom(UK)" },
	  { "state": "Northamptonshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Northumberland", "countryId": "United Kingdom(UK)" },
	  { "state": "Nottinghamshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Oxfordshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Rutland", "countryId": "United Kingdom(UK)" },
	  { "state": "Shropshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Somerset", "countryId": "United Kingdom(UK)" },
	  { "state": "South Yorkshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Staffordshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Suffolk", "countryId": "United Kingdom(UK)" },
	  { "state": "Surrey", "countryId": "United Kingdom(UK)" },
	  { "state": "Tyne and Wear", "countryId": "United Kingdom(UK)" },
	  { "state": "Warwickshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Westmorland", "countryId": "United Kingdom(UK)" },
	  { "state": "Wiltshire", "countryId": "United Kingdom(UK)" },
	  { "state": "Worcestershire", "countryId": "United Kingdom(UK)" },
	  { "state": "West Sussex", "countryId": "United Kingdom(UK)" },
	  { "state": "West Yorkshire", "countryId": "United Kingdom(UK)" },
	  
	  
	   { "state": "Oslo", "countryId": "Norway" },
	  { "state": "Hordaland", "countryId": "Norway" },
	  { "state": "Rogaland", "countryId": "Norway" },
	   { "state": "Oslo", "countryId": "Norway" },
	  { "state": "Sor-Trondelag", "countryId": "Norway" },
	  { "state": "Buskerud", "countryId": "Norway" },
	   { "state": "Nordland", "countryId": "Norway" },
	  { "state": "Vest-Agder", "countryId": "Norway" },
	  { "state": "Akershus", "countryId": "Norway" },
	   { "state": "Troms", "countryId": "Norway" },
	  { "state": "More og Romsdal", "countryId": "Norway" },
	  { "state": "Vestfold", "countryId": "Norway" },
	  { "state": "Oppland", "countryId": "Norway" },
	  { "state": "Nord-Trondelag", "countryId": "Norway" },
	  { "state": "Hedmark", "countryId": "Norway" },
	   { "state": "Ostfold", "countryId": "Norway" },
	  { "state": "Finnmark", "countryId": "Norway" },
	  { "state": "Sogn og Fjordane", "countryId": "Norway" },
	  { "state": "Telemark", "countryId": "Norway" },
	   { "state": "Aust-Agder", "countryId": "Norway" },
	   { "state": "Badakhshan", "countryId": "Afghanistan" },
	   { "state": "Badghis", "countryId": "Afghanistan" },
	   { "state": "Baghlan", "countryId": "Afghanistan" },
	   { "state": "Balkh", "countryId": "Afghanistan" },
	   { "state": "Bamyan", "countryId": "Afghanistan" },
	   { "state": "Daykundi", "countryId": "Afghanistan" },
	   { "state": "Farah", "countryId": "Afghanistan" },
	   { "state": "Faryab", "countryId": "Afghanistan" },
	   { "state": "Ghazni", "countryId": "Afghanistan" },
	   { "state": "Ghor", "countryId": "Afghanistan" },
	   { "state": "Helmand", "countryId": "Afghanistan" },
	   { "state": "Herat", "countryId": "Afghanistan" },
	   { "state": "Jowzjan", "countryId": "Afghanistan" },
	   { "state": "Kabul", "countryId": "Afghanistan" },
	   { "state": "Kandahar", "countryId": "Afghanistan" },
	   { "state": "Kapisa", "countryId": "Afghanistan" },
	   { "state": "Khost", "countryId": "Afghanistan" },
	   { "state": "Kunar", "countryId": "Afghanistan" },
	   { "state": "Kunduz", "countryId": "Afghanistan" },
	   { "state": "Laghman", "countryId": "Afghanistan" },
	   { "state": "Logar", "countryId": "Afghanistan" },
	   { "state": "Wardak", "countryId": "Afghanistan" },
	   { "state": "Nangarhar", "countryId": "Afghanistan" },
	   { "state": "Nimruz", "countryId": "Afghanistan" },
	   { "state": "Nuristan", "countryId": "Afghanistan" },
	   { "state": "Paktia", "countryId": "Afghanistan" },
	   { "state": "Paktika", "countryId": "Afghanistan" },
	   { "state": "Panjshir", "countryId": "Afghanistan" },
	   { "state": "Parwan", "countryId": "Afghanistan" },
	   { "state": "Samangan", "countryId": "Afghanistan" },
	   { "state": "Sar-e Pol", "countryId": "Afghanistan" },
	   { "state": "Takhar", "countryId": "Afghanistan" },
	   { "state": "Urozgan", "countryId": "Afghanistan" },
	   { "state": "Zabul", "countryId": "Afghanistan" },
	   { "state": "Adrar", "countryId": "Algeria" },
	   { "state": "Chlef", "countryId": "Algeria" },
	   { "state": "Laghouat", "countryId": "Algeria" },
	   { "state": "Oum el-Bouaghi", "countryId": "Algeria" },
	   { "state": "Batna", "countryId": "Algeria" },
	   { "state": "Béjaïa", "countryId": "Algeria" },
	   { "state": "Biskra", "countryId": "Algeria" },
	   { "state": "Béchar", "countryId": "Algeria" },
	   { "state": "Blida", "countryId": "Algeria" },
	   { "state": "Bouïra", "countryId": "Algeria" },
	   { "state": "Tamanghasset", "countryId": "Algeria" },
	   { "state": "Tébessa", "countryId": "Algeria" },
	   { "state": "Tlemcen", "countryId": "Algeria" },
	   { "state": "Tiaret", "countryId": "Algeria" },
	   { "state": "Tizi Ouzou", "countryId": "Algeria" },
	   { "state": "Algiers", "countryId": "Algeria" },
	   { "state": "Djelfa", "countryId": "Algeria" },
	   { "state": "Jijel", "countryId": "Algeria" },
	   { "state": "Sétif", "countryId": "Algeria" },
	   { "state": "Saïda", "countryId": "Algeria" },
	   { "state": "Skikda", "countryId": "Algeria" },
	   { "state": "Sidi Bel Abbès", "countryId": "Algeria" },
	   { "state": "Annaba", "countryId": "Algeria" },
	   { "state": "Guelma", "countryId": "Algeria" },
	   { "state": "Constantine", "countryId": "Algeria" },
	   { "state": "Médéa", "countryId": "Algeria" },
	   { "state": "Mostaganem", "countryId": "Algeria" },
	   { "state": "M'Sila", "countryId": "Algeria" },
	   { "state": "Mascara", "countryId": "Algeria" },
	   { "state": "Ouargla", "countryId": "Algeria" },
	   { "state": "Oran", "countryId": "Algeria" },
	   { "state": "El Bayadh", "countryId": "Algeria" },
	   { "state": "Illizi", "countryId": "Algeria" },
	   { "state": "Bordj Bou Arréridj", "countryId": "Algeria" },
	   { "state": "Boumerdès", "countryId": "Algeria" },
	   { "state": "El Taref", "countryId": "Algeria" },
	   { "state": "Tindouf", "countryId": "Algeria" },
	   { "state": "Tissemsilt", "countryId": "Algeria" },
	   { "state": "El Oued", "countryId": "Algeria" },
	   { "state": "Khenchela", "countryId": "Algeria" },
	   { "state": "Souk Ahras", "countryId": "Algeria" },
	   { "state": "Tipaza", "countryId": "Algeria" },
	   { "state": "Mila", "countryId": "Algeria" },
	   { "state": "Aïn Defla", "countryId": "Algeria" },
	   { "state": "Naâma", "countryId": "Algeria" },
	   { "state": "Aïn Témouchent", "countryId": "Algeria" },
	   { "state": "Ghardaïa", "countryId": "Algeria" },
	   { "state": "Relizane", "countryId": "Algeria" },
	   { "state": "Bengo", "countryId": "Angola" },
	   { "state": "Benguela", "countryId": "Angola" },
	   { "state": "Bié", "countryId": "Angola" },
	   { "state": "Cabinda", "countryId": "Angola" },
	   { "state": "Cabinda", "countryId": "Angola" },
	   { "state": "Cuando", "countryId": "Angola" },
	   { "state": "Cuanza Norte", "countryId": "Angola" },
	   { "state": "Cuanza Sul", "countryId": "Angola" },
	   { "state": "Cunene", "countryId": "Angola" },
	   { "state": "Huambo", "countryId": "Angola" },
	   { "state": "Huíla", "countryId": "Angola" },
	   { "state": "Luanda", "countryId": "Angola" },
	   { "state": "Lunda Norte", "countryId": "Angola" },
	   { "state": "Lunda Sul", "countryId": "Angola" },
	   { "state": "Malanje", "countryId": "Angola" },
	   { "state": "Moxico", "countryId": "Angola" },
	   { "state": "Namibe", "countryId": "Angola" },
	   { "state": "Uíge", "countryId": "Angola" },
	   { "state": "Zaire", "countryId": "Angola" },
	   { "state": "Saint George", "countryId": "Antigua and Barbuda" },
	   { "state": "Saint John", "countryId": "Antigua and Barbuda" },
	   { "state": "Saint Mary", "countryId": "Antigua and Barbuda" },
	   { "state": "Saint Paul", "countryId": "Antigua and Barbuda" },
	   { "state": "Saint Peter", "countryId": "Antigua and Barbuda" },
	   { "state": "Saint Philip", "countryId": "Antigua and Barbuda" },
	   { "state": "Barbuda", "countryId": "Antigua and Barbuda" },
	   { "state": "Redonda", "countryId": "Antigua and Barbuda" },
	   { "state": "Noord / Tanki Leendert", "countryId": "Aruba" },
	   { "state": "Oranjestad West", "countryId": "Aruba" },
	   { "state": "Oranjestad Oost", "countryId": "Aruba" },
	   { "state": "Paradera", "countryId": "Aruba" },
	   { "state": "San Nicolas Noord", "countryId": "Aruba" },
	   { "state": "San Nicolas Zuid", "countryId": "Aruba" },
	   { "state": "Santa Cruz", "countryId": "Aruba" },
	   { "state": "Savaneta", "countryId": "Aruba" },
	   { "state": "Absheron Economic Region", "countryId": "Azerbaijan" },
	   { "state": "Aran Economic Region", "countryId": "Azerbaijan" },
	   { "state": "Daglig-Shirvan", "countryId": "Azerbaijan" },
	   { "state": "Ganja-Gazakh", "countryId": "Azerbaijan" },
	   { "state": "Guba-Khachmaz", "countryId": "Azerbaijan" },
	   { "state": "Kalbajar-Lachin", "countryId": "Azerbaijan" },
	   { "state": "Lankaran", "countryId": "Azerbaijan" },
	   { "state": "Nakhchivan", "countryId": "Azerbaijan" },
	   { "state": "Shaki-Zaqatala", "countryId": "Azerbaijan" },
	   { "state": "Yukhari-Garabakh", "countryId": "Azerbaijan" },
	   { "state": "Mariehamn", "countryId": "Åland Islands" },
	   { "state": "Jomala", "countryId": "Åland Islands" },
	   { "state": "Finström", "countryId": "Åland Islands" },
	   { "state": "Lemland", "countryId": "Åland Islands" },
	   { "state": "Saltvik", "countryId": "Åland Islands" },
	   { "state": "Hammarland", "countryId": "Åland Islands" },
	   { "state": "Sund", "countryId": "Åland Islands" },
	   { "state": "Eckerö", "countryId": "Åland Islands" },
	   { "state": "Föglö", "countryId": "Åland Islands" },
	   { "state": "Geta", "countryId": "Åland Islands" },
	   { "state": "Brändö", "countryId": "Åland Islands" },
	   { "state": "Vårdö", "countryId": "Åland Islands" },
	   { "state": "Lumparland", "countryId": "Åland Islands" },
	   { "state": "Kumlinge", "countryId": "Åland Islands" },
	   { "state": "Kökar", "countryId": "Åland Islands" },
	   { "state": "Sottunga", "countryId": "Åland Islands" },
	   { "state": "Eastern", "countryId": "American Samoa" },
	   { "state": "Manu'a", "countryId": "American Samoa" },
	   { "state": "Swains Island", "countryId": "American Samoa" },
	   { "state": "Western", "countryId": "American Samoa" },
	   { "state": "Anguilla", "countryId": "Anguilla" },
	   { "state": "Buenos Aires", "countryId": "Argentina" },
	   { "state": "Catamarca", "countryId": "Argentina" },
	   { "state": "Chaco", "countryId": "Argentina" },
	   { "state": "Chubut", "countryId": "Argentina" },
	   { "state": "Cordoba", "countryId": "Argentina" },
	   { "state": "Corrientes", "countryId": "Argentina" },
	   { "state": "Distrito Federal", "countryId": "Argentina" },
	   { "state": "Entre Rios", "countryId": "Argentina" },
	   { "state": "Formosa", "countryId": "Argentina" },
	   { "state": "Jujuy", "countryId": "Argentina" },
	   { "state": "La Pampa", "countryId": "Argentina" },
	   { "state": "La Rioja", "countryId": "Argentina" },
	   { "state": "Mendoza", "countryId": "Argentina" },
	   { "state": "Misiones", "countryId": "Argentina" },
	   { "state": "Neuquen", "countryId": "Argentina" },
	   { "state": "Rio Negro", "countryId": "Argentina" },
	   { "state": "Salta", "countryId": "Argentina" },
	   { "state": "San Juan", "countryId": "Argentina" },
	   { "state": "San Luis", "countryId": "Argentina" },
	   { "state": "Santa Cruz", "countryId": "Argentina" },
	   { "state": "Santa Fe", "countryId": "Argentina" },
	   { "state": "Santiago del Estero", "countryId": "Argentina" },
	   { "state": "Tierra del Fuego", "countryId": "Argentina" },
	   { "state": "Bundesland Salzburg", "countryId": "Argentina" },
	   
	   
	 
	   
	   { "state": "New South Wales", "countryId": "Australia" },
	   { "state": "Queensland", "countryId": "Australia" },
	   { "state": "South Australia", "countryId": "Australia" },
	   { "state": "Tasmania", "countryId": "Australia" },
	   { "state": "Victoria", "countryId": "Australia" },
	   { "state": "Western Australia", "countryId": "Australia" },
	   { "state": "Australian Capital Territory", "countryId": "Australia" },
	   { "state": "Jervis Bay Territory", "countryId": "Australia" },
	   { "state": "Northern Territory", "countryId": "Australia" },
	   { "state": "Ashmore and Cartier Islands", "countryId": "Australia" },
	   { "state": "Australian Antarctic Territory", "countryId": "Australia" },
	   { "state": "Christmas Island", "countryId": "Australia" },
	   { "state": "Cocos (Keeling) Islands", "countryId": "Australia" },
	   { "state": "Coral Sea Islands", "countryId": "Australia" },
	   { "state": "Heard Island and McDonald Islands", "countryId": "Australia" },
	   { "state": "Norfolk Island", "countryId": "Australia" },
	   
	   { "state": "Berat", "countryId": "Albania" },
	   { "state": "Dibër", "countryId": "Albania" },
	   { "state": "Durrës", "countryId": "Albania" },
	   { "state": "Elbasan", "countryId": "Albania" },
	   { "state": "Fier", "countryId": "Albania" },
	   { "state": "Gjirokastër", "countryId": "Albania" },
	   { "state": "Korçë", "countryId": "Albania" },
	   { "state": "Kukës", "countryId": "Albania" },
	   { "state": "Lezhë", "countryId": "Albania" },
	   { "state": "Shkodër", "countryId": "Albania" },
	   { "state": "Tiranë", "countryId": "Albania" },
	   { "state": "Vlorë", "countryId": "Albania" },
	   
	   { "state": "Andorra la Vella", "countryId": "Andorra" },
	   { "state": "Escaldes-Engordany", "countryId": "Andorra" },
	   { "state": "Encamp", "countryId": "Andorra" },
	   { "state": "Sant Julià de Lòria", "countryId": "Andorra" },
	   { "state": "La Massana", "countryId": "Andorra" },
	   { "state": "Santa Coloma", "countryId": "Andorra" },
	   { "state": "Ordino", "countryId": "Andorra" },
	   { "state": "El Pas de la Casa", "countryId": "Andorra" },
	   { "state": "Canillo", "countryId": "Andorra" },
	   { "state": "Arinsal", "countryId": "Andorra" },
	   
	   { "state": "Argentine Antarctica", "countryId": "Antarctica" },
	   { "state": "Australian Antarctic Territory", "countryId": "Antarctica" },
	   { "state": "Chilean Antarctic Territory", "countryId": "Antarctica" },
	   { "state": "Adélie Land", "countryId": "Antarctica" },
	   { "state": "Ross Dependency", "countryId": "Antarctica" },
	   { "state": "Peter I Island", "countryId": "Antarctica" },
	   { "state": "Queen Maud Land", "countryId": "Antarctica" },
	   { "state": "British Antarctic Territory", "countryId": "Antarctica" },
	   
	   { "state": "Aragatsotn Province", "countryId": "Armenia" },
	   { "state": "Ararat Province", "countryId": "Armenia" },
	   { "state": "Armavir Province", "countryId": "Armenia" },
	   { "state": "Gegharkunik Province", "countryId": "Armenia" },
	   { "state": "Kotayk Province", "countryId": "Armenia" },
	   { "state": "Lori Province", "countryId": "Armenia" },
	   { "state": "Shirak Province", "countryId": "Armenia" },
	   { "state": "Syunik Province", "countryId": "Armenia" },
	   { "state": "Tavush Province", "countryId": "Armenia" },
	   { "state": "Vayots Dzor Province", "countryId": "Armenia" },
	   { "state": "Yerevan", "countryId": "Armenia" },
	   
	   
	   { "state": "Bundesland Steiermark", "countryId": "Austria" },
	   { "state": "Bundesland Tirol", "countryId": "Austria" },
	   { "state": "Burgenland", "countryId": "Austria" },
	   { "state": "Carinthia", "countryId": "Austria" },
	   { "state": "Karnten", "countryId": "Austria" },
	   { "state": "Liezen", "countryId": "Austria" },
	   { "state": "Lower Austria", "countryId": "Austria" },
	   { "state": "Niederosterreich", "countryId": "Austria" },
	   { "state": "Oberosterreich", "countryId": "Austria" },
	   { "state": "Salzburg", "countryId": "Austria" },
	   { "state": "Schleswig-Holstein", "countryId": "Austria" },
	   { "state": "Steiermark", "countryId": "Austria" },
	   { "state": "Styria", "countryId": "Austria" },
	   { "state": "Tirol", "countryId": "Austria" },
	   { "state": "Upper Austria", "countryId": "Austria" },
	   { "state": "Vorarlberg", "countryId": "Austria" },
	   { "state": "Wien", "countryId": "Austria" },
	   
	   { "state": "Abaco", "countryId": "Bahamas" },
	   { "state": "Acklins", "countryId": "Bahamas" },
	   { "state": "Andros", "countryId": "Bahamas" },
	   { "state": "Berry Islands", "countryId": "Bahamas" },
	   { "state": "Biminis", "countryId": "Bahamas" },
	   { "state": "Cat Island", "countryId": "Bahamas" },
	   { "state": "Crooked Island", "countryId": "Bahamas" },
	   { "state": "Eleuthera", "countryId": "Bahamas" },
	   { "state": "Exuma and Cays", "countryId": "Bahamas" },
	   { "state": "Grand Bahama", "countryId": "Bahamas" },
	   { "state": "Inagua Islands", "countryId": "Bahamas" },
	   { "state": "Long Island", "countryId": "Bahamas" },
	   { "state": "Mayaguana", "countryId": "Bahamas" },
	   { "state": "New Providence", "countryId": "Bahamas" },
	   { "state": "Ragged Island", "countryId": "Bahamas" },
	   { "state": "Rum Cay", "countryId": "Bahamas" },
	   { "state": "San Salvador", "countryId": "Bahamas" },
	  
	   { "state": "Christ Church", "countryId": "Barbados" },
	   { "state": "Saint Andrew", "countryId": "Barbados" },
	   { "state": "Saint George", "countryId": "Barbados" },
	   { "state": "Saint James", "countryId": "Barbados" },
	   { "state": "Saint John", "countryId": "Barbados" },
	   { "state": "Saint Joseph", "countryId": "Barbados" },
	   { "state": "Saint Lucy", "countryId": "Barbados" },
	   { "state": "Saint Michael", "countryId": "Barbados" },
	   { "state": "Saint Peter", "countryId": "Barbados" },
	   { "state": "Saint Philip", "countryId": "Barbados" },
	   { "state": "Saint Thomas", "countryId": "Barbados" },
	   
	   { "state": "Belize", "countryId": "Belize" },
	   { "state": "Cayo", "countryId": "Belize" },
	   { "state": "Corozal", "countryId": "Belize" },
	   { "state": "Orange Walk", "countryId": "Belize" },
	   { "state": "Stann Creek", "countryId": "Belize" },
	   { "state": "Toledo", "countryId": "Belize" },
	   
	   
   
	   { "state": "Bumthang", "countryId": "Bhutan" },
	   { "state": "Chhukha", "countryId": "Bhutan" },
	   { "state": "Chirang", "countryId": "Bhutan" },
	   { "state": "Daga", "countryId": "Bhutan" },
	   { "state": "Geylegphug", "countryId": "Bhutan" },
	   { "state": "Ha", "countryId": "Bhutan" },
	   { "state": "Lhuntshi", "countryId": "Bhutan" },
	   { "state": "Mongar", "countryId": "Bhutan" },
	   { "state": "Pemagatsel", "countryId": "Bhutan" },
	   { "state": "Punakha", "countryId": "Bhutan" },
	   { "state": "Rinpung", "countryId": "Bhutan" },
	   { "state": "Samchi", "countryId": "Bhutan" },
	   { "state": "Samdrup Jongkhar", "countryId": "Bhutan" },
	   { "state": "Shemgang", "countryId": "Bhutan" },
	   { "state": "Tashigang", "countryId": "Bhutan" },
	   { "state": "Timphu", "countryId": "Bhutan" },
	   { "state": "Tongsa", "countryId": "Bhutan" },
	   { "state": "Wangdiphodrang", "countryId": "Bhutan" },
	   
		{ "state": "Central Bobonong", "countryId": "Botswana" },
		{ "state": "Central Boteti", "countryId": "Botswana" },
		{ "state": "Central Mahalapye", "countryId": "Botswana" },
		{ "state": "Central Serowe-Palapye", "countryId": "Botswana" },
		{ "state": "Central Tutume", "countryId": "Botswana" },
		{ "state": "Central Tutume", "countryId": "Botswana" },
		{ "state": "Chobe", "countryId": "Botswana" },
		{ "state": "Francistown", "countryId": "Botswana" },
		{ "state": "Gaborone", "countryId": "Botswana" },
		{ "state": "Ghanzi", "countryId": "Botswana" },
		{ "state": "Jwaneng", "countryId": "Botswana" },
		{ "state": "Kgalagadi North", "countryId": "Botswana" },
		{ "state": "Kgalagadi South", "countryId": "Botswana" },
		{ "state": "Kgatleng", "countryId": "Botswana" },
		{ "state": "Kweneng", "countryId": "Botswana" },
		{ "state": "Lobatse", "countryId": "Botswana" },
		{ "state": "Ngamiland", "countryId": "Botswana" },
		{ "state": "Ngwaketse", "countryId": "Botswana" },
		{ "state": "North East", "countryId": "Botswana" },
		{ "state": "Okavango", "countryId": "Botswana" },
		{ "state": "Orapa", "countryId": "Botswana" },
		{ "state": "Selibe Phikwe", "countryId": "Botswana" },
		{ "state": "South East", "countryId": "Botswana" },
		{ "state": "Sowa", "countryId": "Botswana" },
	   
		{ "state": "British Ocean Territory", "countryId": "British Ocean Territory" },
	   
		{ "state": "Blagoevgrad", "countryId": "Bulgaria" },
		{ "state": " Burgas", "countryId": "Bulgaria" },
		{ "state": "Dobrich", "countryId": "Bulgaria" },
		{ "state": "Gabrovo", "countryId": "Bulgaria" },
		{ "state": "Haskovo", "countryId": "Bulgaria" },
		{ "state": "Kardzhali", "countryId": "Bulgaria" },
		{ "state": "Kyustendil", "countryId": "Bulgaria" },
		{ "state": "Lovech", "countryId": "Bulgaria" },
		{ "state": "Montana", "countryId": "Bulgaria" },
		{ "state": "Pazardzhik", "countryId": "Bulgaria" },
		{ "state": "Pernik", "countryId": "Bulgaria" },
		{ "state": "Pleven", "countryId": "Bulgaria" },
		{ "state": "Plovdiv", "countryId": "Bulgaria" },
		{ "state": "Razgrad", "countryId": "Bulgaria" },
		{ "state": "Ruse", "countryId": "Bulgaria" },
		{ "state": "Shumen", "countryId": "Bulgaria" },
		{ "state": "Silistra", "countryId": "Bulgaria" },
		{ "state": "Sliven", "countryId": "Bulgaria" },
		{ "state": "Smolyan", "countryId": "Bulgaria" },
		{ "state": "Sofia Province", "countryId": "Bulgaria" },
		{ "state": "Stara Zagora", "countryId": "Bulgaria" },
		{ "state": " Targovishte", "countryId": "Bulgaria" },
		{ "state": " Veliko Tarnovo", "countryId": "Bulgaria" },
		{ "state": " Vratsa", "countryId": "Bulgaria" },
		{ "state": " Yambol", "countryId": "Bulgaria" },
  
		{ "state": "Isa", "countryId": "Bahrain" },
		{ "state": "Hidd", "countryId": "Bahrain" },
		{ "state": "Badiyah", "countryId": "Bahrain" },
		{ "state": "Jidd Hafs", "countryId": "Bahrain" },
		{ "state": "Mahama", "countryId": "Bahrain" },
		{ "state": "Manama", "countryId": "Bahrain" },
		{ "state": "Sitrah", "countryId": "Bahrain" },
		{ "state": "al-Manamah", "countryId": "Bahrain" },
		{ "state": "al-Muharraq", "countryId": "Bahrain" },
		{ "state": "ar-Rifa'a", "countryId": "Bahrain" },
	   
		{ "state": "Brest", "countryId": "Belarus" },
		{ "state": "Homjel", "countryId": "Belarus" },
		{ "state": "Hrodna", "countryId": "Belarus" },
		{ "state": "Mahiljow", "countryId": "Belarus" },
		{ "state": "Mahilyowskaya Voblasts", "countryId": "Belarus" },
		{ "state": "Brest", "countryId": "Belarus" },
		{ "state": "Minsk", "countryId": "Belarus" },
		{ "state": "Minskaja Voblasts'", "countryId": "Belarus" },
		{ "state": "Petrik", "countryId": "Belarus" },
		{ "state": "Vicebsk", "countryId": "Belarus" },
		
		
		{ "state": "Alibori", "countryId": "Benin" },
		{ "state": "Atacora", "countryId": "Benin" },
		{ "state": "Atlantique", "countryId": "Benin" },
		{ "state": "Borgou", "countryId": "Benin" },
		{ "state": "Collines", "countryId": "Benin" },
		{ "state": "Couffo", "countryId": "Benin" },
		{ "state": "Donga", "countryId": "Benin" },
		{ "state": "Littoral", "countryId": "Benin" },
		{ "state": "Mono", "countryId": "Benin" },
		{ "state": "Oueme", "countryId": "Benin" },
		{ "state": "Plateau", "countryId": "Benin" },
		{ "state": "Zou", "countryId": "Benin" },
		
		{ "state": "Beni", "countryId": "Bolivia" },
		{ "state": "Chuquisaca", "countryId": "Bolivia" },
		{ "state": "Cochabamba", "countryId": "Bolivia" },
		{ "state": "La Paz", "countryId": "Bolivia" },
		{ "state": "Oruro", "countryId": "Bolivia" },
		{ "state": "Pando", "countryId": "Bolivia" },
		{ "state": "Potosi", "countryId": "Bolivia" },
		{ "state": "Santa Cruz", "countryId": "Bolivia" },
		{ "state": "Tarija", "countryId": "Bolivia" },
		
		
		{ "state": "British Virgin Islands", "countryId": "British Virgin Islands" },
		
		{ "state": "Bale", "countryId": " Burkina Faso" },
		{ "state": "Bazega", "countryId": " Burkina Faso" },
		{ "state": "Bam", "countryId": " Burkina Faso" },
		{ "state": "Bazega", "countryId": " Burkina Faso" },
		{ "state": "Bougouriba", "countryId": " Burkina Faso" },
		{ "state": "Boulgou", "countryId": " Burkina Faso" },
		{ "state": "Boulkiemde", "countryId": " Burkina Faso" },
		{ "state": "Comoe", "countryId": " Burkina Faso" },
		{ "state": "Ganzourgou", "countryId": " Burkina Faso" },
		{ "state": "Gnagna", "countryId": " Burkina Faso" },
		{ "state": "Gourma", "countryId": " Burkina Faso" },
		{ "state": "Houet", "countryId": " Burkina Faso" },
		{ "state": "Ioba", "countryId": " Burkina Faso" },
		{ "state": "Kadiogo", "countryId": " Burkina Faso" },
		{ "state": "Kenedougou", "countryId": " Burkina Faso" },
		{ "state": "Komandjari", "countryId": " Burkina Faso" },
		{ "state": "Kompienga", "countryId": " Burkina Faso" },
		{ "state": "Kossi", "countryId": " Burkina Faso" },
		{ "state": "Kouritenga", "countryId": " Burkina Faso" },
		{ "state": "Kourweogo", "countryId": " Burkina Faso" },
		{ "state": "Leraba", "countryId": " Burkina Faso" },
		{ "state": "Mouhoun", "countryId": " Burkina Faso" },
		{ "state": "Nahouri", "countryId": " Burkina Faso" },
		{ "state": "Namentenga", "countryId": " Burkina Faso" },
		{ "state": "Noumbiel", "countryId": " Burkina Faso" },
		{ "state": "Oubritenga", "countryId": " Burkina Faso" },
		{ "state": "Oudalan", "countryId": " Burkina Faso" },
		{ "state": "Passore", "countryId": " Burkina Faso" },
		{ "state": "Poni", "countryId": " Burkina Faso" },
		{ "state": "Sanguie", "countryId": " Burkina Faso" },
		{ "state": "Sanmatenga", "countryId": " Burkina Faso" },
		{ "state": "Seno", "countryId": " Burkina Faso" },
		{ "state": "Sissili", "countryId": " Burkina Faso" },
		{ "state": "Soum", "countryId": " Burkina Faso" },
		{ "state": "Sourou", "countryId": " Burkina Faso" },
		{ "state": "Tapoa", "countryId": " Burkina Faso" },
		{ "state": "Tuy", "countryId": " Burkina Faso" },
		{ "state": "Yatenga", "countryId": " Burkina Faso" },
		{ "state": "Zondoma", "countryId": " Burkina Faso" },
		{ "state": "Zoundweogo", "countryId": " Burkina Faso" },
		
		
		
		{ "state": "Barisal", "countryId": "Bangladesh" },
		{ "state": "Chittagong", "countryId": "Bangladesh" },
		{ "state": "Dhaka", "countryId": "Bangladesh" },
		{ "state": "Mymensingh", "countryId": "Bangladesh" },
		{ "state": "Khulna", "countryId": "Bangladesh" },
		{ "state": "Rajshahi", "countryId": "Bangladesh" },
		{ "state": "Rangpur", "countryId": "Bangladesh" },
		{ "state": "Sylhet", "countryId": "Bangladesh" },
		
		{ "state": "Antwerp", "countryId": "Belgium" },
		{ "state": "East Flanders", "countryId": "Belgium" },
		{ "state": "Flemish Brabant", "countryId": "Belgium" },
		{ "state": "Limburg", "countryId": "Belgium" },
		{ "state": "West Flanders", "countryId": "Belgium" },
		{ "state": "Hainaut", "countryId": "Belgium" },
		{ "state": "Liège", "countryId": "Belgium" },
		{ "state": "Luxembourg", "countryId": "Belgium" },
		{ "state": "Namur", "countryId": "Belgium" },
		{ "state": "Walloon Brabant", "countryId": "Belgium" },
		
		{ "state": "Devonshire", "countryId": "Bermuda" },
		{ "state": "Hamilton", "countryId": "Bermuda" },
		{ "state": "Paget", "countryId": "Bermuda" },
		{ "state": "Pembroke", "countryId": "Bermuda" },
		{ "state": "St George's", "countryId": "Bermuda" },
		{ "state": "Sandys", "countryId": "Bermuda" },
		{ "state": "Smith's", "countryId": "Bermuda" },
		{ "state": "Southampton", "countryId": "Bermuda" },
		{ "state": "Warwick", "countryId": "Bermuda" },
	   
		{ "state": "Bosanska Krajina", "countryId": "Bosnia and Herzegovina" },
		{ "state": "Bosanska Posavina", "countryId": "Bosnia and Herzegovina" },
		{ "state": "Semberija", "countryId": "Bosnia and Herzegovina" },
		{ "state": "Podrinje", "countryId": "Bosnia and Herzegovina" },
		{ "state": "Tropolje", "countryId": "Bosnia and Herzegovina" },
		{ "state": "West Herzegovina", "countryId": "Bosnia and Herzegovina" },
		{ "state": "East Herzegovina", "countryId": "Bosnia and Herzegovina" },
		{ "state": "High Herzegovina", "countryId": "Bosnia and Herzegovina" },
		{ "state": "Zagorje", "countryId": "Bosnia and Herzegovina" },
		
		{ "state": "Acre", "countryId": "Brazil" },
		{ "state": "Alagoas", "countryId": "Brazil" },
		{ "state": "Amapa", "countryId": "Brazil" },
		{ "state": "Amazonas", "countryId": "Brazil" },
		{ "state": "Bahia", "countryId": "Brazil" },
		{ "state": "Ceara", "countryId": "Brazil" },
		{ "state": "Distrito Federal", "countryId": "Brazil" },
		{ "state": "Espirito Santo", "countryId": "Brazil" },
		{ "state": "Estado de Sao Paulo", "countryId": "Brazil" },
		{ "state": "Goias", "countryId": "Brazil" },
		{ "state": "Maranhao", "countryId": "Brazil" },
		{ "state": "Mato Grosso", "countryId": "Brazil" },
		{ "state": "Mato Grosso do Sul", "countryId": "Brazil" },
		{ "state": "Minas Gerais", "countryId": "Brazil" },
		{ "state": "Para", "countryId": "Brazil" },
		{ "state": "Paraiba", "countryId": "Brazil" },
		{ "state": "Parana", "countryId": "Brazil" },
		{ "state": "Pernambuco", "countryId": "Brazil" },
		{ "state": "Piaui", "countryId": "Brazil" },
		{ "state": "Rio Grande do Norte", "countryId": "Brazil" },
		{ "state": "Rio Grande do Sul", "countryId": "Brazil" },
		{ "state": "Rio de Janeiro", "countryId": "Brazil" },
		{ "state": "Rondonia", "countryId": "Brazil" },
		{ "state": "Roraima", "countryId": "Brazil" },
		{ "state": "Santa Catarina", "countryId": "Brazil" },
		{ "state": "Sao Paulo", "countryId": "Brazil" },
		{ "state": "Sergipe", "countryId": "Brazil" },
		{ "state": "Tocantins", "countryId": "Brazil" },
		
		{ "state": "Belait", "countryId": "Brunei Darussalam" },
		{ "state": "Brunei-Muara", "countryId": "Brunei Darussalam" },
		{ "state": "Temburong", "countryId": "Brunei Darussalam" },
		{ "state": "Tutong", "countryId": "Brunei Darussalam" },
	   
		{ "state": "Cankuzo", "countryId": "Burundi" },
		{ "state": "Gitega", "countryId": "Burundi" },
		{ "state": "Rutana", "countryId": "Burundi" },
		{ "state": "Ruyigi", "countryId": "Burundi" },
		{ "state": "Karuzi", "countryId": "Burundi" },
		{ "state": "Kayanza", "countryId": "Burundi" },
		{ "state": "Kirundo", "countryId": "Burundi" },
		{ "state": "Muyinga", "countryId": "Burundi" },
		{ "state": "Ngozi", "countryId": "Burundi" },
		{ "state": "Bururi", "countryId": "Burundi" },
		{ "state": "Makamba", "countryId": "Burundi" },
		{ "state": "Rumonge", "countryId": "Burundi" },
		{ "state": "Bubanza", "countryId": "Burundi" },
		{ "state": "Bujumbura Mairie", "countryId": "Burundi" },
		{ "state": "Bujumbura Rural", "countryId": "Burundi" },
		{ "state": "Cibitoke", "countryId": "Burundi" },
		{ "state": "Muramvya", "countryId": "Burundi" },
		
		{ "state": "Banteay Mean Chey", "countryId": "Cambodia" },
		{ "state": "Bat Dambang", "countryId": "Cambodia" },
		{ "state": "Kampong Cham", "countryId": "Cambodia" },
		{ "state": "Kampong Chhnang", "countryId": "Cambodia" },
		{ "state": "Kampong Spoeu", "countryId": "Cambodia" },
		{ "state": "Kampong Thum", "countryId": "Cambodia" },
		{ "state": "Kampot", "countryId": "Cambodia" },
		{ "state": "Kandal", "countryId": "Cambodia" },
		{ "state": "Kaoh Kong", "countryId": "Cambodia" },
		{ "state": "Kracheh", "countryId": "Cambodia" },
		{ "state": "Krong Kaeb", "countryId": "Cambodia" },
		{ "state": "Krong Pailin", "countryId": "Cambodia" },
		{ "state": "Krong Preah Sihanouk", "countryId": "Cambodia" },
		{ "state": "Mondol Kiri", "countryId": "Cambodia" },
		{ "state": "Otdar Mean Chey", "countryId": "Cambodia" },
		{ "state": "Phnum Penh", "countryId": "Cambodia" },
		{ "state": "Pousat", "countryId": "Cambodia" },
		{ "state": "Preah Vihear", "countryId": "Cambodia" },
		{ "state": "Prey Veaeng", "countryId": "Cambodia" },
		{ "state": "Rotanak Kiri", "countryId": "Cambodia" },
		{ "state": "Siem Reab", "countryId": "Cambodia" },
		{ "state": "Stueng Traeng", "countryId": "Cambodia" },
		{ "state": "Svay Rieng", "countryId": "Cambodia" },
		{ "state": "Takaev", "countryId": "Cambodia" },
		
		
		{ "state": "Batha", "countryId": "Chad" },
		{ "state": "Biltine", "countryId": "Chad" },
		{ "state": "Bourkou-Ennedi-Tibesti", "countryId": "Chad" },
		{ "state": "Chari-Baguirmi", "countryId": "Chad" },
		{ "state": "Guera", "countryId": "Chad" },
		{ "state": "Kanem", "countryId": "Chad" },
		{ "state": "Lac", "countryId": "Chad" },
		{ "state": "Logone Occidental", "countryId": "Chad" },
		{ "state": "Logone Oriental", "countryId": "Chad" },
		{ "state": "Mayo-Kebbi", "countryId": "Chad" },
		{ "state": "Moyen-Chari", "countryId": "Chad" },
		{ "state": "Ouaddai", "countryId": "Chad" },
		{ "state": "Salamat", "countryId": "Chad" },
		{ "state": "Tandjile", "countryId": "Chad" },
	  
		{ "state": "Changhwa", "countryId": "Chinese Taipei" },
		{ "state": "Chiayi Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Chiayi Shih", "countryId": "Chinese Taipei" },
		{ "state": "Eastern Taipei", "countryId": "Chinese Taipei" },
		{ "state": "Hsinchu Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Hsinchu Shih", "countryId": "Chinese Taipei" },
		{ "state": "Hualien", "countryId": "Chinese Taipei" },
		{ "state": "Ilan", "countryId": "Chinese Taipei" },
		{ "state": "Kaohsiung Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Kaohsiung Shih", "countryId": "Chinese Taipei" },
		{ "state": "Keelung Shih", "countryId": "Chinese Taipei" },
		{ "state": "Kinmen", "countryId": "Chinese Taipei" },
		{ "state": "Miaoli", "countryId": "Chinese Taipei" },
		{ "state": "Nantou", "countryId": "Chinese Taipei" },
		{ "state": "Northern Taiwan", "countryId": "Chinese Taipei" },
		{ "state": "Penghu", "countryId": "Chinese Taipei" },
		{ "state": "Pingtung", "countryId": "Chinese Taipei" },
		{ "state": "Taichung", "countryId": "Chinese Taipei" },
		{ "state": "Taichung Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Taichung Shih", "countryId": "Chinese Taipei" },
		{ "state": "Tainan Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Tainan Shih", "countryId": "Chinese Taipei" },
		{ "state": "Taipei Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Taipei Shih / Taipei Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Taitung", "countryId": "Chinese Taipei" },
		{ "state": "Taoyuan", "countryId": "Chinese Taipei" },
		{ "state": "Yilan", "countryId": "Chinese Taipei" },
		{ "state": "Yun-Lin Hsien", "countryId": "Chinese Taipei" },
		{ "state": "Yunlin", "countryId": "Chinese Taipei" },
		
		{ "state": "Boavista", "countryId": "Cape Verde" },
		{ "state": "Brava", "countryId": "Cape Verde" },
		{ "state": "Fogo", "countryId": "Cape Verde" },
		{ "state": "Maio", "countryId": "Cape Verde" },
		{ "state": "Sal", "countryId": "Cape Verde" },
		{ "state": "Santo Antao", "countryId": "Cape Verde" },
		{ "state": "Sao Nicolau", "countryId": "Cape Verde" },
		{ "state": "Sao Tiago", "countryId": "Cape Verde" },
		{ "state": "Sao Vicente", "countryId": "Cape Verde" },
		
		
		
		{ "state": "Amazonas", "countryId": "Colombia" },
		{ "state": "Antioquia", "countryId": "Colombia" },
		{ "state": "Arauca", "countryId": "Colombia" },
		{ "state": "Atlantico", "countryId": "Colombia" },
		{ "state": "Bogota", "countryId": "Colombia" },
		{ "state": "Bolivar", "countryId": "Colombia" },
		{ "state": "Boyaca", "countryId": "Colombia" },
		{ "state": "Caldas", "countryId": "Colombia" },
		{ "state": "Caqueta", "countryId": "Colombia" },
		{ "state": "Casanare", "countryId": "Colombia" },
		{ "state": "Cauca", "countryId": "Colombia" },
		{ "state": "Cesar", "countryId": "Colombia" },
		{ "state": "Choco", "countryId": "Colombia" },
		{ "state": "Cordoba", "countryId": "Colombia" },
		{ "state": "Cundinamarca", "countryId": "Colombia" },
		{ "state": "Guainia", "countryId": "Colombia" },
		{ "state": "Guaviare", "countryId": "Colombia" },
		{ "state": "Huila", "countryId": "Colombia" },
		{ "state": "La Guajira", "countryId": "Colombia" },
		{ "state": "Magdalena", "countryId": "Colombia" },
		{ "state": "Meta", "countryId": "Colombia" },
		{ "state": "Narino", "countryId": "Colombia" },
		{ "state": "Norte de Santander", "countryId": "Colombia" },
		{ "state": "Putumayo", "countryId": "Colombia" },
		{ "state": "Quindio", "countryId": "Colombia" },
		{ "state": "Risaralda", "countryId": "Colombia" },
		{ "state": "San Andres y Providencia", "countryId": "Colombia" },
		{ "state": "Santander", "countryId": "Colombia" },
		{ "state": "Sucre", "countryId": "Colombia" },
		{ "state": "Tolima", "countryId": "Colombia" },
		{ "state": "Valle del Cauca", "countryId": "Colombia" },
		{ "state": "Vaupes", "countryId": "Colombia" },
		{ "state": "Vichada", "countryId": "Colombia" },
		
		{ "state": "Aisen", "countryId": "Chile" },
		{ "state": "Antofagasta", "countryId": "Chile" },
		{ "state": "Araucania", "countryId": "Chile" },
		{ "state": "Atacama", "countryId": "Chile" },
		{ "state": "Bio Bio", "countryId": "Chile" },
		{ "state": "Coquimbo", "countryId": "Chile" },
		{ "state": "Libertador General Bernardo O'", "countryId": "Chile" },
		{ "state": "Los Lagos", "countryId": "Chile" },
		{ "state": "Magellanes", "countryId": "Chile" },
		{ "state": "Maule", "countryId": "Chile" },
		{ "state": "Metropolitana", "countryId": "Chile" },
		{ "state": "Metropolitana de Santiago", "countryId": "Chile" },
		{ "state": "Tarapaca", "countryId": "Chile" },
		{ "state": "Valparaiso", "countryId": "Chile" },
   
	   
		{ "state": "Aitutaki", "countryId": "Cook Islands" },
		{ "state": "Atiu", "countryId": "Cook Islands" },
		{ "state": "Mangaia", "countryId": "Cook Islands" },
		{ "state": "Penrhyn", "countryId": "Cook Islands" },
		{ "state": "Rakahanga", "countryId": "Cook Islands" },
		{ "state": "Manihiki", "countryId": "Cook Islands" },
		{ "state": "Pukapuka", "countryId": "Cook Islands" },
		{ "state": "Tema Reef (submerged)", "countryId": "Cook Islands" },
		{ "state": "Nassau", "countryId": "Cook Islands" },
		{ "state": "Suwarrow", "countryId": "Cook Islands" },
		{ "state": "Palmerston", "countryId": "Cook Islands" },
		{ "state": "Manuae", "countryId": "Cook Islands" },
		{ "state": "Takutea", "countryId": "Cook Islands" },
		{ "state": "Mitiaro", "countryId": "Cook Islands" },
		{ "state": "Atiu", "countryId": "Cook Islands" },
		{ "state": "Mauke", "countryId": "Cook Islands" },
		{ "state": "Winslow Reef (submerged)", "countryId": "Cook Islands" },
		{ "state": "Rarotonga", "countryId": "Cook Islands" },
		{ "state": "Mangaia", "countryId": "Cook Islands" },
		
		
		
		{ "state": "Adamawa", "countryId": "Cameroon" },
		{ "state": "Centre", "countryId": "Cameroon" },
		{ "state": "East", "countryId": "Cameroon" },
		{ "state": "Far North ", "countryId": "Cameroon" },
		{ "state": "Littoral", "countryId": "Cameroon" },
		{ "state": "North ", "countryId": "Cameroon" },
		{ "state": "Northwest", "countryId": "Cameroon" },
		{ "state": "South", "countryId": "Cameroon" },
		{ "state": "Vallée-du-NtemSouthwest ", "countryId": "Cameroon" },
		{ "state": "West", "countryId": "Cameroon" },
	  
	  
		
		
		{ "state": "Kinshasa", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kongo Central", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kwango", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kwilu", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Mai-Ndombe", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kasaï", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kasaï-Central", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Kasaï-Oriental", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Lomami", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Sankuru", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Maniema", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "South Kivu", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "North Kivu", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Ituri", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Haut-Uele", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Tshopo", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Bas-Uele", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Nord-Ubangi", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Mongala", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Sud-Ubangi", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Équateur", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Tshuapa", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Tanganyika", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Haut-Lomami", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Lualaba", "countryId": "Congo (Democratic Republic of the congo)" },
		{ "state": "Haut-Katanga", "countryId": "Congo (Democratic Republic of the congo)" },
		
	   
		{ "state": "Agnéby-Tiassa", "countryId": "Côte d’Ivoire" },
		{ "state": "Bafing", "countryId": "Côte d’Ivoire" },
		{ "state": "Bagoué ", "countryId": "Côte d’Ivoire" },
		{ "state": "Bélier Region", "countryId": "Côte d’Ivoire" },
		{ "state": "Béré", "countryId": "Côte d’Ivoire" },
		{ "state": "Bounkani ", "countryId": "Côte d’Ivoire" },
		{ "state": "Cavally", "countryId": "Côte d’Ivoire" },
		{ "state": "Folon", "countryId": "Côte d’Ivoire" },
		{ "state": "Gbêkê", "countryId": "Côte d’Ivoire" },
		{ "state": "Gbôklé", "countryId": "Côte d’Ivoire" },
		{ "state": "Gôh", "countryId": "Côte d’Ivoire" },
		{ "state": "Gontougo ", "countryId": "Côte d’Ivoire" },
		{ "state": "Grands-Ponts", "countryId": "Côte d’Ivoire" },
		{ "state": "Guémon", "countryId": "Côte d’Ivoire" },
		{ "state": "Hambol", "countryId": "Côte d’Ivoire" },
		{ "state": "Haut-Sassandra ", "countryId": "Côte d’Ivoire" },
		{ "state": "Iffou", "countryId": "Côte d’Ivoire" },
		{ "state": "Indénié-Djuablin", "countryId": "Côte d’Ivoire" },
		{ "state": "Kabadougou", "countryId": "Côte d’Ivoire" },
		{ "state": "La Mé", "countryId": "Côte d’Ivoire" },
		{ "state": "Lôh-Djiboua", "countryId": "Côte d’Ivoire" },
		{ "state": "Marahoué ", "countryId": "Côte d’Ivoire" },
		{ "state": "Moronou", "countryId": "Côte d’Ivoire" },
		{ "state": "Nawa", "countryId": "Côte d’Ivoire" },
		{ "state": "N'Zi", "countryId": "Côte d’Ivoire" },
		{ "state": "Poro", "countryId": "Côte d’Ivoire" },
		{ "state": "San-Pédro", "countryId": "Côte d’Ivoire" },
		{ "state": "Sud-Comoé ", "countryId": "Côte d’Ivoire" },
		{ "state": "Tchologo ", "countryId": "Côte d’Ivoire" },
		{ "state": "Tonkpi ", "countryId": "Côte d’Ivoire" },
		{ "state": "Worodougou ", "countryId": "Côte d’Ivoire" },
		{ "state": "Kabadougou", "countryId": "Côte d’Ivoire" },
	   
		{ "state": "Grand Cayman", "countryId": "Cayman Islands" },
		
		{ "state": " Christmas Island", "countryId": " Christmas Island" },
		
	  
		{ "state": "Dubrovnik-Neretva", "countryId": "Croatia" },
		{ "state": "Grad Zagreb", "countryId": "Croatia" },
		{ "state": "Istra", "countryId": "Croatia" },
		{ "state": "Karlovac", "countryId": "Croatia" },
		{ "state": "Koprivnica-Krizhevci", "countryId": "Croatia" },
		{ "state": "Krapina-Zagorje", "countryId": "Croatia" },
		{ "state": "Lika-Senj", "countryId": "Croatia" },
		{ "state": "Medhimurje", "countryId": "Croatia" },
		{ "state": "Medimurska Zupanija", "countryId": "Croatia" },
		{ "state": "Osijek-Baranja", "countryId": "Croatia" },
		{ "state": "Osjecko-Baranjska Zupanija", "countryId": "Croatia" },
		{ "state": "Pozhega-Slavonija", "countryId": "Croatia" },
		{ "state": "Primorje-Gorski Kotar", "countryId": "Croatia" },
		{ "state": "Shibenik-Knin", "countryId": "Croatia" },
		{ "state": "Sisak-Moslavina", "countryId": "Croatia" },
		{ "state": "Slavonski Brod-Posavina", "countryId": "Croatia" },
		{ "state": "Split-Dalmacija", "countryId": "Croatia" },
		{ "state": "Varazhdin", "countryId": "Croatia" },
		{ "state": "Virovitica-Podravina", "countryId": "Croatia" },
		{ "state": "Vukovar-Srijem", "countryId": "Croatia" },
		{ "state": "Zadar", "countryId": "Croatia" },
		{ "state": "Zagreb", "countryId": "Croatia" },
		
		{ "state": "Mwali", "countryId": "Comoros" },
		{ "state": "Njazidja", "countryId": "Comoros" },
		{ "state": "Nzwani", "countryId": "Comoros" },
		
		{ "state": "Bamingui-Bangoran", "countryId": "Central African Republic" },
		{ "state": "Basse-Kotto", "countryId": "Central African Republic" },
		{ "state": "Haute-Kotto", "countryId": "Central African Republic" },
		{ "state": "Haut-Mbomou", "countryId": "Central African Republic" },
		{ "state": "Kémo", "countryId": "Central African Republic" },
		{ "state": "Lobaye", "countryId": "Central African Republic" },
		{ "state": "Mambéré-Kadéï", "countryId": "Central African Republic" },
		{ "state": "Mbomou", "countryId": "Central African Republic" },
		{ "state": "Nana-Grébizi", "countryId": "Central African Republic" },
		{ "state": "Nana-Mambéré", "countryId": "Central African Republic" },
		{ "state": "Ombella-M'Poko", "countryId": "Central African Republic" },
		{ "state": "Ouaka", "countryId": "Central African Republic" },
		{ "state": "Ouham", "countryId": "Central African Republic" },
		{ "state": "Ouham-Pendé", "countryId": "Central African Republic" },
		{ "state": "Sangha-Mbaéré", "countryId": "Central African Republic" },
		{ "state": "Vakaga", "countryId": "Central African Republic" },
		
		{ "state": "Cocos (Keeling) Islands", "countryId": "Cocos (Keeling) Islands" },
	   
		
		
		
		{ "state": "Anhui Province", "countryId": "People`s Republic of China" },
		{ "state": "Beijing Municipality", "countryId": "People`s Republic of China" },
		{ "state": "Chongqing Municipality", "countryId": "People`s Republic of China" },
		{ "state": "Fujian Province[e]", "countryId": "People`s Republic of China" },
		{ "state": "Guangdong Province", "countryId": "People`s Republic of China" },
		{ "state": "Gansu Province", "countryId": "People`s Republic of China" },
		{ "state": "Guangxi Zhuang Autonomous Region", "countryId": "People`s Republic of China" },
		{ "state": "Guizhou Province", "countryId": "People`s Republic of China" },
		{ "state": "Henan Province", "countryId": "People`s Republic of China" },
		{ "state": "Hubei Province", "countryId": "People`s Republic of China" },
		{ "state": "Hebei Province", "countryId": "People`s Republic of China" },
		{ "state": "Hainan Province", "countryId": "People`s Republic of China" },
		{ "state": "Hong Kong Special Administrative Region", "countryId": "People`s Republic of China" },
		{ "state": "Heilongjiang Province", "countryId": "People`s Republic of China" },
		{ "state": "Hunan Province", "countryId": "People`s Republic of China" },
		{ "state": "Jilin Province", "countryId": "People`s Republic of China" },
		{ "state": "Jiangsu Province", "countryId": "People`s Republic of China" },
		{ "state": "Jiangxi Province", "countryId": "People`s Republic of China" },
		{ "state": "Liaoning Province", "countryId": "People`s Republic of China" },
		{ "state": "Macau Special Administrative Region", "countryId": "People`s Republic of China" },
		{ "state": "Inner Mongolia Autonomous Region", "countryId": "People`s Republic of China" },
		{ "state": "Ningxia Hui Autonomous Region", "countryId": "People`s Republic of China" },
		{ "state": "Qinghai Province", "countryId": "People`s Republic of China" },
		{ "state": "Sichuan Province", "countryId": "People`s Republic of China" },
		{ "state": "Shandong Province", "countryId": "People`s Republic of China" },
		{ "state": "Shanghai Municipality", "countryId": "People`s Republic of China" },
		{ "state": "Shaanxi Province", "countryId": "People`s Republic of China" },
		{ "state": "Shanxi Province", "countryId": "People`s Republic of China" },
		{ "state": "Tianjin Municipality", "countryId": "People`s Republic of China" },
		{ "state": "Taiwan Province", "countryId": "People`s Republic of China" },
		{ "state": "Tibet Autonomous Region", "countryId": "People`s Republic of China" },
		{ "state": "Yunnan Province", "countryId": "People`s Republic of China" },
		{ "state": "Zhejiang Province", "countryId": "People`s Republic of China" },
  
		
		
		{ "state": "	Xinjiang Uyghur Autonomous Region", "countryId": "People`s Republic of China" },
		
		
		
		{ "state": "Alajuela", "countryId": "Costa Rica" },
		{ "state": "Cartago", "countryId": "Costa Rica" },
		{ "state": "Guanacaste", "countryId": "Costa Rica" },
		{ "state": "Heredia", "countryId": "Costa Rica" },
		{ "state": "Limón", "countryId": "Costa Rica" },
		{ "state": "Puntarenas", "countryId": "Costa Rica" },
		{ "state": "San José", "countryId": "Costa Rica" },
		{ "state": "Alajuela", "countryId": "Costa Rica" },
		{ "state": "Alajuela", "countryId": "Costa Rica" },
		
		{ "state": "Government controlled area", "countryId": "Cyprus" },
		{ "state": "Limassol", "countryId": "Cyprus" },
		{ "state": "Nicosia District", "countryId": "Cyprus" },
		{ "state": "Paphos", "countryId": "Cyprus" },
		{ "state": "Turkish controlled area", "countryId": "Cyprus" },
		
		{ "state": " Ontario", "countryId": "Canada" },
		{ "state": " Quebec", "countryId": "Canada" },
		{ "state": " British Columbia", "countryId": "Canada" },
		{ "state": "  Alberta", "countryId": "Canada" },
		{ "state": "  Manitoba", "countryId": "Canada" },
		{ "state": " Saskatchewan", "countryId": "Canada" },
		{ "state": " Nova Scotia", "countryId": "Canada" },
		{ "state": "  New Brunswick", "countryId": "Canada" },
		{ "state": " Newfoundland and Labrador	", "countryId": "Canada" },
		{ "state": "  Prince Edward Island", "countryId": "Canada" },
		{ "state": "Northwest Territories", "countryId": "Canada" },
		{ "state": " Nunavut", "countryId": "Canada" },
		{ "state": " Yukon", "countryId": "Canada" },
		
		{ "state": "Prague", "countryId": "Czech Republic" },
		{ "state": "Central Bohemian", "countryId": "Czech Republic" },
		{ "state": "Vysočina", "countryId": "Czech Republic" },
		{ "state": "Plzeň", "countryId": "Czech Republic" },
		{ "state": "Karlovy Vary", "countryId": "Czech Republic" },
		{ "state": "Ústí nad Labem", "countryId": "Czech Republic" },
		{ "state": "Liberec", "countryId": "Czech Republic" },
		{ "state": "Hradec Králové", "countryId": "Czech Republic" },
		{ "state": "Pardubice", "countryId": "Czech Republic" },
		{ "state": "Olomouc", "countryId": "Czech Republic" },
		{ "state": "Moravian-Silesian", "countryId": "Czech Republic" },
		{ "state": "South Moravian", "countryId": "Czech Republic" },
		{ "state": "Zlín", "countryId": "Czech Republic" },
		
		{ "state": "Camagüey", "countryId": "Cuba" },
		{ "state": "Ciego de Ávila	", "countryId": "Cuba" },
		{ "state": "Cienfuegos", "countryId": "Cuba" },
		{ "state": "La Habana   ", "countryId": "Cuba" },
		{ "state": "Granma", "countryId": "Cuba" },
		{ "state": "Guantánamo", "countryId": "Cuba" },
		{ "state": "Holguín", "countryId": "Cuba" },
		{ "state": "Isla de la Juventud	", "countryId": "Cuba" },
		{ "state": "Artemisa", "countryId": "Cuba" },
		{ "state": "Las Tunas", "countryId": "Cuba" },
		{ "state": "Matanzas", "countryId": "Cuba" },
		{ "state": "Mayabeque	", "countryId": "Cuba" },
		{ "state": "Pinar del Río", "countryId": "Cuba" },
		{ "state": "Sancti Spíritus", "countryId": "Cuba" },
		{ "state": "Santiago de Cuba", "countryId": "Cuba" },
		{ "state": "Villa Clara", "countryId": "Cuba" },
	   
		{ "state": "Zlín", "countryId": "Cuba" },
		
		
		{ "state": "Copenhagen City", "countryId": "Denmark" },
		{ "state": "Copenhagen Surroundings", "countryId": "Denmark" },
		{ "state": "North Zealand", "countryId": "Denmark" },
		{ "state": "East Zealand", "countryId": "Denmark" },
		{ "state": "West & South Zealand", "countryId": "Denmark" },
		{ "state": "Bornholm", "countryId": "Denmark" },
		{ "state": "Funen", "countryId": "Denmark" },
		{ "state": "South Jutland", "countryId": "Denmark" },
		{ "state": "East Jutland", "countryId": "Denmark" },
		{ "state": "West Jutland", "countryId": "Denmark" },
		{ "state": "North Jutland", "countryId": "Denmark" },
		
		{ "state": "Azua", "countryId": "Dominican Republic" },
		{ "state": "Baoruco", "countryId": "Dominican Republic" },
		{ "state": "Barahona", "countryId": "Dominican Republic" },
		{ "state": "Dajabón", "countryId": "Dominican Republic" },
		{ "state": "Distrito Nacional", "countryId": "Dominican Republic" },
		{ "state": "Duarte", "countryId": "Dominican Republic" },
		{ "state": "Elías Piña", "countryId": "Dominican Republic" },
		{ "state": "El Seibo", "countryId": "Dominican Republic" },
		{ "state": "Espaillat", "countryId": "Dominican Republic" },
		{ "state": "Hato Mayor", "countryId": "Dominican Republic" },
		{ "state": "Hermanas Mirabal", "countryId": "Dominican Republic" },
		{ "state": "Independencia", "countryId": "Dominican Republic" },
		{ "state": "La Altagracia", "countryId": "Dominican Republic" },
		{ "state": "La Romana", "countryId": "Dominican Republic" },
		{ "state": "La Vega", "countryId": "Dominican Republic" },
		{ "state": "María Trinidad Sánchez", "countryId": "Dominican Republic" },
		{ "state": "Monseñor Nouel", "countryId": "Dominican Republic" },
		{ "state": "Monte Cristi", "countryId": "Dominican Republic" },
		{ "state": "Monte Plata", "countryId": "Dominican Republic" },
		{ "state": "Pedernales", "countryId": "Dominican Republic" },
		{ "state": "Peravia", "countryId": "Dominican Republic" },
		{ "state": "Puerto Plata", "countryId": "Dominican Republic" },
		{ "state": "Samaná", "countryId": "Dominican Republic" },
		{ "state": "Sánchez Ramírez", "countryId": "Dominican Republic" },
		{ "state": "Sánchez Ramírez", "countryId": "Dominican Republic" },
		{ "state": "San José de Ocoa", "countryId": "Dominican Republic" },
		{ "state": "San Juan", "countryId": "Dominican Republic" },
		{ "state": "San Pedro de Macorís", "countryId": "Dominican Republic" },
		{ "state": "Santiago", "countryId": "Dominican Republic" },
		{ "state": "Santiago Rodríguez", "countryId": "Dominican Republic" },
		{ "state": "Santo Domingo", "countryId": "Dominican Republic" },
		{ "state": "Valverde", "countryId": "Dominican Republic" },
	   
		{ "state": "'Ali Sabih", "countryId": "Djibouti" },
		{ "state": "Dikhil", "countryId": "Djibouti" },
		{ "state": "Jibuti", "countryId": "Djibouti" },
		{ "state": "Tajurah", "countryId": "Djibouti" },
		{ "state": "Ubuk", "countryId": "Djibouti" },
		
		{ "state": "Saint Andrew", "countryId": "Dominica" },
		{ "state": "Saint David", "countryId": "Dominica" },
		{ "state": "Saint George", "countryId": "Dominica" },
		{ "state": "Saint John", "countryId": "Dominica" },
		{ "state": "Saint Joseph", "countryId": "Dominica" },
		{ "state": "Saint Luke", "countryId": "Dominica" },
		{ "state": "Saint Mark", "countryId": "Dominica" },
		{ "state": "Saint Patrick", "countryId": "Dominica" },
		{ "state": "Saint Paul", "countryId": "Dominica" },
		{ "state": "Saint Peter", "countryId": "Dominica" },
		
		{ "state": "Azuay", "countryId": "Ecuador" },
		{ "state": "Bolivar", "countryId": "Ecuador" },
		{ "state": "Canar", "countryId": "Ecuador" },
		{ "state": "Carchi", "countryId": "Ecuador" },
		{ "state": "Chimborazo", "countryId": "Ecuador" },
		{ "state": "Cotopaxi", "countryId": "Ecuador" },
		{ "state": "El Oro", "countryId": "Ecuador" },
		{ "state": "Esmeraldas", "countryId": "Ecuador" },
		{ "state": "Galapagos", "countryId": "Ecuador" },
		{ "state": "Guayas", "countryId": "Ecuador" },
		{ "state": "Imbabura", "countryId": "Ecuador" },
		{ "state": "Loja", "countryId": "Ecuador" },
		{ "state": "Los Rios", "countryId": "Ecuador" },
		{ "state": "Manabi", "countryId": "Ecuador" },
		{ "state": "Morona Santiago", "countryId": "Ecuador" },
		{ "state": "Napo", "countryId": "Ecuador" },
		{ "state": "Orellana", "countryId": "Ecuador" },
		{ "state": "Pastaza", "countryId": "Ecuador" },
		{ "state": "Pichincha", "countryId": "Ecuador" },
		{ "state": "Sucumbios", "countryId": "Ecuador" },
		{ "state": "Tungurahua", "countryId": "Ecuador" },
		{ "state": "Zamora Chinchipe", "countryId": "Ecuador" },
		
	   
		{ "state": "Annobon", "countryId": "Equatorial Guinea" },
		{ "state": "Bioko Norte", "countryId": "Equatorial Guinea" },
		{ "state": "Bioko Sur", "countryId": "Equatorial Guinea" },
		{ "state": "Centro Sur", "countryId": "Equatorial Guinea" },
		{ "state": "Kie-Ntem", "countryId": "Equatorial Guinea" },
		{ "state": "Litoral", "countryId": "Equatorial Guinea" },
		{ "state": "Wele-Nzas", "countryId": "Equatorial Guinea" },
		
		
		
		{ "state": "Addis Abeba", "countryId": "Ethiopia" },
		{ "state": "Afar", "countryId": "Ethiopia" },
		{ "state": "Amhara", "countryId": "Ethiopia" },
		{ "state": "Benishangul", "countryId": "Ethiopia" },
		{ "state": "Diredawa", "countryId": "Ethiopia" },
		{ "state": "Gambella", "countryId": "Ethiopia" },
		{ "state": "Harar", "countryId": "Ethiopia" },
		{ "state": "Jigjiga", "countryId": "Ethiopia" },
		{ "state": "Mekele", "countryId": "Ethiopia" },
		{ "state": "Oromia", "countryId": "Ethiopia" },
		{ "state": "Somali", "countryId": "Ethiopia" },
		{ "state": "Southern", "countryId": "Ethiopia" },
		{ "state": "Tigray", "countryId": "Ethiopia" },
		
		
		{ "state": "Aswan", "countryId": "Egypt" },
		{ "state": "Asyut", "countryId": "Egypt" },
		{ "state": "Bani Suwayf", "countryId": "Egypt" },
		{ "state": "Bur Sa'id", "countryId": "Egypt" },
		{ "state": "Cairo", "countryId": "Egypt" },
		{ "state": "Dumyat", "countryId": "Egypt" },
		{ "state": "Kafr-ash-Shaykh", "countryId": "Egypt" },
		{ "state": "Matruh", "countryId": "Egypt" },
		{ "state": "Muhafazat ad Daqahliyah", "countryId": "Egypt" },
		{ "state": "Muhafazat al Fayyum", "countryId": "Egypt" },
		{ "state": "Muhafazat al Gharbiyah", "countryId": "Egypt" },
		{ "state": "Muhafazat al Iskandariyah", "countryId": "Egypt" },
		{ "state": "Muhafazat al Qahirah", "countryId": "Egypt" },
		{ "state": "Qina", "countryId": "Egypt" },
		{ "state": "Sawhaj", "countryId": "Egypt" },
		{ "state": "Sina al-Janubiyah", "countryId": "Egypt" },
		{ "state": "Sina ash-Shamaliyah", "countryId": "Egypt" },
		{ "state": "ad-Daqahliyah", "countryId": "Egypt" },
		{ "state": "al-Bahr-al-Ahmar", "countryId": "Egypt" },
		{ "state": "al-Buhayrah", "countryId": "Egypt" },
		{ "state": "al-Fayyum", "countryId": "Egypt" },
		{ "state": "al-Gharbiyah", "countryId": "Egypt" },
		{ "state": "al-Iskandariyah", "countryId": "Egypt" },
		{ "state": "al-Ismailiyah", "countryId": "Egypt" },
		{ "state": "al-Jizah", "countryId": "Egypt" },
		{ "state": "al-Minufiyah", "countryId": "Egypt" },
		{ "state": "al-Minya", "countryId": "Egypt" },
		{ "state": "al-Qahira", "countryId": "Egypt" },
		{ "state": "al-Qalyubiyah", "countryId": "Egypt" },
		{ "state": "al-Uqsur", "countryId": "Egypt" },
		{ "state": "as-Suways", "countryId": "Egypt" },
		{ "state": "ash-Sharqiyah", "countryId": "Egypt" },
		
		{ "state": "Anseba", "countryId": "Eritrea" },
		{ "state": "Debub", "countryId": "Eritrea" },
		{ "state": "Debub-Keih-Bahri", "countryId": "Eritrea" },
		{ "state": "Gash-Barka", "countryId": "Eritrea" },
		{ "state": "Maekel", "countryId": "Eritrea" },
		{ "state": "Semien-Keih-Bahri", "countryId": "Eritrea" },
		
		{ "state": "Ahuachapan", "countryId": "El Salvador" },
		{ "state": "Cabanas", "countryId": "El Salvador" },
		{ "state": "Chalatenango", "countryId": "El Salvador" },
		{ "state": "Cuscatlan", "countryId": "El Salvador" },
		{ "state": "La Libertad", "countryId": "El Salvador" },
		{ "state": "La Paz", "countryId": "El Salvador" },
		{ "state": "La Union", "countryId": "El Salvador" },
		{ "state": "Morazan", "countryId": "El Salvador" },
		{ "state": "San Miguel", "countryId": "El Salvador" },
		{ "state": "San Salvador", "countryId": "El Salvador" },
		{ "state": "San Vicente", "countryId": "El Salvador" },
		{ "state": "Santa Ana", "countryId": "El Salvador" },
		{ "state": "Sonsonate", "countryId": "El Salvador" },
		{ "state": "Usulutan", "countryId": "El Salvador" },
		
		
		
		{ "state": "Harju", "countryId": "Estonia" },
		{ "state": "Hiiu", "countryId": "Estonia" },
		{ "state": "Ida-Viru", "countryId": "Estonia" },
		{ "state": "Jarva", "countryId": "Estonia" },
		{ "state": "Jogeva", "countryId": "Estonia" },
		{ "state": "Laane", "countryId": "Estonia" },
		{ "state": "Laane-Viru", "countryId": "Estonia" },
		{ "state": "Parnu", "countryId": "Estonia" },
		{ "state": "Polva", "countryId": "Estonia" },
		{ "state": "Rapla", "countryId": "Estonia" },
		{ "state": "Saare", "countryId": "Estonia" },
		{ "state": "Tartu", "countryId": "Estonia" },
		{ "state": "Valga", "countryId": "Estonia" },
		{ "state": "Viljandi", "countryId": "Estonia" },
		{ "state": "Voru", "countryId": "Estonia" },
  
  
		{ "state": "Falkland Islands", "countryId": " Falkland Islands (Malvinas)" },
		{ "state": "South Georgia", "countryId": " Falkland Islands (Malvinas)" },
		
		
		{ "state": "Central", "countryId": "Fiji" },
		{ "state": "AhvEasternenanmaa", "countryId": "Fiji" },
		{ "state": "Northern", "countryId": "Fiji" },
		{ "state": "South Pacific", "countryId": "Fiji" },
		{ "state": "Western", "countryId": "Fiji" },
		
		{ "state": "Cayenne", "countryId": "French Guiana" },
		{ "state": "Saint-Laurent-du-Maroni", "countryId": "French Guiana" },
		
		{ "state": "Saint-Laurent-du-Maroni", "countryId": "French Polynesia" },
		{ "state": "Iles du Vent", "countryId": "French Polynesia" },
		{ "state": "Iles sous le Vent", "countryId": "French Polynesia" },
		{ "state": "Marquesas", "countryId": "French Polynesia" },
		{ "state": "Tuamotu", "countryId": "French Polynesia" },
		{ "state": "Tubuai", "countryId": "French Polynesia" },
		
		{ "state": "Klaksvik", "countryId": "Faroe Islands" },
		{ "state": "Nor ara Eysturoy", "countryId": "Faroe Islands" },
		{ "state": "Nor oy", "countryId": "Faroe Islands" },
		{ "state": "Sandoy", "countryId": "Faroe Islands" },
		{ "state": "Streymoy", "countryId": "Faroe Islands" },
		{ "state": "Su uroy", "countryId": "Faroe Islands" },
		{ "state": "Tubuai", "countryId": "Faroe Islands" },
		{ "state": "Sy ra Eysturoy", "countryId": "Faroe Islands" },
		{ "state": "Torshavn", "countryId": "Faroe Islands" },
		{ "state": "Vaga", "countryId": "Faroe Islands" },
		
		{ "state": "Chuuk", "countryId": "Federated States of Micronesia" },
		{ "state": "Kusaie", "countryId": "Federated States of Micronesia" },
		{ "state": "Pohnpei", "countryId": "Federated States of Micronesia" },
		{ "state": "Yap", "countryId": "Federated States of Micronesia" },
			 
		
		
		
		{ "state": "Ahvenanmaa", "countryId": "Finland" },
		{ "state": "Etela-Karjala", "countryId": "Finland" },
		{ "state": "Etela-Pohjanmaa", "countryId": "Finland" },
		{ "state": "Etela-Savo", "countryId": "Finland" },
		{ "state": "Etela-Suomen Laani", "countryId": "Finland" },
		{ "state": "Ita-Suomen Laani", "countryId": "Finland" },
		{ "state": "Ita-Uusimaa", "countryId": "Finland" },
		{ "state": "Kainuu", "countryId": "Finland" },
		{ "state": "Kanta-Hame", "countryId": "Finland" },
		{ "state": "Keski-Pohjanmaa", "countryId": "Finland" },
		{ "state": "Keski-Suomi", "countryId": "Finland" },
		{ "state": "Kymenlaakso", "countryId": "Finland" },
		{ "state": "Lansi-Suomen Laani", "countryId": "Finland" },
		{ "state": "Lappi", "countryId": "Finland" },
		{ "state": "Northern Savonia", "countryId": "Finland" },
		{ "state": "Ostrobothnia", "countryId": "Finland" },
		{ "state": "Oulun Laani", "countryId": "Finland" },
		{ "state": "Paijat-Hame", "countryId": "Finland" },
		{ "state": "Pirkanmaa", "countryId": "Finland" },
		{ "state": "Pohjanmaa", "countryId": "Finland" },
		{ "state": "Pohjois-Karjala", "countryId": "Finland" },
		{ "state": "Pohjois-Pohjanmaa", "countryId": "Finland" },
		{ "state": "Pohjois-Savo", "countryId": "Finland" },
		{ "state": "Saarijarvi", "countryId": "Finland" },
		{ "state": "Satakunta", "countryId": "Finland" },
		{ "state": "Southern Savonia", "countryId": "Finland" },
		{ "state": "Tavastia Proper", "countryId": "Finland" },
		{ "state": "Uleaborgs Lan", "countryId": "Finland" },
		{ "state": "Uusimaa", "countryId": "Finland" },
		{ "state": "Varsinais-Suomi", "countryId": "Finland" },
	   
		{ "state": "Grand Est", "countryId": "France" },
		{ "state": "Nouvelle-Aquitaine", "countryId": "France" },
		{ "state": "Auvergne-Rhône-Alpes", "countryId": "France" },
		{ "state": "Bourgogne-Franche-Comté", "countryId": "France" },
		{ "state": "Brittany", "countryId": "France" },
		{ "state": "Centre-Val de Loire", "countryId": "France" },
		{ "state": "Île-de-France", "countryId": "France" },
		{ "state": "Occitanie", "countryId": "France" },
		{ "state": "Hauts-de-France", "countryId": "France" },
		{ "state": "Normandy", "countryId": "France" },
		{ "state": "Pays de la Loire", "countryId": "France" },
		{ "state": "Provence-Alpes-Côte d'Azur", "countryId": "France" },
		{ "state": "Corsica", "countryId": "France" },
		{ "state": "French Guiana", "countryId": "France" },
		{ "state": "Guadeloupe", "countryId": "France" },
		{ "state": "Martinique", "countryId": "France" },
		{ "state": "Mayotte", "countryId": "France" },
		{ "state": "Réunion", "countryId": "France" },
		
		{ "state": "Amsterdam", "countryId": " French Southern Territories" },
		{ "state": "Crozet Islands", "countryId": " French Southern Territories" },
		{ "state": "Kerguelen", "countryId": " French Southern Territories" },
		
		
		
		{"state": "Estuaire", "countryId": "Gabon" }, 
		{"state": "Haut-Ogooue", "countryId": "Gabon" }, 
		{"state": "Moyen-Ogooue", "countryId": "Gabon" }, 
		{"state": "Ngounie", "countryId": "Gabon" }, 
		{"state": "Nyanga", "countryId": "Gabon" }, 
		{"state": "Ogooue-Ivindo", "countryId": "Gabon" }, 
		{"state": "Ogooue-Lolo", "countryId": "Gabon" }, 
		{"state": "Ogooue-Maritime", "countryId": "Gabon" }, 
		{"state": "Woleu-Ntem", "countryId": "Gabon" }, 
		
		{"state": "Basse-Terre", "countryId": "Guadeloupe" }, 
		{"state": "Grande-Terre", "countryId": "Guadeloupe" }, 
		{"state": "Iles des Saintes", "countryId": "Guadeloupe" }, 
		{"state": "La Desirade", "countryId": "Guadeloupe" }, 
		{"state": "Marie-Galante", "countryId": "Guadeloupe" }, 
		{"state": "Saint Barthelemy", "countryId": "Guadeloupe" }, 
		{"state": "Saint Martin", "countryId": "Guadeloupe" }, 
		
		
		
		
		{"state": "Abhasia", "countryId": "Georgia" }, 
		{"state": "Ajaria", "countryId": "Georgia" }, 
		{"state": "Guria", "countryId": "Georgia" }, 
		{"state": "Imereti", "countryId": "Georgia" }, 
		{"state": "Kaheti", "countryId": "Georgia" }, 
		{"state": "Kvemo Kartli", "countryId": "Georgia" }, 
		{"state": "Mcheta-Mtianeti", "countryId": "Georgia" }, 
		{"state": "Racha", "countryId": "Georgia" }, 
		{"state": "Samagrelo-Zemo Svaneti", "countryId": "Georgia" }, 
		{"state": "Samche-Zhavaheti", "countryId": "Georgia" }, 
		{"state": "Shida Kartli", "countryId": "Georgia" }, 
		{"state": "Tbilisi", "countryId": "Georgia" }, 
		
	   
		
	  
		{ "state": "Baden-Württemberg", "countryId": "Germany" },
		{ "state": "Berlin", "countryId": "Germany" },
		{ "state": "Brandenburg", "countryId": "Germany" },      
		{ "state": "Bremen", "countryId": "Germany" },
		{ "state": "Hamburg", "countryId": "Germany" },
		{ "state": "Hesse", "countryId": "Germany" },
		{ "state": "Lower Saxony", "countryId": "Germany" },
		{ "state": "Mecklenburg-Vorpommern", "countryId": "Germany" },
		{ "state": "North Rhine-Westphalia", "countryId": "Germany" },
		{ "state": "Rhineland-Palatinate", "countryId": "Germany" },
		{ "state": "Saarland", "countryId": "Germany" },
		{ "state": "Saxony", "countryId": "Germany" },
		{ "state": "Saxony-Anhalt", "countryId": "Germany" },
		{ "state": "Schleswig-Holstein", "countryId": "Germany" },
		{ "state": "Thuringia", "countryId": "Germany" },
	   
		{"state": "Aegina", "countryId": "Greece" },
		{"state": "Agia, Larissa", "countryId": "Greece" },
		{"state": "Agios Vasileios, Rethymno", "countryId": "Greece" },
		{"state": "Aigialeia", "countryId": "Greece" },
		{"state": "Almopia", "countryId": "Greece" },
		{"state": "Almyros", "countryId": "Greece" },
		{"state": "Amari (municipality)", "countryId": "Greece" },
		{"state": "Andros", "countryId": "Greece" },
		{"state": "Apokoronas", "countryId": "Greece" },
		{"state": "Argos-Mykines", "countryId": "Greece" },
		{"state": "Arnaia Province", "countryId": "Greece" },
		{"state": "Attica Province", "countryId": "Greece" },
		{"state": "Chalcis Province", "countryId": "Greece" },
		{"state": "Chalkidiki Province", "countryId": "Greece" },
		{"state": "Corfu", "countryId": "Greece" },
		{"state": "Cynuria", "countryId": "Greece" },
		{"state": "Didymoteicho", "countryId": "Greece" },
		{"state": "Dodoni Province", "countryId": "Greece" },
		{"state": "Domokos", "countryId": "Greece" },
		{"state": "Dorida", "countryId": "Greece" },
		{"state": "Edessa Province", "countryId": "Greece" },
		{"state": "Elafonisi", "countryId": "Greece" },
		{"state": "Elassona", "countryId": "Greece" },
		{"state": "Elis Province", "countryId": "Greece" },
		{"state": "Eordaia", "countryId": "Greece" },
		{"state": "Epidavros Limira", "countryId": "Greece" },
		{"state": "Ermionida", "countryId": "Greece" },
		{"state": "Farsala", "countryId": "Greece" },
		{"state": "Filiates", "countryId": "Greece" },
		{"state": "Fyllida", "countryId": "Greece" },
		{"state": "Giannitsa Province", "countryId": "Greece" },
		{"state": "Gortynia", "countryId": "Greece" },
		{"state": "Gytheio", "countryId": "Greece" }, 
		{"state": "Hydra (island)", "countryId": "Greece" },
		{"state": "Ierapetra", "countryId": "Greece" },
		{"state": "Ikaria (regional unit)", "countryId": "Greece" },
		{"state": "Imathia Province", "countryId": "Greece" },
		{"state": "Istiaia-Aidipsos", "countryId": "Greece" },
		{"state": "Ithaca", "countryId": "Greece" },
		{"state": "Kainourgio", "countryId": "Greece" },
		{"state": "Kalabaka", "countryId": "Greece" },
		{"state": "Kalamata Province", "countryId": "Greece" },
		{"state": "Kalavryta", "countryId": "Greece" },
		{"state": "Kalymnos (regional unit)", "countryId": "Greece" },
		{"state": "Karpathos (regional unit)", "countryId": "Greece" },
		{"state": "Karystia", "countryId": "Greece" },
		{"state": "Kavala", "countryId": "Greece" },
		{"state": "Kea-Kythnos", "countryId": "Greece" },
		{"state": "Kilkis", "countryId": "Greece" },
		{"state": "Kissamos", "countryId": "Greece" },
		{"state": "Komotini", "countryId": "Greece" },
		{"state": "Konitsa", "countryId": "Greece" },      
		{"state": "Kos (regional unit)", "countryId": "Greece" },      
		{"state": "Kozani", "countryId": "Greece" },      
		{"state": "Kranaia", "countryId": "Greece" },      
		{"state": "Kydonia Province", "countryId": "Greece" },      
		{"state": "Kythira", "countryId": "Greece" },      
		{"state": "Lacedaemon Province", "countryId": "Greece" },      
		{"state": "Lagkadas Province", "countryId": "Greece" },      
		{"state": "Larissa", "countryId": "Greece" },      
		{"state": "Lasithi Province", "countryId": "Greece" },      
		{"state": "Lemnos (regional unit)", "countryId": "Greece" },      
		{"state": "Livadeia Province", "countryId": "Greece" },      
		{"state": "Locris", "countryId": "Greece" },      
		{"state": "Malevizi", "countryId": "Greece" },      
		{"state": "Mantineia", "countryId": "Greece" },      
		{"state": "Margariti", "countryId": "Greece" },      
		{"state": "Megalopolis, Greece", "countryId": "Greece" },      
		{"state": "Megaris", "countryId": "Greece" },      
		{"state": "Messini", "countryId": "Greece" },      
		{"state": "Metsovo", "countryId": "Greece" },      
		{"state": "Milos (regional unit)", "countryId": "Greece" },      
		{"state": "Mirabello Province", "countryId": "Greece" },      
		{"state": "Missolonghi", "countryId": "Greece" },      
		{"state": "Mithymna", "countryId": "Greece" },      
		{"state": "Monofatsi", "countryId": "Greece" },      
		{"state": "Mylopotamos, Crete", "countryId": "Greece" },      
		{"state": "Mytilene", "countryId": "Greece" },      
		{"state": "Nafpaktia", "countryId": "Greece" },      
		{"state": "Nafplia", "countryId": "Greece" },      
		{"state": "Naousa, Imathia", "countryId": "Greece" },      
		{"state": "Naxos (regional unit)", "countryId": "Greece" },      
		{"state": "Nestos (municipality)", "countryId": "Greece" },      
		{"state": "Oitylo", "countryId": "Greece" },      
		{"state": "Olympia Province", "countryId": "Greece" },      
		{"state": "Orestiada", "countryId": "Greece" },      
		{"state": "Paionia (municipality)", "countryId": "Greece" },      
		{"state": "Paliki", "countryId": "Greece" },      
		{"state": "Pangaio", "countryId": "Greece" },      
		{"state": "Parnassida", "countryId": "Greece" },      
		{"state": "Paros (regional unit)", "countryId": "Greece" },      
		{"state": "Patras Province", "countryId": "Greece" },      
		{"state": "Pediada", "countryId": "Greece" },      
		{"state": "Phthiotis Province", "countryId": "Greece" },      
		{"state": "Piraeus Province", "countryId": "Greece" },      
		{"state": "Plomari", "countryId": "Greece" },      
		{"state": "Pogoni", "countryId": "Greece" },      
		{"state": "Pylia", "countryId": "Greece" },      
		{"state": "Pyrgiotissa", "countryId": "Greece" },      
		{"state": "Rethymno (municipality)", "countryId": "Greece" },      
		{"state": "Rhodes (regional unit)", "countryId": "Greece" },      
		{"state": "Sami, Cephalonia", "countryId": "Greece" },      
		{"state": "Samos", "countryId": "Greece" },      
		{"state": "Samothrace", "countryId": "Greece" },      
		{"state": "Sapes", "countryId": "Greece" },      
		{"state": "Selino", "countryId": "Greece" },      
		{"state": "Serres", "countryId": "Greece" },      
		{"state": "Serres Province", "countryId": "Greece" },      
		{"state": "Sfakia", "countryId": "Greece" },      
		{"state": "Sintiki", "countryId": "Greece" },      
		{"state": "Sitia", "countryId": "Greece" },      
		{"state": "Skopelos", "countryId": "Greece" },      
		{"state": "Soufli", "countryId": "Greece" },      
		{"state": "Souli", "countryId": "Greece" },      
		{"state": "Syros", "countryId": "Greece" },      
		{"state": "Temenos, Greece", "countryId": "Greece" },      
		{"state": "Thasos", "countryId": "Greece" },      
		{"state": "Thebes Province", "countryId": "Greece" },      
		{"state": "Thessaloniki Province", "countryId": "Greece" },      
		{"state": "Thira (regional unit)", "countryId": "Greece" },      
		{"state": "Thyamida", "countryId": "Greece" },      
		{"state": "Tinos", "countryId": "Greece" },      
		{"state": "Trichonida Province", "countryId": "Greece" },      
		{"state": "Trifylia", "countryId": "Greece" },      
		{"state": "Trikala", "countryId": "Greece" },      
		{"state": "Troizinia-Methana", "countryId": "Greece" },      
		{"state": "Tyrnavos", "countryId": "Greece" },      
		{"state": "Valtos Province", "countryId": "Greece" },      
		{"state": "Viannos", "countryId": "Greece" },      
		{"state": "Visaltia", "countryId": "Greece" },      
		{"state": "Voio (municipality)", "countryId": "Greece" },      
		{"state": "Volos", "countryId": "Greece" },      
		{"state": "Vonitsa-Xiromero", "countryId": "Greece" },   
		
		{"state": "Alderney", "countryId": "Guernsey" }, 
		{"state": "Castel", "countryId": "Guernsey" }, 
		{"state": "Forest", "countryId": "Guernsey" }, 
		{"state": "Saint Andrew", "countryId": "Guernsey" }, 
		{"state": "Saint Martin", "countryId": "Guernsey" }, 
		{"state": "Saint Peter Port", "countryId": "Guernsey" }, 
		{"state": "Saint Pierre du Bois", "countryId": "Guernsey" }, 
		{"state": "Saint Sampson", "countryId": "Guernsey" }, 
		{"state": "Saint Saviour", "countryId": "Guernsey" }, 
		{"state": "Sark", "countryId": "Guernsey" }, 
		{"state": "Torteval", "countryId": "Guernsey" }, 
		{"state": "Vale", "countryId": "Guernsey" }, 
		
		{"state": "Vale", "countryId": "Guyana" },
		{"state": "Barima-Waini", "countryId": "Guyana" },
		{"state": "Cuyuni-Mazaruni", "countryId": "Guyana" },
		{"state": "Demerara-Mahaica", "countryId": "Guyana" },
		{"state": "East Berbice-Corentyne", "countryId": "Guyana" },
		{"state": "Essequibo Islands-West Demerar", "countryId": "Guyana" },
		{"state": "Mahaica-Berbice", "countryId": "Guyana" },
		{"state": "Pomeroon-Supenaam", "countryId": "Guyana" },
		{"state": "Potaro-Siparuni", "countryId": "Guyana" },
		{"state": "Upper Demerara-Berbice", "countryId": "Guyana" },
		{"state": "Upper Takutu-Upper Essequibo", "countryId": "Guyana" },
		
		{"state": "Banjul", "countryId": "Gambia" },
		{"state": "Basse", "countryId": "Gambia" },
		{"state": "Brikama", "countryId": "Gambia" },
		{"state": "Janjanbureh", "countryId": "Gambia" },
		{"state": "Kanifing", "countryId": "Gambia" },
		{"state": "Kerewan", "countryId": "Gambia" },
		{"state": "Kuntaur", "countryId": "Gambia" },
		{"state": "Mansakonko", "countryId": "Gambia" },
		
		{"state": "Ashanti", "countryId": "Ghana" },
		{"state": "Brong-Ahafo", "countryId": "Ghana" },
		{"state": "Central", "countryId": "Ghana" },
		{"state": "Eastern", "countryId": "Ghana" },
		{"state": "Greater Accra", "countryId": "Ghana" },
		{"state": "Northern", "countryId": "Ghana" },
		{"state": "Upper East", "countryId": "Ghana" },
		{"state": "Upper West", "countryId": "Ghana" },
		{"state": "Volta", "countryId": "Ghana" },
		{"state": "Western", "countryId": "Ghana" },
		
		{"state": "Aasiaat", "countryId": "Greenland" },
		{"state": "Ammassalik", "countryId": "Greenland" },
		{"state": "Illoqqortoormiut", "countryId": "Greenland" },
		{"state": "Ilulissat", "countryId": "Greenland" },
		{"state": "Ivittuut", "countryId": "Greenland" },
		{"state": "Kangaatsiaq", "countryId": "Greenland" },
		{"state": "Maniitsoq", "countryId": "Greenland" },
		{"state": "Nanortalik", "countryId": "Greenland" },
		{"state": "Narsaq", "countryId": "Greenland" },
		{"state": "Nuuk", "countryId": "Greenland" },
		{"state": "Paamiut", "countryId": "Greenland" },
		{"state": "Qaanaaq", "countryId": "Greenland" },
		{"state": "Qaqortoq", "countryId": "Greenland" },
		{"state": "Qasigiannguit", "countryId": "Greenland" },
		{"state": "Qeqertarsuaq", "countryId": "Greenland" },
		{"state": "Sisimiut", "countryId": "Greenland" },
		{"state": "Udenfor kommunal inddeling", "countryId": "Greenland" },
		{"state": "Upernavik", "countryId": "Greenland" },
		{"state": "Uummannaq", "countryId": "Greenland" },
		
		
		{"state": "Agana Heights", "countryId": "Guam" },
		{"state": "Agat", "countryId": "Guam" },
		{"state": "Barrigada", "countryId": "Guam" },
		{"state": "Chalan-Pago-Ordot", "countryId": "Guam" },
		{"state": "Dededo", "countryId": "Guam" },
		{"state": "Hagatna", "countryId": "Guam" },
		{"state": "Inarajan", "countryId": "Guam" },
		{"state": "Mangilao", "countryId": "Guam" },
		{"state": "Merizo", "countryId": "Guam" },
		{"state": "Mongmong-Toto-Maite", "countryId": "Guam" },
		{"state": "Santa Rita", "countryId": "Guam" },
		{"state": "Sinajana", "countryId": "Guam" },
		{"state": "Talofofo", "countryId": "Guam" },
		{"state": "Tamuning", "countryId": "Guam" },
		{"state": "Yigo", "countryId": "Guam" },
		{"state": "Yona", "countryId": "Guam" },
		
		
		{"state": "Beyla", "countryId": "Guinea" },
		{"state": "Boffa", "countryId": "Guinea" },
		{"state": "Boke", "countryId": "Guinea" },
		{"state": "Conakry", "countryId": "Guinea" },
		{"state": "Coyah", "countryId": "Guinea" },
		{"state": "Dabola", "countryId": "Guinea" },
		{"state": "Dalaba", "countryId": "Guinea" },
		{"state": "Dinguiraye", "countryId": "Guinea" },
		{"state": "Faranah", "countryId": "Guinea" },
		{"state": "Forecariah", "countryId": "Guinea" },
		{"state": "Fria", "countryId": "Guinea" },
		{"state": "Gaoual", "countryId": "Guinea" },
		{"state": "Gueckedou", "countryId": "Guinea" },
		{"state": "Kankan", "countryId": "Guinea" },
		{"state": "Kerouane", "countryId": "Guinea" },
		{"state": "Kindia", "countryId": "Guinea" },
		{"state": "Kissidougou", "countryId": "Guinea" },
		{"state": "Koubia", "countryId": "Guinea" },
		{"state": "Koundara", "countryId": "Guinea" },
		{"state": "Kouroussa", "countryId": "Guinea" },
		{"state": "Labe", "countryId": "Guinea" },
		{"state": "Lola", "countryId": "Guinea" },
		{"state": "Macenta", "countryId": "Guinea" },
		{"state": "Mali", "countryId": "Guinea" },
		{"state": "Mamou", "countryId": "Guinea" },
		{"state": "Mandiana", "countryId": "Guinea" },
		{"state": "Nzerekore", "countryId": "Guinea" },
		{"state": "Pita", "countryId": "Guinea" },
		{"state": "Siguiri", "countryId": "Guinea" },
		{"state": "Telimele", "countryId": "Guinea" },
		{"state": "Tougue", "countryId": "Guinea" },
		{"state": "Yomou", "countryId": "Guinea" },
		
		{"state": "Gibraltar", "countryId": "Gibraltar" },
		
		{"state": "Carriacou-Petite Martinique", "countryId": "Grenada" },
		{"state": "Saint Andrew", "countryId": "Grenada" },
		{"state": "Saint Davids", "countryId": "Grenada" },
		{"state": "Saint George's", "countryId": "Grenada" },
		{"state": "Saint John", "countryId": "Grenada" },
		{"state": "Saint Mark", "countryId": "Grenada" },
		{"state": "Saint Patrick", "countryId": "Grenada" },
	  
		{"state": "Alta Verapaz", "countryId": "Guatemala" },
		{"state": "Baja Verapaz", "countryId": "Guatemala" },
		{"state": "Chimaltenango", "countryId": "Guatemala" },
		{"state": "Chiquimula", "countryId": "Guatemala" },
		{"state": "Chiquimula", "countryId": "Guatemala" },
		{"state": "Escuintla", "countryId": "Guatemala" },
		{"state": "Guatemala", "countryId": "Guatemala" },
		{"state": "Huehuetenango", "countryId": "Guatemala" },
		{"state": "Izabal", "countryId": "Guatemala" },
		{"state": "Jalapa", "countryId": "Guatemala" },
		{"state": "Jutiapa", "countryId": "Guatemala" },
		{"state": "Peten", "countryId": "Guatemala" },
		{"state": "Quezaltenango", "countryId": "Guatemala" },
		{"state": "Quiche", "countryId": "Guatemala" },
		{"state": "Retalhuleu", "countryId": "Guatemala" },
		{"state": "Sacatepequez", "countryId": "Guatemala" },
		{"state": "San Marcos", "countryId": "Guatemala" },
		{"state": "Santa Rosa", "countryId": "Guatemala" },
		{"state": "Solola", "countryId": "Guatemala" },
		{"state": "Suchitepequez", "countryId": "Guatemala" },
		{"state": "Totonicapan", "countryId": "Guatemala" },
		{"state": "Zacapa", "countryId": "Guatemala" },
		
		{"state": "Bafata", "countryId": "Guinea-Bissau" },
		{"state": "Bissau", "countryId": "Guinea-Bissau" },
		{"state": "Bolama", "countryId": "Guinea-Bissau" },
		{"state": "Cacheu", "countryId": "Guinea-Bissau" },
		{"state": "Gabu", "countryId": "Guinea-Bissau" },
		{"state": "Oio", "countryId": "Guinea-Bissau" },
		{"state": "Oio", "countryId": "Guinea-Bissau" },
		{"state": "Tombali", "countryId": "Guinea-Bissau" },
			 
		
		{"state": "Artibonite", "countryId": "Haiti" },
		{"state": "Centre", "countryId": "Haiti" },
		{"state": "Grand'Anse", "countryId": "Haiti" },
		{"state": "Nord", "countryId": "Haiti" },
		{"state": "Nord-Est", "countryId": "Haiti" },
		{"state": "Nord-Ouest", "countryId": "Haiti" },
		{"state": "Ouest", "countryId": "Haiti" },
		{"state": "Sud", "countryId": "Haiti" },
		{"state": "Sud-Est", "countryId": "Haiti" },
		
		{"state": "Hong Kong", "countryId": "Hong Kong, China" },
		
		{"state": "Atlantida", "countryId": "Honduras" },
		{"state": "Choluteca", "countryId": "Honduras" },
		{"state": "Colon", "countryId": "Honduras" },
		{"state": "Comayagua", "countryId": "Honduras" },
		{"state": "Copan", "countryId": "Honduras" },,
		{"state": "Cortes", "countryId": "Honduras" },,
		{"state": "Distrito Central", "countryId": "Honduras" },,
		{"state": "El Paraiso", "countryId": "Honduras" },,
		{"state": "Francisco Morazan", "countryId": "Honduras" },,
		{"state": "Gracias a Dios", "countryId": "Honduras" },,
		{"state": "Intibuca", "countryId": "Honduras" },,
		{"state": "Islas de la Bahia", "countryId": "Honduras" },,
		{"state": "La Paz", "countryId": "Honduras" },,
		{"state": "Lempira", "countryId": "Honduras" },,
		{"state": "Ocotepeque", "countryId": "Honduras" },,
		{"state": "Olancho", "countryId": "Honduras" },,
		{"state": "Santa Barbara", "countryId": "Honduras" },,
		{"state": "Valle", "countryId": "Honduras" },,
		{"state": "Yoro", "countryId": "Honduras" },,
		
  
		{"state": "Northern Hungary", "countryId": "Hungary" },      
		{"state": "Northern Great Plain", "countryId": "Hungary" },      
		{"state": "Southern Great Plain", "countryId": "Hungary" },      
		{"state": "Central Hungary", "countryId": "Hungary" },      
		{"state": "Central Transdanubia", "countryId": "Hungary" },      
		{"state": "Western Transdanubia", "countryId": "Hungary" },      
		{"state": "Southern Transdanubia", "countryId": "Hungary" },      
		
		{"state": "Babil", "countryId": "Iraq" },      
		{"state": "Baghdad", "countryId": "Iraq" },      
		{"state": "Dahuk", "countryId": "Iraq" },      
		{"state": "Dhi Qar", "countryId": "Iraq" },      
		{"state": "Diyala", "countryId": "Iraq" },      
		{"state": "Erbil", "countryId": "Iraq" },      
		{"state": "Irbil", "countryId": "Iraq" },      
		{"state": "Karbala", "countryId": "Iraq" },      
		{"state": "Karbala", "countryId": "Iraq" },      
		{"state": "Maysan", "countryId": "Iraq" },      
		{"state": "Maysan", "countryId": "Iraq" },      
		{"state": "Salah-ad-Din", "countryId": "Iraq" },      
		{"state": "Wasit", "countryId": "Iraq" },      
		{"state": "al-Anbar", "countryId": "Iraq" },      
		{"state": "al-Basrah", "countryId": "Iraq" },      
		{"state": "al-Muthanna", "countryId": "Iraq" },      
		{"state": "al-Qadisiyah", "countryId": "Iraq" },      
		{"state": "an-Najaf", "countryId": "Iraq" },      
		{"state": "as-Sulaymaniyah", "countryId": "Iraq" },      
		{"state": "at-Ta'mim", "countryId": "Iraq" },      
		
		{"state": "Isle of Man", "countryId": "Isle of Man" },      
		
		{"state": "Beit Hanania", "countryId": "Israel" },      
		{"state": "Ben Gurion Airport", "countryId": "Israel" },      
		{"state": "Bethlehem", "countryId": "Israel" }, 
		{"state": "Caesarea", "countryId": "Israel" }, 
		{"state": "Centre", "countryId": "Israel" }, 
		{"state": "Gaza", "countryId": "Israel" }, 
		{"state": "Hadaron", "countryId": "Israel" }, 
		{"state": "Haifa District", "countryId": "Israel" }, 
		{"state": "Hamerkaz", "countryId": "Israel" }, 
		{"state": "Hazafon", "countryId": "Israel" }, 
		{"state": "Hebron", "countryId": "Israel" }, 
		{"state": "Jaffa", "countryId": "Israel" }, 
		{"state": "Jerusalem", "countryId": "Israel" }, 
		{"state": "Khefa", "countryId": "Israel" }, 
		{"state": "Kiryat Yam", "countryId": "Israel" }, 
		{"state": "Lower Galilee", "countryId": "Israel" }, 
		{"state": "Qalqilya", "countryId": "Israel" }, 
		{"state": "Talme Elazar", "countryId": "Israel" }, 
		{"state": "Tel Aviv", "countryId": "Israel" }, 
		{"state": "Tsafon", "countryId": "Israel" }, 
		{"state": "Umm El Fahem", "countryId": "Israel" }, 
		{"state": "Yerushalayim", "countryId": "Israel" }, 
		
		{"state": "Aceh", "countryId": "Indonesia" }, 
		{"state": "Bali", "countryId": "Indonesia" }, 
		{"state": "Bangka-Belitung", "countryId": "Indonesia" }, 
		{"state": "Banten", "countryId": "Indonesia" }, 
		{"state": "Bengkulu", "countryId": "Indonesia" }, 
		{"state": "Gandaria", "countryId": "Indonesia" }, 
		{"state": "Gorontalo", "countryId": "Indonesia" }, 
		{"state": "Jakarta", "countryId": "Indonesia" }, 
		{"state": "Jambi", "countryId": "Indonesia" }, 
		{"state": "Jawa Barat", "countryId": "Indonesia" }, 
		{"state": "Jawa Tengah", "countryId": "Indonesia" }, 
		{"state": "Jawa Timur", "countryId": "Indonesia" }, 
		{"state": "Kalimantan Barat", "countryId": "Indonesia" }, 
		{"state": "Kalimantan Selatan", "countryId": "Indonesia" }, 
		{"state": "Kalimantan Tengah", "countryId": "Indonesia" }, 
		{"state": "Kalimantan Timur", "countryId": "Indonesia" }, 
		{"state": "Kendal", "countryId": "Indonesia" }, 
		{"state": "Lampung", "countryId": "Indonesia" }, 
		{"state": "Maluku", "countryId": "Indonesia" }, 
		{"state": "Maluku Utara", "countryId": "Indonesia" }, 
		{"state": "Nusa Tenggara Barat", "countryId": "Indonesia" }, 
		{"state": "Nusa Tenggara Timur", "countryId": "Indonesia" }, 
		{"state": "Papua", "countryId": "Indonesia" }, 
		{"state": "Riau", "countryId": "Indonesia" }, 
		{"state": "Riau Kepulauan", "countryId": "Indonesia" }, 
		{"state": "Solo", "countryId": "Indonesia" }, 
		{"state": "Sulawesi Selatan", "countryId": "Indonesia" }, 
		{"state": "Sulawesi Tengah", "countryId": "Indonesia" }, 
		{"state": "Sulawesi Tenggara", "countryId": "Indonesia" }, 
		{"state": "Sulawesi Utara", "countryId": "Indonesia" }, 
		{"state": "Sumatera Barat", "countryId": "Indonesia" }, 
		{"state": "Sumatera Selatan", "countryId": "Indonesia" }, 
		{"state": "Sumatera Utara", "countryId": "Indonesia" }, 
		{"state": "Yogyakarta", "countryId": "Indonesia" }, 
		
		{"state": "Ardabil", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Azarbayjan-e Bakhtari", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Azarbayjan-e Khavari", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Bushehr", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Chahar Mahal-e Bakhtiari", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Esfahan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Fars", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Gilan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Golestan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Hamadan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Hormozgan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Ilam", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Kerman", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Kermanshah", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Khorasan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Khuzestan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Kohgiluyeh-e Boyerahmad", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Kordestan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Lorestan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Markazi", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Mazandaran", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Ostan-e Esfahan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Qazvin", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Qom", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Semnan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Sistan-e Baluchestan", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Tehran", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Yazd", "countryId": "Islamic Republic of Iran" }, 
		{"state": "Zanjan", "countryId": "Islamic Republic of Iran" }, 
		
		  
		{"state": "Armagh", "countryId": "Ireland" },      
		{"state": "Carlow", "countryId": "Ireland" },      
		{"state": "Cavan", "countryId": "Ireland" },      
		{"state": "Clare", "countryId": "Ireland" },      
		{"state": "Cork", "countryId": "Ireland" },      
		{"state": "Donegal", "countryId": "Ireland" },      
		{"state": "Dublin", "countryId": "Ireland" },      
		{"state": "Galway", "countryId": "Ireland" },      
		{"state": "Kerry", "countryId": "Ireland" },      
		{"state": "Kildare", "countryId": "Ireland" },      
		{"state": "Kilkenny", "countryId": "Ireland" },      
		{"state": "Laois", "countryId": "Ireland" },      
		{"state": "Leinster", "countryId": "Ireland" },      
		{"state": "Leitrim", "countryId": "Ireland" },      
		{"state": "Limerick", "countryId": "Ireland" },      
		{"state": "Loch Garman", "countryId": "Ireland" },      
		{"state": "Longford", "countryId": "Ireland" },      
		{"state": "Louth", "countryId": "Ireland" },      
		{"state": "Mayo", "countryId": "Ireland" },      
		{"state": "Meath", "countryId": "Ireland" },      
		{"state": "Monaghan", "countryId": "Ireland" },      
		{"state": "Offaly", "countryId": "Ireland" },      
		{"state": "Roscommon", "countryId": "Ireland" },      
		{"state": "Sligo", "countryId": "Ireland" },      
		{"state": "Tipperary North Riding", "countryId": "Ireland" },      
		{"state": "Tipperary South Riding", "countryId": "Ireland" },      
		{"state": "Ulster", "countryId": "Ireland" },      
		{"state": "Waterford", "countryId": "Ireland" },      
		{"state": "Westmeath", "countryId": "Ireland" },      
		{"state": "Wexford", "countryId": "Ireland" },  	
		{"state": "Wicklow", "countryId": "Ireland" },      
	   
		
		{"state": "Austurland", "countryId": "Iceland" }, 
		{"state": "Gullbringusysla", "countryId": "Iceland" }, 
		{"state": "Hofu borgarsva i", "countryId": "Iceland" }, 
		{"state": "Nor urland eystra", "countryId": "Iceland" }, 
		{"state": "Nor urland vestra", "countryId": "Iceland" }, 
		{"state": "Su urland", "countryId": "Iceland" }, 
		{"state": "Su urnes", "countryId": "Iceland" }, 
		{"state": "Vestfir ir", "countryId": "Iceland" }, 
		{"state": "Vesturland", "countryId": "Iceland" }, 
		
		
		{"state": "Agrigento", "countryId": "Italy" },   
		{"state": "Alessandria", "countryId": "Italy" },   
		{"state": "Ancona", "countryId": "Italy" },   
		{"state": "Aosta", "countryId": "Italy" },   
		{"state": "Arezzo", "countryId": "Italy" },   
		{"state": "Ascoli Piceno", "countryId": "Italy" },   
		{"state": "Asti", "countryId": "Italy" },   
		{"state": "Avellino", "countryId": "Italy" },   
		{"state": "Bari ", "countryId": "Italy" },   
		{"state": "Barletta-Andria-Trani", "countryId": "Italy" },   
		{"state": "Belluno", "countryId": "Italy" },   
		{"state": "Benevento", "countryId": "Italy" },   
		{"state": "Bergamo", "countryId": "Italy" },   
		{"state": "Biella", "countryId": "Italy" },   
		{"state": "Bologna ", "countryId": "Italy" },   
		{"state": "Bolzano - Alto Adige / Bozen - Südtirol", "countryId": "Italy" },   
		{"state": "Brescia", "countryId": "Italy" },   
		{"state": "Brindisi", "countryId": "Italy" },   
		{"state": "Cagliari ", "countryId": "Italy" },   
		{"state": "Caltanissetta ", "countryId": "Italy" },   
		{"state": "Campobasso", "countryId": "Italy" },   
		{"state": "Caserta", "countryId": "Italy" },   
		{"state": "Catania ", "countryId": "Italy" },   
		{"state": "Catanzaro", "countryId": "Italy" },   
		{"state": "Chieti", "countryId": "Italy" },   
		{"state": "Como", "countryId": "Italy" },   
		{"state": "Cosenza", "countryId": "Italy" },   
		{"state": "Cremona", "countryId": "Italy" },   
		{"state": "Crotone", "countryId": "Italy" },   
		{"state": "Cuneo", "countryId": "Italy" },   
		{"state": "Enna ", "countryId": "Italy" },   
		{"state": "Fermo", "countryId": "Italy" },   
		{"state": "Ferrara", "countryId": "Italy" },   
		{"state": "Florence ", "countryId": "Italy" },   
		{"state": "Foggia", "countryId": "Italy" },   
		{"state": "Forlì-Cesena", "countryId": "Italy" },   
		{"state": "Frosinone", "countryId": "Italy" },   
		{"state": "Genoa ", "countryId": "Italy" },   
		{"state": "Grosseto", "countryId": "Italy" },   
		{"state": "Imperia", "countryId": "Italy" },   
		{"state": "Isernia", "countryId": "Italy" },   
		{"state": "La Spezia", "countryId": "Italy" },   
		{"state": "L'Aquila", "countryId": "Italy" },   
		{"state": "Latina", "countryId": "Italy" },   
		{"state": "Lecce", "countryId": "Italy" },   
		{"state": "Lecco", "countryId": "Italy" },   
		{"state": "Livorno", "countryId": "Italy" },   
		{"state": "Lodi", "countryId": "Italy" },   
		{"state": "Lucca", "countryId": "Italy" },   
		{"state": "Macerata", "countryId": "Italy" },   
		{"state": "Mantua", "countryId": "Italy" },   
		{"state": "Massa and Carrara", "countryId": "Italy" },   
		{"state": "Matera", "countryId": "Italy" },   
		{"state": "Messina", "countryId": "Italy" },   
		{"state": "Milan ", "countryId": "Italy" },   
		{"state": "	Modena", "countryId": "Italy" },   
		{"state": "	Monza and Brianza", "countryId": "Italy" },   
		{"state": "Naples", "countryId": "Italy" },   
		{"state": "	Novara", "countryId": "Italy" },   
		{"state": "Nuoro", "countryId": "Italy" },   
		{"state": "	Oristano", "countryId": "Italy" },   
		{"state": "	Padua", "countryId": "Italy" },   
		{"state": "Palermo ", "countryId": "Italy" },   
		{"state": "Parma", "countryId": "Italy" },   
		{"state": "Pavia", "countryId": "Italy" },   
		{"state": "Perugia", "countryId": "Italy" },   
		{"state": "Pesaro and Urbino", "countryId": "Italy" },   
		{"state": "	Pescara", "countryId": "Italy" },   
		{"state": "Piacenza", "countryId": "Italy" },   
		{"state": "Pisa", "countryId": "Italy" },   
		{"state": "Pistoia", "countryId": "Italy" },   
		{"state": "Potenza", "countryId": "Italy" },   
		{"state": "Prato", "countryId": "Italy" },   
		{"state": "Ragusa ", "countryId": "Italy" },   
		{"state": "Ravenna", "countryId": "Italy" },   
		{"state": "Reggio Calabria", "countryId": "Italy" },   
		{"state": "Reggio Emilia", "countryId": "Italy" },   
		{"state": "Rieti", "countryId": "Italy" },   
		{"state": "Rimini", "countryId": "Italy" },   
		{"state": "Rome ", "countryId": "Italy" },   
		{"state": "Rovigo", "countryId": "Italy" },   
		{"state": "Salerno", "countryId": "Italy" },   
		{"state": "Sassari", "countryId": "Italy" },   
		{"state": "Savona", "countryId": "Italy" },   
		{"state": "Siena", "countryId": "Italy" },   
		{"state": "South Sardinia", "countryId": "Italy" },   
		{"state": "Taranto", "countryId": "Italy" },   
		{"state": "Teramo", "countryId": "Italy" },   
		{"state": "Terni", "countryId": "Italy" },   
		{"state": "Trapani ", "countryId": "Italy" },   
		{"state": "Trento[", "countryId": "Italy" },   
		{"state": "Treviso", "countryId": "Italy" },   
		{"state": "Turin ", "countryId": "Italy" },   
		{"state": "Varese", "countryId": "Italy" },   
		{"state": "Venice ", "countryId": "Italy" },   
		{"state": "Verbano-Cusio-Ossola", "countryId": "Italy" },   
		{"state": "Vercelli ", "countryId": "Italy" },   
		{"state": "Verona", "countryId": "Italy" },   
		{"state": "Vibo Valentia", "countryId": "Italy" },   
		{"state": "Vicenza", "countryId": "Italy" },   
		{"state": "Viterbo", "countryId": "Italy" },   
	   
		{"state": "Buxoro Viloyati", "countryId": "Jamaica" },   
		{"state": "Clarendon", "countryId": "Jamaica" },   
		{"state": "Hanover", "countryId": "Jamaica" },   
		{"state": "Kingston", "countryId": "Jamaica" },   
		{"state": "Manchester", "countryId": "Jamaica" },   
		{"state": "Portland", "countryId": "Jamaica" },   
		{"state": "Saint Andrews", "countryId": "Jamaica" },   
		{"state": "Saint Ann", "countryId": "Jamaica" },   
		{"state": "Saint Catherine", "countryId": "Jamaica" },   
		{"state": "Saint Elizabeth", "countryId": "Jamaica" },   
		{"state": "Saint James", "countryId": "Jamaica" },   
		{"state": "Saint Mary", "countryId": "Jamaica" },   
		{"state": "Saint Thomas", "countryId": "Jamaica" },   
		{"state": "Trelawney", "countryId": "Jamaica" },   
		{"state": "Westmoreland", "countryId": "Jamaica" },   
		
		{"state": "'Ajlun", "countryId": "Jordan" },   
		{"state": "Amman", "countryId": "Jordan" },   
		{"state": "Irbid", "countryId": "Jordan" },   
		{"state": "Jarash", "countryId": "Jordan" },   
		{"state": "Ma'an", "countryId": "Jordan" },   
		{"state": "Madaba", "countryId": "Jordan" },   
		{"state": "al-'Aqabah", "countryId": "Jordan" },   
		{"state": "al-Balqa'", "countryId": "Jordan" },   
		{"state": "al-Karak", "countryId": "Jordan" },   
		{"state": "al-Mafraq", "countryId": "Jordan" },   
		{"state": "at-Tafilah", "countryId": "Jordan" },   
		{"state": "az-Zarqa'", "countryId": "Jordan" },   
		
		{"state": "Kinai", "countryId": "Japan" },   
		{"state": "Shichido", "countryId": "Japan" },   
		{"state": "Tōsandō", "countryId": "Japan" },   
		{"state": "Hokurikudō", "countryId": "Japan" },   
		{"state": "San'indō", "countryId": "Japan" },   
		{"state": "San'yōdō", "countryId": "Japan" },   
		{"state": "Nankaidō", "countryId": "Japan" },   
		{"state": "Saikaidō", "countryId": "Japan" },   
		{"state": "Chishima", "countryId": "Japan" },   
		{"state": "Hidaka", "countryId": "Japan" },   
		{"state": "Iburi", "countryId": "Japan" },   
		{"state": "Ishikari", "countryId": "Japan" },   
		{"state": "Kitami", "countryId": "Japan" },   
		{"state": "Kushiro", "countryId": "Japan" },   
		{"state": "Oshima", "countryId": "Japan" },   
		{"state": "Shiribeshi", "countryId": "Japan" },   
		{"state": "Teshio", "countryId": "Japan" },   
		{"state": "Tokachi", "countryId": "Japan" },   
		
		{"state": "Grouville", "countryId": "Jersey" },   
		{"state": "Saint Brelade", "countryId": "Jersey" },   
		{"state": "Saint Clement", "countryId": "Jersey" },   
		{"state": "Saint Helier", "countryId": "Jersey" },   
		{"state": "Saint John", "countryId": "Jersey" },   
		{"state": "Saint Lawrence", "countryId": "Jersey" },   
		{"state": "Saint Martin", "countryId": "Jersey" },   
		{"state": "Saint Mary", "countryId": "Jersey" },   
		{"state": "Saint Peter", "countryId": "Jersey" },   
		{"state": "Saint Saviour", "countryId": "Jersey" },   
		{"state": "Trinity", "countryId": "Jersey" },   
		
		{"state": "North Chungcheong", "countryId": "South Korea" },   
		{"state": "South Chungcheong", "countryId": "South Korea" },   
		{"state": "Gangwon", "countryId": "South Korea" },   
		{"state": "Gyeonggi", "countryId": "South Korea" },   
		{"state": "North Gyeongsang", "countryId": "South Korea" },   
		{"state": "South Gyeongsang", "countryId": "South Korea" },   
		{"state": "North Jeolla", "countryId": "South Korea" },   
		{"state": "South Jeolla", "countryId": "South Korea" },   
		{"state": "Jeju	", "countryId": "South Korea" },   
		
		
		{"state": "Chagang", "countryId": "North Korea" },   
		{"state": "North Hamgyong	", "countryId": "North Korea" },   
		{"state": "South Hamgyong", "countryId": "North Korea" },   
		{"state": "North Hwanghae", "countryId": "North Korea" },   
		{"state": "South Hwanghae", "countryId": "North Korea" },   
		{"state": "Kangwon", "countryId": "North Korea" },   
		{"state": "North Pyongan", "countryId": "North Korea" },   
		{"state": "South Pyongan", "countryId": "North Korea" },   
		{"state": "Ryanggang	", "countryId": "North Korea" },   
		
		{"state": "Gilbert", "countryId": "Kiribati" },   
		{"state": "Phoenix", "countryId": "Kiribati" },   
		{"state": " Line islands", "countryId": "Kiribati" },   
		
		{"state": "Al Asimah", "countryId": "Kuwait" },   
		{"state": "Hawalli", "countryId": "Kuwait" },   
		{"state": "Mishref", "countryId": "Kuwait" },   
		{"state": "Qadesiya", "countryId": "Kuwait" },   
		{"state": "Safat", "countryId": "Kuwait" },   
		{"state": "Salmiya", "countryId": "Kuwait" },   
		{"state": "al-Ahmadi", "countryId": "Kuwait" },   
		{"state": "al-Farwaniyah", "countryId": "Kuwait" },   
		{"state": "al-Jahra", "countryId": "Kuwait" },   
		{"state": "al-Kuwayt", "countryId": "Kuwait" },   
		
		{"state": "Central", "countryId": "Kenya" },   
		{"state": "Coast", "countryId": "Kenya" },   
		{"state": "Eastern", "countryId": "Kenya" },   
		{"state": "Nairobi", "countryId": "Kenya" },   
		{"state": "North Eastern", "countryId": "Kenya" },   
		{"state": "Nyanza", "countryId": "Kenya" },   
		{"state": "Rift Valley", "countryId": "Kenya" },   
		{"state": "Western", "countryId": "Kenya" },   
		
		{"state": "Batken", "countryId": "Kyrgyzstan" },   
		{"state": "Bishkek", "countryId": "Kyrgyzstan" },   
		{"state": "Chui", "countryId": "Kyrgyzstan" },   
		{"state": "Issyk-Kul", "countryId": "Kyrgyzstan" },   
		{"state": "Jalal-Abad", "countryId": "Kyrgyzstan" },   
		{"state": "Naryn", "countryId": "Kyrgyzstan" },   
		{"state": "Osh", "countryId": "Kyrgyzstan" },   
		{"state": "Talas", "countryId": "Kyrgyzstan" },   
		
		 {"state": "Kosovo ", "countryId": "Kosovo" }, 
		
		{"state": "Akmecet ", "countryId": "Kazakhstan" }, 
		{"state": "Akmola ", "countryId": "Kazakhstan" }, 
		{"state": "Aktobe ", "countryId": "Kazakhstan" }, 
		{"state": "Almati ", "countryId": "Kazakhstan" }, 
		{"state": "Atirau ", "countryId": "Kazakhstan" }, 
		{"state": "Batis Kazakstan ", "countryId": "Kazakhstan" }, 
		{"state": "Burlinsky Region ", "countryId": "Kazakhstan" }, 
		{"state": "Karagandi ", "countryId": "Kazakhstan" }, 
		{"state": "Kostanay ", "countryId": "Kazakhstan" }, 
		{"state": "Mankistau ", "countryId": "Kazakhstan" }, 
		{"state": "Ontustik Kazakstan ", "countryId": "Kazakhstan" }, 
		{"state": "Pavlodar ", "countryId": "Kazakhstan" }, 
		{"state": "Sigis Kazakstan ", "countryId": "Kazakhstan" }, 
		{"state": "Soltustik Kazakstan ", "countryId": "Kazakhstan" }, 
		{"state": "Taraz ", "countryId": "Kazakhstan" },
		
		
		{"state": "Attopu ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Bokeo ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Bolikhamsay ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Champasak ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Houaphanh ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Khammouane ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Luang Nam Tha ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Luang Prabang ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Oudomxay ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Phongsaly ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Saravan", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Savannakhet ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Sekong", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Viangchan Prefecture", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Viangchan Prefecture ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Xaignabury ", "countryId": "Lao People`s Democratic Republic" },
		{"state": "Xiang Khuang ", "countryId": "Lao People`s Democratic Republic" },
	   
		
		
		{"state": "Berea", "countryId": "Lesotho" },
		{"state": "Butha-Buthe ", "countryId": "Lesotho" },
		{"state": "Leribe ", "countryId": "Lesotho" },
		{"state": "Mafeteng ", "countryId": "Lesotho" },
		{"state": "Maseru ", "countryId": "Lesotho" },
		{"state": "Mohale's Hoek ", "countryId": "Lesotho" },
		{"state": "Mokhotlong ", "countryId": "Lesotho" },
		{"state": "Qacha's Nek ", "countryId": "Lesotho" },
		{"state": "Quthing ", "countryId": "Lesotho" },
		{"state": "Thaba-Tseka ", "countryId": "Lesotho" },
  
		
		{"state": "Bomi ", "countryId": "Liberia" },
		{"state": "Bong", "countryId": "Liberia" },
		{"state": "Grand Bassa ", "countryId": "Liberia" },
		{"state": "Grand Cape Mount ", "countryId": "Liberia" },
		{"state": "Grand Gedeh ", "countryId": "Liberia" },
		{"state": "Loffa ", "countryId": "Liberia" },
		{"state": "Margibi ", "countryId": "Liberia" },
		{"state": "Maryland and Grand Kru ", "countryId": "Liberia" },
		{"state": "Montserrado ", "countryId": "Liberia" },
		{"state": "Nimba ", "countryId": "Liberia" },
		{"state": "Rivercess ", "countryId": "Liberia" },
		{"state": "Sinoe ", "countryId": "Liberia" },
		
		{"state": "Beirut ", "countryId": "Lebanon" },
		{"state": "Jabal Lubnan ", "countryId": "Lebanon" },
		{"state": "Mohafazat Liban-Nord ", "countryId": "Lebanon" },
		{"state": "Mohafazat Mont-Liban ", "countryId": "Lebanon" },
		{"state": "Sidon ", "countryId": "Lebanon" },
		{"state": "al-Biqa ", "countryId": "Lebanon" },
		{"state": "al-Janub ", "countryId": "Lebanon" },
		{"state": "an-Nabatiyah ", "countryId": "Lebanon" },
		{"state": "ash-Shamal ", "countryId": "Lebanon" },
		
		{"state": "Tripolitania.", "countryId": "Libyan Arab Jamahiriya" },
		{"state": " Cyrenaica, .", "countryId": "Libyan Arab Jamahiriya" },
		{"state": " Fezzan.", "countryId": "Libyan Arab Jamahiriya" },
		
		
		
		
		{"state": "Aizkraukles", "countryId": "Latvia" },   
		{"state": "Aluksnes", "countryId": "Latvia" },   
		{"state": "Balvu", "countryId": "Latvia" },   
		{"state": "Bauskas", "countryId": "Latvia" },   
		{"state": "Cesu", "countryId": "Latvia" },   
		{"state": "Daugavpils", "countryId": "Latvia" },   
		{"state": "Daugavpils City", "countryId": "Latvia" },   
		{"state": "Dobeles", "countryId": "Latvia" },   
		{"state": "Gulbenes", "countryId": "Latvia" },   
		{"state": "Jekabspils", "countryId": "Latvia" },   
		{"state": "Jelgava", "countryId": "Latvia" },   
		{"state": "Jelgavas", "countryId": "Latvia" },   
		{"state": "Jurmala City", "countryId": "Latvia" },   
		{"state": "Kraslavas", "countryId": "Latvia" },   
		{"state": "Kuldigas", "countryId": "Latvia" },   
		{"state": "Liepaja", "countryId": "Latvia" },   
		{"state": "Liepajas", "countryId": "Latvia" },   
		{"state": "Limbazhu", "countryId": "Latvia" },   
		{"state": "Ludzas", "countryId": "Latvia" },   
		{"state": "Madonas", "countryId": "Latvia" },   
		{"state": "Ogres", "countryId": "Latvia" },   
		{"state": "Preilu", "countryId": "Latvia" },   
		{"state": "Rezekne", "countryId": "Latvia" },   
		{"state": "Rezeknes", "countryId": "Latvia" },   
		{"state": "Riga", "countryId": "Latvia" },   
		{"state": "Rigas", "countryId": "Latvia" },   
		{"state": "Saldus", "countryId": "Latvia" },   
		{"state": "Talsu", "countryId": "Latvia" },   
		{"state": "Tukuma", "countryId": "Latvia" },   
		{"state": "Valkas", "countryId": "Latvia" },   
		{"state": "Valmieras", "countryId": "Latvia" },   
		{"state": "Ventspils", "countryId": "Latvia" },   
		{"state": "Ventspils City", "countryId": "Latvia" },   
	   
		
		{"state": "Alytaus", "countryId": "Lithuania" },   
		{"state": "Anyksciai", "countryId": "Lithuania" },   
		{"state": "Anyksciai", "countryId": "Lithuania" },   
		{"state": "Klaipedos", "countryId": "Lithuania" },   
		{"state": "Marijampoles", "countryId": "Lithuania" },   
		{"state": "Panevezhio", "countryId": "Lithuania" },   
		{"state": "Panevezys", "countryId": "Lithuania" },   
		{"state": "Shiauliu", "countryId": "Lithuania" },   
		{"state": "Taurages", "countryId": "Lithuania" },   
		{"state": "Telshiu", "countryId": "Lithuania" },   
		{"state": "Telsiai", "countryId": "Lithuania" },   
		{"state": "Utenos", "countryId": "Lithuania" },   
		{"state": "Vilniaus", "countryId": "Lithuania" },   
		   
		{"state": "Capellen", "countryId": "Luxembourg" },   
		{"state": "Clervaux", "countryId": "Luxembourg" },   
		{"state": "Diekirch", "countryId": "Luxembourg" },   
		{"state": "Echternach", "countryId": "Luxembourg" },   
		{"state": "Esch-sur-Alzette", "countryId": "Luxembourg" },   
		{"state": "Grevenmacher", "countryId": "Luxembourg" },   
		{"state": "Luxembourg", "countryId": "Luxembourg" },   
		{"state": "Mersch", "countryId": "Luxembourg" },   
		{"state": "Redange", "countryId": "Luxembourg" },   
		{"state": "Remich", "countryId": "Luxembourg" },   
		{"state": "Vianden", "countryId": "Luxembourg" },   
		{"state": "Wiltz", "countryId": "Luxembourg" },
		
		{"state": "Balzers", "countryId": "Liechtenstein" },
		{"state": "Eschen", "countryId": "Liechtenstein" },
		{"state": "Gamprin", "countryId": "Liechtenstein" },
		{"state": "Mauren", "countryId": "Liechtenstein" },
		{"state": "Planken", "countryId": "Liechtenstein" },
		{"state": "Ruggell", "countryId": "Liechtenstein" },
		{"state": "Schaan", "countryId": "Liechtenstein" },
		{"state": "Schellenberg", "countryId": "Liechtenstein" },
		{"state": "Triesen", "countryId": "Liechtenstein" },
		{"state": "Triesenberg", "countryId": "Liechtenstein" },
		{"state": "Vaduz", "countryId": "Liechtenstein" },
		
	  
	   
	   
		
		
  
		
		{"state": "Macau", "countryId": "Macau" },  
		
		{"state": "Johor", "countryId": "Malaysia" },  
		{"state": "Kedah", "countryId": "Malaysia" },  
		{"state": "Kelantan", "countryId": "Malaysia" },  
		{"state": "Kuala Lumpur", "countryId": "Malaysia" },  
		{"state": "Labuan", "countryId": "Malaysia" },  
		{"state": "Macau", "countryId": "Malaysia" },  
		{"state": "Melaka", "countryId": "Malaysia" },  
		{"state": "Negeri Johor", "countryId": "Malaysia" },  
		{"state": "Negeri Sembilan", "countryId": "Malaysia" },  
		{"state": "Pahang", "countryId": "Malaysia" },  
		{"state": "Penang", "countryId": "Malaysia" },  
		{"state": "Perak", "countryId": "Malaysia" },  
		{"state": "Perlis", "countryId": "Malaysia" },  
		{"state": "Pulau Pinang", "countryId": "Malaysia" },  
		{"state": "Sabah", "countryId": "Malaysia" },  
		{"state": "Sarawak", "countryId": "Malaysia" },  
		{"state": "Selangor", "countryId": "Malaysia" },  
		{"state": "Sembilan", "countryId": "Malaysia" },  
		{"state": "Terengganu", "countryId": "Malaysia" },  
  
		{"state": "Adrar", "countryId": "Mauritania" },  
		{"state": "Assaba", "countryId": "Mauritania" },  
		{"state": "Brakna", "countryId": "Mauritania" },  
		{"state": "Dhakhlat Nawadibu", "countryId": "Mauritania" },  
		{"state": "Hudh-al-Gharbi", "countryId": "Mauritania" },  
		{"state": "Hudh-ash-Sharqi", "countryId": "Mauritania" },  
		{"state": "Inshiri", "countryId": "Mauritania" },  
		{"state": "Nawakshut", "countryId": "Mauritania" },  
		{"state": "Qidimagha", "countryId": "Mauritania" },  
		{"state": "Qurqul", "countryId": "Mauritania" },  
		{"state": "Taqant", "countryId": "Mauritania" },  
		{"state": "Tiris Zammur", "countryId": "Mauritania" },  
		{"state": "Trarza", "countryId": "Mauritania" },  
		
		
		{"state": "Aguascalientes", "countryId": "Mexico" },  
		{"state": "Baja California", "countryId": "Mexico" },  
		{"state": "Baja California Sur", "countryId": "Mexico" },  
		{"state": "Campeche", "countryId": "Mexico" },  
		{"state": "Chiapas", "countryId": "Mexico" },  
		{"state": "Chihuahua", "countryId": "Mexico" },  
		{"state": "Coahuila", "countryId": "Mexico" },  
		{"state": "Colima", "countryId": "Mexico" },  
		{"state": "Distrito Federal", "countryId": "Mexico" },  
		{"state": "Durango", "countryId": "Mexico" },  
		{"state": "Estado de Mexico", "countryId": "Mexico" },  
		{"state": "Guanajuato", "countryId": "Mexico" },  
		{"state": "Guerrero", "countryId": "Mexico" },  
		{"state": "Hidalgo", "countryId": "Mexico" },  
		{"state": "Jalisco", "countryId": "Mexico" },  
		{"state": "Mexico", "countryId": "Mexico" },  
		{"state": "Michoacan", "countryId": "Mexico" },  
		{"state": "Morelos", "countryId": "Mexico" },  
		{"state": "Nayarit", "countryId": "Mexico" },  
		{"state": "Nuevo Leon", "countryId": "Mexico" },  
		{"state": "Oaxaca", "countryId": "Mexico" },  
		{"state": "Puebla", "countryId": "Mexico" },  
		{"state": "Queretaro", "countryId": "Mexico" },  
		{"state": "Quintana Roo", "countryId": "Mexico" },  
		{"state": "San Luis Potosi", "countryId": "Mexico" },  
		{"state": "Sinaloa", "countryId": "Mexico" },  
		{"state": "Sonora", "countryId": "Mexico" },  
		{"state": "Tabasco", "countryId": "Mexico" },  
		{"state": "Tamaulipas", "countryId": "Mexico" },  
		{"state": "Tlaxcala", "countryId": "Mexico" },  
		{"state": "Veracruz", "countryId": "Mexico" },  
		{"state": "Yucatan", "countryId": "Mexico" },  
		{"state": "Zacatecas", "countryId": "Mexico" },  
		
		{"state": "Arhangaj", "countryId": "Mongolia" }, 
		{"state": "Bajan-Olgij", "countryId": "Mongolia" }, 
		{"state": "Bajanhongor", "countryId": "Mongolia" }, 
		{"state": "Bulgan", "countryId": "Mongolia" }, 
		{"state": "Darhan-Uul", "countryId": "Mongolia" }, 
		{"state": "Dornod", "countryId": "Mongolia" }, 
		{"state": "Dornogovi", "countryId": "Mongolia" }, 
		{"state": "Dundgovi", "countryId": "Mongolia" }, 
		{"state": "Govi-Altaj", "countryId": "Mongolia" }, 
		{"state": "Govisumber", "countryId": "Mongolia" }, 
		{"state": "Hentij", "countryId": "Mongolia" }, 
		{"state": "Hovd", "countryId": "Mongolia" }, 
		{"state": "Hovsgol", "countryId": "Mongolia" }, 
		{"state": "Omnogovi", "countryId": "Mongolia" }, 
		{"state": "Orhon", "countryId": "Mongolia" }, 
		{"state": "Ovorhangaj", "countryId": "Mongolia" }, 
		{"state": "Selenge", "countryId": "Mongolia" }, 
		{"state": "Suhbaatar", "countryId": "Mongolia" }, 
		{"state": "Tov", "countryId": "Mongolia" }, 
		{"state": "Ulaanbaatar", "countryId": "Mongolia" }, 
		{"state": "Uvs", "countryId": "Mongolia" }, 
		{"state": "Zavhan", "countryId": "Mongolia" }, 
	   
		{"state": "Agadir", "countryId": "Morocco" }, 
		{"state": "Casablanca", "countryId": "Morocco" }, 
		{"state": "Chaouia-Ouardigha", "countryId": "Morocco" }, 
		{"state": "Doukkala-Abda", "countryId": "Morocco" }, 
		{"state": "Fes-Boulemane", "countryId": "Morocco" }, 
		{"state": "Gharb-Chrarda-Beni Hssen", "countryId": "Morocco" }, 
		{"state": "Guelmim", "countryId": "Morocco" }, 
		{"state": "Kenitra", "countryId": "Morocco" }, 
		{"state": "Marrakech-Tensift-Al Haouz", "countryId": "Morocco" }, 
		{"state": "Meknes-Tafilalet", "countryId": "Morocco" }, 
		{"state": "Oriental", "countryId": "Morocco" }, 
		{"state": "Oujda", "countryId": "Morocco" }, 
		{"state": "Province de Tanger", "countryId": "Morocco" }, 
		{"state": "Rabat-Sale-Zammour-Zaer", "countryId": "Morocco" }, 
		{"state": "Sala Al Jadida", "countryId": "Morocco" }, 
		{"state": "Settat", "countryId": "Morocco" }, 
		{"state": "Souss Massa-Draa", "countryId": "Morocco" }, 
		{"state": "Tadla-Azilal", "countryId": "Morocco" }, 
		{"state": "Tangier-Tetouan", "countryId": "Morocco" }, 
		{"state": "Taza-Al Hoceima-Taounate", "countryId": "Morocco" }, 
		{"state": "Wilaya de Casablanca", "countryId": "Morocco" }, 
		{"state": "Wilaya de Rabat-Sale", "countryId": "Morocco" }, 
  
		{"state": "Antananarivo", "countryId": "Madagascar" }, 
		{"state": "Antsiranana", "countryId": "Madagascar" }, 
		{"state": "Fianarantsoa", "countryId": "Madagascar" }, 
		{"state": "Mahajanga", "countryId": "Madagascar" }, 
		{"state": "Toamasina", "countryId": "Madagascar" }, 
		{"state": "Toliary", "countryId": "Madagascar" }, 
  
		{"state": "Alif Alif", "countryId": "Maldives" }, 
		{"state": "Alif Dhaal", "countryId": "Maldives" }, 
		{"state": "Baa", "countryId": "Maldives" }, 
		{"state": "Dhaal", "countryId": "Maldives" }, 
		{"state": "Faaf", "countryId": "Maldives" }, 
		{"state": "Gaaf Alif", "countryId": "Maldives" }, 
		{"state": "Gaaf Dhaal", "countryId": "Maldives" }, 
		{"state": "Ghaviyani", "countryId": "Maldives" }, 
		{"state": "Haa Alif", "countryId": "Maldives" }, 
		{"state": "Haa Dhaal", "countryId": "Maldives" }, 
		{"state": "Kaaf", "countryId": "Maldives" }, 
		{"state": "Laam", "countryId": "Maldives" }, 
		{"state": "Lhaviyani", "countryId": "Maldives" }, 
		{"state": "Male", "countryId": "Maldives" }, 
		{"state": "Miim", "countryId": "Maldives" }, 
		{"state": "Nuun", "countryId": "Maldives" }, 
		{"state": "Raa", "countryId": "Maldives" }, 
		{"state": "Shaviyani", "countryId": "Maldives" }, 
		{"state": "Siin", "countryId": "Maldives" }, 
		{"state": "Thaa", "countryId": "Maldives" }, 
		{"state": "Vaav", "countryId": "Maldives" }, 
		
		
		{"state": "Ailinlaplap", "countryId": "Marshall Islands" }, 
		{"state": "Ailuk", "countryId": "Marshall Islands" }, 
		{"state": "Arno", "countryId": "Marshall Islands" }, 
		{"state": "Aur", "countryId": "Marshall Islands" }, 
		{"state": "Bikini", "countryId": "Marshall Islands" }, 
		{"state": "Vaav", "countryId": "Marshall Islands" }, 
		{"state": "Ebon", "countryId": "Marshall Islands" }, 
		{"state": "Enewetak", "countryId": "Marshall Islands" }, 
		{"state": "Jabat", "countryId": "Marshall Islands" }, 
		{"state": "Jaluit", "countryId": "Marshall Islands" }, 
		{"state": "Kili", "countryId": "Marshall Islands" }, 
		{"state": "Kwajalein", "countryId": "Marshall Islands" }, 
		{"state": "Lae", "countryId": "Marshall Islands" }, 
		{"state": "Lib", "countryId": "Marshall Islands" }, 
		{"state": "Likiep", "countryId": "Marshall Islands" }, 
		{"state": "Majuro", "countryId": "Marshall Islands" }, 
		{"state": "Maloelap", "countryId": "Marshall Islands" }, 
		{"state": "Mejit", "countryId": "Marshall Islands" }, 
		{"state": "Mili", "countryId": "Marshall Islands" }, 
		{"state": "Namorik", "countryId": "Marshall Islands" }, 
		{"state": "Namu", "countryId": "Marshall Islands" }, 
		{"state": "Rongelap", "countryId": "Marshall Islands" }, 
		{"state": "Ujae", "countryId": "Marshall Islands" }, 
		{"state": "Utrik", "countryId": "Marshall Islands" }, 
		{"state": "Wotho", "countryId": "Marshall Islands" }, 
		{"state": "Wotje", "countryId": "Marshall Islands" }, 
	   
		
		{"state": "Black River", "countryId": "Mauritius" }, 
		{"state": "Eau Coulee", "countryId": "Mauritius" }, 
		{"state": "Flacq", "countryId": "Mauritius" }, 
		{"state": "Floreal", "countryId": "Mauritius" }, 
		{"state": "Grand Port", "countryId": "Mauritius" }, 
		{"state": "Moka", "countryId": "Mauritius" }, 
		{"state": "Pamplempousses", "countryId": "Mauritius" }, 
		{"state": "Plaines Wilhelm", "countryId": "Mauritius" }, 
		{"state": "Port Louis", "countryId": "Mauritius" }, 
		{"state": "Riviere du Rempart", "countryId": "Mauritius" }, 
		{"state": "Rodrigues", "countryId": "Mauritius" }, 
		{"state": "Rose Hill", "countryId": "Mauritius" }, 
		{"state": "Savanne", "countryId": "Mauritius" }, 
		
		{"state": "Cabo Delgado", "countryId": "Mozambique" }, 
		{"state": "Gaza", "countryId": "Mozambique" }, 
		{"state": "Inhambane", "countryId": "Mozambique" }, 
		{"state": "Manica", "countryId": "Mozambique" }, 
		{"state": "Maputo", "countryId": "Mozambique" }, 
		{"state": "Maputo Provincia", "countryId": "Mozambique" }, 
		{"state": "Nampula", "countryId": "Mozambique" }, 
		{"state": "Niassa", "countryId": "Mozambique" }, 
		{"state": "Sofala", "countryId": "Mozambique" }, 
		{"state": "Tete", "countryId": "Mozambique" }, 
		{"state": "Zambezia", "countryId": "Mozambique" }, 
		
		{"state": "Lake Malawi", "countryId": "Malawi" }, 
		{"state": "Lake Chilwa", "countryId": "Malawi" }, 
		{"state": "Lake Malombe", "countryId": "Malawi" }, 
		
		{"state": "Bamako", "countryId": "Mali" }, 
		{"state": "Gao", "countryId": "Mali" }, 
		{"state": "Kayes", "countryId": "Mali" }, 
		{"state": "Kidal", "countryId": "Mali" }, 
		{"state": "Koulikoro", "countryId": "Mali" }, 
		{"state": "Mopti", "countryId": "Mali" }, 
		{"state": "Segou", "countryId": "Mali" }, 
		{"state": "Sikasso", "countryId": "Mali" }, 
		{"state": "Tombouctou", "countryId": "Mali" }, 
		
		{"state": "Fort-de-France", "countryId": "Martinique" }, 
		{"state": "La Trinite", "countryId": "Martinique" }, 
		{"state": "Le Marin", "countryId": "Martinique" }, 
		{"state": "Saint-Pierre", "countryId": "Martinique" }, 
		
		
		{"state": "Mayotte", "countryId": "Mayotte" }, 
		{"state": "Pamanzi", "countryId": "Mayotte" }, 
		
		{"state": "Montserrat", "countryId": "Montserrat" }, 
		
		{"state": "Ayeyarwady", "countryId": "Myanmar" }, 
		{"state": "Bago", "countryId": "Myanmar" }, 
		{"state": "Chin", "countryId": "Myanmar" }, 
		{"state": "Kachin", "countryId": "Myanmar" }, 
		{"state": "Kayah", "countryId": "Myanmar" }, 
		{"state": "Kayin", "countryId": "Myanmar" }, 
		{"state": "Magway", "countryId": "Myanmar" }, 
		{"state": "Mandalay", "countryId": "Myanmar" }, 
		{"state": "Mon", "countryId": "Myanmar" }, 
		{"state": "Nay Pyi Taw", "countryId": "Myanmar" }, 
		{"state": "Rakhine", "countryId": "Myanmar" }, 
		{"state": "Sagaing", "countryId": "Myanmar" }, 
		{"state": "Shan", "countryId": "Myanmar" }, 
		{"state": "Tanintharyi", "countryId": "Myanmar" }, 
		{"state": "Yangon", "countryId": "Myanmar" }, 
		
		
		{"state": "Berovo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Bitola", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Brod", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Debar", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Delchevo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Demir Hisar", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Gevgelija", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Gostivar", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kavadarci", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kichevo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kochani", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kratovo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kriva Palanka", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Krushevo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Kumanovo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Negotino", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Ohrid", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Prilep", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Probishtip", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Radovish", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Resen", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Shtip", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Skopje", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Struga", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Strumica", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Sveti Nikole", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Tetovo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Valandovo", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Veles", "countryId": "Macedonia (Republic of Macedonia)" },   
		{"state": "Vinica", "countryId": "Macedonia (Republic of Macedonia)" },  
		
		
		
		{"state": "Gozo and Comino", "countryId": "Malta" },   
		{"state": "Inner Harbour", "countryId": "Malta" },   
		{"state": "Northern", "countryId": "Malta" },   
		{"state": "Outer Harbour", "countryId": "Malta" },   
		{"state": "South Eastern", "countryId": "Malta" },   
		{"state": "Valletta", "countryId": "Malta" },   
		{"state": "Western", "countryId": "Malta" }, 
		
		
		{"state": "Balti", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Cahul", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Chisinau", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Chisinau Oras", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Edinet", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Gagauzia", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Lapusna", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Orhei", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Soroca", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Taraclia", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Tighina", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Transnistria", "countryId": "Moldova (Republic of Moldova) " }, 
		{"state": "Ungheni", "countryId": "Moldova (Republic of Moldova) " }, 
		
		
		
		
		{"state": "Fontvieille", "countryId": "Monaco" },  
		{"state": "La Condamine", "countryId": "Monaco" },  
		{"state": "Monaco-Ville", "countryId": "Monaco" },  
		{"state": "Monte Carlo", "countryId": "Monaco" },
		
		{"state": "Montenegro", "countryId": "Montenegro" },
		
		{"state": "Caprivi", "countryId": "Namibia" },
		{"state": "Erongo", "countryId": "Namibia" },
		{"state": "Hardap", "countryId": "Namibia" },
		{"state": "Karas", "countryId": "Namibia" },
		{"state": "Kavango", "countryId": "Namibia" },
		{"state": "Khomas", "countryId": "Namibia" },
		{"state": "Kunene", "countryId": "Namibia" },
		{"state": "Ohangwena", "countryId": "Namibia" },
		{"state": "Omaheke", "countryId": "Namibia" },
		{"state": "Omusati", "countryId": "Namibia" },
		{"state": "Oshana", "countryId": "Namibia" },
		{"state": "Oshikoto", "countryId": "Namibia" },
		{"state": "Otjozondjupa", "countryId": "Namibia" },
  
		
		{"state": "Auckland", "countryId": "New Zealand" },
		{"state": "New Plymouth ", "countryId": "New Zealand" },
		{"state": "Hawke's Bay", "countryId": "New Zealand" },
		{"state": "Wellington", "countryId": "New Zealand" },
		{"state": "Nelson", "countryId": "New Zealand" },
		{"state": "Marlborough", "countryId": "New Zealand" },
		{"state": "Westland", "countryId": "New Zealand" },
		{"state": "Canterbury", "countryId": "New Zealand" },
		{"state": "Otago", "countryId": "New Zealand" },
		{"state": "Southland", "countryId": "New Zealand" },
		
		{"state": "Abia", "countryId": "Nigeria" },
		{"state": "Adamawa", "countryId": "Nigeria" },
		{"state": "Akwa Ibom", "countryId": "Nigeria" },
		{"state": "Anambra", "countryId": "Nigeria" },
		{"state": "Bauchi", "countryId": "Nigeria" },
		{"state": "Bayelsa", "countryId": "Nigeria" },
		{"state": "Benue", "countryId": "Nigeria" },
		{"state": "Borno", "countryId": "Nigeria" },
		{"state": "Cross River", "countryId": "Nigeria" },
		{"state": "Delta", "countryId": "Nigeria" },
		{"state": "Ebonyi", "countryId": "Nigeria" },
		{"state": "Enugu", "countryId": "Nigeria" },
		{"state": "Edo", "countryId": "Nigeria" },
		{"state": "Ekiti", "countryId": "Nigeria" },
		{"state": "Gombe", "countryId": "Nigeria" },
		{"state": "Imo", "countryId": "Nigeria" },
		{"state": "Jigawa", "countryId": "Nigeria" },
		{"state": "Kaduna", "countryId": "Nigeria" },
		{"state": "Kano", "countryId": "Nigeria" },
		{"state": "Katsina", "countryId": "Nigeria" },
		{"state": "Kebbi", "countryId": "Nigeria" },
		{"state": "Kogi", "countryId": "Nigeria" },
		{"state": "Kwara", "countryId": "Nigeria" },
		{"state": "Lagos", "countryId": "Nigeria" },
		{"state": "Nasarawa", "countryId": "Nigeria" },
		{"state": "Niger", "countryId": "Nigeria" },
		{"state": "Ogun", "countryId": "Nigeria" },
		{"state": "Ondo", "countryId": "Nigeria" },
		{"state": "Osun", "countryId": "Nigeria" },
		{"state": "Oyo", "countryId": "Nigeria" },
		{"state": "Plateau", "countryId": "Nigeria" },
		{"state": "Southland", "countryId": "Nigeria" },
		{"state": "Rivers", "countryId": "Nigeria" },
		{"state": "Sokoto", "countryId": "Nigeria" },
		{"state": "Taraba", "countryId": "Nigeria" },
		{"state": "Yobe", "countryId": "Nigeria" },
		{"state": "Zamfara", "countryId": "Nigeria" },
		
		{"state": "Northern Islands", "countryId": "Northern Mariana Islands" },
		{"state": "Rota", "countryId": "Northern Mariana Islands" },
		{"state": "Saipan", "countryId": "Northern Mariana Islands" },
		{"state": "Tinian", "countryId": "Northern Mariana Islands" },
		
		
		{"state": "Yaren", "countryId": "Nauru" },
		
		
		{"state": "ABC islands", "countryId": "Netherlands Antilles" },
		{"state": "BES islands", "countryId": "Netherlands Antilles" },
		{"state": "SSS islands", "countryId": "Netherlands Antilles" },
		{"state": "ACS islands", "countryId": "Netherlands Antilles" },
		
		{"state": "Atlantico Norte", "countryId": "Nicaragua" },
		{"state": "Atlantico Sur", "countryId": "Nicaragua" },
		{"state": "Boaco", "countryId": "Nicaragua" },
		{"state": "Carazo", "countryId": "Nicaragua" },
		{"state": "Chinandega", "countryId": "Nicaragua" },
		{"state": "Chontales", "countryId": "Nicaragua" },
		{"state": "Esteli", "countryId": "Nicaragua" },
		{"state": "Granada", "countryId": "Nicaragua" },
		{"state": "Jinotega", "countryId": "Nicaragua" },
		{"state": "Leon", "countryId": "Nicaragua" },
		{"state": "Madriz", "countryId": "Nicaragua" },
		{"state": "Managua", "countryId": "Nicaragua" },
		{"state": "Masaya", "countryId": "Nicaragua" },
		{"state": "Matagalpa", "countryId": "Nicaragua" },
		{"state": "Nueva Segovia", "countryId": "Nicaragua" },
		{"state": "Rio San Juan", "countryId": "Nicaragua" },
		{"state": "Rivas", "countryId": "Nicaragua" },
		
		{"state": "Niue", "countryId": "Niue" },
		
		{"state": "Province No. 1", "countryId": "Nepal" },
		{"state": "Province No. 2", "countryId": "Nepal" },
		{"state": "Province No. 3", "countryId": "Nepal" },
		{"state": "Gandaki Pradesh", "countryId": "Nepal" },
		{"state": "Province No. 5", "countryId": "Nepal" },
		{"state": "Karnali Pradesh", "countryId": "Nepal" },
		{"state": "Sudurpashchim Pradesh", "countryId": "Nepal" },
  
		
		{"state": "Niue", "countryId": "Nepal" },
		
		{"state": "Iles", "countryId": "New Caledonia" },
		{"state": "Nord", "countryId": "New Caledonia" },
		{"state": "Sud", "countryId": "New Caledonia" },
		
		{"state": "Agadez", "countryId": "Niger" },
		{"state": "Diffa", "countryId": "Niger" },
		{"state": "Dosso", "countryId": "Niger" },
		{"state": "Maradi", "countryId": "Niger" },
		{"state": "Niamey", "countryId": "Niger" },
		{"state": "Tahoua", "countryId": "Niger" },
		{"state": "Tillabery", "countryId": "Niger" },
		{"state": "Zinder", "countryId": "Niger" },
		
		{"state": "Norfolk Island", "countryId": "Norfolk Island" },
		
		
		
		{"state": "Amsterdam", "countryId": "Netherlands" },   
		{"state": "Benelux", "countryId": "Netherlands" },   
		{"state": "Drenthe", "countryId": "Netherlands" },   
		{"state": "Flevoland", "countryId": "Netherlands" },   
		{"state": "Friesland", "countryId": "Netherlands" },   
		{"state": "Gelderland", "countryId": "Netherlands" },   
		{"state": "Groningen", "countryId": "Netherlands" },   
		{"state": "Limburg", "countryId": "Netherlands" },   
		{"state": "Noord-Brabant", "countryId": "Netherlands" },   
		{"state": "Noord-Holland", "countryId": "Netherlands" },   
		{"state": "Overijssel", "countryId": "Netherlands" },   
		{"state": "South Holland", "countryId": "Netherlands" },   
		{"state": "Utrecht", "countryId": "Netherlands" },   
		{"state": "Zeeland", "countryId": "Netherlands" },   
		{"state": "Zuid-Holland", "countryId": "Netherlands" }, 
		
		{"state": "Baluchistan", "countryId": "Pakistan" }, 
		{"state": "Federal Capital Area", "countryId": "Pakistan" }, 
		{"state": "Federally administered Tribal ", "countryId": "Pakistan" }, 
		{"state": "North-West Frontier", "countryId": "Pakistan" }, 
		{"state": "Northern Areas", "countryId": "Pakistan" }, 
		{"state": "Punjab", "countryId": "Pakistan" }, 
		{"state": "Sind", "countryId": "Pakistan" }, 
	   
		{"state": "Bocas del Toro", "countryId": "Panama" }, 
		{"state": "Chiriqui", "countryId": "Panama" }, 
		{"state": "Cocle", "countryId": "Panama" }, 
		{"state": "Colon", "countryId": "Panama" }, 
		{"state": "Darien", "countryId": "Panama" }, 
		{"state": "Embera", "countryId": "Panama" }, 
		{"state": "Herrera", "countryId": "Panama" }, 
		{"state": "Kuna Yala", "countryId": "Panama" }, 
		{"state": "Los Santos", "countryId": "Panama" }, 
		{"state": "Ngobe Bugle", "countryId": "Panama" }, 
		{"state": "Panama", "countryId": "Panama" }, 
		{"state": "Veraguas", "countryId": "Panama" }, 
  
		{"state": "Amazonas", "countryId": "Peru" }, 
		{"state": "Ancash", "countryId": "Peru" }, 
		{"state": "Apurimac", "countryId": "Peru" }, 
		{"state": "Arequipa", "countryId": "Peru" }, 
		{"state": "Ayacucho", "countryId": "Peru" }, 
		{"state": "Cajamarca", "countryId": "Peru" }, 
		{"state": "Cusco", "countryId": "Peru" }, 
		{"state": "Huancavelica", "countryId": "Peru" }, 
		{"state": "Huanuco", "countryId": "Peru" }, 
		{"state": "Ica", "countryId": "Peru" }, 
		{"state": "Junin", "countryId": "Peru" }, 
		{"state": "La Libertad", "countryId": "Peru" }, 
		{"state": "Lambayeque", "countryId": "Peru" }, 
		{"state": "Lima y Callao", "countryId": "Peru" }, 
		{"state": "Loreto", "countryId": "Peru" }, 
		{"state": "Madre de Dios", "countryId": "Peru" }, 
		{"state": "Moquegua", "countryId": "Peru" }, 
		{"state": "Pasco", "countryId": "Peru" }, 
		{"state": "Piura", "countryId": "Peru" }, 
		{"state": "Puno", "countryId": "Peru" }, 
		{"state": "San Martin", "countryId": "Peru" }, 
		{"state": "Tacna", "countryId": "Peru" }, 
		{"state": "Tumbes", "countryId": "Peru" }, 
		{"state": "Ucayali", "countryId": "Peru" }, 
  
		
		{"state": "Aimeliik", "countryId": "Palau" }, 
		{"state": "Airai", "countryId": "Palau" }, 
		{"state": "Angaur", "countryId": "Palau" }, 
		{"state": "Hatobohei", "countryId": "Palau" }, 
		{"state": "Kayangel", "countryId": "Palau" }, 
		{"state": "Koror", "countryId": "Palau" }, 
		{"state": "Melekeok", "countryId": "Palau" }, 
		{"state": "Ngaraard", "countryId": "Palau" }, 
		{"state": "Ngardmau", "countryId": "Palau" }, 
		{"state": "Ngaremlengui", "countryId": "Palau" }, 
		{"state": "Ngatpang", "countryId": "Palau" }, 
		{"state": "Ngchesar", "countryId": "Palau" }, 
		{"state": "Ngerchelong", "countryId": "Palau" }, 
		{"state": "Ngiwal", "countryId": "Palau" }, 
		{"state": "Peleliu", "countryId": "Palau" }, 
		{"state": "Sonsorol", "countryId": "Palau" }, 
		
		{"state": "East New Britain", "countryId": "Papua New Guinea" }, 
		{"state": "East Sepik", "countryId": "Papua New Guinea" }, 
		{"state": "Eastern Highlands", "countryId": "Papua New Guinea" }, 
		{"state": "Enga", "countryId": "Papua New Guinea" }, 
		{"state": "Fly River", "countryId": "Papua New Guinea" }, 
		{"state": "Gulf", "countryId": "Papua New Guinea" }, 
		{"state": "Madang", "countryId": "Papua New Guinea" }, 
		{"state": "Manus", "countryId": "Papua New Guinea" }, 
		{"state": "Milne Bay", "countryId": "Papua New Guinea" }, 
		{"state": "Morobe", "countryId": "Papua New Guinea" }, 
		{"state": "National Capital District", "countryId": "Papua New Guinea" }, 
		{"state": "New Ireland", "countryId": "Papua New Guinea" }, 
		{"state": "North Solomons", "countryId": "Papua New Guinea" }, 
		{"state": "Oro", "countryId": "Papua New Guinea" }, 
		{"state": "Sandaun", "countryId": "Papua New Guinea" }, 
		{"state": "Simbu", "countryId": "Papua New Guinea" }, 
		{"state": "Southern Highlands", "countryId": "Papua New Guinea" }, 
		{"state": "West New Britain", "countryId": "Papua New Guinea" }, 
		{"state": "Western Highlands", "countryId": "Papua New Guinea" }, 
	   
		{"state": "Abra", "countryId": "Philippines" }, 
		{"state": "Agusandel Norte", "countryId": "Philippines" }, 
		{"state": "Agusandel Sur", "countryId": "Philippines" }, 
		{"state": "Aklan", "countryId": "Philippines" }, 
		{"state": "Albay", "countryId": "Philippines" }, 
		{"state": "Antique", "countryId": "Philippines" }, 
		{"state": "Apayao", "countryId": "Philippines" }, 
		{"state": "Aurora", "countryId": "Philippines" }, 
		{"state": "Basilan", "countryId": "Philippines" }, 
		{"state": "Bataan", "countryId": "Philippines" }, 
		{"state": "Batanes", "countryId": "Philippines" }, 
		{"state": "Batangas", "countryId": "Philippines" }, 
		{"state": "Benguet[", "countryId": "Philippines" }, 
		{"state": "Biliran", "countryId": "Philippines" }, 
		{"state": "Bohol", "countryId": "Philippines" }, 
		{"state": "Bukidnon", "countryId": "Philippines" }, 
		{"state": "Bulacan", "countryId": "Philippines" }, 
		{"state": "Cagayan", "countryId": "Philippines" }, 
		{"state": "CamarinesNorte", "countryId": "Philippines" }, 
		{"state": "CamarinesSur", "countryId": "Philippines" }, 
		{"state": "Camiguin", "countryId": "Philippines" }, 
		{"state": "Capiz", "countryId": "Philippines" }, 
		{"state": "Catanduanes", "countryId": "Philippines" }, 
		{"state": "Cavite", "countryId": "Philippines" }, 
		{"state": "Cebu", "countryId": "Philippines" }, 
		{"state": "Compostela Valley", "countryId": "Philippines" }, 
		{"state": "Cotabato", "countryId": "Philippines" }, 
		{"state": "Davaodel Norte", "countryId": "Philippines" }, 
		{"state": "Davaodel Sur", "countryId": "Philippines" }, 
		{"state": "DavaoOccidental", "countryId": "Philippines" }, 
		{"state": "DavaoOriental", "countryId": "Philippines" }, 
		{"state": "Dinagat Islands", "countryId": "Philippines" }, 
		{"state": "Eastern Samar", "countryId": "Philippines" }, 
		{"state": "Guimaras", "countryId": "Philippines" }, 
		{"state": "Ifugao", "countryId": "Philippines" }, 
		{"state": "IlocosNorte", "countryId": "Philippines" }, 
		{"state": "IlocosSur", "countryId": "Philippines" }, 
		{"state": "Iloilo", "countryId": "Philippines" }, 
		{"state": "Isabela", "countryId": "Philippines" }, 
		{"state": "Kalinga", "countryId": "Philippines" }, 
		{"state": "La Union", "countryId": "Philippines" }, 
		{"state": "Laguna", "countryId": "Philippines" }, 
		{"state": "Lanaodel Norte", "countryId": "Philippines" }, 
		{"state": "Lanaodel Sur", "countryId": "Philippines" }, 
		{"state": "Leyte", "countryId": "Philippines" }, 
		{"state": "Maguindanao", "countryId": "Philippines" }, 
		{"state": "Marinduque", "countryId": "Philippines" }, 
		{"state": "Masbate", "countryId": "Philippines" }, 
		{"state": "MisamisOccidental", "countryId": "Philippines" }, 
		{"state": "MisamisOriental", "countryId": "Philippines" }, 
		{"state": "MountainProvince", "countryId": "Philippines" }, 
		{"state": "NegrosOccidental", "countryId": "Philippines" }, 
		{"state": "NegrosOriental", "countryId": "Philippines" }, 
		{"state": "Northern Samar", "countryId": "Philippines" }, 
		{"state": "Nueva Ecija", "countryId": "Philippines" }, 
		{"state": "Nueva Vizcaya", "countryId": "Philippines" }, 
		{"state": "OccidentalMindoro", "countryId": "Philippines" }, 
		{"state": "OrientalMindoro", "countryId": "Philippines" }, 
		{"state": "Palawan", "countryId": "Philippines" }, 
		{"state": "Pampanga", "countryId": "Philippines" }, 
		{"state": "Pangasinan", "countryId": "Philippines" }, 
		{"state": "Quezon", "countryId": "Philippines" }, 
		{"state": "Quirino", "countryId": "Philippines" }, 
		{"state": "Rizal", "countryId": "Philippines" }, 
		{"state": "Romblon", "countryId": "Philippines" }, 
		{"state": "Samar", "countryId": "Philippines" }, 
		{"state": "Sarangani", "countryId": "Philippines" }, 
		{"state": "Siquijor", "countryId": "Philippines" }, 
		{"state": "Sorsogon", "countryId": "Philippines" }, 
		{"state": "South Cotabato", "countryId": "Philippines" }, 
		{"state": "Southern Leyte", "countryId": "Philippines" }, 
		{"state": "Sultan Kudarat", "countryId": "Philippines" }, 
		{"state": "Sulu", "countryId": "Philippines" }, 
		{"state": "Surigaodel Norte", "countryId": "Philippines" }, 
		{"state": "Surigaodel Sur", "countryId": "Philippines" }, 
		{"state": "Tarlac", "countryId": "Philippines" }, 
		{"state": "Tawi-Tawi", "countryId": "Philippines" }, 
		{"state": "Zambales", "countryId": "Philippines" }, 
		{"state": "Zamboangadel Norte", "countryId": "Philippines" }, 
		{"state": "Zamboangadel Sur", "countryId": "Philippines" }, 
		{"state": "ZamboangaSibugay", "countryId": "Philippines" }, 
		
	 
		{"state": "Biale Blota", "countryId": "Poland" },   
		{"state": "Dobroszyce", "countryId": "Poland" },   
		{"state": "Dolnoslaskie", "countryId": "Poland" },   
		{"state": "Dziekanow Lesny", "countryId": "Poland" },   
		{"state": "Hopowo", "countryId": "Poland" },   
		{"state": "Kartuzy", "countryId": "Poland" },   
		{"state": "Koscian", "countryId": "Poland" },   
		{"state": "Krakow", "countryId": "Poland" },   
		{"state": "Kujawsko-Pomorskie", "countryId": "Poland" },   
		{"state": "Lodzkie", "countryId": "Poland" },   
		{"state": "Lubelskie", "countryId": "Poland" },   
		{"state": "Lubuskie", "countryId": "Poland" },   
		{"state": "Malomice", "countryId": "Poland" },   
		{"state": "Malopolskie", "countryId": "Poland" },   
		{"state": "Mazowieckie", "countryId": "Poland" },   
		{"state": "Mirkow", "countryId": "Poland" },   
		{"state": "Opolskie", "countryId": "Poland" },   
		{"state": "Ostrowiec", "countryId": "Poland" },   
		{"state": "Podkarpackie", "countryId": "Poland" },   
		{"state": "Podlaskie", "countryId": "Poland" },   
		{"state": "Polska", "countryId": "Poland" },   
		{"state": "Pomorskie", "countryId": "Poland" },   
		{"state": "Poznan", "countryId": "Poland" },   
		{"state": "Pruszkow", "countryId": "Poland" },   
		{"state": "Rymanowska", "countryId": "Poland" },   
		{"state": "Rzeszow", "countryId": "Poland" },   
		{"state": "Slaskie", "countryId": "Poland" },   
		{"state": "Stare Pole", "countryId": "Poland" },   
		{"state": "Swietokrzyskie", "countryId": "Poland" },   
		{"state": "Warminsko-Mazurskie", "countryId": "Poland" },   
		{"state": "Warsaw", "countryId": "Poland" },   
		{"state": "Wejherowo", "countryId": "Poland" },   
		{"state": "Wielkopolskie", "countryId": "Poland" },   
		{"state": "Wroclaw", "countryId": "Poland" },   
		{"state": "Zachodnio-Pomorskie", "countryId": "Poland" },   
		{"state": "Zukowo", "countryId": "Poland" }, 
		
		{"state": "Jenin Governorate", "countryId": "Palestine" }, 
		{"state": "Tubas Governorate", "countryId": "Palestine" }, 
		{"state": "Tulkarm Governorate", "countryId": "Palestine" }, 
		{"state": "Nablus Governorate", "countryId": "Palestine" }, 
		{"state": "Qalqilya Governorate", "countryId": "Palestine" }, 
		{"state": "Salfit Governorate", "countryId": "Palestine" }, 
		{"state": "Ramallah and Al-Bireh Governorate", "countryId": "Palestine" }, 
		{"state": "Jericho Governorate", "countryId": "Palestine" }, 
		{"state": "Jerusalem Governorate", "countryId": "Palestine" }, 
		{"state": "Bethlehem Governorate", "countryId": "Palestine" }, 
		{"state": "Hebron Governorate", "countryId": "Palestine" }, 
		{"state": "North Gaza Governorate", "countryId": "Palestine" }, 
		{"state": "Gaza Governorate", "countryId": "Palestine" }, 
		{"state": "Deir al-Balah Governorate", "countryId": "Palestine" }, 
		{"state": "Khan Yunis Governorate	", "countryId": "Palestine" }, 
		{"state": "Rafah Governorate", "countryId": "Palestine" }, 
  
		{"state": "Concepción", "countryId": "Paraguay" }, 
		{"state": "San Pedro", "countryId": "Paraguay" }, 
		{"state": "Cordillera", "countryId": "Paraguay" }, 
		{"state": "Guairá", "countryId": "Paraguay" }, 
		{"state": " Caaguazú", "countryId": "Paraguay" }, 
		{"state": " Caazapá", "countryId": "Paraguay" }, 
		{"state": "Itapúa", "countryId": "Paraguay" }, 
		{"state": "Misiones", "countryId": "Paraguay" }, 
		{"state": "Paraguarí", "countryId": "Paraguay" }, 
		{"state": "Alto Paraná", "countryId": "Paraguay" }, 
		{"state": "Central", "countryId": "Paraguay" }, 
		{"state": "Ñeembucú", "countryId": "Paraguay" }, 
		{"state": "Amambay", "countryId": "Paraguay" }, 
		{"state": "Canindeyú", "countryId": "Paraguay" }, 
		{"state": "Presidente Hayes", "countryId": "Paraguay" }, 
		{"state": " Alto Paraguay", "countryId": "Paraguay" }, 
		{"state": "Boquerón", "countryId": "Paraguay" }, 
		
		
		{"state": "Pitcairn Island", "countryId": "Pitcairn" }, 
		
		
		{"state": "Abrantes", "countryId": "Portugal" },   
		{"state": "Acores", "countryId": "Portugal" },   
		{"state": "Alentejo", "countryId": "Portugal" },   
		{"state": "Algarve", "countryId": "Portugal" },   
		{"state": "Braga", "countryId": "Portugal" },   
		{"state": "Centro", "countryId": "Portugal" },   
		{"state": "Distrito de Leiria", "countryId": "Portugal" },   
		{"state": "Distrito de Viana do Castelo", "countryId": "Portugal" },   
		{"state": "Distrito de Vila Real", "countryId": "Portugal" },   
		{"state": "Distrito do Porto", "countryId": "Portugal" },   
		{"state": "Lisboa e Vale do Tejo", "countryId": "Portugal" },   
		{"state": "Madeira", "countryId": "Portugal" },   
		{"state": "Norte", "countryId": "Portugal" },   
		{"state": "Paivas", "countryId": "Portugal" },
		
		{"state": "Doha", "countryId": "Qatar" },
		{"state": "Jarian-al-Batnah", "countryId": "Qatar" },
		{"state": "Umm Salal", "countryId": "Qatar" },
		{"state": "ad-Dawhah", "countryId": "Qatar" },
		{"state": "al-Ghuwayriyah", "countryId": "Qatar" },
		{"state": "al-Jumayliyah", "countryId": "Qatar" },
		{"state": "al-Khawr", "countryId": "Qatar" },
		{"state": "al-Wakrah", "countryId": "Qatar" },
		{"state": "ar-Rayyan", "countryId": "Qatar" },
		{"state": "ash-Shamal", "countryId": "Qatar" },
  
		{"state": "Paivas", "countryId": "Republic of Korea" },
		
		
		
		{"state": "Adygeja", "countryId": "Russian Federation" },
		{"state": "Aga", "countryId": "Russian Federation" },
		{"state": "Alanija", "countryId": "Russian Federation" },
		{"state": "Altaj", "countryId": "Russian Federation" },
		{"state": "Amur", "countryId": "Russian Federation" },
		{"state": "Arhangelsk", "countryId": "Russian Federation" },
		{"state": "Astrahan", "countryId": "Russian Federation" },
		{"state": "Bashkortostan", "countryId": "Russian Federation" },
		{"state": "Belgorod", "countryId": "Russian Federation" },
		{"state": "Brjansk", "countryId": "Russian Federation" },
		{"state": "Burjatija", "countryId": "Russian Federation" },
		{"state": "Chechenija", "countryId": "Russian Federation" },
		{"state": "Cheljabinsk", "countryId": "Russian Federation" },
		{"state": "Chita", "countryId": "Russian Federation" },
		{"state": "Chukotka", "countryId": "Russian Federation" },
		{"state": "Chuvashija", "countryId": "Russian Federation" },
		{"state": "Dagestan", "countryId": "Russian Federation" },
		{"state": "Evenkija", "countryId": "Russian Federation" },
		{"state": "Gorno-Altaj", "countryId": "Russian Federation" },
		{"state": "Habarovsk", "countryId": "Russian Federation" },
		{"state": "Hakasija", "countryId": "Russian Federation" },
		{"state": "Hanty-Mansija", "countryId": "Russian Federation" },
		{"state": "Ingusetija", "countryId": "Russian Federation" },
		{"state": "Irkutsk", "countryId": "Russian Federation" },
		{"state": "Ivanovo", "countryId": "Russian Federation" },
		{"state": "Jamalo-Nenets", "countryId": "Russian Federation" },
		{"state": "Jaroslavl", "countryId": "Russian Federation" },
		{"state": "Jevrej", "countryId": "Russian Federation" },
		{"state": "Kabardino-Balkarija", "countryId": "Russian Federation" },
		{"state": "Kaliningrad", "countryId": "Russian Federation" },
		{"state": "Kalmykija", "countryId": "Russian Federation" },
		{"state": "Kaluga", "countryId": "Russian Federation" },
		{"state": "Kamchatka", "countryId": "Russian Federation" },
		{"state": "Karachaj-Cherkessija", "countryId": "Russian Federation" },
		{"state": "Karelija", "countryId": "Russian Federation" },
		{"state": "Kemerovo", "countryId": "Russian Federation" },
		{"state": "Khabarovskiy Kray", "countryId": "Russian Federation" },
		{"state": "Kirov", "countryId": "Russian Federation" },
		{"state": "Komi", "countryId": "Russian Federation" },
		{"state": "Komi-Permjakija", "countryId": "Russian Federation" },
		{"state": "Korjakija", "countryId": "Russian Federation" },
		{"state": "Kostroma", "countryId": "Russian Federation" },
		{"state": "Krasnodar", "countryId": "Russian Federation" },
		{"state": "Krasnojarsk", "countryId": "Russian Federation" },
		{"state": "Krasnoyarskiy Kray", "countryId": "Russian Federation" },
		{"state": "Kurgan", "countryId": "Russian Federation" },
		{"state": "Kursk", "countryId": "Russian Federation" },
		{"state": "Leningrad", "countryId": "Russian Federation" },
		{"state": "Lipeck", "countryId": "Russian Federation" },
		{"state": "Magadan", "countryId": "Russian Federation" },
		{"state": "Marij El", "countryId": "Russian Federation" },
		{"state": "Mordovija", "countryId": "Russian Federation" },
		{"state": "Moscow", "countryId": "Russian Federation" },
		{"state": "Moskovskaja Oblast", "countryId": "Russian Federation" },
		{"state": "Moskovskaya Oblast", "countryId": "Russian Federation" },
		{"state": "Moskva", "countryId": "Russian Federation" },
		{"state": "Murmansk", "countryId": "Russian Federation" },
		{"state": "Nenets", "countryId": "Russian Federation" },
		{"state": "Nizhnij Novgorod", "countryId": "Russian Federation" },
		{"state": "Novgorod", "countryId": "Russian Federation" },
		{"state": "Novokusnezk", "countryId": "Russian Federation" },
		{"state": "Novosibirsk", "countryId": "Russian Federation" },
		{"state": "Omsk", "countryId": "Russian Federation" },
		{"state": "Orenburg", "countryId": "Russian Federation" },
		{"state": "Orjol", "countryId": "Russian Federation" },
		{"state": "Penza", "countryId": "Russian Federation" },
		{"state": "Perm", "countryId": "Russian Federation" },
		{"state": "Primorje", "countryId": "Russian Federation" },
		{"state": "Pskov", "countryId": "Russian Federation" },
		{"state": "Pskovskaya Oblast", "countryId": "Russian Federation" },
		{"state": "Rjazan", "countryId": "Russian Federation" },
		{"state": "Rostov", "countryId": "Russian Federation" },
		{"state": "Saha", "countryId": "Russian Federation" },
		{"state": "Sahalin", "countryId": "Russian Federation" },
		{"state": "Samara", "countryId": "Russian Federation" },
		{"state": "Samarskaya", "countryId": "Russian Federation" },
		{"state": "Sankt-Peterburg", "countryId": "Russian Federation" },
		{"state": "Saratov", "countryId": "Russian Federation" },
		{"state": "Smolensk", "countryId": "Russian Federation" },
		{"state": "Stavropol", "countryId": "Russian Federation" },
		{"state": "Sverdlovsk", "countryId": "Russian Federation" },
		{"state": "Tajmyrija", "countryId": "Russian Federation" },
		{"state": "Tambov", "countryId": "Russian Federation" },
		{"state": "Tatarstan", "countryId": "Russian Federation" },
		{"state": "Tjumen", "countryId": "Russian Federation" },
		{"state": "Tomsk", "countryId": "Russian Federation" },
		{"state": "Tula", "countryId": "Russian Federation" },
		{"state": "Tver", "countryId": "Russian Federation" },
		{"state": "Tyva", "countryId": "Russian Federation" },
		{"state": "Udmurtija", "countryId": "Russian Federation" },
		{"state": "Uljanovsk", "countryId": "Russian Federation" },
		{"state": "Ulyanovskaya Oblast", "countryId": "Russian Federation" },
		{"state": "Ust-Orda", "countryId": "Russian Federation" },
		{"state": "Vladimir", "countryId": "Russian Federation" },
		{"state": "Volgograd", "countryId": "Russian Federation" },
		{"state": "Vologda", "countryId": "Russian Federation" },
		{"state": "Voronezh", "countryId": "Russian Federation" },
		
	   
		{"state": "Saint-Benoit", "countryId": " Réunion" },
		{"state": "Saint-Denis", "countryId": " Réunion" },
		{"state": "Saint-Paul", "countryId": " Réunion" },
		{"state": "Saint-Pierre", "countryId": " Réunion" },
		
		{"state": "Arad", "countryId": "Romania" },   
		{"state": "Arges", "countryId": "Romania" },   
		{"state": "Bacau", "countryId": "Romania" },   
		{"state": "Bihor", "countryId": "Romania" },   
		{"state": "Bistrita-Nasaud", "countryId": "Romania" },   
		{"state": "Botosani", "countryId": "Romania" },   
		{"state": "Braila", "countryId": "Romania" },   
		{"state": "Brasov", "countryId": "Romania" },   
		{"state": "Bucuresti", "countryId": "Romania" },   
		{"state": "Buzau", "countryId": "Romania" },   
		{"state": "Calarasi", "countryId": "Romania" },   
		{"state": "Caras-Severin", "countryId": "Romania" },   
		{"state": "Caras-Severin", "countryId": "Romania" },   
		{"state": "Caras-Severin", "countryId": "Romania" },   
		{"state": "Covasna", "countryId": "Romania" },   
		{"state": "Dambovita", "countryId": "Romania" },   
		{"state": "Dolj", "countryId": "Romania" },   
		{"state": "Galati", "countryId": "Romania" },   
		{"state": "Giurgiu", "countryId": "Romania" },   
		{"state": "Gorj", "countryId": "Romania" },   
		{"state": "Harghita", "countryId": "Romania" },   
		{"state": "Hunedoara", "countryId": "Romania" },   
		{"state": "Ialomita", "countryId": "Romania" },   
		{"state": "Iasi", "countryId": "Romania" },   
		{"state": "Ilfov", "countryId": "Romania" },   
		{"state": "Maramures", "countryId": "Romania" },   
		{"state": "Mehedinti", "countryId": "Romania" },   
		{"state": "Mures", "countryId": "Romania" },   
		{"state": "Neamt", "countryId": "Romania" },   
		{"state": "Olt", "countryId": "Romania" },   
		{"state": "Prahova", "countryId": "Romania" },   
		{"state": "Satu Mare", "countryId": "Romania" },   
		{"state": "Sibiu", "countryId": "Romania" },   
		{"state": "Sondelor", "countryId": "Romania" },   
		{"state": "Suceava", "countryId": "Romania" },   
		{"state": "Teleorman", "countryId": "Romania" },   
		{"state": "Timis", "countryId": "Romania" },   
		{"state": "Tulcea", "countryId": "Romania" },   
		{"state": "Valcea", "countryId": "Romania" },   
		{"state": "Vaslui", "countryId": "Romania" },   
		{"state": "Vrancea", "countryId": "Romania" },   
		{"state": "Salaj", "countryId": "Romania" }, 
		
		
		{"state": "Butare", "countryId": "Rwanda" }, 
		{"state": "Byumba", "countryId": "Rwanda" }, 
		{"state": "Cyangugu", "countryId": "Rwanda" }, 
		{"state": "Gikongoro", "countryId": "Rwanda" }, 
		{"state": "Gisenyi", "countryId": "Rwanda" }, 
		{"state": "Gitarama", "countryId": "Rwanda" }, 
		{"state": "Kibungo", "countryId": "Rwanda" }, 
		{"state": "Kibuye", "countryId": "Rwanda" }, 
		{"state": "Kigali-ngali", "countryId": "Rwanda" }, 
		{"state": "Ruhengeri", "countryId": "Rwanda" }, 
		
		{"state": "Sous le Vent", "countryId": "Saint Barthélemy" }, 
		{"state": "Au Vent", "countryId": "Saint Barthélemy" }, 
		
		{"state": "Anse-la-Raye", "countryId": "Saint Lucia" }, 
		{"state": "Canaries", "countryId": "Saint Lucia" }, 
		{"state": "Castries", "countryId": "Saint Lucia" }, 
		{"state": "Choiseul", "countryId": "Saint Lucia" }, 
		{"state": "Dennery", "countryId": "Saint Lucia" }, 
		{"state": "Gros Inlet", "countryId": "Saint Lucia" }, 
		{"state": "Laborie", "countryId": "Saint Lucia" }, 
		{"state": "Micoud", "countryId": "Saint Lucia" }, 
		{"state": "Soufriere", "countryId": "Saint Lucia" }, 
		{"state": "Vieux Fort", "countryId": "Saint Lucia" }, 
		
		{"state": "Vieux Fort", "countryId": "Saint Vincent and the Grenadines" }, 
		{"state": "Vieux Fort", "countryId": "Charlotte" }, 
		{"state": "Vieux Fort", "countryId": "Grenadines" }, 
		{"state": "Vieux Fort", "countryId": "Saint Andrew" }, 
		{"state": "Vieux Fort", "countryId": "Saint David" },
		{"state": "Vieux Fort", "countryId": " Saint George" }, 
		{"state": "Vieux Fort", "countryId": "Saint Patrick" }, 
		
		{"state": "Agua Grande", "countryId": "São Tomé and Príncipe" }, 
		{"state": "Cantagalo", "countryId": "São Tomé and Príncipe" }, 
		{"state": "Lemba", "countryId": "São Tomé and Príncipe" }, 
		{"state": "Lobata", "countryId": "São Tomé and Príncipe" }, 
		{"state": "Me-Zochi", "countryId": "São Tomé and Príncipe" }, 
		{"state": "Pague", "countryId": "São Tomé and Príncipe" }, 
		
		{"state": "Central Serbia", "countryId": "Serbia" }, 
		{"state": "Kosovo and Metohija", "countryId": "Serbia" }, 
		{"state": "Vojvodina", "countryId": "Serbia" }, 
  
		{"state": "Singapore", "countryId": "Singapore" }, 
		
		{"state": "Central", "countryId": "Solomon Islands" },
		{"state": "Choiseul", "countryId": "Solomon Islands" },
		{"state": "Guadalcanal", "countryId": "Solomon Islands" },
		{"state": "Isabel", "countryId": "Solomon Islands" },
		{"state": "Makira and Ulawa", "countryId": "Solomon Islands" },
		{"state": "Malaita", "countryId": "Solomon Islands" },
		{"state": "Rennell and Bellona", "countryId": "Solomon Islands" },
		{"state": "Temotu", "countryId": "Solomon Islands" },
		{"state": "Western", "countryId": "Solomon Islands" },
		
		
		{"state": "Traversay Islands", "countryId": "Sth Georgia and the Sth Sandwich Islands" },
		{"state": "Candlemas Islands ", "countryId": "Sth Georgia and the Sth Sandwich Islands" },
		{"state": "Central islands", "countryId": "Sth Georgia and the Sth Sandwich Islands" },
		{"state": "Southern Thule", "countryId": "Sth Georgia and the Sth Sandwich Islands" },
		
		{"state": "Khartoum State", "countryId": "Sudan" },
		{"state": "North Kordofan ", "countryId": "Sudan" },
		{"state": "Northern", "countryId": "Sudan" },
		{"state": "Kassala", "countryId": "Sudan" },
		{"state": "Blue Nile State ", "countryId": "Sudan" },
		{"state": "North Darfur", "countryId": "Sudan" },
		{"state": "South Darfur", "countryId": "Sudan" },
		{"state": "South Kordofan", "countryId": "Sudan" },
		{"state": "Al Jazirah", "countryId": "Sudan" },
		{"state": "White Nile", "countryId": "Sudan" },
		{"state": "River Nile", "countryId": "Sudan" },
		{"state": "Red Sea ", "countryId": "Sudan" },
		{"state": "Al Qadarif", "countryId": "Sudan" },
		{"state": "Sennar", "countryId": "Sudan" },
		{"state": "West Darfur", "countryId": "Sudan" },
		{"state": "Central Darfur", "countryId": "Sudan" },
		{"state": "East Darfur", "countryId": "Sudan" },
		{"state": "West Kordofan", "countryId": "Sudan" },
		
		{"state": "Hhohho", "countryId": "Swaziland" },
		{"state": "Lubombo", "countryId": "Swaziland" },
		{"state": "Manzini", "countryId": "Swaziland" },
		{"state": "Shiselweni", "countryId": "Swaziland" },
		
		{"state": "Aleppo", "countryId": "Syria" },
		{"state": "Dar'a", "countryId": "Syria" },
		{"state": "Dayr-az-Zawr", "countryId": "Syria" },
		{"state": "Dimashq", "countryId": "Syria" },
		{"state": "Halab", "countryId": "Syria" },
		{"state": "Hamah", "countryId": "Syria" },
		{"state": "Hims", "countryId": "Syria" },
		{"state": "Idlib", "countryId": "Syria" },
		{"state": "Madinat Dimashq", "countryId": "Syria" },
		{"state": "Tartus", "countryId": "Syria" },
		{"state": "al-Hasakah", "countryId": "Syria" },
		{"state": "al-Ladhiqiyah", "countryId": "Syria" },
		{"state": "al-Qunaytirah", "countryId": "Syria" },
		{"state": "ar-Raqqah", "countryId": "Syria" },
		{"state": "as-Suwayda", "countryId": "Syria" },
	   
		{"state": "Ascension", "countryId": "Saint Helena" },
		{"state": "Gough Island", "countryId": "Saint Helena" },
		{"state": "Saint Helena", "countryId": "Saint Helena" },
		{"state": "Tristan da Cunha", "countryId": "Saint Helena" },
	   
		{"state": "Alberto Leveau", "countryId": "Saint Martin" },
		{"state": "Cacatachi", "countryId": "Saint Martin" },
		{"state": "Chazuta", "countryId": "Saint Martin" },
		{"state": "Chipurana", "countryId": "Saint Martin" },
		{"state": "El Porvenir ", "countryId": "Saint Martin" },
		{"state": "Huimbayoc", "countryId": "Saint Martin" },
		{"state": "Juan Guerra", "countryId": "Saint Martin" },
		{"state": "La Banda de Shilcayo", "countryId": "Saint Martin" },
		{"state": "Morales ", "countryId": "Saint Martin" },
		{"state": "Papaplaya ", "countryId": "Saint Martin" },
		{"state": "San Antonio ", "countryId": "Saint Martin" },
		{"state": "Sauce", "countryId": "Saint Martin" },
		{"state": "Shapaja", "countryId": "Saint Martin" },
		{"state": "Tarapoto", "countryId": "Saint Martin" },
		
		{"state": "A'ana", "countryId": "Samoa" },
		{"state": "Aiga-i-le-Tai", "countryId": "Samoa" },
		{"state": "Atua", "countryId": "Samoa" },
		{"state": "Fa'asaleleaga", "countryId": "Samoa" },
		{"state": "Gaga'emauga", "countryId": "Samoa" },
		{"state": "Gagaifomauga", "countryId": "Samoa" },
		{"state": "Palauli", "countryId": "Samoa" },
		{"state": "Satupa'itea", "countryId": "Samoa" },
		{"state": "Tuamasaga", "countryId": "Samoa" },
		{"state": "Va'a-o-Fonoti", "countryId": "Samoa" },
		{"state": "Vaisigano", "countryId": "Samoa" },
	   
		
		{"state": "Al Khobar", "countryId": "Saudi Arabia" },
		{"state": "Aseer", "countryId": "Saudi Arabia" },
		{"state": "Ash Sharqiyah", "countryId": "Saudi Arabia" },
		{"state": "Asir", "countryId": "Saudi Arabia" },
		{"state": "Central Province", "countryId": "Saudi Arabia" },
		{"state": "Eastern Province", "countryId": "Saudi Arabia" },
		{"state": "Ha'il", "countryId": "Saudi Arabia" },
		{"state": "Jawf", "countryId": "Saudi Arabia" },
		{"state": "Jizan", "countryId": "Saudi Arabia" },
		{"state": "Makkah", "countryId": "Saudi Arabia" },
		{"state": "Najran", "countryId": "Saudi Arabia" },
		{"state": "Qasim", "countryId": "Saudi Arabia" },
		{"state": "Tabuk", "countryId": "Saudi Arabia" },
		{"state": "Western Province", "countryId": "Saudi Arabia" },
		{"state": "al-Bahah", "countryId": "Saudi Arabia" },
		{"state": "al-Hudud-ash-Shamaliyah", "countryId": "Saudi Arabia" },
		{"state": "al-Madinah", "countryId": "Saudi Arabia" },
		{"state": "ar-Riyad", "countryId": "Saudi Arabia" },
		
		{"state": "Anse Boileau", "countryId": "Seychelles" },
		{"state": "Anse Royale", "countryId": "Seychelles" },
		{"state": "Cascade", "countryId": "Seychelles" },
		{"state": "Takamaka", "countryId": "Seychelles" },
		{"state": "Victoria", "countryId": "Seychelles" },
	  
		{"state": "Awdal", "countryId": "Somalia" },
		{"state": "Bakol", "countryId": "Somalia" },
		{"state": "Banadir", "countryId": "Somalia" },
		{"state": "Bari", "countryId": "Somalia" },
		{"state": "Bay", "countryId": "Somalia" },
		{"state": "Galgudug", "countryId": "Somalia" },
		{"state": "Gedo", "countryId": "Somalia" },
		{"state": "Hiran", "countryId": "Somalia" },
		{"state": "Jubbada Hose", "countryId": "Somalia" },
		{"state": "Jubbadha Dexe", "countryId": "Somalia" },
		{"state": "Mudug", "countryId": "Somalia" },
		{"state": "Nugal", "countryId": "Somalia" },
		{"state": "Sanag", "countryId": "Somalia" },
		{"state": "Shabellaha Dhexe", "countryId": "Somalia" },
		{"state": "Shabellaha Hose", "countryId": "Somalia" },
		{"state": "Togdher", "countryId": "Somalia" },
		{"state": "Woqoyi Galbed", "countryId": "Somalia" },
		
		
		{"state": "Brokopondo", "countryId": "Suriname" },
		{"state": "Commewijne", "countryId": "Suriname" },
		{"state": "Coronie", "countryId": "Suriname" },
		{"state": "Marowijne", "countryId": "Suriname" },
		{"state": "Nickerie", "countryId": "Suriname" },
		{"state": "Para", "countryId": "Suriname" },
		{"state": "Paramaribo", "countryId": "Suriname" },
		{"state": "Saramacca", "countryId": "Suriname" },
		{"state": "Wanica", "countryId": "Suriname" },
		
		{"state": "Christ Church Nichola Town", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint Anne Sandy Point", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint George Basseterre", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint George Gingerland", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint James Windward", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint John Capesterre", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint John Figtree", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint Mary Cayon", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint Paul Capesterre", "countryId": "Saint Kitts and Nevis" },
		{"state": "Saint Paul Charlestown", "countryId": "Saint Kitts and Nevis" },
		 {"state": "Saint Peter Basseterre", "countryId": "Saint Kitts and Nevis" },
		 {"state": "Saint Thomas Lowland", "countryId": "Saint Kitts and Nevis" },
		 {"state": "Saint Thomas Middle Island", "countryId": "Saint Kitts and Nevis" },
		 {"state": "Saint Thomas Middle Island", "countryId": "Saint Kitts and Nevis" },
  
		 
		 {"state": "Miquelon-Langlade", "countryId": "Saint Pierre and MiquelonSaint Pierre and Miquelon" },
		 {"state": "Saint-Pierre", "countryId": "Saint Pierre and MiquelonSaint Pierre and Miquelon" },
		
		 {"state": "Dakar", "countryId": "Senegal" },
		 {"state": "Diourbel", "countryId": "Senegal" },
		 {"state": "Fatick", "countryId": "Senegal" },
		 {"state": "Kaolack", "countryId": "Senegal" },
		 {"state": "Kolda", "countryId": "Senegal" },
		 {"state": "Louga", "countryId": "Senegal" },
		 {"state": "Saint-Louis", "countryId": "Senegal" },
		 {"state": "Tambacounda", "countryId": "Senegal" },
		 {"state": "Thies", "countryId": "Senegal" },
		 {"state": "Ziguinchor", "countryId": "Senegal" },
  
		 {"state": "Eastern", "countryId": "Sierra Leone" },
		 {"state": "Northern", "countryId": "Sierra Leone" },
		 {"state": "Southern", "countryId": "Sierra Leone" },
		 {"state": "Western", "countryId": "Sierra Leone" },
  
		 {"state": "Eastern Cape", "countryId": "South Africa" },
		 {"state": "Free State", "countryId": "South Africa" },
		 {"state": "Gauteng", "countryId": "South Africa" },
		 {"state": "Kempton Park", "countryId": "South Africa" },
		 {"state": "Kramerville", "countryId": "South Africa" },
		 {"state": "KwaZulu Natal", "countryId": "South Africa" },
		 {"state": "Limpopo", "countryId": "South Africa" },
		 {"state": "Mpumalanga", "countryId": "South Africa" },
		 {"state": "North West", "countryId": "South Africa" },
		 {"state": "Northern Cape", "countryId": "South Africa" },
		 {"state": "Parow", "countryId": "South Africa" },
		 {"state": "Table View", "countryId": "South Africa" },
		 {"state": "Umtentweni", "countryId": "South Africa" },
		 {"state": "Western Cape", "countryId": "South Africa" },
  
		 {"state": " Central", "countryId": "Sri Lanka" },
		 {"state": " Eastern", "countryId": "Sri Lanka" },
		 {"state": " North Central", "countryId": "Sri Lanka" },
		 {"state": " Northern", "countryId": "Sri Lanka" },
		 {"state": "North Western", "countryId": "Sri Lanka" },
		 {"state": " Sabaragamuwa", "countryId": "Sri Lanka" },
		 {"state": "Southern", "countryId": "Sri Lanka" },
		 {"state": " Uva", "countryId": "Sri Lanka" },
		 {"state": "Western", "countryId": "Sri Lanka" },
		
		 {"state": "Svalbard and Jan Mayen", "countryId": "Svalbard and Jan Mayen" },
		 
		
		{"state": "Banskobystricky", "countryId": "Slovakia" },   
		{"state": "Bratislavsky", "countryId": "Slovakia" },   
		{"state": "Kosicky", "countryId": "Slovakia" },   
		{"state": "Nitriansky", "countryId": "Slovakia" },   
		{"state": "Presovsky", "countryId": "Slovakia" },   
		{"state": "Trenciansky", "countryId": "Slovakia" },   
		{"state": "Trnavsky", "countryId": "Slovakia" },   
		{"state": "Zilinsky", "countryId": "Slovakia" },
		
	 
		
		{"state": "Benedikt", "countryId": "Slovenia" }, 
		{"state": "Gorenjska", "countryId": "Slovenia" }, 
		{"state": "Gorishka", "countryId": "Slovenia" }, 
		{"state": "Jugovzhodna Slovenija", "countryId": "Slovenia" }, 
		{"state": "Koroshka", "countryId": "Slovenia" }, 
		{"state": "Notranjsko-krashka", "countryId": "Slovenia" }, 
		{"state": "Obalno-krashka", "countryId": "Slovenia" }, 
		{"state": "Obcina Domzale", "countryId": "Slovenia" }, 
		{"state": "Obcina Vitanje", "countryId": "Slovenia" }, 
		{"state": "Osrednjeslovenska", "countryId": "Slovenia" }, 
		{"state": "Podravska", "countryId": "Slovenia" }, 
		{"state": "Pomurska", "countryId": "Slovenia" }, 
		{"state": "Savinjska", "countryId": "Slovenia" }, 
		{"state": "Slovenian Littoral", "countryId": "Slovenia" }, 
		{"state": "Spodnjeposavska", "countryId": "Slovenia" }, 
		{"state": "Zasavska", "countryId": "Slovenia" }, 
		
		
		
		
		{"state": "A Coruna", "countryId": "Spain" }, 
		{"state": "Alava", "countryId": "Spain" }, 
		{"state": "Albacete", "countryId": "Spain" }, 
		{"state": "Almeria", "countryId": "Spain" }, 
		{"state": "Andalucia", "countryId": "Spain" }, 
		{"state": "Asturias", "countryId": "Spain" }, 
		{"state": "Avila", "countryId": "Spain" }, 
		{"state": "Badajoz", "countryId": "Spain" }, 
		{"state": "Balears", "countryId": "Spain" }, 
		{"state": "Barcelona", "countryId": "Spain" }, 
		{"state": "Bertamirans", "countryId": "Spain" }, 
		{"state": "Biscay", "countryId": "Spain" }, 
		{"state": "Burgos", "countryId": "Spain" }, 
		{"state": "Caceres", "countryId": "Spain" }, 
		{"state": "Cadiz", "countryId": "Spain" }, 
		{"state": "Cantabria", "countryId": "Spain" }, 
		{"state": "Castello", "countryId": "Spain" }, 
		{"state": "Catalunya", "countryId": "Spain" }, 
		{"state": "Ceuta", "countryId": "Spain" }, 
		{"state": "Ciudad Real", "countryId": "Spain" }, 
		{"state": "Comunidad Autonoma de Canarias", "countryId": "Spain" }, 
		{"state": "Comunidad Autonoma de Cataluna", "countryId": "Spain" }, 
		{"state": "Comunidad Autonoma de Galicia", "countryId": "Spain" }, 
		{"state": "Comunidad Autonoma de las Isla", "countryId": "Spain" }, 
		{"state": "Comunidad Autonoma del Princip", "countryId": "Spain" }, 
		{"state": "Comunidad Valenciana", "countryId": "Spain" }, 
		{"state": "Cordoba", "countryId": "Spain" }, 
		{"state": "Cuenca", "countryId": "Spain" }, 
		{"state": "Gipuzkoa", "countryId": "Spain" }, 
		{"state": "Girona", "countryId": "Spain" }, 
		{"state": "Granada", "countryId": "Spain" }, 
		{"state": "Guadalajara", "countryId": "Spain" }, 
		{"state": "Guipuzcoa", "countryId": "Spain" }, 
		{"state": "Guipuzcoa", "countryId": "Spain" }, 
		{"state": "Huesca", "countryId": "Spain" }, 
		{"state": "Jaen", "countryId": "Spain" }, 
		{"state": "La Rioja", "countryId": "Spain" }, 
		{"state": "Las Palmas", "countryId": "Spain" }, 
		{"state": "Leon", "countryId": "Spain" }, 
		{"state": "Lerida", "countryId": "Spain" }, 
		{"state": "Lleida", "countryId": "Spain" }, 
		{"state": "Lugo", "countryId": "Spain" }, 
		{"state": "Madrid", "countryId": "Spain" }, 
		{"state": "Malaga", "countryId": "Spain" }, 
		{"state": "Melilla", "countryId": "Spain" }, 
		{"state": "Murcia", "countryId": "Spain" }, 
		{"state": "Navarra", "countryId": "Spain" }, 
		{"state": "Ourense", "countryId": "Spain" }, 
		{"state": "Pais Vasco", "countryId": "Spain" }, 
		{"state": "Palencia", "countryId": "Spain" }, 
		{"state": "Pontevedra", "countryId": "Spain" }, 
		{"state": "Salamanca", "countryId": "Spain" }, 
		{"state": "Santa Cruz de Tenerife", "countryId": "Spain" }, 
		{"state": "Segovia", "countryId": "Spain" }, 
		{"state": "Sevilla", "countryId": "Spain" }, 
		{"state": "Soria", "countryId": "Spain" }, 
		{"state": "Tarragona", "countryId": "Spain" }, 
		{"state": "Tenerife	", "countryId": "Spain" }, 
		{"state": "Teruel", "countryId": "Spain" }, 
		{"state": "Toledo", "countryId": "Spain" }, 
		{"state": "Valencia", "countryId": "Spain" }, 
		{"state": "Valladolid", "countryId": "Spain" }, 
		{"state": "Vizcaya", "countryId": "Spain" }, 
		{"state": "Zamora", "countryId": "Spain" }, 
		{"state": "Zaragoza", "countryId": "Spain" },
		
		{"state": "Acquaviva", "countryId": "San Marino" },
		{"state": "Borgo Maggiore", "countryId": "San Marino" },
		{"state": "Chiesanuova", "countryId": "San Marino" },
		{"state": "Domagnano", "countryId": "San Marino" },
		{"state": "Faetano", "countryId": "San Marino" },
		{"state": "Fiorentino", "countryId": "San Marino" },
		{"state": "Montegiardino", "countryId": "San Marino" },
		{"state": "San Marino", "countryId": "San Marino" },
		{"state": "Serravalle", "countryId": "San Marino" },
		
		{"state": "Central Serbia", "countryId": "Serbia" },
		{"state": "Kosovo and Metohija", "countryId": "Serbia" },
		{"state": "Vojvodina", "countryId": "Serbia" },
		
		{"state": "Alvsborgs Lan", "countryId": "Sweden" },
		{"state": "Angermanland", "countryId": "Sweden" },
		{"state": "Blekinge", "countryId": "Sweden" },
		{"state": "Bohuslan", "countryId": "Sweden" },
		{"state": "Dalarna", "countryId": "Sweden" },
		{"state": "Gavleborg", "countryId": "Sweden" },
		{"state": "Gaza", "countryId": "Sweden" },
		{"state": "Gotland", "countryId": "Sweden" },
		{"state": "Halland", "countryId": "Sweden" },
		{"state": "Jamtland", "countryId": "Sweden" },
		{"state": "Jonkoping", "countryId": "Sweden" },
		{"state": "Kalmar", "countryId": "Sweden" },
		{"state": "Kristianstads", "countryId": "Sweden" },
		{"state": "Kronoberg", "countryId": "Sweden" },
		{"state": "Norrbotten", "countryId": "Sweden" },
		{"state": "Orebro", "countryId": "Sweden" },
		{"state": "Ostergotland", "countryId": "Sweden" },
		{"state": "Saltsjo-Boo", "countryId": "Sweden" },
		{"state": "Skane", "countryId": "Sweden" },
		{"state": "Smaland", "countryId": "Sweden" },
		{"state": "Sodermanland", "countryId": "Sweden" },
		{"state": "Stockholm", "countryId": "Sweden" },
		{"state": "Uppsala", "countryId": "Sweden" },
		{"state": "Varmland", "countryId": "Sweden" },
		{"state": "Vasterbotten", "countryId": "Sweden" },
		{"state": "Vastergotland", "countryId": "Sweden" },
		{"state": "Vasternorrland", "countryId": "Sweden" },
		{"state": "Vastmanland", "countryId": "Sweden" },
		{"state": "Vastra Gotaland", "countryId": "Sweden" },
	   
		{"state": "Aargau", "countryId": "Switzerland" },
		{"state": "Appenzell Inner-Rhoden", "countryId": "Switzerland" },
		{"state": "Appenzell-Ausser Rhoden", "countryId": "Switzerland" },
		{"state": "Basel-Landschaft", "countryId": "Switzerland" },
		{"state": "Basel-Stadt", "countryId": "Switzerland" },
		{"state": "Bern", "countryId": "Switzerland" },
		{"state": "Canton Ticino", "countryId": "Switzerland" },
		{"state": "Fribourg", "countryId": "Switzerland" },
		{"state": "Geneve", "countryId": "Switzerland" },
		{"state": "Glarus", "countryId": "Switzerland" },
		{"state": "Graubunden", "countryId": "Switzerland" },
		{"state": "Heerbrugg", "countryId": "Switzerland" },
		{"state": "Jura", "countryId": "Switzerland" },
		{"state": "Kanton Aargau", "countryId": "Switzerland" },
		{"state": "Luzern", "countryId": "Switzerland" },
		{"state": "Morbio Inferiore", "countryId": "Switzerland" },
		{"state": "Muhen", "countryId": "Switzerland" },
		{"state": "Neuchatel", "countryId": "Switzerland" },
		{"state": "Nidwalden", "countryId": "Switzerland" },
		{"state": "Obwalden", "countryId": "Switzerland" },
		{"state": "Sankt Gallen", "countryId": "Switzerland" },
		{"state": "Schaffhausen", "countryId": "Switzerland" },
		{"state": "Schwyz", "countryId": "Switzerland" },
		{"state": "Solothurn", "countryId": "Switzerland" },
		{"state": "Thurgau", "countryId": "Switzerland" },
		{"state": "Ticino", "countryId": "Switzerland" },
		{"state": "Uri", "countryId": "Switzerland" },
		{"state": "Valais", "countryId": "Switzerland" },
		{"state": "Vaud", "countryId": "Switzerland" },
		{"state": "Vauffelin", "countryId": "Switzerland" },
		{"state": "Zug", "countryId": "Switzerland" },	
		{"state": "Zurich", "countryId": "Switzerland" },
		
		{"state": "Dushanbe", "countryId": "Tajikistan" },
		{"state": "Gorno-Badakhshan", "countryId": "Tajikistan" },
		{"state": "Karotegin", "countryId": "Tajikistan" },
		{"state": "Khatlon", "countryId": "Tajikistan" },
		{"state": "Sughd", "countryId": "Tajikistan" },
		
  
		{"state": "Timor-Leste", "countryId": "Timor-Leste" },
		
		{"state": "Centre", "countryId": "Tonga" },
		{"state": "Kara", "countryId": "Tonga" },
		{"state": "Maritime", "countryId": "Tonga" },
		{"state": "Plateaux", "countryId": "Tonga" },
		{"state": "Savanes", "countryId": "Tonga" },
  
		{"state": "Funafuti", "countryId": "Tuvalu" },
		{"state": "Nanumanga", "countryId": "Tuvalu" },
		{"state": "Nanumea", "countryId": "Tuvalu" },
		{"state": "Niutao", "countryId": "Tuvalu" },
		{"state": "Nui", "countryId": "Tuvalu" },
		{"state": "Nukufetau", "countryId": "Tuvalu" },
		{"state": "Nukulaelae", "countryId": "Tuvalu" },
		{"state": "Vaitupu", "countryId": "Tuvalu" },
	
		
		
		{"state": "Arusha", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Dar es Salaam", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Dodoma", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Iringa", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Kagera", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Kigoma", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Kilimanjaro", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Lindi", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Mara", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Mbeya", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Morogoro", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Mtwara", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Mwanza", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Pwani", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Rukwa", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Ruvuma", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Shinyanga", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Singida", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Tabora", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Tanga", "countryId": "Tanzania(United Republic of Tanzania)" },
		{"state": "Zanzibar and Pemba", "countryId": "Tanzania(United Republic of Tanzania)" },
	   
		{"state": "Centre", "countryId": "Tanzania(United Republic of Tanzania)" },
		
		{"state": "Centre", "countryId": "Togo" },
		{"state": "Kara", "countryId": "Togo" },
		{"state": "Maritime", "countryId": "Togo" },
		{"state": "Plateaux", "countryId": "Togo" },
		{"state": "Savanes", "countryId": "Togo" },
	   
		
		{"state": "Caroni", "countryId": "Trinidad" },
		{"state": "Mayaro", "countryId": "Trinidad" },
		{"state": "Nariva", "countryId": "Trinidad" },
		{"state": "Saint Andrew", "countryId": "Trinidad" },
		{"state": "Saint David", "countryId": "Trinidad" },
		{"state": "Saint George", "countryId": "Trinidad" },
		{"state": "Saint Patrick", "countryId": "Trinidad" },
		{"state": "Victoria", "countryId": "Trinidad" },
		
		{"state": "Ahal", "countryId": "Turkmenistan" },
		{"state": "Asgabat", "countryId": "Turkmenistan" },
		{"state": "Balkan", "countryId": "Turkmenistan" },
		{"state": "Dasoguz", "countryId": "Turkmenistan" },
		{"state": "Lebap", "countryId": "Turkmenistan" },
		{"state": "Mari", "countryId": "Turkmenistan" },
	  
		
		{"state": "Amnat Charoen", "countryId": "Thailand" },
		{"state": "Ang Thong", "countryId": "Thailand" },
		{"state": "Bangkok", "countryId": "Thailand" },
		{"state": "Buri Ram", "countryId": "Thailand" },
		{"state": "Chachoengsao", "countryId": "Thailand" },
		{"state": "Chai Nat", "countryId": "Thailand" },
		{"state": "Chaiyaphum", "countryId": "Thailand" },
		{"state": "Changwat Chaiyaphum", "countryId": "Thailand" },
		{"state": "Chanthaburi", "countryId": "Thailand" },
		{"state": "Chiang Mai", "countryId": "Thailand" },
		{"state": "Chiang Rai", "countryId": "Thailand" },
		{"state": "Chon Buri", "countryId": "Thailand" },
		{"state": "Chumphon", "countryId": "Thailand" },
		{"state": "Kalasin", "countryId": "Thailand" },
		{"state": "Kamphaeng Phet", "countryId": "Thailand" },
		{"state": "Kanchanaburi", "countryId": "Thailand" },
		{"state": "Khon Kaen", "countryId": "Thailand" },
		{"state": "Krabi", "countryId": "Thailand" },
		{"state": "Krung Thep", "countryId": "Thailand" },
		{"state": "Lampang", "countryId": "Thailand" },
		{"state": "Lamphun", "countryId": "Thailand" },
		{"state": "Loei", "countryId": "Thailand" },
		{"state": "Lop Buri", "countryId": "Thailand" },
		{"state": "Mae Hong Son", "countryId": "Thailand" },
		{"state": "Maha Sarakham", "countryId": "Thailand" },
		{"state": "Mukdahan", "countryId": "Thailand" },
		{"state": "Nakhon Nayok", "countryId": "Thailand" },
		{"state": "Nakhon Pathom", "countryId": "Thailand" },
		{"state": "Nakhon Phanom", "countryId": "Thailand" },
		{"state": "Nakhon Ratchasima", "countryId": "Thailand" },
		{"state": "Nakhon Sawan", "countryId": "Thailand" },
		{"state": "Nakhon Si Thammarat", "countryId": "Thailand" },
		{"state": "Nan", "countryId": "Thailand" },
		{"state": "Narathiwat", "countryId": "Thailand" },
		{"state": "Nong Bua Lam Phu", "countryId": "Thailand" },
		{"state": "Nong Khai", "countryId": "Thailand" },
		{"state": "Nonthaburi", "countryId": "Thailand" },
		{"state": "Pathum Thani", "countryId": "Thailand" },
		{"state": "Pattani", "countryId": "Thailand" },
		{"state": "Phangnga", "countryId": "Thailand" },
		{"state": "Phatthalung", "countryId": "Thailand" },
		{"state": "Phayao", "countryId": "Thailand" },
		{"state": "Phetchabun", "countryId": "Thailand" },
		{"state": "Phetchaburi", "countryId": "Thailand" },
		{"state": "Phichit", "countryId": "Thailand" },
		{"state": "Phitsanulok", "countryId": "Thailand" },
		{"state": "Phra Nakhon Si Ayutthaya", "countryId": "Thailand" },
		{"state": "Phrae", "countryId": "Thailand" },
		{"state": "Phuket", "countryId": "Thailand" },
		{"state": "Prachin Buri", "countryId": "Thailand" },
		{"state": "Prachuap Khiri Khan", "countryId": "Thailand" },
		{"state": "Ranong", "countryId": "Thailand" },
		{"state": "Ratchaburi", "countryId": "Thailand" },
		{"state": "Rayong", "countryId": "Thailand" },
		{"state": "Roi Et", "countryId": "Thailand" },
		{"state": "Sa Kaeo", "countryId": "Thailand" },
		{"state": "Sakon Nakhon", "countryId": "Thailand" },
		{"state": "Samut Prakan", "countryId": "Thailand" },
		{"state": "Samut Sakhon", "countryId": "Thailand" },
		{"state": "Samut Songkhran", "countryId": "Thailand" },
		{"state": "Saraburi", "countryId": "Thailand" },
		{"state": "Satun", "countryId": "Thailand" },
		{"state": "Si Sa Ket", "countryId": "Thailand" },
		{"state": "Sing Buri", "countryId": "Thailand" },
		{"state": "Songkhla", "countryId": "Thailand" },
		{"state": "Sukhothai", "countryId": "Thailand" },
		{"state": "Suphan Buri", "countryId": "Thailand" },
		{"state": "Surat Thani", "countryId": "Thailand" },
		{"state": "Surin", "countryId": "Thailand" },
		{"state": "Tak", "countryId": "Thailand" },
		{"state": "Trang", "countryId": "Thailand" },
		{"state": "Trat", "countryId": "Thailand" },
		{"state": "Ubon Ratchathani", "countryId": "Thailand" },
		{"state": "Udon Thani", "countryId": "Thailand" },
		{"state": "Uthai Thani", "countryId": "Thailand" },
		{"state": "Uttaradit", "countryId": "Thailand" },
		{"state": "Yala", "countryId": "Thailand" },
		{"state": "Yasothon", "countryId": "Thailand" },
	   
		{"state": "Atafu", "countryId": "Tokelau" },
		{"state": "Fakaofo", "countryId": "Tokelau" },
		{"state": "Nukunonu", "countryId": "Tokelau" },
		
		
		{"state": "Ariana", "countryId": "Tunisia" },
		{"state": "Béja", "countryId": "Tunisia" },
		{"state": "Ben Arous", "countryId": "Tunisia" },
		{"state": "Bizerte", "countryId": "Tunisia" },
		{"state": "	Gabès", "countryId": "Tunisia" },
		{"state": "Gafsa", "countryId": "Tunisia" },
		{"state": "Jendouba", "countryId": "Tunisia" },
		{"state": "	Kairouan", "countryId": "Tunisia" },
		{"state": "Kasserine", "countryId": "Tunisia" },
		{"state": "Kebili", "countryId": "Tunisia" },
		{"state": "Kef", "countryId": "Tunisia" },
		{"state": "	Mahdia", "countryId": "Tunisia" },
		{"state": "Manouba", "countryId": "Tunisia" },
		{"state": "Medenine", "countryId": "Tunisia" },
		{"state": "Monastir", "countryId": "Tunisia" },
		{"state": "Nabeul", "countryId": "Tunisia" },
		{"state": "Sfax", "countryId": "Tunisia" },
		{"state": "Sidi Bouzid", "countryId": "Tunisia" },
		{"state": "	Siliana", "countryId": "Tunisia" },
		{"state": "	Sousse", "countryId": "Tunisia" },
		{"state": "Tataouine", "countryId": "Tunisia" },
		{"state": "Tozeur", "countryId": "Tunisia" },
		{"state": "	Tunis", "countryId": "Tunisia" },
		{"state": "Zaghouan", "countryId": "Tunisia" },
		
		
		{"state": "Grand Turk", "countryId": "Turks and Caicos Islands" },
		{"state": "South Caicos and East Caicos", "countryId": "Turks and Caicos Islands" },
		
  
		{"state": "Adana", "countryId": "Turkey" },
		{"state": "Adiyaman", "countryId": "Turkey" },
		{"state": "Afyon", "countryId": "Turkey" },
		{"state": "Agri", "countryId": "Turkey" },
		{"state": "Aksaray", "countryId": "Turkey" },
		{"state": "Amasya", "countryId": "Turkey" },
		{"state": "Ankara", "countryId": "Turkey" },
		{"state": "Antalya", "countryId": "Turkey" },
		{"state": "Ardahan", "countryId": "Turkey" },
		{"state": "Artvin", "countryId": "Turkey" },
		{"state": "Aydin", "countryId": "Turkey" },
		{"state": "Balikesir", "countryId": "Turkey" },
		{"state": "Bartin", "countryId": "Turkey" },
		{"state": "Batman", "countryId": "Turkey" },
		{"state": "Bayburt", "countryId": "Turkey" },
		{"state": "Bilecik", "countryId": "Turkey" },
		{"state": "Bingol", "countryId": "Turkey" },
		{"state": "Bitlis", "countryId": "Turkey" },
		{"state": "Bolu", "countryId": "Turkey" },
		{"state": "Burdur", "countryId": "Turkey" },
		{"state": "Bursa", "countryId": "Turkey" },
		{"state": "Canakkale", "countryId": "Turkey" },
		{"state": "Cankiri", "countryId": "Turkey" },
		{"state": "Corum", "countryId": "Turkey" },
		{"state": "Denizli", "countryId": "Turkey" },
		{"state": "Diyarbakir", "countryId": "Turkey" },
		{"state": "Duzce", "countryId": "Turkey" },
		{"state": "Edirne", "countryId": "Turkey" },
		{"state": "Elazig", "countryId": "Turkey" },
		{"state": "Erzincan", "countryId": "Turkey" },
		{"state": "Erzurum", "countryId": "Turkey" },
		{"state": "Eskisehir", "countryId": "Turkey" },
		{"state": "Gaziantep", "countryId": "Turkey" },
		{"state": "Giresun", "countryId": "Turkey" },
		{"state": "Gumushane", "countryId": "Turkey" },
		{"state": "Hakkari", "countryId": "Turkey" },
		{"state": "Hatay", "countryId": "Turkey" },
		{"state": "Icel", "countryId": "Turkey" },
		{"state": "Igdir", "countryId": "Turkey" },
		{"state": "Isparta", "countryId": "Turkey" },
		{"state": "Istanbul", "countryId": "Turkey" },
		{"state": "Izmir", "countryId": "Turkey" },
		{"state": "Kahramanmaras", "countryId": "Turkey" },
		{"state": "Karabuk", "countryId": "Turkey" },
		{"state": "Karaman", "countryId": "Turkey" },
		{"state": "Kars", "countryId": "Turkey" },
		{"state": "Karsiyaka", "countryId": "Turkey" },
		{"state": "Kastamonu", "countryId": "Turkey" },
		{"state": "Kayseri", "countryId": "Turkey" },
		{"state": "Kilis", "countryId": "Turkey" },
		{"state": "Kirikkale", "countryId": "Turkey" },
		{"state": "Kirklareli", "countryId": "Turkey" },
		{"state": "Kirsehir", "countryId": "Turkey" },
		{"state": "Kocaeli", "countryId": "Turkey" },
		{"state": "Konya", "countryId": "Turkey" },
		{"state": "Kutahya", "countryId": "Turkey" },
		{"state": "Lefkosa", "countryId": "Turkey" },
		{"state": "Malatya", "countryId": "Turkey" },
		{"state": "Manisa", "countryId": "Turkey" },
		{"state": "Mardin", "countryId": "Turkey" },
		{"state": "Mugla", "countryId": "Turkey" },
		{"state": "Mus", "countryId": "Turkey" },
		{"state": "Nevsehir", "countryId": "Turkey" },
		{"state": "Nigde", "countryId": "Turkey" },
		{"state": "Ordu", "countryId": "Turkey" },
		{"state": "Osmaniye", "countryId": "Turkey" },
		{"state": "Rize", "countryId": "Turkey" },
		{"state": "Sakarya", "countryId": "Turkey" },
		{"state": "Samsun", "countryId": "Turkey" },
		{"state": "Sanliurfa", "countryId": "Turkey" },
		{"state": "Siirt", "countryId": "Turkey" },
		{"state": "Sinop", "countryId": "Turkey" },
		{"state": "Sirnak", "countryId": "Turkey" },
		{"state": "Sivas", "countryId": "Turkey" },
		{"state": "Tekirdag", "countryId": "Turkey" },
		{"state": "Tokat", "countryId": "Turkey" },
		{"state": "Trabzon", "countryId": "Turkey" },
		{"state": "Tunceli", "countryId": "Turkey" },
		{"state": "Usak", "countryId": "Turkey" },
		{"state": "Van", "countryId": "Turkey" },
		{"state": "Yalova", "countryId": "Turkey" },
		{"state": "Yozgat", "countryId": "Turkey" },
		{"state": "Zonguldak", "countryId": "Turkey" },
		
		{"state": "Central", "countryId": "Uganda" },
		{"state": "Eastern", "countryId": "Uganda" },
		{"state": "Northern", "countryId": "Uganda" },
		{"state": "Western", "countryId": "Uganda" },
  
		{"state": "United States Minor Outlying I", "countryId": "United States Min. Outlying Islands" },
	   
		{"state": "Artigas", "countryId": "Uruguay" },
		{"state": "Canelones", "countryId": "Uruguay" },
		{"state": "Cerro Largo", "countryId": "Uruguay" },
		{"state": "Colonia", "countryId": "Uruguay" },
		{"state": "Durazno", "countryId": "Uruguay" },
		{"state": "FLorida", "countryId": "Uruguay" },
		{"state": "Flores", "countryId": "Uruguay" },
		{"state": "Lavalleja", "countryId": "Uruguay" },
		{"state": "Maldonado", "countryId": "Uruguay" },
		{"state": "Montevideo", "countryId": "Uruguay" },
		{"state": "Paysandu", "countryId": "Uruguay" },
		{"state": "Rio Negro", "countryId": "Uruguay" },
		{"state": "Rivera", "countryId": "Uruguay" },
		{"state": "Rocha", "countryId": "Uruguay" },
		{"state": "Salto", "countryId": "Uruguay" },
		{"state": "San Jose", "countryId": "Uruguay" },
		{"state": "Soriano", "countryId": "Uruguay" },
		{"state": "Tacuarembo", "countryId": "Uruguay" },
		{"state": "Treinta y Tres", "countryId": "Uruguay" },
		
		{"state": "Andijon", "countryId": "Uzbekistan" },
		{"state": "Buhoro", "countryId": "Uzbekistan" },
		{"state": "Buxoro Viloyati", "countryId": "Uzbekistan" },
		{"state": "Cizah", "countryId": "Uzbekistan" },
		{"state": "Fargona", "countryId": "Uzbekistan" },
		{"state": "Fargona", "countryId": "Uzbekistan" },
		{"state": "Kaskadar", "countryId": "Uzbekistan" },
		{"state": "Korakalpogiston", "countryId": "Uzbekistan" },
		{"state": "Namangan", "countryId": "Uzbekistan" },
		{"state": "Navoi", "countryId": "Uzbekistan" },
		{"state": "Samarkand", "countryId": "Uzbekistan" },
		{"state": "Samarkand", "countryId": "Uzbekistan" },
		{"state": "Surhondar", "countryId": "Uzbekistan" },
		{"state": "Toskent", "countryId": "Uzbekistan" },
	   
		{"state": "Autonomous Republic of Crimea", "countryId": "Ukraine" },
		{"state": "Cherkasy Region", "countryId": "Ukraine" },
		{"state": "Chernihiv Region", "countryId": "Ukraine" },
		{"state": "Chernivtsi Region", "countryId": "Ukraine" },
		{"state": "Dnipropetrovs'k Region", "countryId": "Ukraine" },
		{"state": "Donets'k Region", "countryId": "Ukraine" },
		{"state": "Ivano-Frankivs’k Region", "countryId": "Ukraine" },
		{"state": "Kharkiv Region", "countryId": "Ukraine" },
		{"state": "Kherson Region", "countryId": "Ukraine" },
		{"state": "Khmelnytsky Region", "countryId": "Ukraine" },
		{"state": "Kirovograd Region", "countryId": "Ukraine" },
		{"state": "Kyiv Region", "countryId": "Ukraine" },
		{"state": "Luhans'k Region", "countryId": "Ukraine" },
		{"state": "Lviv Region", "countryId": "Ukraine" },
		{"state": "Mykolayiv Region", "countryId": "Ukraine" },
		{"state": "Odesa Region", "countryId": "Ukraine" },
		{"state": "Poltava Region", "countryId": "Ukraine" },
		{"state": "Rivne Region", "countryId": "Ukraine" },
		{"state": "Sumy Region", "countryId": "Ukraine" },
		{"state": "Ternopil Region", "countryId": "Ukraine" },
		{"state": "The City of Kyiv", "countryId": "Ukraine" },
		{"state": "Vinnytsya Region", "countryId": "Ukraine" },
		{"state": "Volyn region", "countryId": "Ukraine" },
		{"state": "Zakarpattya Region", "countryId": "Ukraine" },
		{"state": "Zaporizhzhya Region", "countryId": "Ukraine" },
		{"state": "Zhytomyr Region", "countryId": "Ukraine" },
		{"state": "Місто Севастополь", "countryId": "Ukraine" },
		
		
	   
		
		{ "state": "Alabama", "countryId": "United States of America(US)" },
		{ "state": "Alaska", "countryId": "United States of America(US)" },
		{ "state": "Arizona", "countryId": "United States of America(US)" },
		{ "state": "Arkansas", "countryId": "United States of America(US)" },
		{ "state": "Byram", "countryId": "United States of America(US)" },
		{ "state": "California", "countryId": "United States of America(US)" },
		{ "state": "Cokato", "countryId": "United States of America(US)" },
		{ "state": "Colorado", "countryId": "United States of America(US)" },
		{ "state": "Connecticut", "countryId": "United States of America(US)" },
		{ "state": "Delaware", "countryId": "United States of America(US)" },
		{ "state": "District of Columbia", "countryId": "United States of America(US)" },
		{ "state": "Florida", "countryId": "United States of America(US)" },
		{ "state": "Georgia", "countryId": "United States of America(US)" },
		{ "state": "Hawaii", "countryId": "United States of America(US)" },
		{ "state": "Idaho", "countryId": "United States of America(US)" },
		{ "state": "Illinois", "countryId": "United States of America(US)" },
		{ "state": "Indiana", "countryId": "United States of America(US)" },
		{ "state": "Iowa", "countryId": "United States of America(US)" },
		{ "state": "Kansas", "countryId": "United States of America(US)" },
		{ "state": "Kentucky", "countryId": "United States of America(US)" },
		{ "state": "Louisiana", "countryId": "United States of America(US)" },
		{ "state": "Maine", "countryId": "United States of America(US)" },
		{ "state": "Maryland", "countryId": "United States of America(US)" },
		{ "state": "Massachusetts", "countryId": "United States of America(US)" },
		{ "state": "Michigan", "countryId": "United States of America(US)" },
		{ "state": " Minnesota", "countryId": "United States of America(US)" },
		{ "state": " Mississippi", "countryId": "United States of America(US)" },
		{ "state": "Missouri", "countryId": "United States of America(US)" },
		{ "state": "Montana", "countryId": "United States of America(US)" },
		{ "state": "Nebraska", "countryId": "United States of America(US)" },
		{ "state": " Nevada", "countryId": "United States of America(US)" },
		{ "state": " New Hampshire", "countryId": "United States of America(US)" },
		{ "state": "  New Jersey", "countryId": "United States of America(US)" },
		{ "state": "  New Mexico", "countryId": "United States of America(US)" },
		{ "state": "  New York", "countryId": "United States of America(US)" },
		{ "state": " North Carolina", "countryId": "United States of America(US)" },
		{ "state": " North Dakota", "countryId": "United States of America(US)" },
		{ "state": " Ohio", "countryId": "United States of America(US)" },
		{ "state": " Oklahoma", "countryId": "United States of America(US)" },
		{ "state": " Oregon", "countryId": "United States of America(US)" },
		{ "state": " Pennsylvania", "countryId": "United States of America(US)" },
		{ "state": " Rhode Island", "countryId": "United States of America(US)" },
		{ "state": "South Carolina", "countryId": "United States of America(US)" },
		{ "state": "South Dakota", "countryId": "United States of America(US)" },
		{ "state": "Tennessee", "countryId": "United States of America(US)" },
		{ "state": "Texas", "countryId": "United States of America(US)" },
		{ "state": "Utah", "countryId": "United States of America(US)" },
		{ "state": "Vermont", "countryId": "United States of America(US)" },
		{ "state": "Virginia", "countryId": "United States of America(US)" },
		{ "state": "Washington", "countryId": "United States of America(US)" },
		{ "state": "West Virginia", "countryId": "United States of America(US)" },
		{ "state": "Wisconsin", "countryId": "United States of America(US)" },
		{ "state": "Wyoming", "countryId": "United States of America(US)" },
		
		{ "state": "Avon", "countryId": "United Kingdom(UK)" },
		{ "state": "Bedfordshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Berkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "City of Bristol", "countryId": "United Kingdom(UK)" },
		{ "state": "Buckinghamshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Cambridgeshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Cambridgeshire and Isle of Ely", "countryId": "United Kingdom(UK)" },
		{ "state": "Cheshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Cleveland", "countryId": "United Kingdom(UK)" },
		{ "state": "Cornwall", "countryId": "United Kingdom(UK)" },
		{ "state": "Cumberland", "countryId": "United Kingdom(UK)" },
		{ "state": "Cumbria", "countryId": "United Kingdom(UK)" },
		{ "state": "Derbyshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Devon", "countryId": "United Kingdom(UK)" },
		{ "state": "Dorset", "countryId": "United Kingdom(UK)" },
		{ "state": "Durham", "countryId": "United Kingdom(UK)" },
		{ "state": "East Suffolk", "countryId": "United Kingdom(UK)" },
		{ "state": "East Sussex", "countryId": "United Kingdom(UK)" },
		{ "state": "Essex", "countryId": "United Kingdom(UK)" },
		{ "state": "Gloucestershire", "countryId": "United Kingdom(UK)" },
		{ "state": "Greater London", "countryId": "United Kingdom(UK)" },
		{ "state": "Greater Manchester", "countryId": "United Kingdom(UK)" },
		{ "state": "Hampshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Hereford and Worcester", "countryId": "United Kingdom(UK)" },
		{ "state": "Herefordshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Hertfordshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Humberside", "countryId": "United Kingdom(UK)" },
		{ "state": "Huntingdon and Peterborough", "countryId": "United Kingdom(UK)" },
		{ "state": "Huntingdonshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Isle of Ely", "countryId": "United Kingdom(UK)" },
		{ "state": "Isle of Wight", "countryId": "United Kingdom(UK)" },
		{ "state": "Kent", "countryId": "United Kingdom(UK)" },
		{ "state": "Lancashire", "countryId": "United Kingdom(UK)" },
		{ "state": "Leicestershire", "countryId": "United Kingdom(UK)" },
		{ "state": "Lincolnshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Lincolnshire,Parts of Holland", "countryId": "United Kingdom(UK)" },
		{ "state": "Lincolnshire, Parts of Kesteven", "countryId": "United Kingdom(UK)" },
		{ "state": "Lincolnshire, Parts of Lindsey", "countryId": "United Kingdom(UK)" },
		{ "state": "London", "countryId": "United Kingdom(UK)" },
		{ "state": "City of London", "countryId": "United Kingdom(UK)" },
		{ "state": "Merseyside", "countryId": "United Kingdom(UK)" },
		{ "state": "Middlesex", "countryId": "United Kingdom(UK)" },
		{ "state": "Norfolk", "countryId": "United Kingdom(UK)" },
		{ "state": "Northamptonshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Northumberland", "countryId": "United Kingdom(UK)" },
		{ "state": "North Humberside", "countryId": "United Kingdom(UK)" },
		{ "state": "North Yorkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Nottinghamshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Oxfordshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Soke of Peterborough", "countryId": "United Kingdom(UK)" },
		{ "state": "Rutland", "countryId": "United Kingdom(UK)" },
		{ "state": "Shropshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Somerset", "countryId": "United Kingdom(UK)" },
		{ "state": "South Humberside", "countryId": "United Kingdom(UK)" },
		{ "state": "South Yorkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Staffordshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Suffolk", "countryId": "United Kingdom(UK)" },
		{ "state": "Surrey", "countryId": "United Kingdom(UK)" },
		{ "state": "Sussex", "countryId": "United Kingdom(UK)" },
		{ "state": "Tyne and Wear", "countryId": "United Kingdom(UK)" },
		{ "state": "Warwickshire", "countryId": "United Kingdom(UK)" },
		{ "state": "West Midlands", "countryId": "United Kingdom(UK)" },
		{ "state": "Westmorland", "countryId": "United Kingdom(UK)" },
		{ "state": "West Suffolk", "countryId": "United Kingdom(UK)" },
		{ "state": "West Sussex", "countryId": "United Kingdom(UK)" },
		{ "state": "West Yorkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Wiltshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Worcestershire", "countryId": "United Kingdom(UK)" },
		{ "state": "Yorkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Yorkshire, East Riding", "countryId": "United Kingdom(UK)" },
		{ "state": "Yorkshire, North Riding", "countryId": "United Kingdom(UK)" },
		{ "state": "Yorkshire, West Riding", "countryId": "United Kingdom(UK)" },
		{ "state": "Aberdeenshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Angus ", "countryId": "United Kingdom(UK)" },
		{ "state": "Argyll", "countryId": "United Kingdom(UK)" },
		{ "state": "Ayrshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Banffshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Berwickshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Bute", "countryId": "United Kingdom(UK)" },
		{ "state": "Caithness", "countryId": "United Kingdom(UK)" },
		{ "state": "Clackmannanshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Cromartyshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Dumfriesshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Dunbartonshire", "countryId": "United Kingdom(UK)" },
		{ "state": "City of Dundee", "countryId": "United Kingdom(UK)" },
		{ "state": "East Lothian", "countryId": "United Kingdom(UK)" },
		{ "state": "City of Edinburgh", "countryId": "United Kingdom(UK)" },
		{ "state": "Fife", "countryId": "United Kingdom(UK)" },
		{ "state": "City of Glasgow", "countryId": "United Kingdom(UK)" },
		{ "state": "Inverness-shire", "countryId": "United Kingdom(UK)" },
		{ "state": "Kincardineshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Kinross-shire", "countryId": "United Kingdom(UK)" },
		{ "state": "Kirkcudbrightshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Lanarkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Midlothian", "countryId": "United Kingdom(UK)" },
		{ "state": "Moray", "countryId": "United Kingdom(UK)" },
		{ "state": "Nairnshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Orkney", "countryId": "United Kingdom(UK)" },
		{ "state": "Peeblesshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Perthshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Renfrewshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Ross and Cromarty", "countryId": "United Kingdom(UK)" },
		{ "state": "Ross-shire", "countryId": "United Kingdom(UK)" },
		{ "state": "Roxburghshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Selkirkshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Shetland (Zetland)", "countryId": "United Kingdom(UK)" },
		{ "state": "Stirlingshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Sutherland", "countryId": "United Kingdom(UK)" },
		{ "state": "West Lothian", "countryId": "United Kingdom(UK)" },
		{ "state": "Wigtownshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Anglesey", "countryId": "United Kingdom(UK)" },
		{ "state": "Brecknockshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Caernarfonshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Cardiganshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Carmarthenshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Clwyd", "countryId": "United Kingdom(UK)" },
		{ "state": "Denbighshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Dyfed", "countryId": "United Kingdom(UK)" },
		{ "state": "Flintshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Glamorgan", "countryId": "United Kingdom(UK)" },
		{ "state": "Gwent", "countryId": "United Kingdom(UK)" }, 
		{ "state": "Gwynedd", "countryId": "United Kingdom(UK)" },
		{ "state": "Merionethshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Mid Glamorgan", "countryId": "United Kingdom(UK)" },
		{ "state": "Monmouthshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Montgomeryshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Pembrokeshire", "countryId": "United Kingdom(UK)" },
		{ "state": "Powys", "countryId": "United Kingdom(UK)" },
		{ "state": "Radnorshire", "countryId": "United Kingdom(UK)" },
		{ "state": "South Glamorgan", "countryId": "United Kingdom(UK)" },
		{ "state": "West Glamorgan", "countryId": "United Kingdom(UK)" },
		{ "state": "Wrexham", "countryId": "United Kingdom(UK)" },
		
		{ "state": "Malampa", "countryId": "Vanuatu" },
		{ "state": "Penama", "countryId": "Vanuatu" },
		{ "state": "Sanma", "countryId": "Vanuatu" },
		{ "state": "Sanma", "countryId": "Vanuatu" },
		{ "state": "Tafea", "countryId": "Vanuatu" },
		{ "state": "Torba", "countryId": "Vanuatu" },
		
		{ "state": "Bắc Giang Province", "countryId": "Vietnam" },
		{ "state": "Bắc Kạn Province", "countryId": "Vietnam" },
		{ "state": "Cao Bằng Province", "countryId": "Vietnam" },
		{ "state": "Hà Giang Province", "countryId": "Vietnam" },
		{ "state": "Lạng Sơn Province", "countryId": "Vietnam" },
		{ "state": "Phú Thọ Province", "countryId": "Vietnam" },
		{ "state": "Quảng Ninh Province", "countryId": "Vietnam" },
		{ "state": "Thái Nguyên Province", "countryId": "Vietnam" },
		{ "state": "Tuyên Quang Province", "countryId": "Vietnam" },
		{ "state": "Lào Cai Province", "countryId": "Vietnam" },
		{ "state": "Yên Bái Province", "countryId": "Vietnam" },
		{ "state": "Điện Biên Province", "countryId": "Vietnam" },
		{ "state": "Hòa Bình Province", "countryId": "Vietnam" },
		{ "state": "Lai Châu Province", "countryId": "Vietnam" },
		{ "state": "Sơn La Province", "countryId": "Vietnam" },
		{ "state": "Bắc Ninh Province", "countryId": "Vietnam" },
		{ "state": "Hà Nam Province", "countryId": "Vietnam" },
		{ "state": "Hải Dương Province", "countryId": "Vietnam" },
		{ "state": "Hưng Yên Province", "countryId": "Vietnam" },
		{ "state": "Nam Định Province", "countryId": "Vietnam" },
		{ "state": "Ninh Bình Province", "countryId": "Vietnam" },
		{ "state": "Thái Bình Province", "countryId": "Vietnam" },
		{ "state": "Vĩnh Phúc Province", "countryId": "Vietnam" },
		{ "state": "Hà Tĩnh Province", "countryId": "Vietnam" },
		{ "state": "Nghệ An Province", "countryId": "Vietnam" },
		{ "state": "Quảng Bình Province", "countryId": "Vietnam" },
		{ "state": "Quảng Trị Province", "countryId": "Vietnam" },
		{ "state": "Thanh Hóa Province", "countryId": "Vietnam" },
		{ "state": "Thừa Thiên–Huế Province", "countryId": "Vietnam" },
		{ "state": "Đắk Lắk Province", "countryId": "Vietnam" },
		{ "state": "Đắk Nông Province", "countryId": "Vietnam" },
		{ "state": "Gia Lai Province", "countryId": "Vietnam" },
		{ "state": "Kon Tum Province", "countryId": "Vietnam" },
		{ "state": "Lâm Đồng Province", "countryId": "Vietnam" },
		{ "state": "Bình Định Province", "countryId": "Vietnam" },
		{ "state": "Bình Thuận Province", "countryId": "Vietnam" },
		{ "state": "Khánh Hòa Province", "countryId": "Vietnam" },
		{ "state": "Ninh Thuận Province", "countryId": "Vietnam" },
		{ "state": "Phú Yên Province", "countryId": "Vietnam" },
		{ "state": "Quảng Nam Province", "countryId": "Vietnam" },
		{ "state": "Quảng Ngãi Province", "countryId": "Vietnam" },
		{ "state": "Bà Rịa–Vũng Tàu Province", "countryId": "Vietnam" },
		{ "state": "Bình Dương Province", "countryId": "Vietnam" },
		{ "state": "Bình Phước Province", "countryId": "Vietnam" },
		{ "state": "Đồng Nai Province", "countryId": "Vietnam" },
		{ "state": "Tây Ninh Province", "countryId": "Vietnam" },
		{ "state": "An Giang Province", "countryId": "Vietnam" },
		{ "state": "Bạc Liêu Province", "countryId": "Vietnam" },
		{ "state": "Bến Tre Province", "countryId": "Vietnam" },
		{ "state": "Cà Mau Province", "countryId": "Vietnam" },
		{ "state": "Đồng Tháp Province", "countryId": "Vietnam" },
		{ "state": "Hậu Giang Province", "countryId": "Vietnam" },
		{ "state": "Kiên Giang Province", "countryId": "Vietnam" },
		{ "state": "Long An Province", "countryId": "Vietnam" },
		{ "state": "Sóc Trăng Province", "countryId": "Vietnam" },
		{ "state": "Tiền Giang Province", "countryId": "Vietnam" },
		{ "state": "Trà Vinh Province	", "countryId": "Vietnam" },
		{ "state": "Vĩnh Long Province", "countryId": "Vietnam" },
	  
		{ "state": "Malampa", "countryId": "Vanuatu" },
	   
	   
		
		{ "state": "Vatican City State (Holy See)", "countryId": "Vatican City" },
		
		
		{ "state": "Saint Croix", "countryId": "Virgin Islands" },
		{ "state": "Saint John", "countryId": "Virgin Islands" },
		{ "state": "Saint Thomas", "countryId": "Virgin Islands" },
		{ "state": "Anegada", "countryId": "Virgin Islands" },
		{ "state": "Jost van Dyke", "countryId": "Virgin Islands" },
		{ "state": "Tortola", "countryId": "Virgin Islands" },
  
		{ "state": "Amazonas", "countryId": "Venezuela" },
		{ "state": "Anzoategui", "countryId": "Venezuela" },
		{ "state": "Apure", "countryId": "Venezuela" },
		{ "state": "Aragua", "countryId": "Venezuela" },
		{ "state": "Barinas", "countryId": "Venezuela" },
		{ "state": "Bolivar", "countryId": "Venezuela" },
		{ "state": "Carabobo", "countryId": "Venezuela" },
		{ "state": "Cojedes", "countryId": "Venezuela" },
		{ "state": "Delta Amacuro", "countryId": "Venezuela" },
		{ "state": "Distrito Federal", "countryId": "Venezuela" },
		{ "state": "Falcon", "countryId": "Venezuela" },
		{ "state": "Guarico", "countryId": "Venezuela" },
		{ "state": "Lara", "countryId": "Venezuela" },
		{ "state": "Merida", "countryId": "Venezuela" },
		{ "state": "Miranda", "countryId": "Venezuela" },
		{ "state": "Monagas", "countryId": "Venezuela" },
		{ "state": "Monagas", "countryId": "Venezuela" },
		{ "state": "Portuguesa", "countryId": "Venezuela" },
		{ "state": "Sucre", "countryId": "Venezuela" },
		{ "state": "Tachira", "countryId": "Venezuela" },
		{ "state": "Trujillo", "countryId": "Venezuela" },
		{ "state": "Vargas", "countryId": "Venezuela" },
		{ "state": "Yaracuy", "countryId": "Venezuela" },
		{ "state": "Zulia", "countryId": "Venezuela" },
		
		{ "state": "Alo", "countryId": "Wallis and Futuna" },
		{ "state": "Singave", "countryId": "Wallis and Futuna" },
		{ "state": "Wallis", "countryId": "Wallis and Futuna" },
	   
		{ "state": "Bu Jaydur", "countryId": "Western Sahara" },
		{ "state": "Wad-adh-Dhahab", "countryId": "Western Sahara" },
		{ "state": "al-'Ayun", "countryId": "Western Sahara" },
		{ "state": "as-Samarah", "countryId": "Western Sahara" },
		
		{ "state": "Adan", "countryId": "Yemen" },
		{ "state": "Abyan", "countryId": "Yemen" },
		{ "state": "Dhamar", "countryId": "Yemen" },
		{ "state": "Hadramaut", "countryId": "Yemen" },
		{ "state": "Hajjah", "countryId": "Yemen" },
		{ "state": "Hudaydah", "countryId": "Yemen" },
		{ "state": "Ibb", "countryId": "Yemen" },
		{ "state": "Lahij", "countryId": "Yemen" },
		{ "state": "Ma'rib", "countryId": "Yemen" },
		{ "state": "Madinat San'a", "countryId": "Yemen" },
		{ "state": "Sa'dah", "countryId": "Yemen" },
		{ "state": "Sana", "countryId": "Yemen" },
		{ "state": "Shabwah", "countryId": "Yemen" },
		{ "state": "Ta'izz", "countryId": "Yemen" },
		{ "state": "al-Bayda", "countryId": "Yemen" },
		{ "state": "al-Hudaydah", "countryId": "Yemen" },
		{ "state": "al-Jawf", "countryId": "Yemen" },
		{ "state": "al-Mahrah", "countryId": "Yemen" },
		{ "state": "al-Mahwit", "countryId": "Yemen" },
		
		
		{ "state": "Central", "countryId": "Zambia" },
		{ "state": "Copperbelt", "countryId": "Zambia" },
		{ "state": "Eastern", "countryId": "Zambia" },
		{ "state": "Luapala", "countryId": "Zambia" },
		{ "state": "Lusaka", "countryId": "Zambia" },
		{ "state": "North-Western", "countryId": "Zambia" },
		{ "state": "Northern", "countryId": "Zambia" },
		{ "state": "Southern", "countryId": "Zambia" },
		{ "state": "Western", "countryId": "Zambia" },
	  
		{ "state": "Bulawayo", "countryId": "Zimbabwe" },
		{ "state": "Harare", "countryId": "Zimbabwe" },
		{ "state": "Manicaland", "countryId": "Zimbabwe" },
		{ "state": "Mashonaland Central", "countryId": "Zimbabwe" },
		{ "state": "Mashonaland East", "countryId": "Zimbabwe" },
		{ "state": "Mashonaland West", "countryId": "Zimbabwe" },
		{ "state": "Masvingo", "countryId": "Zimbabwe" },
		{ "state": "Masvingo", "countryId": "Zimbabwe" },
		{ "state": "Matabeleland South", "countryId": "Zimbabwe" },
		{ "state": "Midlands", "countryId": "Zimbabwe" },
		
		
	];
	//city list with respective state
	var citylist = [
		{
			"id": "1",
			"name": "Mumbai",
			"state": "Maharashtra"
		},
		{
			"id": "2",
			"name": "Delhi",
			"state": "Delhi"
		},
		{
			"id": "3",
			"name": "Bengaluru",
			"state": "Karnataka"
		},
		{
			"id": "4",
			"name": "Ahmedabad",
			"state": "Gujarat"
		},
		{
			"id": "5",
			"name": "Hyderabad",
			"state": "Telangana"
		},
		{
			"id": "6",
			"name": "Chennai",
			"state": "Tamil Nadu"
		},
		{
			"id": "7",
			"name": "Kolkata",
			"state": "West Bengal"
		},
		{
			"id": "8",
			"name": "Pune",
			"state": "Maharashtra"
		},
		{
			"id": "9",
			"name": "Jaipur",
			"state": "Rajasthan"
		},
		{
			"id": "10",
			"name": "Surat",
			"state": "Gujarat"
		},
		{
			"id": "11",
			"name": "Lucknow",
			"state": "Uttar Pradesh"
		},
		{
			"id": "12",
			"name": "Kanpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "13",
			"name": "Nagpur",
			"state": "Maharashtra"
		},
		{
			"id": "14",
			"name": "Patna",
			"state": "Bihar"
		},
		{
			"id": "15",
			"name": "Indore",
			"state": "Madhya Pradesh"
		},
		{
			"id": "16",
			"name": "Thane",
			"state": "Maharashtra"
		},
		{
			"id": "17",
			"name": "Bhopal",
			"state": "Madhya Pradesh"
		},
		{
			"id": "18",
			"name": "Visakhapatnam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "19",
			"name": "Vadodara",
			"state": "Gujarat"
		},
		{
			"id": "20",
			"name": "Firozabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "21",
			"name": "Ludhiana",
			"state": "Punjab"
		},
		{
			"id": "22",
			"name": "Rajkot",
			"state": "Gujarat"
		},
		{
			"id": "23",
			"name": "Agra",
			"state": "Uttar Pradesh"
		},
		{
			"id": "24",
			"name": "Siliguri",
			"state": "West Bengal"
		},
		{
			"id": "25",
			"name": "Nashik",
			"state": "Maharashtra"
		},
		{
			"id": "26",
			"name": "Faridabad",
			"state": "Haryana"
		},
		{
			"id": "27",
			"name": "Patiala",
			"state": "Punjab"
		},
		{
			"id": "28",
			"name": "Meerut",
			"state": "Uttar Pradesh"
		},
		{
			"id": "29",
			"name": "Kalyan-Dombivali",
			"state": "Maharashtra"
		},
		{
			"id": "30",
			"name": "Vasai-Virar",
			"state": "Maharashtra"
		},
		{
			"id": "31",
			"name": "Varanasi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "32",
			"name": "Srinagar",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "33",
			"name": "Dhanbad",
			"state": "Jharkhand"
		},
		{
			"id": "34",
			"name": "Jodhpur",
			"state": "Rajasthan"
		},
		{
			"id": "35",
			"name": "Amritsar",
			"state": "Punjab"
		},
		{
			"id": "36",
			"name": "Raipur",
			"state": "Chhattisgarh"
		},
		{
			"id": "37",
			"name": "Allahabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "38",
			"name": "Coimbatore",
			"state": "Tamil Nadu"
		},
		{
			"id": "39",
			"name": "Jabalpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "40",
			"name": "Gwalior",
			"state": "Madhya Pradesh"
		},
		{
			"id": "41",
			"name": "Vijayawada",
			"state": "Andhra Pradesh"
		},
		{
			"id": "42",
			"name": "Madurai",
			"state": "Tamil Nadu"
		},
		{
			"id": "43",
			"name": "Guwahati",
			"state": "Assam"
		},
		{
			"id": "44",
			"name": "Chandigarh",
			"state": "Chandigarh"
		},
		{
			"id": "45",
			"name": "Hubli-Dharwad",
			"state": "Karnataka"
		},
		{
			"id": "46",
			"name": "Amroha",
			"state": "Uttar Pradesh"
		},
		{
			"id": "47",
			"name": "Moradabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "48",
			"name": "Gurgaon",
			"state": "Haryana"
		},
		{
			"id": "49",
			"name": "Aligarh",
			"state": "Uttar Pradesh"
		},
		{
			"id": "50",
			"name": "Solapur",
			"state": "Maharashtra"
		},
		{
			"id": "51",
			"name": "Ranchi",
			"state": "Jharkhand"
		},
		{
			"id": "52",
			"name": "Jalandhar",
			"state": "Punjab"
		},
		{
			"id": "53",
			"name": "Tiruchirappalli",
			"state": "Tamil Nadu"
		},
		{
			"id": "54",
			"name": "Bhubaneswar",
			"state": "Odisha"
		},
		{
			"id": "55",
			"name": "Salem",
			"state": "Tamil Nadu"
		},
		{
			"id": "56",
			"name": "Warangal",
			"state": "Telangana"
		},
		{
			"id": "57",
			"name": "Mira-Bhayandar",
			"state": "Maharashtra"
		},
		{
			"id": "58",
			"name": "Thiruvananthapuram",
			"state": "Kerala"
		},
		{
			"id": "59",
			"name": "Bhiwandi",
			"state": "Maharashtra"
		},
		{
			"id": "60",
			"name": "Saharanpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "61",
			"name": "Guntur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "62",
			"name": "Amravati",
			"state": "Maharashtra"
		},
		{
			"id": "63",
			"name": "Bikaner",
			"state": "Rajasthan"
		},
		{
			"id": "64",
			"name": "Noida",
			"state": "Uttar Pradesh"
		},
		{
			"id": "65",
			"name": "Jamshedpur",
			"state": "Jharkhand"
		},
		{
			"id": "66",
			"name": "Bhilai Nagar",
			"state": "Chhattisgarh"
		},
		{
			"id": "67",
			"name": "Cuttack",
			"state": "Odisha"
		},
		{
			"id": "68",
			"name": "Kochi",
			"state": "Kerala"
		},
		{
			"id": "69",
			"name": "Udaipur",
			"state": "Rajasthan"
		},
		{
			"id": "70",
			"name": "Bhavnagar",
			"state": "Gujarat"
		},
		{
			"id": "71",
			"name": "Dehradun",
			"state": "Uttarakhand"
		},
		{
			"id": "72",
			"name": "Asansol",
			"state": "West Bengal"
		},
		{
			"id": "73",
			"name": "Nanded-Waghala",
			"state": "Maharashtra"
		},
		{
			"id": "74",
			"name": "Ajmer",
			"state": "Rajasthan"
		},
		{
			"id": "75",
			"name": "Jamnagar",
			"state": "Gujarat"
		},
		{
			"id": "76",
			"name": "Ujjain",
			"state": "Madhya Pradesh"
		},
		{
			"id": "77",
			"name": "Sangli",
			"state": "Maharashtra"
		},
		{
			"id": "78",
			"name": "Loni",
			"state": "Uttar Pradesh"
		},
		{
			"id": "79",
			"name": "Jhansi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "80",
			"name": "Pondicherry",
			"state": "Puducherry"
		},
		{
			"id": "81",
			"name": "Nellore",
			"state": "Andhra Pradesh"
		},
		{
			"id": "82",
			"name": "Jammu",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "83",
			"name": "Belagavi",
			"state": "Karnataka"
		},
		{
			"id": "84",
			"name": "Raurkela",
			"state": "Odisha"
		},
		{
			"id": "85",
			"name": "Mangaluru",
			"state": "Karnataka"
		},
		{
			"id": "86",
			"name": "Tirunelveli",
			"state": "Tamil Nadu"
		},
		{
			"id": "87",
			"name": "Malegaon",
			"state": "Maharashtra"
		},
		{
			"id": "88",
			"name": "Gaya",
			"state": "Bihar"
		},
		{
			"id": "89",
			"name": "Tiruppur",
			"state": "Tamil Nadu"
		},
		{
			"id": "90",
			"name": "Davanagere",
			"state": "Karnataka"
		},
		{
			"id": "91",
			"name": "Kozhikode",
			"state": "Kerala"
		},
		{
			"id": "92",
			"name": "Akola",
			"state": "Maharashtra"
		},
		{
			"id": "93",
			"name": "Kurnool",
			"state": "Andhra Pradesh"
		},
		{
			"id": "94",
			"name": "Bokaro Steel City",
			"state": "Jharkhand"
		},
		{
			"id": "95",
			"name": "Rajahmundry",
			"state": "Andhra Pradesh"
		},
		{
			"id": "96",
			"name": "Ballari",
			"state": "Karnataka"
		},
		{
			"id": "97",
			"name": "Agartala",
			"state": "Tripura"
		},
		{
			"id": "98",
			"name": "Bhagalpur",
			"state": "Bihar"
		},
		{
			"id": "99",
			"name": "Latur",
			"state": "Maharashtra"
		},
		{
			"id": "100",
			"name": "Dhule",
			"state": "Maharashtra"
		},
		{
			"id": "101",
			"name": "Korba",
			"state": "Chhattisgarh"
		},
		{
			"id": "102",
			"name": "Bhilwara",
			"state": "Rajasthan"
		},
		{
			"id": "103",
			"name": "Brahmapur",
			"state": "Odisha"
		},
		{
			"id": "104",
			"name": "Mysore",
			"state": "Karnataka"
		},
		{
			"id": "105",
			"name": "Muzaffarpur",
			"state": "Bihar"
		},
		{
			"id": "106",
			"name": "Ahmednagar",
			"state": "Maharashtra"
		},
		{
			"id": "107",
			"name": "Kollam",
			"state": "Kerala"
		},
		{
			"id": "108",
			"name": "Raghunathganj",
			"state": "West Bengal"
		},
		{
			"id": "109",
			"name": "Bilaspur",
			"state": "Chhattisgarh"
		},
		{
			"id": "110",
			"name": "Shahjahanpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "111",
			"name": "Thrissur",
			"state": "Kerala"
		},
		{
			"id": "112",
			"name": "Alwar",
			"state": "Rajasthan"
		},
		{
			"id": "113",
			"name": "Kakinada",
			"state": "Andhra Pradesh"
		},
		{
			"id": "114",
			"name": "Nizamabad",
			"state": "Telangana"
		},
		{
			"id": "115",
			"name": "Sagar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "116",
			"name": "Tumkur",
			"state": "Karnataka"
		},
		{
			"id": "117",
			"name": "Hisar",
			"state": "Haryana"
		},
		{
			"id": "118",
			"name": "Rohtak",
			"state": "Haryana"
		},
		{
			"id": "119",
			"name": "Panipat",
			"state": "Haryana"
		},
		{
			"id": "120",
			"name": "Darbhanga",
			"state": "Bihar"
		},
		{
			"id": "121",
			"name": "Kharagpur",
			"state": "West Bengal"
		},
		{
			"id": "122",
			"name": "Aizawl",
			"state": "Mizoram"
		},
		{
			"id": "123",
			"name": "Ichalkaranji",
			"state": "Maharashtra"
		},
		{
			"id": "124",
			"name": "Tirupati",
			"state": "Andhra Pradesh"
		},
		{
			"id": "125",
			"name": "Karnal",
			"state": "Haryana"
		},
		{
			"id": "126",
			"name": "Bathinda",
			"state": "Punjab"
		},
		{
			"id": "127",
			"name": "Rampur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "128",
			"name": "Shivamogga",
			"state": "Karnataka"
		},
		{
			"id": "129",
			"name": "Ratlam",
			"state": "Madhya Pradesh"
		},
		{
			"id": "130",
			"name": "Modinagar",
			"state": "Uttar Pradesh"
		},
		{
			"id": "131",
			"name": "Durg",
			"state": "Chhattisgarh"
		},
		{
			"id": "132",
			"name": "Shillong",
			"state": "Meghalaya"
		},
		{
			"id": "133",
			"name": "Imphal",
			"state": "Manipur"
		},
		{
			"id": "134",
			"name": "Hapur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "135",
			"name": "Ranipet",
			"state": "Tamil Nadu"
		},
		{
			"id": "136",
			"name": "Anantapur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "137",
			"name": "Arrah",
			"state": "Bihar"
		},
		{
			"id": "138",
			"name": "Karimnagar",
			"state": "Telangana"
		},
		{
			"id": "139",
			"name": "Parbhani",
			"state": "Maharashtra"
		},
		{
			"id": "140",
			"name": "Etawah",
			"state": "Uttar Pradesh"
		},
		{
			"id": "141",
			"name": "Bharatpur",
			"state": "Rajasthan"
		},
		{
			"id": "142",
			"name": "Begusarai",
			"state": "Bihar"
		},
		{
			"id": "143",
			"name": "New Delhi",
			"state": "Delhi"
		},
		{
			"id": "144",
			"name": "Chhapra",
			"state": "Bihar"
		},
		{
			"id": "145",
			"name": "Kadapa",
			"state": "Andhra Pradesh"
		},
		{
			"id": "146",
			"name": "Ramagundam",
			"state": "Telangana"
		},
		{
			"id": "147",
			"name": "Pali",
			"state": "Rajasthan"
		},
		{
			"id": "148",
			"name": "Satna",
			"state": "Madhya Pradesh"
		},
		{
			"id": "149",
			"name": "Vizianagaram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "150",
			"name": "Katihar",
			"state": "Bihar"
		},
		{
			"id": "151",
			"name": "Hardwar",
			"state": "Uttarakhand"
		},
		{
			"id": "152",
			"name": "Sonipat",
			"state": "Haryana"
		},
		{
			"id": "153",
			"name": "Nagercoil",
			"state": "Tamil Nadu"
		},
		{
			"id": "154",
			"name": "Thanjavur",
			"state": "Tamil Nadu"
		},
		{
			"id": "155",
			"name": "Murwara (Katni)",
			"state": "Madhya Pradesh"
		},
		{
			"id": "156",
			"name": "Naihati",
			"state": "West Bengal"
		},
		{
			"id": "157",
			"name": "Sambhal",
			"state": "Uttar Pradesh"
		},
		{
			"id": "158",
			"name": "Nadiad",
			"state": "Gujarat"
		},
		{
			"id": "159",
			"name": "Yamunanagar",
			"state": "Haryana"
		},
		{
			"id": "160",
			"name": "English Bazar",
			"state": "West Bengal"
		},
		{
			"id": "161",
			"name": "Eluru",
			"state": "Andhra Pradesh"
		},
		{
			"id": "162",
			"name": "Munger",
			"state": "Bihar"
		},
		{
			"id": "163",
			"name": "Panchkula",
			"state": "Haryana"
		},
		{
			"id": "164",
			"name": "Raayachuru",
			"state": "Karnataka"
		},
		{
			"id": "165",
			"name": "Panvel",
			"state": "Maharashtra"
		},
		{
			"id": "166",
			"name": "Deoghar",
			"state": "Jharkhand"
		},
		{
			"id": "167",
			"name": "Ongole",
			"state": "Andhra Pradesh"
		},
		{
			"id": "168",
			"name": "Nandyal",
			"state": "Andhra Pradesh"
		},
		{
			"id": "169",
			"name": "Morena",
			"state": "Madhya Pradesh"
		},
		{
			"id": "170",
			"name": "Bhiwani",
			"state": "Haryana"
		},
		{
			"id": "171",
			"name": "Porbandar",
			"state": "Gujarat"
		},
		{
			"id": "172",
			"name": "Palakkad",
			"state": "Kerala"
		},
		{
			"id": "173",
			"name": "Anand",
			"state": "Gujarat"
		},
		{
			"id": "174",
			"name": "Purnia",
			"state": "Bihar"
		},
		{
			"id": "175",
			"name": "Baharampur",
			"state": "West Bengal"
		},
		{
			"id": "176",
			"name": "Barmer",
			"state": "Rajasthan"
		},
		{
			"id": "177",
			"name": "Morvi",
			"state": "Gujarat"
		},
		{
			"id": "178",
			"name": "Orai",
			"state": "Uttar Pradesh"
		},
		{
			"id": "179",
			"name": "Bahraich",
			"state": "Uttar Pradesh"
		},
		{
			"id": "180",
			"name": "Sikar",
			"state": "Rajasthan"
		},
		{
			"id": "181",
			"name": "Vellore",
			"state": "Tamil Nadu"
		},
		{
			"id": "182",
			"name": "Singrauli",
			"state": "Madhya Pradesh"
		},
		{
			"id": "183",
			"name": "Khammam",
			"state": "Telangana"
		},
		{
			"id": "184",
			"name": "Mahesana",
			"state": "Gujarat"
		},
		{
			"id": "185",
			"name": "Silchar",
			"state": "Assam"
		},
		{
			"id": "186",
			"name": "Sambalpur",
			"state": "Odisha"
		},
		{
			"id": "187",
			"name": "Rewa",
			"state": "Madhya Pradesh"
		},
		{
			"id": "188",
			"name": "Unnao",
			"state": "Uttar Pradesh"
		},
		{
			"id": "189",
			"name": "Hugli-Chinsurah",
			"state": "West Bengal"
		},
		{
			"id": "190",
			"name": "Raiganj",
			"state": "West Bengal"
		},
		{
			"id": "191",
			"name": "Phusro",
			"state": "Jharkhand"
		},
		{
			"id": "192",
			"name": "Adityapur",
			"state": "Jharkhand"
		},
		{
			"id": "193",
			"name": "Alappuzha",
			"state": "Kerala"
		},
		{
			"id": "194",
			"name": "Bahadurgarh",
			"state": "Haryana"
		},
		{
			"id": "195",
			"name": "Machilipatnam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "196",
			"name": "Rae Bareli",
			"state": "Uttar Pradesh"
		},
		{
			"id": "197",
			"name": "Jalpaiguri",
			"state": "West Bengal"
		},
		{
			"id": "198",
			"name": "Bharuch",
			"state": "Gujarat"
		},
		{
			"id": "199",
			"name": "Pathankot",
			"state": "Punjab"
		},
		{
			"id": "200",
			"name": "Hoshiarpur",
			"state": "Punjab"
		},
		{
			"id": "201",
			"name": "Baramula",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "202",
			"name": "Adoni",
			"state": "Andhra Pradesh"
		},
		{
			"id": "203",
			"name": "Jind",
			"state": "Haryana"
		},
		{
			"id": "204",
			"name": "Tonk",
			"state": "Rajasthan"
		},
		{
			"id": "205",
			"name": "Tenali",
			"state": "Andhra Pradesh"
		},
		{
			"id": "206",
			"name": "Kancheepuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "207",
			"name": "Vapi",
			"state": "Gujarat"
		},
		{
			"id": "208",
			"name": "Sirsa",
			"state": "Haryana"
		},
		{
			"id": "209",
			"name": "Navsari",
			"state": "Gujarat"
		},
		{
			"id": "210",
			"name": "Mahbubnagar",
			"state": "Telangana"
		},
		{
			"id": "211",
			"name": "Puri",
			"state": "Odisha"
		},
		{
			"id": "212",
			"name": "Robertson Pet",
			"state": "Karnataka"
		},
		{
			"id": "213",
			"name": "Erode",
			"state": "Tamil Nadu"
		},
		{
			"id": "214",
			"name": "Batala",
			"state": "Punjab"
		},
		{
			"id": "215",
			"name": "Haldwani-cum-Kathgodam",
			"state": "Uttarakhand"
		},
		{
			"id": "216",
			"name": "Vidisha",
			"state": "Madhya Pradesh"
		},
		{
			"id": "217",
			"name": "Saharsa",
			"state": "Bihar"
		},
		{
			"id": "218",
			"name": "Thanesar",
			"state": "Haryana"
		},
		{
			"id": "219",
			"name": "Chittoor",
			"state": "Andhra Pradesh"
		},
		{
			"id": "220",
			"name": "Veraval",
			"state": "Gujarat"
		},
		{
			"id": "221",
			"name": "Lakhimpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "222",
			"name": "Sitapur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "223",
			"name": "Hindupur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "224",
			"name": "Santipur",
			"state": "West Bengal"
		},
		{
			"id": "225",
			"name": "Balurghat",
			"state": "West Bengal"
		},
		{
			"id": "226",
			"name": "Ganjbasoda",
			"state": "Madhya Pradesh"
		},
		{
			"id": "227",
			"name": "Moga",
			"state": "Punjab"
		},
		{
			"id": "228",
			"name": "Proddatur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "229",
			"name": "Srinagar",
			"state": "Uttarakhand"
		},
		{
			"id": "230",
			"name": "Medinipur",
			"state": "West Bengal"
		},
		{
			"id": "231",
			"name": "Habra",
			"state": "West Bengal"
		},
		{
			"id": "232",
			"name": "Sasaram",
			"state": "Bihar"
		},
		{
			"id": "233",
			"name": "Hajipur",
			"state": "Bihar"
		},
		{
			"id": "234",
			"name": "Bhuj",
			"state": "Gujarat"
		},
		{
			"id": "235",
			"name": "Shivpuri",
			"state": "Madhya Pradesh"
		},
		{
			"id": "236",
			"name": "Ranaghat",
			"state": "West Bengal"
		},
		{
			"id": "237",
			"name": "Shimla",
			"state": "Himachal Pradesh"
		},
		{
			"id": "238",
			"name": "Tiruvannamalai",
			"state": "Tamil Nadu"
		},
		{
			"id": "239",
			"name": "Kaithal",
			"state": "Haryana"
		},
		{
			"id": "240",
			"name": "Rajnandgaon",
			"state": "Chhattisgarh"
		},
		{
			"id": "241",
			"name": "Godhra",
			"state": "Gujarat"
		},
		{
			"id": "242",
			"name": "Hazaribag",
			"state": "Jharkhand"
		},
		{
			"id": "243",
			"name": "Bhimavaram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "244",
			"name": "Mandsaur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "245",
			"name": "Dibrugarh",
			"state": "Assam"
		},
		{
			"id": "246",
			"name": "Kolar",
			"state": "Karnataka"
		},
		{
			"id": "247",
			"name": "Bankura",
			"state": "West Bengal"
		},
		{
			"id": "248",
			"name": "Mandya",
			"state": "Karnataka"
		},
		{
			"id": "249",
			"name": "Dehri-on-Sone",
			"state": "Bihar"
		},
		{
			"id": "250",
			"name": "Madanapalle",
			"state": "Andhra Pradesh"
		},
		{
			"id": "251",
			"name": "Malerkotla",
			"state": "Punjab"
		},
		{
			"id": "252",
			"name": "Lalitpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "253",
			"name": "Bettiah",
			"state": "Bihar"
		},
		{
			"id": "254",
			"name": "Pollachi",
			"state": "Tamil Nadu"
		},
		{
			"id": "255",
			"name": "Khanna",
			"state": "Punjab"
		},
		{
			"id": "256",
			"name": "Neemuch",
			"state": "Madhya Pradesh"
		},
		{
			"id": "257",
			"name": "Palwal",
			"state": "Haryana"
		},
		{
			"id": "258",
			"name": "Palanpur",
			"state": "Gujarat"
		},
		{
			"id": "259",
			"name": "Guntakal",
			"state": "Andhra Pradesh"
		},
		{
			"id": "260",
			"name": "Nabadwip",
			"state": "West Bengal"
		},
		{
			"id": "261",
			"name": "Udupi",
			"state": "Karnataka"
		},
		{
			"id": "262",
			"name": "Jagdalpur",
			"state": "Chhattisgarh"
		},
		{
			"id": "263",
			"name": "Motihari",
			"state": "Bihar"
		},
		{
			"id": "264",
			"name": "Pilibhit",
			"state": "Uttar Pradesh"
		},
		{
			"id": "265",
			"name": "Dimapur",
			"state": "Nagaland"
		},
		{
			"id": "266",
			"name": "Mohali",
			"state": "Punjab"
		},
		{
			"id": "267",
			"name": "Sadulpur",
			"state": "Rajasthan"
		},
		{
			"id": "268",
			"name": "Rajapalayam",
			"state": "Tamil Nadu"
		},
		{
			"id": "269",
			"name": "Dharmavaram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "270",
			"name": "Kashipur",
			"state": "Uttarakhand"
		},
		{
			"id": "271",
			"name": "Sivakasi",
			"state": "Tamil Nadu"
		},
		{
			"id": "272",
			"name": "Darjiling",
			"state": "West Bengal"
		},
		{
			"id": "273",
			"name": "Chikkamagaluru",
			"state": "Karnataka"
		},
		{
			"id": "274",
			"name": "Gudivada",
			"state": "Andhra Pradesh"
		},
		{
			"id": "275",
			"name": "Baleshwar Town",
			"state": "Odisha"
		},
		{
			"id": "276",
			"name": "Mancherial",
			"state": "Telangana"
		},
		{
			"id": "277",
			"name": "Srikakulam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "278",
			"name": "Adilabad",
			"state": "Telangana"
		},
		{
			"id": "279",
			"name": "Yavatmal",
			"state": "Maharashtra"
		},
		{
			"id": "280",
			"name": "Barnala",
			"state": "Punjab"
		},
		{
			"id": "281",
			"name": "Nagaon",
			"state": "Assam"
		},
		{
			"id": "282",
			"name": "Narasaraopet",
			"state": "Andhra Pradesh"
		},
		{
			"id": "283",
			"name": "Raigarh",
			"state": "Chhattisgarh"
		},
		{
			"id": "284",
			"name": "Roorkee",
			"state": "Uttarakhand"
		},
		{
			"id": "285",
			"name": "Valsad",
			"state": "Gujarat"
		},
		{
			"id": "286",
			"name": "Ambikapur",
			"state": "Chhattisgarh"
		},
		{
			"id": "287",
			"name": "Giridih",
			"state": "Jharkhand"
		},
		{
			"id": "288",
			"name": "Chandausi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "289",
			"name": "Purulia",
			"state": "West Bengal"
		},
		{
			"id": "290",
			"name": "Patan",
			"state": "Gujarat"
		},
		{
			"id": "291",
			"name": "Bagaha",
			"state": "Bihar"
		},
		{
			"id": "292",
			"name": "Hardoi ",
			"state": "Uttar Pradesh"
		},
		{
			"id": "293",
			"name": "Achalpur",
			"state": "Maharashtra"
		},
		{
			"id": "294",
			"name": "Osmanabad",
			"state": "Maharashtra"
		},
		{
			"id": "295",
			"name": "Deesa",
			"state": "Gujarat"
		},
		{
			"id": "296",
			"name": "Nandurbar",
			"state": "Maharashtra"
		},
		{
			"id": "297",
			"name": "Azamgarh",
			"state": "Uttar Pradesh"
		},
		{
			"id": "298",
			"name": "Ramgarh",
			"state": "Jharkhand"
		},
		{
			"id": "299",
			"name": "Firozpur",
			"state": "Punjab"
		},
		{
			"id": "300",
			"name": "Baripada Town",
			"state": "Odisha"
		},
		{
			"id": "301",
			"name": "Karwar",
			"state": "Karnataka"
		},
		{
			"id": "302",
			"name": "Siwan",
			"state": "Bihar"
		},
		{
			"id": "303",
			"name": "Rajampet",
			"state": "Andhra Pradesh"
		},
		{
			"id": "304",
			"name": "Pudukkottai",
			"state": "Tamil Nadu"
		},
		{
			"id": "305",
			"name": "Anantnag",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "306",
			"name": "Tadpatri",
			"state": "Andhra Pradesh"
		},
		{
			"id": "307",
			"name": "Satara",
			"state": "Maharashtra"
		},
		{
			"id": "308",
			"name": "Bhadrak",
			"state": "Odisha"
		},
		{
			"id": "309",
			"name": "Kishanganj",
			"state": "Bihar"
		},
		{
			"id": "310",
			"name": "Suryapet",
			"state": "Telangana"
		},
		{
			"id": "311",
			"name": "Wardha",
			"state": "Maharashtra"
		},
		{
			"id": "312",
			"name": "Ranebennuru",
			"state": "Karnataka"
		},
		{
			"id": "313",
			"name": "Amreli",
			"state": "Gujarat"
		},
		{
			"id": "314",
			"name": "Neyveli (TS)",
			"state": "Tamil Nadu"
		},
		{
			"id": "315",
			"name": "Jamalpur",
			"state": "Bihar"
		},
		{
			"id": "316",
			"name": "Marmagao",
			"state": "Goa"
		},
		{
			"id": "317",
			"name": "Udgir",
			"state": "Maharashtra"
		},
		{
			"id": "318",
			"name": "Tadepalligudem",
			"state": "Andhra Pradesh"
		},
		{
			"id": "319",
			"name": "Nagapattinam",
			"state": "Tamil Nadu"
		},
		{
			"id": "320",
			"name": "Buxar",
			"state": "Bihar"
		},
		{
			"id": "321",
			"name": "Aurangabad",
			"state": "Maharashtra"
		},
		{
			"id": "322",
			"name": "Jehanabad",
			"state": "Bihar"
		},
		{
			"id": "323",
			"name": "Phagwara",
			"state": "Punjab"
		},
		{
			"id": "324",
			"name": "Khair",
			"state": "Uttar Pradesh"
		},
		{
			"id": "325",
			"name": "Sawai Madhopur",
			"state": "Rajasthan"
		},
		{
			"id": "326",
			"name": "Kapurthala",
			"state": "Punjab"
		},
		{
			"id": "327",
			"name": "Chilakaluripet",
			"state": "Andhra Pradesh"
		},
		{
			"id": "328",
			"name": "Aurangabad",
			"state": "Bihar"
		},
		{
			"id": "329",
			"name": "Malappuram",
			"state": "Kerala"
		},
		{
			"id": "330",
			"name": "Rewari",
			"state": "Haryana"
		},
		{
			"id": "331",
			"name": "Nagaur",
			"state": "Rajasthan"
		},
		{
			"id": "332",
			"name": "Sultanpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "333",
			"name": "Nagda",
			"state": "Madhya Pradesh"
		},
		{
			"id": "334",
			"name": "Port Blair",
			"state": "Andaman and Nicobar Islands"
		},
		{
			"id": "335",
			"name": "Lakhisarai",
			"state": "Bihar"
		},
		{
			"id": "336",
			"name": "Panaji",
			"state": "Goa"
		},
		{
			"id": "337",
			"name": "Tinsukia",
			"state": "Assam"
		},
		{
			"id": "338",
			"name": "Itarsi",
			"state": "Madhya Pradesh"
		},
		{
			"id": "339",
			"name": "Kohima",
			"state": "Nagaland"
		},
		{
			"id": "340",
			"name": "Balangir",
			"state": "Odisha"
		},
		{
			"id": "341",
			"name": "Nawada",
			"state": "Bihar"
		},
		{
			"id": "342",
			"name": "Jharsuguda",
			"state": "Odisha"
		},
		{
			"id": "343",
			"name": "Jagtial",
			"state": "Telangana"
		},
		{
			"id": "344",
			"name": "Viluppuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "345",
			"name": "Amalner",
			"state": "Maharashtra"
		},
		{
			"id": "346",
			"name": "Zirakpur",
			"state": "Punjab"
		},
		{
			"id": "347",
			"name": "Tanda",
			"state": "Uttar Pradesh"
		},
		{
			"id": "348",
			"name": "Tiruchengode",
			"state": "Tamil Nadu"
		},
		{
			"id": "349",
			"name": "Nagina",
			"state": "Uttar Pradesh"
		},
		{
			"id": "350",
			"name": "Yemmiganur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "351",
			"name": "Vaniyambadi",
			"state": "Tamil Nadu"
		},
		{
			"id": "352",
			"name": "Sarni",
			"state": "Madhya Pradesh"
		},
		{
			"id": "353",
			"name": "Theni Allinagaram",
			"state": "Tamil Nadu"
		},
		{
			"id": "354",
			"name": "Margao",
			"state": "Goa"
		},
		{
			"id": "355",
			"name": "Akot",
			"state": "Maharashtra"
		},
		{
			"id": "356",
			"name": "Sehore",
			"state": "Madhya Pradesh"
		},
		{
			"id": "357",
			"name": "Mhow Cantonment",
			"state": "Madhya Pradesh"
		},
		{
			"id": "358",
			"name": "Kot Kapura",
			"state": "Punjab"
		},
		{
			"id": "359",
			"name": "Makrana",
			"state": "Rajasthan"
		},
		{
			"id": "360",
			"name": "Pandharpur",
			"state": "Maharashtra"
		},
		{
			"id": "361",
			"name": "Miryalaguda",
			"state": "Telangana"
		},
		{
			"id": "362",
			"name": "Shamli",
			"state": "Uttar Pradesh"
		},
		{
			"id": "363",
			"name": "Seoni",
			"state": "Madhya Pradesh"
		},
		{
			"id": "364",
			"name": "Ranibennur",
			"state": "Karnataka"
		},
		{
			"id": "365",
			"name": "Kadiri",
			"state": "Andhra Pradesh"
		},
		{
			"id": "366",
			"name": "Shrirampur",
			"state": "Maharashtra"
		},
		{
			"id": "367",
			"name": "Rudrapur",
			"state": "Uttarakhand"
		},
		{
			"id": "368",
			"name": "Parli",
			"state": "Maharashtra"
		},
		{
			"id": "369",
			"name": "Najibabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "370",
			"name": "Nirmal",
			"state": "Telangana"
		},
		{
			"id": "371",
			"name": "Udhagamandalam",
			"state": "Tamil Nadu"
		},
		{
			"id": "372",
			"name": "Shikohabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "373",
			"name": "Jhumri Tilaiya",
			"state": "Jharkhand"
		},
		{
			"id": "374",
			"name": "Aruppukkottai",
			"state": "Tamil Nadu"
		},
		{
			"id": "375",
			"name": "Ponnani",
			"state": "Kerala"
		},
		{
			"id": "376",
			"name": "Jamui",
			"state": "Bihar"
		},
		{
			"id": "377",
			"name": "Sitamarhi",
			"state": "Bihar"
		},
		{
			"id": "378",
			"name": "Chirala",
			"state": "Andhra Pradesh"
		},
		{
			"id": "379",
			"name": "Anjar",
			"state": "Gujarat"
		},
		{
			"id": "380",
			"name": "Karaikal",
			"state": "Puducherry"
		},
		{
			"id": "381",
			"name": "Hansi",
			"state": "Haryana"
		},
		{
			"id": "382",
			"name": "Anakapalle",
			"state": "Andhra Pradesh"
		},
		{
			"id": "383",
			"name": "Mahasamund",
			"state": "Chhattisgarh"
		},
		{
			"id": "384",
			"name": "Faridkot",
			"state": "Punjab"
		},
		{
			"id": "385",
			"name": "Saunda",
			"state": "Jharkhand"
		},
		{
			"id": "386",
			"name": "Dhoraji",
			"state": "Gujarat"
		},
		{
			"id": "387",
			"name": "Paramakudi",
			"state": "Tamil Nadu"
		},
		{
			"id": "388",
			"name": "Balaghat",
			"state": "Madhya Pradesh"
		},
		{
			"id": "389",
			"name": "Sujangarh",
			"state": "Rajasthan"
		},
		{
			"id": "390",
			"name": "Khambhat",
			"state": "Gujarat"
		},
		{
			"id": "391",
			"name": "Muktsar",
			"state": "Punjab"
		},
		{
			"id": "392",
			"name": "Rajpura",
			"state": "Punjab"
		},
		{
			"id": "393",
			"name": "Kavali",
			"state": "Andhra Pradesh"
		},
		{
			"id": "394",
			"name": "Dhamtari",
			"state": "Chhattisgarh"
		},
		{
			"id": "395",
			"name": "Ashok Nagar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "396",
			"name": "Sardarshahar",
			"state": "Rajasthan"
		},
		{
			"id": "397",
			"name": "Mahuva",
			"state": "Gujarat"
		},
		{
			"id": "398",
			"name": "Bargarh",
			"state": "Odisha"
		},
		{
			"id": "399",
			"name": "Kamareddy",
			"state": "Telangana"
		},
		{
			"id": "400",
			"name": "Sahibganj",
			"state": "Jharkhand"
		},
		{
			"id": "401",
			"name": "Kothagudem",
			"state": "Telangana"
		},
		{
			"id": "402",
			"name": "Ramanagaram",
			"state": "Karnataka"
		},
		{
			"id": "403",
			"name": "Gokak",
			"state": "Karnataka"
		},
		{
			"id": "404",
			"name": "Tikamgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "405",
			"name": "Araria",
			"state": "Bihar"
		},
		{
			"id": "406",
			"name": "Rishikesh",
			"state": "Uttarakhand"
		},
		{
			"id": "407",
			"name": "Shahdol",
			"state": "Madhya Pradesh"
		},
		{
			"id": "408",
			"name": "Medininagar (Daltonganj)",
			"state": "Jharkhand"
		},
		{
			"id": "409",
			"name": "Arakkonam",
			"state": "Tamil Nadu"
		},
		{
			"id": "410",
			"name": "Washim",
			"state": "Maharashtra"
		},
		{
			"id": "411",
			"name": "Sangrur",
			"state": "Punjab"
		},
		{
			"id": "412",
			"name": "Bodhan",
			"state": "Telangana"
		},
		{
			"id": "413",
			"name": "Fazilka",
			"state": "Punjab"
		},
		{
			"id": "414",
			"name": "Palacole",
			"state": "Andhra Pradesh"
		},
		{
			"id": "415",
			"name": "Keshod",
			"state": "Gujarat"
		},
		{
			"id": "416",
			"name": "Sullurpeta",
			"state": "Andhra Pradesh"
		},
		{
			"id": "417",
			"name": "Wadhwan",
			"state": "Gujarat"
		},
		{
			"id": "418",
			"name": "Gurdaspur",
			"state": "Punjab"
		},
		{
			"id": "419",
			"name": "Vatakara",
			"state": "Kerala"
		},
		{
			"id": "420",
			"name": "Tura",
			"state": "Meghalaya"
		},
		{
			"id": "421",
			"name": "Narnaul",
			"state": "Haryana"
		},
		{
			"id": "422",
			"name": "Kharar",
			"state": "Punjab"
		},
		{
			"id": "423",
			"name": "Yadgir",
			"state": "Karnataka"
		},
		{
			"id": "424",
			"name": "Ambejogai",
			"state": "Maharashtra"
		},
		{
			"id": "425",
			"name": "Ankleshwar",
			"state": "Gujarat"
		},
		{
			"id": "426",
			"name": "Savarkundla",
			"state": "Gujarat"
		},
		{
			"id": "427",
			"name": "Paradip",
			"state": "Odisha"
		},
		{
			"id": "428",
			"name": "Virudhachalam",
			"state": "Tamil Nadu"
		},
		{
			"id": "429",
			"name": "Kanhangad",
			"state": "Kerala"
		},
		{
			"id": "430",
			"name": "Kadi",
			"state": "Gujarat"
		},
		{
			"id": "431",
			"name": "Srivilliputhur",
			"state": "Tamil Nadu"
		},
		{
			"id": "432",
			"name": "Gobindgarh",
			"state": "Punjab"
		},
		{
			"id": "433",
			"name": "Tindivanam",
			"state": "Tamil Nadu"
		},
		{
			"id": "434",
			"name": "Mansa",
			"state": "Punjab"
		},
		{
			"id": "435",
			"name": "Taliparamba",
			"state": "Kerala"
		},
		{
			"id": "436",
			"name": "Manmad",
			"state": "Maharashtra"
		},
		{
			"id": "437",
			"name": "Tanuku",
			"state": "Andhra Pradesh"
		},
		{
			"id": "438",
			"name": "Rayachoti",
			"state": "Andhra Pradesh"
		},
		{
			"id": "439",
			"name": "Virudhunagar",
			"state": "Tamil Nadu"
		},
		{
			"id": "440",
			"name": "Koyilandy",
			"state": "Kerala"
		},
		{
			"id": "441",
			"name": "Jorhat",
			"state": "Assam"
		},
		{
			"id": "442",
			"name": "Karur",
			"state": "Tamil Nadu"
		},
		{
			"id": "443",
			"name": "Valparai",
			"state": "Tamil Nadu"
		},
		{
			"id": "444",
			"name": "Srikalahasti",
			"state": "Andhra Pradesh"
		},
		{
			"id": "445",
			"name": "Neyyattinkara",
			"state": "Kerala"
		},
		{
			"id": "446",
			"name": "Bapatla",
			"state": "Andhra Pradesh"
		},
		{
			"id": "447",
			"name": "Fatehabad",
			"state": "Haryana"
		},
		{
			"id": "448",
			"name": "Malout",
			"state": "Punjab"
		},
		{
			"id": "449",
			"name": "Sankarankovil",
			"state": "Tamil Nadu"
		},
		{
			"id": "450",
			"name": "Tenkasi",
			"state": "Tamil Nadu"
		},
		{
			"id": "451",
			"name": "Ratnagiri",
			"state": "Maharashtra"
		},
		{
			"id": "452",
			"name": "Rabkavi Banhatti",
			"state": "Karnataka"
		},
		{
			"id": "453",
			"name": "Sikandrabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "454",
			"name": "Chaibasa",
			"state": "Jharkhand"
		},
		{
			"id": "455",
			"name": "Chirmiri",
			"state": "Chhattisgarh"
		},
		{
			"id": "456",
			"name": "Palwancha",
			"state": "Telangana"
		},
		{
			"id": "457",
			"name": "Bhawanipatna",
			"state": "Odisha"
		},
		{
			"id": "458",
			"name": "Kayamkulam",
			"state": "Kerala"
		},
		{
			"id": "459",
			"name": "Pithampur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "460",
			"name": "Nabha",
			"state": "Punjab"
		},
		{
			"id": "461",
			"name": "Shahabad, Hardoi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "462",
			"name": "Dhenkanal",
			"state": "Odisha"
		},
		{
			"id": "463",
			"name": "Uran Islampur",
			"state": "Maharashtra"
		},
		{
			"id": "464",
			"name": "Gopalganj",
			"state": "Bihar"
		},
		{
			"id": "465",
			"name": "Bongaigaon City",
			"state": "Assam"
		},
		{
			"id": "466",
			"name": "Palani",
			"state": "Tamil Nadu"
		},
		{
			"id": "467",
			"name": "Pusad",
			"state": "Maharashtra"
		},
		{
			"id": "468",
			"name": "Sopore",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "469",
			"name": "Pilkhuwa",
			"state": "Uttar Pradesh"
		},
		{
			"id": "470",
			"name": "Tarn Taran",
			"state": "Punjab"
		},
		{
			"id": "471",
			"name": "Renukoot",
			"state": "Uttar Pradesh"
		},
		{
			"id": "472",
			"name": "Mandamarri",
			"state": "Telangana"
		},
		{
			"id": "473",
			"name": "Shahabad",
			"state": "Karnataka"
		},
		{
			"id": "474",
			"name": "Barbil",
			"state": "Odisha"
		},
		{
			"id": "475",
			"name": "Koratla",
			"state": "Telangana"
		},
		{
			"id": "476",
			"name": "Madhubani",
			"state": "Bihar"
		},
		{
			"id": "477",
			"name": "Arambagh",
			"state": "West Bengal"
		},
		{
			"id": "478",
			"name": "Gohana",
			"state": "Haryana"
		},
		{
			"id": "479",
			"name": "Ladnu",
			"state": "Rajasthan"
		},
		{
			"id": "480",
			"name": "Pattukkottai",
			"state": "Tamil Nadu"
		},
		{
			"id": "481",
			"name": "Sirsi",
			"state": "Karnataka"
		},
		{
			"id": "482",
			"name": "Sircilla",
			"state": "Telangana"
		},
		{
			"id": "483",
			"name": "Tamluk",
			"state": "West Bengal"
		},
		{
			"id": "484",
			"name": "Jagraon",
			"state": "Punjab"
		},
		{
			"id": "485",
			"name": "AlipurdUrban Agglomerationr",
			"state": "West Bengal"
		},
		{
			"id": "486",
			"name": "Alirajpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "487",
			"name": "Tandur",
			"state": "Telangana"
		},
		{
			"id": "488",
			"name": "Naidupet",
			"state": "Andhra Pradesh"
		},
		{
			"id": "489",
			"name": "Tirupathur",
			"state": "Tamil Nadu"
		},
		{
			"id": "490",
			"name": "Tohana",
			"state": "Haryana"
		},
		{
			"id": "491",
			"name": "Ratangarh",
			"state": "Rajasthan"
		},
		{
			"id": "492",
			"name": "Dhubri",
			"state": "Assam"
		},
		{
			"id": "493",
			"name": "Masaurhi",
			"state": "Bihar"
		},
		{
			"id": "494",
			"name": "Visnagar",
			"state": "Gujarat"
		},
		{
			"id": "495",
			"name": "Vrindavan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "496",
			"name": "Nokha",
			"state": "Rajasthan"
		},
		{
			"id": "497",
			"name": "Nagari",
			"state": "Andhra Pradesh"
		},
		{
			"id": "498",
			"name": "Narwana",
			"state": "Haryana"
		},
		{
			"id": "499",
			"name": "Ramanathapuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "500",
			"name": "Ujhani",
			"state": "Uttar Pradesh"
		},
		{
			"id": "501",
			"name": "Samastipur",
			"state": "Bihar"
		},
		{
			"id": "502",
			"name": "Laharpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "503",
			"name": "Sangamner",
			"state": "Maharashtra"
		},
		{
			"id": "504",
			"name": "Nimbahera",
			"state": "Rajasthan"
		},
		{
			"id": "505",
			"name": "Siddipet",
			"state": "Telangana"
		},
		{
			"id": "506",
			"name": "Suri",
			"state": "West Bengal"
		},
		{
			"id": "507",
			"name": "Diphu",
			"state": "Assam"
		},
		{
			"id": "508",
			"name": "Jhargram",
			"state": "West Bengal"
		},
		{
			"id": "509",
			"name": "Shirpur-Warwade",
			"state": "Maharashtra"
		},
		{
			"id": "510",
			"name": "Tilhar",
			"state": "Uttar Pradesh"
		},
		{
			"id": "511",
			"name": "Sindhnur",
			"state": "Karnataka"
		},
		{
			"id": "512",
			"name": "Udumalaipettai",
			"state": "Tamil Nadu"
		},
		{
			"id": "513",
			"name": "Malkapur",
			"state": "Maharashtra"
		},
		{
			"id": "514",
			"name": "Wanaparthy",
			"state": "Telangana"
		},
		{
			"id": "515",
			"name": "Gudur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "516",
			"name": "Kendujhar",
			"state": "Odisha"
		},
		{
			"id": "517",
			"name": "Mandla",
			"state": "Madhya Pradesh"
		},
		{
			"id": "518",
			"name": "Mandi",
			"state": "Himachal Pradesh"
		},
		{
			"id": "519",
			"name": "Nedumangad",
			"state": "Kerala"
		},
		{
			"id": "520",
			"name": "North Lakhimpur",
			"state": "Assam"
		},
		{
			"id": "521",
			"name": "Vinukonda",
			"state": "Andhra Pradesh"
		},
		{
			"id": "522",
			"name": "Tiptur",
			"state": "Karnataka"
		},
		{
			"id": "523",
			"name": "Gobichettipalayam",
			"state": "Tamil Nadu"
		},
		{
			"id": "524",
			"name": "Sunabeda",
			"state": "Odisha"
		},
		{
			"id": "525",
			"name": "Wani",
			"state": "Maharashtra"
		},
		{
			"id": "526",
			"name": "Upleta",
			"state": "Gujarat"
		},
		{
			"id": "527",
			"name": "Narasapuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "528",
			"name": "Nuzvid",
			"state": "Andhra Pradesh"
		},
		{
			"id": "529",
			"name": "Tezpur",
			"state": "Assam"
		},
		{
			"id": "530",
			"name": "Una",
			"state": "Gujarat"
		},
		{
			"id": "531",
			"name": "Markapur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "532",
			"name": "Sheopur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "533",
			"name": "Thiruvarur",
			"state": "Tamil Nadu"
		},
		{
			"id": "534",
			"name": "Sidhpur",
			"state": "Gujarat"
		},
		{
			"id": "535",
			"name": "Sahaswan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "536",
			"name": "Suratgarh",
			"state": "Rajasthan"
		},
		{
			"id": "537",
			"name": "Shajapur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "538",
			"name": "Rayagada",
			"state": "Odisha"
		},
		{
			"id": "539",
			"name": "Lonavla",
			"state": "Maharashtra"
		},
		{
			"id": "540",
			"name": "Ponnur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "541",
			"name": "Kagaznagar",
			"state": "Telangana"
		},
		{
			"id": "542",
			"name": "Gadwal",
			"state": "Telangana"
		},
		{
			"id": "543",
			"name": "Bhatapara",
			"state": "Chhattisgarh"
		},
		{
			"id": "544",
			"name": "Kandukur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "545",
			"name": "Sangareddy",
			"state": "Telangana"
		},
		{
			"id": "546",
			"name": "Unjha",
			"state": "Gujarat"
		},
		{
			"id": "547",
			"name": "Lunglei",
			"state": "Mizoram"
		},
		{
			"id": "548",
			"name": "Karimganj",
			"state": "Assam"
		},
		{
			"id": "549",
			"name": "Kannur",
			"state": "Kerala"
		},
		{
			"id": "550",
			"name": "Bobbili",
			"state": "Andhra Pradesh"
		},
		{
			"id": "551",
			"name": "Mokameh",
			"state": "Bihar"
		},
		{
			"id": "552",
			"name": "Talegaon Dabhade",
			"state": "Maharashtra"
		},
		{
			"id": "553",
			"name": "Anjangaon",
			"state": "Maharashtra"
		},
		{
			"id": "554",
			"name": "Mangrol",
			"state": "Gujarat"
		},
		{
			"id": "555",
			"name": "Sunam",
			"state": "Punjab"
		},
		{
			"id": "556",
			"name": "Gangarampur",
			"state": "West Bengal"
		},
		{
			"id": "557",
			"name": "Thiruvallur",
			"state": "Tamil Nadu"
		},
		{
			"id": "558",
			"name": "Tirur",
			"state": "Kerala"
		},
		{
			"id": "559",
			"name": "Rath",
			"state": "Uttar Pradesh"
		},
		{
			"id": "560",
			"name": "Jatani",
			"state": "Odisha"
		},
		{
			"id": "561",
			"name": "Viramgam",
			"state": "Gujarat"
		},
		{
			"id": "562",
			"name": "Rajsamand",
			"state": "Rajasthan"
		},
		{
			"id": "563",
			"name": "Yanam",
			"state": "Puducherry"
		},
		{
			"id": "564",
			"name": "Kottayam",
			"state": "Kerala"
		},
		{
			"id": "565",
			"name": "Panruti",
			"state": "Tamil Nadu"
		},
		{
			"id": "566",
			"name": "Dhuri",
			"state": "Punjab"
		},
		{
			"id": "567",
			"name": "Namakkal",
			"state": "Tamil Nadu"
		},
		{
			"id": "568",
			"name": "Kasaragod",
			"state": "Kerala"
		},
		{
			"id": "569",
			"name": "Modasa",
			"state": "Gujarat"
		},
		{
			"id": "570",
			"name": "Rayadurg",
			"state": "Andhra Pradesh"
		},
		{
			"id": "571",
			"name": "Supaul",
			"state": "Bihar"
		},
		{
			"id": "572",
			"name": "Kunnamkulam",
			"state": "Kerala"
		},
		{
			"id": "573",
			"name": "Umred",
			"state": "Maharashtra"
		},
		{
			"id": "574",
			"name": "Bellampalle",
			"state": "Telangana"
		},
		{
			"id": "575",
			"name": "Sibsagar",
			"state": "Assam"
		},
		{
			"id": "576",
			"name": "Mandi Dabwali",
			"state": "Haryana"
		},
		{
			"id": "577",
			"name": "Ottappalam",
			"state": "Kerala"
		},
		{
			"id": "578",
			"name": "Dumraon",
			"state": "Bihar"
		},
		{
			"id": "579",
			"name": "Samalkot",
			"state": "Andhra Pradesh"
		},
		{
			"id": "580",
			"name": "Jaggaiahpet",
			"state": "Andhra Pradesh"
		},
		{
			"id": "581",
			"name": "Goalpara",
			"state": "Assam"
		},
		{
			"id": "582",
			"name": "Tuni",
			"state": "Andhra Pradesh"
		},
		{
			"id": "583",
			"name": "Lachhmangarh",
			"state": "Rajasthan"
		},
		{
			"id": "584",
			"name": "Bhongir",
			"state": "Telangana"
		},
		{
			"id": "585",
			"name": "Amalapuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "586",
			"name": "Firozpur Cantt.",
			"state": "Punjab"
		},
		{
			"id": "587",
			"name": "Vikarabad",
			"state": "Telangana"
		},
		{
			"id": "588",
			"name": "Thiruvalla",
			"state": "Kerala"
		},
		{
			"id": "589",
			"name": "Sherkot",
			"state": "Uttar Pradesh"
		},
		{
			"id": "590",
			"name": "Palghar",
			"state": "Maharashtra"
		},
		{
			"id": "591",
			"name": "Shegaon",
			"state": "Maharashtra"
		},
		{
			"id": "592",
			"name": "Jangaon",
			"state": "Telangana"
		},
		{
			"id": "593",
			"name": "Bheemunipatnam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "594",
			"name": "Panna",
			"state": "Madhya Pradesh"
		},
		{
			"id": "595",
			"name": "Thodupuzha",
			"state": "Kerala"
		},
		{
			"id": "596",
			"name": "KathUrban Agglomeration",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "597",
			"name": "Palitana",
			"state": "Gujarat"
		},
		{
			"id": "598",
			"name": "Arwal",
			"state": "Bihar"
		},
		{
			"id": "599",
			"name": "Venkatagiri",
			"state": "Andhra Pradesh"
		},
		{
			"id": "600",
			"name": "Kalpi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "601",
			"name": "Rajgarh (Churu)",
			"state": "Rajasthan"
		},
		{
			"id": "602",
			"name": "Sattenapalle",
			"state": "Andhra Pradesh"
		},
		{
			"id": "603",
			"name": "Arsikere",
			"state": "Karnataka"
		},
		{
			"id": "604",
			"name": "Ozar",
			"state": "Maharashtra"
		},
		{
			"id": "605",
			"name": "Thirumangalam",
			"state": "Tamil Nadu"
		},
		{
			"id": "606",
			"name": "Petlad",
			"state": "Gujarat"
		},
		{
			"id": "607",
			"name": "Nasirabad",
			"state": "Rajasthan"
		},
		{
			"id": "608",
			"name": "Phaltan",
			"state": "Maharashtra"
		},
		{
			"id": "609",
			"name": "Rampurhat",
			"state": "West Bengal"
		},
		{
			"id": "610",
			"name": "Nanjangud",
			"state": "Karnataka"
		},
		{
			"id": "611",
			"name": "Forbesganj",
			"state": "Bihar"
		},
		{
			"id": "612",
			"name": "Tundla",
			"state": "Uttar Pradesh"
		},
		{
			"id": "613",
			"name": "BhabUrban Agglomeration",
			"state": "Bihar"
		},
		{
			"id": "614",
			"name": "Sagara",
			"state": "Karnataka"
		},
		{
			"id": "615",
			"name": "Pithapuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "616",
			"name": "Sira",
			"state": "Karnataka"
		},
		{
			"id": "617",
			"name": "Bhadrachalam",
			"state": "Telangana"
		},
		{
			"id": "618",
			"name": "Charkhi Dadri",
			"state": "Haryana"
		},
		{
			"id": "619",
			"name": "Chatra",
			"state": "Jharkhand"
		},
		{
			"id": "620",
			"name": "Palasa Kasibugga",
			"state": "Andhra Pradesh"
		},
		{
			"id": "621",
			"name": "Nohar",
			"state": "Rajasthan"
		},
		{
			"id": "622",
			"name": "Yevla",
			"state": "Maharashtra"
		},
		{
			"id": "623",
			"name": "Sirhind Fatehgarh Sahib",
			"state": "Punjab"
		},
		{
			"id": "624",
			"name": "Bhainsa",
			"state": "Telangana"
		},
		{
			"id": "625",
			"name": "Parvathipuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "626",
			"name": "Shahade",
			"state": "Maharashtra"
		},
		{
			"id": "627",
			"name": "Chalakudy",
			"state": "Kerala"
		},
		{
			"id": "628",
			"name": "Narkatiaganj",
			"state": "Bihar"
		},
		{
			"id": "629",
			"name": "Kapadvanj",
			"state": "Gujarat"
		},
		{
			"id": "630",
			"name": "Macherla",
			"state": "Andhra Pradesh"
		},
		{
			"id": "631",
			"name": "Raghogarh-Vijaypur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "632",
			"name": "Rupnagar",
			"state": "Punjab"
		},
		{
			"id": "633",
			"name": "Naugachhia",
			"state": "Bihar"
		},
		{
			"id": "634",
			"name": "Sendhwa",
			"state": "Madhya Pradesh"
		},
		{
			"id": "635",
			"name": "Byasanagar",
			"state": "Odisha"
		},
		{
			"id": "636",
			"name": "Sandila",
			"state": "Uttar Pradesh"
		},
		{
			"id": "637",
			"name": "Gooty",
			"state": "Andhra Pradesh"
		},
		{
			"id": "638",
			"name": "Salur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "639",
			"name": "Nanpara",
			"state": "Uttar Pradesh"
		},
		{
			"id": "640",
			"name": "Sardhana",
			"state": "Uttar Pradesh"
		},
		{
			"id": "641",
			"name": "Vita",
			"state": "Maharashtra"
		},
		{
			"id": "642",
			"name": "Gumia",
			"state": "Jharkhand"
		},
		{
			"id": "643",
			"name": "Puttur",
			"state": "Karnataka"
		},
		{
			"id": "644",
			"name": "Jalandhar Cantt.",
			"state": "Punjab"
		},
		{
			"id": "645",
			"name": "Nehtaur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "646",
			"name": "Changanassery",
			"state": "Kerala"
		},
		{
			"id": "647",
			"name": "Mandapeta",
			"state": "Andhra Pradesh"
		},
		{
			"id": "648",
			"name": "Dumka",
			"state": "Jharkhand"
		},
		{
			"id": "649",
			"name": "Seohara",
			"state": "Uttar Pradesh"
		},
		{
			"id": "650",
			"name": "Umarkhed",
			"state": "Maharashtra"
		},
		{
			"id": "651",
			"name": "Madhupur",
			"state": "Jharkhand"
		},
		{
			"id": "652",
			"name": "Vikramasingapuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "653",
			"name": "Punalur",
			"state": "Kerala"
		},
		{
			"id": "654",
			"name": "Kendrapara",
			"state": "Odisha"
		},
		{
			"id": "655",
			"name": "Sihor",
			"state": "Gujarat"
		},
		{
			"id": "656",
			"name": "Nellikuppam",
			"state": "Tamil Nadu"
		},
		{
			"id": "657",
			"name": "Samana",
			"state": "Punjab"
		},
		{
			"id": "658",
			"name": "Warora",
			"state": "Maharashtra"
		},
		{
			"id": "659",
			"name": "Nilambur",
			"state": "Kerala"
		},
		{
			"id": "660",
			"name": "Rasipuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "661",
			"name": "Ramnagar",
			"state": "Uttarakhand"
		},
		{
			"id": "662",
			"name": "Jammalamadugu",
			"state": "Andhra Pradesh"
		},
		{
			"id": "663",
			"name": "Nawanshahr",
			"state": "Punjab"
		},
		{
			"id": "664",
			"name": "Thoubal",
			"state": "Manipur"
		},
		{
			"id": "665",
			"name": "Athni",
			"state": "Karnataka"
		},
		{
			"id": "666",
			"name": "Cherthala",
			"state": "Kerala"
		},
		{
			"id": "667",
			"name": "Sidhi",
			"state": "Madhya Pradesh"
		},
		{
			"id": "668",
			"name": "Farooqnagar",
			"state": "Telangana"
		},
		{
			"id": "669",
			"name": "Peddapuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "670",
			"name": "Chirkunda",
			"state": "Jharkhand"
		},
		{
			"id": "671",
			"name": "Pachora",
			"state": "Maharashtra"
		},
		{
			"id": "672",
			"name": "Madhepura",
			"state": "Bihar"
		},
		{
			"id": "673",
			"name": "Pithoragarh",
			"state": "Uttarakhand"
		},
		{
			"id": "674",
			"name": "Tumsar",
			"state": "Maharashtra"
		},
		{
			"id": "675",
			"name": "Phalodi",
			"state": "Rajasthan"
		},
		{
			"id": "676",
			"name": "Tiruttani",
			"state": "Tamil Nadu"
		},
		{
			"id": "677",
			"name": "Rampura Phul",
			"state": "Punjab"
		},
		{
			"id": "678",
			"name": "Perinthalmanna",
			"state": "Kerala"
		},
		{
			"id": "679",
			"name": "Padrauna",
			"state": "Uttar Pradesh"
		},
		{
			"id": "680",
			"name": "Pipariya",
			"state": "Madhya Pradesh"
		},
		{
			"id": "681",
			"name": "Dalli-Rajhara",
			"state": "Chhattisgarh"
		},
		{
			"id": "682",
			"name": "Punganur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "683",
			"name": "Mattannur",
			"state": "Kerala"
		},
		{
			"id": "684",
			"name": "Mathura",
			"state": "Uttar Pradesh"
		},
		{
			"id": "685",
			"name": "Thakurdwara",
			"state": "Uttar Pradesh"
		},
		{
			"id": "686",
			"name": "Nandivaram-Guduvancheri",
			"state": "Tamil Nadu"
		},
		{
			"id": "687",
			"name": "Mulbagal",
			"state": "Karnataka"
		},
		{
			"id": "688",
			"name": "Manjlegaon",
			"state": "Maharashtra"
		},
		{
			"id": "689",
			"name": "Wankaner",
			"state": "Gujarat"
		},
		{
			"id": "690",
			"name": "Sillod",
			"state": "Maharashtra"
		},
		{
			"id": "691",
			"name": "Nidadavole",
			"state": "Andhra Pradesh"
		},
		{
			"id": "692",
			"name": "Surapura",
			"state": "Karnataka"
		},
		{
			"id": "693",
			"name": "Rajagangapur",
			"state": "Odisha"
		},
		{
			"id": "694",
			"name": "Sheikhpura",
			"state": "Bihar"
		},
		{
			"id": "695",
			"name": "Parlakhemundi",
			"state": "Odisha"
		},
		{
			"id": "696",
			"name": "Kalimpong",
			"state": "West Bengal"
		},
		{
			"id": "697",
			"name": "Siruguppa",
			"state": "Karnataka"
		},
		{
			"id": "698",
			"name": "Arvi",
			"state": "Maharashtra"
		},
		{
			"id": "699",
			"name": "Limbdi",
			"state": "Gujarat"
		},
		{
			"id": "700",
			"name": "Barpeta",
			"state": "Assam"
		},
		{
			"id": "701",
			"name": "Manglaur",
			"state": "Uttarakhand"
		},
		{
			"id": "702",
			"name": "Repalle",
			"state": "Andhra Pradesh"
		},
		{
			"id": "703",
			"name": "Mudhol",
			"state": "Karnataka"
		},
		{
			"id": "704",
			"name": "Shujalpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "705",
			"name": "Mandvi",
			"state": "Gujarat"
		},
		{
			"id": "706",
			"name": "Thangadh",
			"state": "Gujarat"
		},
		{
			"id": "707",
			"name": "Sironj",
			"state": "Madhya Pradesh"
		},
		{
			"id": "708",
			"name": "Nandura",
			"state": "Maharashtra"
		},
		{
			"id": "709",
			"name": "Shoranur",
			"state": "Kerala"
		},
		{
			"id": "710",
			"name": "Nathdwara",
			"state": "Rajasthan"
		},
		{
			"id": "711",
			"name": "Periyakulam",
			"state": "Tamil Nadu"
		},
		{
			"id": "712",
			"name": "Sultanganj",
			"state": "Bihar"
		},
		{
			"id": "713",
			"name": "Medak",
			"state": "Telangana"
		},
		{
			"id": "714",
			"name": "Narayanpet",
			"state": "Telangana"
		},
		{
			"id": "715",
			"name": "Raxaul Bazar",
			"state": "Bihar"
		},
		{
			"id": "716",
			"name": "Rajauri",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "717",
			"name": "Pernampattu",
			"state": "Tamil Nadu"
		},
		{
			"id": "718",
			"name": "Nainital",
			"state": "Uttarakhand"
		},
		{
			"id": "719",
			"name": "Ramachandrapuram",
			"state": "Andhra Pradesh"
		},
		{
			"id": "720",
			"name": "Vaijapur",
			"state": "Maharashtra"
		},
		{
			"id": "721",
			"name": "Nangal",
			"state": "Punjab"
		},
		{
			"id": "722",
			"name": "Sidlaghatta",
			"state": "Karnataka"
		},
		{
			"id": "723",
			"name": "Punch",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "724",
			"name": "Pandhurna",
			"state": "Madhya Pradesh"
		},
		{
			"id": "725",
			"name": "Wadgaon Road",
			"state": "Maharashtra"
		},
		{
			"id": "726",
			"name": "Talcher",
			"state": "Odisha"
		},
		{
			"id": "727",
			"name": "Varkala",
			"state": "Kerala"
		},
		{
			"id": "728",
			"name": "Pilani",
			"state": "Rajasthan"
		},
		{
			"id": "729",
			"name": "Nowgong",
			"state": "Madhya Pradesh"
		},
		{
			"id": "730",
			"name": "Naila Janjgir",
			"state": "Chhattisgarh"
		},
		{
			"id": "731",
			"name": "Mapusa",
			"state": "Goa"
		},
		{
			"id": "732",
			"name": "Vellakoil",
			"state": "Tamil Nadu"
		},
		{
			"id": "733",
			"name": "Merta City",
			"state": "Rajasthan"
		},
		{
			"id": "734",
			"name": "Sivaganga",
			"state": "Tamil Nadu"
		},
		{
			"id": "735",
			"name": "Mandideep",
			"state": "Madhya Pradesh"
		},
		{
			"id": "736",
			"name": "Sailu",
			"state": "Maharashtra"
		},
		{
			"id": "737",
			"name": "Vyara",
			"state": "Gujarat"
		},
		{
			"id": "738",
			"name": "Kovvur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "739",
			"name": "Vadalur",
			"state": "Tamil Nadu"
		},
		{
			"id": "740",
			"name": "Nawabganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "741",
			"name": "Padra",
			"state": "Gujarat"
		},
		{
			"id": "742",
			"name": "Sainthia",
			"state": "West Bengal"
		},
		{
			"id": "743",
			"name": "Siana",
			"state": "Uttar Pradesh"
		},
		{
			"id": "744",
			"name": "Shahpur",
			"state": "Karnataka"
		},
		{
			"id": "745",
			"name": "Sojat",
			"state": "Rajasthan"
		},
		{
			"id": "746",
			"name": "Noorpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "747",
			"name": "Paravoor",
			"state": "Kerala"
		},
		{
			"id": "748",
			"name": "Murtijapur",
			"state": "Maharashtra"
		},
		{
			"id": "749",
			"name": "Ramnagar",
			"state": "Bihar"
		},
		{
			"id": "750",
			"name": "Sundargarh",
			"state": "Odisha"
		},
		{
			"id": "751",
			"name": "Taki",
			"state": "West Bengal"
		},
		{
			"id": "752",
			"name": "Saundatti-Yellamma",
			"state": "Karnataka"
		},
		{
			"id": "753",
			"name": "Pathanamthitta",
			"state": "Kerala"
		},
		{
			"id": "754",
			"name": "Wadi",
			"state": "Karnataka"
		},
		{
			"id": "755",
			"name": "Rameshwaram",
			"state": "Tamil Nadu"
		},
		{
			"id": "756",
			"name": "Tasgaon",
			"state": "Maharashtra"
		},
		{
			"id": "757",
			"name": "Sikandra Rao",
			"state": "Uttar Pradesh"
		},
		{
			"id": "758",
			"name": "Sihora",
			"state": "Madhya Pradesh"
		},
		{
			"id": "759",
			"name": "Tiruvethipuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "760",
			"name": "Tiruvuru",
			"state": "Andhra Pradesh"
		},
		{
			"id": "761",
			"name": "Mehkar",
			"state": "Maharashtra"
		},
		{
			"id": "762",
			"name": "Peringathur",
			"state": "Kerala"
		},
		{
			"id": "763",
			"name": "Perambalur",
			"state": "Tamil Nadu"
		},
		{
			"id": "764",
			"name": "Manvi",
			"state": "Karnataka"
		},
		{
			"id": "765",
			"name": "Zunheboto",
			"state": "Nagaland"
		},
		{
			"id": "766",
			"name": "Mahnar Bazar",
			"state": "Bihar"
		},
		{
			"id": "767",
			"name": "Attingal",
			"state": "Kerala"
		},
		{
			"id": "768",
			"name": "Shahbad",
			"state": "Haryana"
		},
		{
			"id": "769",
			"name": "Puranpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "770",
			"name": "Nelamangala",
			"state": "Karnataka"
		},
		{
			"id": "771",
			"name": "Nakodar",
			"state": "Punjab"
		},
		{
			"id": "772",
			"name": "Lunawada",
			"state": "Gujarat"
		},
		{
			"id": "773",
			"name": "Murshidabad",
			"state": "West Bengal"
		},
		{
			"id": "774",
			"name": "Mahe",
			"state": "Puducherry"
		},
		{
			"id": "775",
			"name": "Lanka",
			"state": "Assam"
		},
		{
			"id": "776",
			"name": "Rudauli",
			"state": "Uttar Pradesh"
		},
		{
			"id": "777",
			"name": "Tuensang",
			"state": "Nagaland"
		},
		{
			"id": "778",
			"name": "Lakshmeshwar",
			"state": "Karnataka"
		},
		{
			"id": "779",
			"name": "Zira",
			"state": "Punjab"
		},
		{
			"id": "780",
			"name": "Yawal",
			"state": "Maharashtra"
		},
		{
			"id": "781",
			"name": "Thana Bhawan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "782",
			"name": "Ramdurg",
			"state": "Karnataka"
		},
		{
			"id": "783",
			"name": "Pulgaon",
			"state": "Maharashtra"
		},
		{
			"id": "784",
			"name": "Sadasivpet",
			"state": "Telangana"
		},
		{
			"id": "785",
			"name": "Nargund",
			"state": "Karnataka"
		},
		{
			"id": "786",
			"name": "Neem-Ka-Thana",
			"state": "Rajasthan"
		},
		{
			"id": "787",
			"name": "Memari",
			"state": "West Bengal"
		},
		{
			"id": "788",
			"name": "Nilanga",
			"state": "Maharashtra"
		},
		{
			"id": "789",
			"name": "Naharlagun",
			"state": "Arunachal Pradesh"
		},
		{
			"id": "790",
			"name": "Pakaur",
			"state": "Jharkhand"
		},
		{
			"id": "791",
			"name": "Wai",
			"state": "Maharashtra"
		},
		{
			"id": "792",
			"name": "Tarikere",
			"state": "Karnataka"
		},
		{
			"id": "793",
			"name": "Malavalli",
			"state": "Karnataka"
		},
		{
			"id": "794",
			"name": "Raisen",
			"state": "Madhya Pradesh"
		},
		{
			"id": "795",
			"name": "Lahar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "796",
			"name": "Uravakonda",
			"state": "Andhra Pradesh"
		},
		{
			"id": "797",
			"name": "Savanur",
			"state": "Karnataka"
		},
		{
			"id": "798",
			"name": "Sirohi",
			"state": "Rajasthan"
		},
		{
			"id": "799",
			"name": "Udhampur",
			"state": "Jammu and Kashmir"
		},
		{
			"id": "800",
			"name": "Umarga",
			"state": "Maharashtra"
		},
		{
			"id": "801",
			"name": "Pratapgarh",
			"state": "Rajasthan"
		},
		{
			"id": "802",
			"name": "Lingsugur",
			"state": "Karnataka"
		},
		{
			"id": "803",
			"name": "Usilampatti",
			"state": "Tamil Nadu"
		},
		{
			"id": "804",
			"name": "Palia Kalan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "805",
			"name": "Wokha",
			"state": "Nagaland"
		},
		{
			"id": "806",
			"name": "Rajpipla",
			"state": "Gujarat"
		},
		{
			"id": "807",
			"name": "Vijayapura",
			"state": "Karnataka"
		},
		{
			"id": "808",
			"name": "Rawatbhata",
			"state": "Rajasthan"
		},
		{
			"id": "809",
			"name": "Sangaria",
			"state": "Rajasthan"
		},
		{
			"id": "810",
			"name": "Paithan",
			"state": "Maharashtra"
		},
		{
			"id": "811",
			"name": "Rahuri",
			"state": "Maharashtra"
		},
		{
			"id": "812",
			"name": "Patti",
			"state": "Punjab"
		},
		{
			"id": "813",
			"name": "Zaidpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "814",
			"name": "Lalsot",
			"state": "Rajasthan"
		},
		{
			"id": "815",
			"name": "Maihar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "816",
			"name": "Vedaranyam",
			"state": "Tamil Nadu"
		},
		{
			"id": "817",
			"name": "Nawapur",
			"state": "Maharashtra"
		},
		{
			"id": "818",
			"name": "Solan",
			"state": "Himachal Pradesh"
		},
		{
			"id": "819",
			"name": "Vapi",
			"state": "Gujarat"
		},
		{
			"id": "820",
			"name": "Sanawad",
			"state": "Madhya Pradesh"
		},
		{
			"id": "821",
			"name": "Warisaliganj",
			"state": "Bihar"
		},
		{
			"id": "822",
			"name": "Revelganj",
			"state": "Bihar"
		},
		{
			"id": "823",
			"name": "Sabalgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "824",
			"name": "Tuljapur",
			"state": "Maharashtra"
		},
		{
			"id": "825",
			"name": "Simdega",
			"state": "Jharkhand"
		},
		{
			"id": "826",
			"name": "Musabani",
			"state": "Jharkhand"
		},
		{
			"id": "827",
			"name": "Kodungallur",
			"state": "Kerala"
		},
		{
			"id": "828",
			"name": "Phulabani",
			"state": "Odisha"
		},
		{
			"id": "829",
			"name": "Umreth",
			"state": "Gujarat"
		},
		{
			"id": "830",
			"name": "Narsipatnam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "831",
			"name": "Nautanwa",
			"state": "Uttar Pradesh"
		},
		{
			"id": "832",
			"name": "Rajgir",
			"state": "Bihar"
		},
		{
			"id": "833",
			"name": "Yellandu",
			"state": "Telangana"
		},
		{
			"id": "834",
			"name": "Sathyamangalam",
			"state": "Tamil Nadu"
		},
		{
			"id": "835",
			"name": "Pilibanga",
			"state": "Rajasthan"
		},
		{
			"id": "836",
			"name": "Morshi",
			"state": "Maharashtra"
		},
		{
			"id": "837",
			"name": "Pehowa",
			"state": "Haryana"
		},
		{
			"id": "838",
			"name": "Sonepur",
			"state": "Bihar"
		},
		{
			"id": "839",
			"name": "Pappinisseri",
			"state": "Kerala"
		},
		{
			"id": "840",
			"name": "Zamania",
			"state": "Uttar Pradesh"
		},
		{
			"id": "841",
			"name": "Mihijam",
			"state": "Jharkhand"
		},
		{
			"id": "842",
			"name": "Purna",
			"state": "Maharashtra"
		},
		{
			"id": "843",
			"name": "Puliyankudi",
			"state": "Tamil Nadu"
		},
		{
			"id": "844",
			"name": "Shikarpur, Bulandshahr",
			"state": "Uttar Pradesh"
		},
		{
			"id": "845",
			"name": "Umaria",
			"state": "Madhya Pradesh"
		},
		{
			"id": "846",
			"name": "Porsa",
			"state": "Madhya Pradesh"
		},
		{
			"id": "847",
			"name": "Naugawan Sadat",
			"state": "Uttar Pradesh"
		},
		{
			"id": "848",
			"name": "Fatehpur Sikri",
			"state": "Uttar Pradesh"
		},
		{
			"id": "849",
			"name": "Manuguru",
			"state": "Telangana"
		},
		{
			"id": "850",
			"name": "Udaipur",
			"state": "Tripura"
		},
		{
			"id": "851",
			"name": "Pipar City",
			"state": "Rajasthan"
		},
		{
			"id": "852",
			"name": "Pattamundai",
			"state": "Odisha"
		},
		{
			"id": "853",
			"name": "Nanjikottai",
			"state": "Tamil Nadu"
		},
		{
			"id": "854",
			"name": "Taranagar",
			"state": "Rajasthan"
		},
		{
			"id": "855",
			"name": "Yerraguntla",
			"state": "Andhra Pradesh"
		},
		{
			"id": "856",
			"name": "Satana",
			"state": "Maharashtra"
		},
		{
			"id": "857",
			"name": "Sherghati",
			"state": "Bihar"
		},
		{
			"id": "858",
			"name": "Sankeshwara",
			"state": "Karnataka"
		},
		{
			"id": "859",
			"name": "Madikeri",
			"state": "Karnataka"
		},
		{
			"id": "860",
			"name": "Thuraiyur",
			"state": "Tamil Nadu"
		},
		{
			"id": "861",
			"name": "Sanand",
			"state": "Gujarat"
		},
		{
			"id": "862",
			"name": "Rajula",
			"state": "Gujarat"
		},
		{
			"id": "863",
			"name": "Kyathampalle",
			"state": "Telangana"
		},
		{
			"id": "864",
			"name": "Shahabad, Rampur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "865",
			"name": "Tilda Newra",
			"state": "Chhattisgarh"
		},
		{
			"id": "866",
			"name": "Narsinghgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "867",
			"name": "Chittur-Thathamangalam",
			"state": "Kerala"
		},
		{
			"id": "868",
			"name": "Malaj Khand",
			"state": "Madhya Pradesh"
		},
		{
			"id": "869",
			"name": "Sarangpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "870",
			"name": "Robertsganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "871",
			"name": "Sirkali",
			"state": "Tamil Nadu"
		},
		{
			"id": "872",
			"name": "Radhanpur",
			"state": "Gujarat"
		},
		{
			"id": "873",
			"name": "Tiruchendur",
			"state": "Tamil Nadu"
		},
		{
			"id": "874",
			"name": "Utraula",
			"state": "Uttar Pradesh"
		},
		{
			"id": "875",
			"name": "Patratu",
			"state": "Jharkhand"
		},
		{
			"id": "876",
			"name": "Vijainagar, Ajmer",
			"state": "Rajasthan"
		},
		{
			"id": "877",
			"name": "Periyasemur",
			"state": "Tamil Nadu"
		},
		{
			"id": "878",
			"name": "Pathri",
			"state": "Maharashtra"
		},
		{
			"id": "879",
			"name": "Sadabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "880",
			"name": "Talikota",
			"state": "Karnataka"
		},
		{
			"id": "881",
			"name": "Sinnar",
			"state": "Maharashtra"
		},
		{
			"id": "882",
			"name": "Mungeli",
			"state": "Chhattisgarh"
		},
		{
			"id": "883",
			"name": "Sedam",
			"state": "Karnataka"
		},
		{
			"id": "884",
			"name": "Shikaripur",
			"state": "Karnataka"
		},
		{
			"id": "885",
			"name": "Sumerpur",
			"state": "Rajasthan"
		},
		{
			"id": "886",
			"name": "Sattur",
			"state": "Tamil Nadu"
		},
		{
			"id": "887",
			"name": "Sugauli",
			"state": "Bihar"
		},
		{
			"id": "888",
			"name": "Lumding",
			"state": "Assam"
		},
		{
			"id": "889",
			"name": "Vandavasi",
			"state": "Tamil Nadu"
		},
		{
			"id": "890",
			"name": "Titlagarh",
			"state": "Odisha"
		},
		{
			"id": "891",
			"name": "Uchgaon",
			"state": "Maharashtra"
		},
		{
			"id": "892",
			"name": "Mokokchung",
			"state": "Nagaland"
		},
		{
			"id": "893",
			"name": "Paschim Punropara",
			"state": "West Bengal"
		},
		{
			"id": "894",
			"name": "Sagwara",
			"state": "Rajasthan"
		},
		{
			"id": "895",
			"name": "Ramganj Mandi",
			"state": "Rajasthan"
		},
		{
			"id": "896",
			"name": "Tarakeswar",
			"state": "West Bengal"
		},
		{
			"id": "897",
			"name": "Mahalingapura",
			"state": "Karnataka"
		},
		{
			"id": "898",
			"name": "Dharmanagar",
			"state": "Tripura"
		},
		{
			"id": "899",
			"name": "Mahemdabad",
			"state": "Gujarat"
		},
		{
			"id": "900",
			"name": "Manendragarh",
			"state": "Chhattisgarh"
		},
		{
			"id": "901",
			"name": "Uran",
			"state": "Maharashtra"
		},
		{
			"id": "902",
			"name": "Tharamangalam",
			"state": "Tamil Nadu"
		},
		{
			"id": "903",
			"name": "Tirukkoyilur",
			"state": "Tamil Nadu"
		},
		{
			"id": "904",
			"name": "Pen",
			"state": "Maharashtra"
		},
		{
			"id": "905",
			"name": "Makhdumpur",
			"state": "Bihar"
		},
		{
			"id": "906",
			"name": "Maner",
			"state": "Bihar"
		},
		{
			"id": "907",
			"name": "Oddanchatram",
			"state": "Tamil Nadu"
		},
		{
			"id": "908",
			"name": "Palladam",
			"state": "Tamil Nadu"
		},
		{
			"id": "909",
			"name": "Mundi",
			"state": "Madhya Pradesh"
		},
		{
			"id": "910",
			"name": "Nabarangapur",
			"state": "Odisha"
		},
		{
			"id": "911",
			"name": "Mudalagi",
			"state": "Karnataka"
		},
		{
			"id": "912",
			"name": "Samalkha",
			"state": "Haryana"
		},
		{
			"id": "913",
			"name": "Nepanagar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "914",
			"name": "Karjat",
			"state": "Maharashtra"
		},
		{
			"id": "915",
			"name": "Ranavav",
			"state": "Gujarat"
		},
		{
			"id": "916",
			"name": "Pedana",
			"state": "Andhra Pradesh"
		},
		{
			"id": "917",
			"name": "Pinjore",
			"state": "Haryana"
		},
		{
			"id": "918",
			"name": "Lakheri",
			"state": "Rajasthan"
		},
		{
			"id": "919",
			"name": "Pasan",
			"state": "Madhya Pradesh"
		},
		{
			"id": "920",
			"name": "Puttur",
			"state": "Andhra Pradesh"
		},
		{
			"id": "921",
			"name": "Vadakkuvalliyur",
			"state": "Tamil Nadu"
		},
		{
			"id": "922",
			"name": "Tirukalukundram",
			"state": "Tamil Nadu"
		},
		{
			"id": "923",
			"name": "Mahidpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "924",
			"name": "Mussoorie",
			"state": "Uttarakhand"
		},
		{
			"id": "925",
			"name": "Muvattupuzha",
			"state": "Kerala"
		},
		{
			"id": "926",
			"name": "Rasra",
			"state": "Uttar Pradesh"
		},
		{
			"id": "927",
			"name": "Udaipurwati",
			"state": "Rajasthan"
		},
		{
			"id": "928",
			"name": "Manwath",
			"state": "Maharashtra"
		},
		{
			"id": "929",
			"name": "Adoor",
			"state": "Kerala"
		},
		{
			"id": "930",
			"name": "Uthamapalayam",
			"state": "Tamil Nadu"
		},
		{
			"id": "931",
			"name": "Partur",
			"state": "Maharashtra"
		},
		{
			"id": "932",
			"name": "Nahan",
			"state": "Himachal Pradesh"
		},
		{
			"id": "933",
			"name": "Ladwa",
			"state": "Haryana"
		},
		{
			"id": "934",
			"name": "Mankachar",
			"state": "Assam"
		},
		{
			"id": "935",
			"name": "Nongstoin",
			"state": "Meghalaya"
		},
		{
			"id": "936",
			"name": "Losal",
			"state": "Rajasthan"
		},
		{
			"id": "937",
			"name": "Sri Madhopur",
			"state": "Rajasthan"
		},
		{
			"id": "938",
			"name": "Ramngarh",
			"state": "Rajasthan"
		},
		{
			"id": "939",
			"name": "Mavelikkara",
			"state": "Kerala"
		},
		{
			"id": "940",
			"name": "Rawatsar",
			"state": "Rajasthan"
		},
		{
			"id": "941",
			"name": "Rajakhera",
			"state": "Rajasthan"
		},
		{
			"id": "942",
			"name": "Lar",
			"state": "Uttar Pradesh"
		},
		{
			"id": "943",
			"name": "Lal Gopalganj Nindaura",
			"state": "Uttar Pradesh"
		},
		{
			"id": "944",
			"name": "Muddebihal",
			"state": "Karnataka"
		},
		{
			"id": "945",
			"name": "Sirsaganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "946",
			"name": "Shahpura",
			"state": "Rajasthan"
		},
		{
			"id": "947",
			"name": "Surandai",
			"state": "Tamil Nadu"
		},
		{
			"id": "948",
			"name": "Sangole",
			"state": "Maharashtra"
		},
		{
			"id": "949",
			"name": "Pavagada",
			"state": "Karnataka"
		},
		{
			"id": "950",
			"name": "Tharad",
			"state": "Gujarat"
		},
		{
			"id": "951",
			"name": "Mansa",
			"state": "Gujarat"
		},
		{
			"id": "952",
			"name": "Umbergaon",
			"state": "Gujarat"
		},
		{
			"id": "953",
			"name": "Mavoor",
			"state": "Kerala"
		},
		{
			"id": "954",
			"name": "Nalbari",
			"state": "Assam"
		},
		{
			"id": "955",
			"name": "Talaja",
			"state": "Gujarat"
		},
		{
			"id": "956",
			"name": "Malur",
			"state": "Karnataka"
		},
		{
			"id": "957",
			"name": "Mangrulpir",
			"state": "Maharashtra"
		},
		{
			"id": "958",
			"name": "Soro",
			"state": "Odisha"
		},
		{
			"id": "959",
			"name": "Shahpura",
			"state": "Rajasthan"
		},
		{
			"id": "960",
			"name": "Vadnagar",
			"state": "Gujarat"
		},
		{
			"id": "961",
			"name": "Raisinghnagar",
			"state": "Rajasthan"
		},
		{
			"id": "962",
			"name": "Sindhagi",
			"state": "Karnataka"
		},
		{
			"id": "963",
			"name": "Sanduru",
			"state": "Karnataka"
		},
		{
			"id": "964",
			"name": "Sohna",
			"state": "Haryana"
		},
		{
			"id": "965",
			"name": "Manavadar",
			"state": "Gujarat"
		},
		{
			"id": "966",
			"name": "Pihani",
			"state": "Uttar Pradesh"
		},
		{
			"id": "967",
			"name": "Safidon",
			"state": "Haryana"
		},
		{
			"id": "968",
			"name": "Risod",
			"state": "Maharashtra"
		},
		{
			"id": "969",
			"name": "Rosera",
			"state": "Bihar"
		},
		{
			"id": "970",
			"name": "Sankari",
			"state": "Tamil Nadu"
		},
		{
			"id": "971",
			"name": "Malpura",
			"state": "Rajasthan"
		},
		{
			"id": "972",
			"name": "Sonamukhi",
			"state": "West Bengal"
		},
		{
			"id": "973",
			"name": "Shamsabad, Agra",
			"state": "Uttar Pradesh"
		},
		{
			"id": "974",
			"name": "Nokha",
			"state": "Bihar"
		},
		{
			"id": "975",
			"name": "PandUrban Agglomeration",
			"state": "West Bengal"
		},
		{
			"id": "976",
			"name": "Mainaguri",
			"state": "West Bengal"
		},
		{
			"id": "977",
			"name": "Afzalpur",
			"state": "Karnataka"
		},
		{
			"id": "978",
			"name": "Shirur",
			"state": "Maharashtra"
		},
		{
			"id": "979",
			"name": "Salaya",
			"state": "Gujarat"
		},
		{
			"id": "980",
			"name": "Shenkottai",
			"state": "Tamil Nadu"
		},
		{
			"id": "981",
			"name": "Pratapgarh",
			"state": "Tripura"
		},
		{
			"id": "982",
			"name": "Vadipatti",
			"state": "Tamil Nadu"
		},
		{
			"id": "983",
			"name": "Nagarkurnool",
			"state": "Telangana"
		},
		{
			"id": "984",
			"name": "Savner",
			"state": "Maharashtra"
		},
		{
			"id": "985",
			"name": "Sasvad",
			"state": "Maharashtra"
		},
		{
			"id": "986",
			"name": "Rudrapur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "987",
			"name": "Soron",
			"state": "Uttar Pradesh"
		},
		{
			"id": "988",
			"name": "Sholingur",
			"state": "Tamil Nadu"
		},
		{
			"id": "989",
			"name": "Pandharkaoda",
			"state": "Maharashtra"
		},
		{
			"id": "990",
			"name": "Perumbavoor",
			"state": "Kerala"
		},
		{
			"id": "991",
			"name": "Maddur",
			"state": "Karnataka"
		},
		{
			"id": "992",
			"name": "Nadbai",
			"state": "Rajasthan"
		},
		{
			"id": "993",
			"name": "Talode",
			"state": "Maharashtra"
		},
		{
			"id": "994",
			"name": "Shrigonda",
			"state": "Maharashtra"
		},
		{
			"id": "995",
			"name": "Madhugiri",
			"state": "Karnataka"
		},
		{
			"id": "996",
			"name": "Tekkalakote",
			"state": "Karnataka"
		},
		{
			"id": "997",
			"name": "Seoni-Malwa",
			"state": "Madhya Pradesh"
		},
		{
			"id": "998",
			"name": "Shirdi",
			"state": "Maharashtra"
		},
		{
			"id": "999",
			"name": "SUrban Agglomerationr",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1000",
			"name": "Terdal",
			"state": "Karnataka"
		},
		{
			"id": "1001",
			"name": "Raver",
			"state": "Maharashtra"
		},
		{
			"id": "1002",
			"name": "Tirupathur",
			"state": "Tamil Nadu"
		},
		{
			"id": "1003",
			"name": "Taraori",
			"state": "Haryana"
		},
		{
			"id": "1004",
			"name": "Mukhed",
			"state": "Maharashtra"
		},
		{
			"id": "1005",
			"name": "Manachanallur",
			"state": "Tamil Nadu"
		},
		{
			"id": "1006",
			"name": "Rehli",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1007",
			"name": "Sanchore",
			"state": "Rajasthan"
		},
		{
			"id": "1008",
			"name": "Rajura",
			"state": "Maharashtra"
		},
		{
			"id": "1009",
			"name": "Piro",
			"state": "Bihar"
		},
		{
			"id": "1010",
			"name": "Mudabidri",
			"state": "Karnataka"
		},
		{
			"id": "1011",
			"name": "Vadgaon Kasba",
			"state": "Maharashtra"
		},
		{
			"id": "1012",
			"name": "Nagar",
			"state": "Rajasthan"
		},
		{
			"id": "1013",
			"name": "Vijapur",
			"state": "Gujarat"
		},
		{
			"id": "1014",
			"name": "Viswanatham",
			"state": "Tamil Nadu"
		},
		{
			"id": "1015",
			"name": "Polur",
			"state": "Tamil Nadu"
		},
		{
			"id": "1016",
			"name": "Panagudi",
			"state": "Tamil Nadu"
		},
		{
			"id": "1017",
			"name": "Manawar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1018",
			"name": "Tehri",
			"state": "Uttarakhand"
		},
		{
			"id": "1019",
			"name": "Samdhan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1020",
			"name": "Pardi",
			"state": "Gujarat"
		},
		{
			"id": "1021",
			"name": "Rahatgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1022",
			"name": "Panagar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1023",
			"name": "Uthiramerur",
			"state": "Tamil Nadu"
		},
		{
			"id": "1024",
			"name": "Tirora",
			"state": "Maharashtra"
		},
		{
			"id": "1025",
			"name": "Rangia",
			"state": "Assam"
		},
		{
			"id": "1026",
			"name": "Sahjanwa",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1027",
			"name": "Wara Seoni",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1028",
			"name": "Magadi",
			"state": "Karnataka"
		},
		{
			"id": "1029",
			"name": "Rajgarh (Alwar)",
			"state": "Rajasthan"
		},
		{
			"id": "1030",
			"name": "Rafiganj",
			"state": "Bihar"
		},
		{
			"id": "1031",
			"name": "Tarana",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1032",
			"name": "Rampur Maniharan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1033",
			"name": "Sheoganj",
			"state": "Rajasthan"
		},
		{
			"id": "1034",
			"name": "Raikot",
			"state": "Punjab"
		},
		{
			"id": "1035",
			"name": "Pauri",
			"state": "Uttarakhand"
		},
		{
			"id": "1036",
			"name": "Sumerpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1037",
			"name": "Navalgund",
			"state": "Karnataka"
		},
		{
			"id": "1038",
			"name": "Shahganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1039",
			"name": "Marhaura",
			"state": "Bihar"
		},
		{
			"id": "1040",
			"name": "Tulsipur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1041",
			"name": "Sadri",
			"state": "Rajasthan"
		},
		{
			"id": "1042",
			"name": "Thiruthuraipoondi",
			"state": "Tamil Nadu"
		},
		{
			"id": "1043",
			"name": "Shiggaon",
			"state": "Karnataka"
		},
		{
			"id": "1044",
			"name": "Pallapatti",
			"state": "Tamil Nadu"
		},
		{
			"id": "1045",
			"name": "Mahendragarh",
			"state": "Haryana"
		},
		{
			"id": "1046",
			"name": "Sausar",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1047",
			"name": "Ponneri",
			"state": "Tamil Nadu"
		},
		{
			"id": "1048",
			"name": "Mahad",
			"state": "Maharashtra"
		},
		{
			"id": "1049",
			"name": "Lohardaga",
			"state": "Jharkhand"
		},
		{
			"id": "1050",
			"name": "Tirwaganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1051",
			"name": "Margherita",
			"state": "Assam"
		},
		{
			"id": "1052",
			"name": "Sundarnagar",
			"state": "Himachal Pradesh"
		},
		{
			"id": "1053",
			"name": "Rajgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1054",
			"name": "Mangaldoi",
			"state": "Assam"
		},
		{
			"id": "1055",
			"name": "Renigunta",
			"state": "Andhra Pradesh"
		},
		{
			"id": "1056",
			"name": "Longowal",
			"state": "Punjab"
		},
		{
			"id": "1057",
			"name": "Ratia",
			"state": "Haryana"
		},
		{
			"id": "1058",
			"name": "Lalgudi",
			"state": "Tamil Nadu"
		},
		{
			"id": "1059",
			"name": "Shrirangapattana",
			"state": "Karnataka"
		},
		{
			"id": "1060",
			"name": "Niwari",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1061",
			"name": "Natham",
			"state": "Tamil Nadu"
		},
		{
			"id": "1062",
			"name": "Unnamalaikadai",
			"state": "Tamil Nadu"
		},
		{
			"id": "1063",
			"name": "PurqUrban Agglomerationzi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1064",
			"name": "Shamsabad, Farrukhabad",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1065",
			"name": "Mirganj",
			"state": "Bihar"
		},
		{
			"id": "1066",
			"name": "Todaraisingh",
			"state": "Rajasthan"
		},
		{
			"id": "1067",
			"name": "Warhapur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1068",
			"name": "Rajam",
			"state": "Andhra Pradesh"
		},
		{
			"id": "1069",
			"name": "Urmar Tanda",
			"state": "Punjab"
		},
		{
			"id": "1070",
			"name": "Lonar",
			"state": "Maharashtra"
		},
		{
			"id": "1071",
			"name": "Powayan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1072",
			"name": "P.N.Patti",
			"state": "Tamil Nadu"
		},
		{
			"id": "1073",
			"name": "Palampur",
			"state": "Himachal Pradesh"
		},
		{
			"id": "1074",
			"name": "Srisailam Project (Right Flank Colony) Township",
			"state": "Andhra Pradesh"
		},
		{
			"id": "1075",
			"name": "Sindagi",
			"state": "Karnataka"
		},
		{
			"id": "1076",
			"name": "Sandi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1077",
			"name": "Vaikom",
			"state": "Kerala"
		},
		{
			"id": "1078",
			"name": "Malda",
			"state": "West Bengal"
		},
		{
			"id": "1079",
			"name": "Tharangambadi",
			"state": "Tamil Nadu"
		},
		{
			"id": "1080",
			"name": "Sakaleshapura",
			"state": "Karnataka"
		},
		{
			"id": "1081",
			"name": "Lalganj",
			"state": "Bihar"
		},
		{
			"id": "1082",
			"name": "Malkangiri",
			"state": "Odisha"
		},
		{
			"id": "1083",
			"name": "Rapar",
			"state": "Gujarat"
		},
		{
			"id": "1084",
			"name": "Mauganj",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1085",
			"name": "Todabhim",
			"state": "Rajasthan"
		},
		{
			"id": "1086",
			"name": "Srinivaspur",
			"state": "Karnataka"
		},
		{
			"id": "1087",
			"name": "Murliganj",
			"state": "Bihar"
		},
		{
			"id": "1088",
			"name": "Reengus",
			"state": "Rajasthan"
		},
		{
			"id": "1089",
			"name": "Sawantwadi",
			"state": "Maharashtra"
		},
		{
			"id": "1090",
			"name": "Tittakudi",
			"state": "Tamil Nadu"
		},
		{
			"id": "1091",
			"name": "Lilong",
			"state": "Manipur"
		},
		{
			"id": "1092",
			"name": "Rajaldesar",
			"state": "Rajasthan"
		},
		{
			"id": "1093",
			"name": "Pathardi",
			"state": "Maharashtra"
		},
		{
			"id": "1094",
			"name": "Achhnera",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1095",
			"name": "Pacode",
			"state": "Tamil Nadu"
		},
		{
			"id": "1096",
			"name": "Naraura",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1097",
			"name": "Nakur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1098",
			"name": "Palai",
			"state": "Kerala"
		},
		{
			"id": "1099",
			"name": "Morinda, India",
			"state": "Punjab"
		},
		{
			"id": "1100",
			"name": "Manasa",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1101",
			"name": "Nainpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1102",
			"name": "Sahaspur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1103",
			"name": "Pauni",
			"state": "Maharashtra"
		},
		{
			"id": "1104",
			"name": "Prithvipur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1105",
			"name": "Ramtek",
			"state": "Maharashtra"
		},
		{
			"id": "1106",
			"name": "Silapathar",
			"state": "Assam"
		},
		{
			"id": "1107",
			"name": "Songadh",
			"state": "Gujarat"
		},
		{
			"id": "1108",
			"name": "Safipur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1109",
			"name": "Sohagpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1110",
			"name": "Mul",
			"state": "Maharashtra"
		},
		{
			"id": "1111",
			"name": "Sadulshahar",
			"state": "Rajasthan"
		},
		{
			"id": "1112",
			"name": "Phillaur",
			"state": "Punjab"
		},
		{
			"id": "1113",
			"name": "Sambhar",
			"state": "Rajasthan"
		},
		{
			"id": "1114",
			"name": "Prantij",
			"state": "Rajasthan"
		},
		{
			"id": "1115",
			"name": "Nagla",
			"state": "Uttarakhand"
		},
		{
			"id": "1116",
			"name": "Pattran",
			"state": "Punjab"
		},
		{
			"id": "1117",
			"name": "Mount Abu",
			"state": "Rajasthan"
		},
		{
			"id": "1118",
			"name": "Reoti",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1119",
			"name": "Tenu dam-cum-Kathhara",
			"state": "Jharkhand"
		},
		{
			"id": "1120",
			"name": "Panchla",
			"state": "West Bengal"
		},
		{
			"id": "1121",
			"name": "Sitarganj",
			"state": "Uttarakhand"
		},
		{
			"id": "1122",
			"name": "Pasighat",
			"state": "Arunachal Pradesh"
		},
		{
			"id": "1123",
			"name": "Motipur",
			"state": "Bihar"
		},
		{
			"id": "1124",
			"name": "O' Valley",
			"state": "Tamil Nadu"
		},
		{
			"id": "1125",
			"name": "Raghunathpur",
			"state": "West Bengal"
		},
		{
			"id": "1126",
			"name": "Suriyampalayam",
			"state": "Tamil Nadu"
		},
		{
			"id": "1127",
			"name": "Qadian",
			"state": "Punjab"
		},
		{
			"id": "1128",
			"name": "Rairangpur",
			"state": "Odisha"
		},
		{
			"id": "1129",
			"name": "Silvassa",
			"state": "Dadra and Nagar Haveli"
		},
		{
			"id": "1130",
			"name": "Nowrozabad (Khodargama)",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1131",
			"name": "Mangrol",
			"state": "Rajasthan"
		},
		{
			"id": "1132",
			"name": "Soyagaon",
			"state": "Maharashtra"
		},
		{
			"id": "1133",
			"name": "Sujanpur",
			"state": "Punjab"
		},
		{
			"id": "1134",
			"name": "Manihari",
			"state": "Bihar"
		},
		{
			"id": "1135",
			"name": "Sikanderpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1136",
			"name": "Mangalvedhe",
			"state": "Maharashtra"
		},
		{
			"id": "1137",
			"name": "Phulera",
			"state": "Rajasthan"
		},
		{
			"id": "1138",
			"name": "Ron",
			"state": "Karnataka"
		},
		{
			"id": "1139",
			"name": "Sholavandan",
			"state": "Tamil Nadu"
		},
		{
			"id": "1140",
			"name": "Saidpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1141",
			"name": "Shamgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1142",
			"name": "Thammampatti",
			"state": "Tamil Nadu"
		},
		{
			"id": "1143",
			"name": "Maharajpur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1144",
			"name": "Multai",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1145",
			"name": "Mukerian",
			"state": "Punjab"
		},
		{
			"id": "1146",
			"name": "Sirsi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1147",
			"name": "Purwa",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1148",
			"name": "Sheohar",
			"state": "Bihar"
		},
		{
			"id": "1149",
			"name": "Namagiripettai",
			"state": "Tamil Nadu"
		},
		{
			"id": "1150",
			"name": "Parasi",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1151",
			"name": "Lathi",
			"state": "Gujarat"
		},
		{
			"id": "1152",
			"name": "Lalganj",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1153",
			"name": "Narkhed",
			"state": "Maharashtra"
		},
		{
			"id": "1154",
			"name": "Mathabhanga",
			"state": "West Bengal"
		},
		{
			"id": "1155",
			"name": "Shendurjana",
			"state": "Maharashtra"
		},
		{
			"id": "1156",
			"name": "Peravurani",
			"state": "Tamil Nadu"
		},
		{
			"id": "1157",
			"name": "Mariani",
			"state": "Assam"
		},
		{
			"id": "1158",
			"name": "Phulpur",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1159",
			"name": "Rania",
			"state": "Haryana"
		},
		{
			"id": "1160",
			"name": "Pali",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1161",
			"name": "Pachore",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1162",
			"name": "Parangipettai",
			"state": "Tamil Nadu"
		},
		{
			"id": "1163",
			"name": "Pudupattinam",
			"state": "Tamil Nadu"
		},
		{
			"id": "1164",
			"name": "Panniyannur",
			"state": "Kerala"
		},
		{
			"id": "1165",
			"name": "Maharajganj",
			"state": "Bihar"
		},
		{
			"id": "1166",
			"name": "Rau",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1167",
			"name": "Monoharpur",
			"state": "West Bengal"
		},
		{
			"id": "1168",
			"name": "Mandawa",
			"state": "Rajasthan"
		},
		{
			"id": "1169",
			"name": "Marigaon",
			"state": "Assam"
		},
		{
			"id": "1170",
			"name": "Pallikonda",
			"state": "Tamil Nadu"
		},
		{
			"id": "1171",
			"name": "Pindwara",
			"state": "Rajasthan"
		},
		{
			"id": "1172",
			"name": "Shishgarh",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1173",
			"name": "Patur",
			"state": "Maharashtra"
		},
		{
			"id": "1174",
			"name": "Mayang Imphal",
			"state": "Manipur"
		},
		{
			"id": "1175",
			"name": "Mhowgaon",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1176",
			"name": "Guruvayoor",
			"state": "Kerala"
		},
		{
			"id": "1177",
			"name": "Mhaswad",
			"state": "Maharashtra"
		},
		{
			"id": "1178",
			"name": "Sahawar",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1179",
			"name": "Sivagiri",
			"state": "Tamil Nadu"
		},
		{
			"id": "1180",
			"name": "Mundargi",
			"state": "Karnataka"
		},
		{
			"id": "1181",
			"name": "Punjaipugalur",
			"state": "Tamil Nadu"
		},
		{
			"id": "1182",
			"name": "Kailasahar",
			"state": "Tripura"
		},
		{
			"id": "1183",
			"name": "Samthar",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1184",
			"name": "Sakti",
			"state": "Chhattisgarh"
		},
		{
			"id": "1185",
			"name": "Sadalagi",
			"state": "Karnataka"
		},
		{
			"id": "1186",
			"name": "Silao",
			"state": "Bihar"
		},
		{
			"id": "1187",
			"name": "Mandalgarh",
			"state": "Rajasthan"
		},
		{
			"id": "1188",
			"name": "Loha",
			"state": "Maharashtra"
		},
		{
			"id": "1189",
			"name": "Pukhrayan",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1190",
			"name": "Padmanabhapuram",
			"state": "Tamil Nadu"
		},
		{
			"id": "1191",
			"name": "Belonia",
			"state": "Tripura"
		},
		{
			"id": "1192",
			"name": "Saiha",
			"state": "Mizoram"
		},
		{
			"id": "1193",
			"name": "Srirampore",
			"state": "West Bengal"
		},
		{
			"id": "1194",
			"name": "Talwara",
			"state": "Punjab"
		},
		{
			"id": "1195",
			"name": "Puthuppally",
			"state": "Kerala"
		},
		{
			"id": "1196",
			"name": "Khowai",
			"state": "Tripura"
		},
		{
			"id": "1197",
			"name": "Vijaypur",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1198",
			"name": "Takhatgarh",
			"state": "Rajasthan"
		},
		{
			"id": "1199",
			"name": "Thirupuvanam",
			"state": "Tamil Nadu"
		},
		{
			"id": "1200",
			"name": "Adra",
			"state": "West Bengal"
		},
		{
			"id": "1201",
			"name": "Piriyapatna",
			"state": "Karnataka"
		},
		{
			"id": "1202",
			"name": "Obra",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1203",
			"name": "Adalaj",
			"state": "Gujarat"
		},
		{
			"id": "1204",
			"name": "Nandgaon",
			"state": "Maharashtra"
		},
		{
			"id": "1205",
			"name": "Barh",
			"state": "Bihar"
		},
		{
			"id": "1206",
			"name": "Chhapra",
			"state": "Gujarat"
		},
		{
			"id": "1207",
			"name": "Panamattom",
			"state": "Kerala"
		},
		{
			"id": "1208",
			"name": "Niwai",
			"state": "Uttar Pradesh"
		},
		{
			"id": "1209",
			"name": "Bageshwar",
			"state": "Uttarakhand"
		},
		{
			"id": "1210",
			"name": "Tarbha",
			"state": "Odisha"
		},
		{
			"id": "1211",
			"name": "Adyar",
			"state": "Karnataka"
		},
		{
			"id": "1212",
			"name": "Narsinghgarh",
			"state": "Madhya Pradesh"
		},
		{
			"id": "1213",
			"name": "Warud",
			"state": "Maharashtra"
		},
		{
			"id": "1214",
			"name": "Asarganj",
			"state": "Bihar"
		},
		{
			"id": "1215",
			"name": "Sarsod",
			"state": "Haryana"
		},
		{
			"id": "1216",
			"name": "Gandhinagar",
			"state": "Gujarat"
		},
		{
			"id":"1217",
			"name":"Kullu",
			"state":"Himachal Pradesh"
		},
		{
			"id":"1218",
			"name":"Manali",
			"state":"Himachal Praddesh"
		},
		{
			"id":"1219",
			"name":"Mirzapur",
			"state":"Uttar Pradesh"
		},
		{
			"id":"1220",
			"name":"Kota",
			"state":"Rajasthan"
		},
		{
		  "id":"1221",
		   "name":"Dispur",
		   "state":"Assam"
		}
	]
  //get all countries
	service.getCode = function () {
	  return countrycode;
  
	};
	//get all countries
	service.getCountry = function () {
	  return countrylist;
  
	};
	//get all states
	service.getCountryState = function () {
  
  
	  return statelist;
  
	};
  //get country based on code
	service.getCountryfromCode = function (code) {
	  console.log("values",code);
	  var countries = ($filter('filter')(countrylist, { code: code }));
	  console.log(countries);
	  return countries;
	};
	
	//get state based on country
	service.getStatefromCountry = function (countryId) {
	  console.log("values",countryId);
	  var states = ($filter('filter')(statelist, { countryId: countryId }));
	  console.log(states);
	  return states;
	};
	//get city based on state
	service.getStateCity = function (state) {
  
	  var items = ($filter('filter')(citylist, { state: state }));
	  return items;
	};
  
	return service;
  
  
  }]);