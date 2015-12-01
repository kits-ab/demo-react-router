module.exports = {

	getCountForLists() {
		return {
			all: this.getLinksForList('all').length,
			private: this.getLinksForList('private').length,
			public: this.getLinksForList('public').length,
			unread: this.getLinksForList('unread').length,
			untagged: this.getLinksForList('untagged').length
		};
	},

	getLinksForList(list) {
		if (list === 'all') {
			return links;
		} else if (list === 'private') {
			return links.filter(link => link.shared === 'no');
		} else if (list === 'public') {
			return links.filter(link => link.shared === 'yes');
		} else if (list === 'unread') {
			return links.filter(link => link.toread === 'yes');
		} else if (list === 'untagged') {
			return links.filter(link => !link.tags || link.tags.length === 0);
		} else {
			return [];
		}
	},

	getLinkById(id) {
		const link = links.filter(link => link.id === id);
		return link.length > 0 ? link[0] : null;
	}
};

const links = [
	{
		"id": "1",
		"href": "https:\/\/css-tricks.com\/visual-regression-testing-with-phantomcss\/",
		"description": "Visual Regression Testing with PhantomCSS | CSS-Tricks",
		"extended": "",
		"time": "2015-11-21T12:29:28Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "2",
		"href": "http:\/\/www.smashingmagazine.com\/2015\/11\/using-system-ui-fonts-practical-guide\/",
		"description": "Using System UI Fonts In Web Design: A Quick Practical Guide \u2013 Smashing Magazine",
		"extended": "",
		"time": "2015-11-21T12:28:30Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "3",
		"href": "https:\/\/css-tricks.com\/creating-an-animated-menu-indicator-with-css-selectors\/",
		"description": "Creating an Animated Menu Indicator with CSS Selectors",
		"extended": "",
		"time": "2015-11-20T20:37:07Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "4",
		"href": "http:\/\/blog.cleancoder.com\/uncle-bob\/2015\/11\/18\/TheProgrammersOath.html",
		"description": "The Clean Code Blog - Clean Coder Blog",
		"extended": "",
		"time": "2015-11-18T14:59:03Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "5",
		"href": "http:\/\/blog.iconfactory.com\/2015\/11\/the-new-favicon\/",
		"description": "The New Favicon \u2022 The Breakroom",
		"extended": "",
		"time": "2015-11-17T15:24:09Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "6",
		"href": "http:\/\/www.smashingmagazine.com\/2015\/11\/writing-inspiring-job-descriptions-for-ux\/",
		"description": "Writing Inspiring Job Descriptions For UX",
		"extended": "",
		"time": "2015-11-17T11:39:59Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "7",
		"href": "http:\/\/bit.ly\/1M8gfEz",
		"description": "The Focus Course",
		"extended": "The Power of a Focused Life by Shawn Blanc \u2014 Living without regret in the age of distraction.",
		"time": "2015-11-15T15:14:38Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "8",
		"href": "https:\/\/surma.link\/things\/maelstromgaming\/",
		"description": "Surma.link \u2013 Maelstrom Gaming and 12 fps",
		"extended": "",
		"time": "2015-11-14T00:23:58Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "9",
		"href": "http:\/\/philipwalton.com\/articles\/do-we-actually-need-specificity-in-css\/",
		"description": "Do We Actually Need Specificity In CSS? \u2014 Philip Walton",
		"extended": "",
		"time": "2015-11-08T15:37:36Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "10",
		"href": "http:\/\/backchannel.io\/",
		"description": "Backchannel \u2013 Beta Feedback",
		"extended": "",
		"time": "2015-11-05T16:13:55Z",
		"shared": "no",
		"toread": "no",
		"tags": ""
	},
	{
		"id": "11",
		"href": "http:\/\/developer.telerik.com\/featured\/six-steps-for-approaching-the-next-javascript\/",
		"description": "Six Steps for Approaching the Next JavaScript -Telerik Developer Network",
		"extended": "Cody Lindley lays out the steps and resources you need to become comfortable with the next version of JavaScript, often referred to as ECMAScript 6.",
		"time": "2015-06-13T19:28:09Z",
		"shared": "yes",
		"toread": "no",
		"tags": "article javascript"
	},
	{
		"id": "12",
		"href": "http:\/\/callistaenterprise.se\/blogg\/teknik\/2015\/04\/27\/building-microservices-part-3,%20secure%20API's%20with%20OAuth\/",
		"description": "Building microservices: Secure API's with OAuth 2.0 (Part 3)",
		"extended": "Part 3 of a series of blog posts about adopting micro services in production.",
		"time": "2015-06-12T08:20:06Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "microservices article"
	},
	{
		"id": "13",
		"href": "http:\/\/callistaenterprise.se\/blogg\/teknik\/2015\/03\/25\/an-operations-model-for-microservices\/",
		"description": "An operations model for Microservices",
		"extended": "Part 0 of a series of blog posts about adopting micro services in production.",
		"time": "2015-06-12T08:16:01Z",
		"shared": "yes",
		"toread": "no",
		"tags": "microservices article"
	},
	{
		"id": "14",
		"href": "https:\/\/leanpub.com\/eventdriven\/",
		"description": "Event Driven",
		"extended": "A book about the ins, outs and gotchas of producing top-quality memorable tech conferences and events.",
		"time": "2015-06-09T13:09:50Z",
		"shared": "yes",
		"toread": "no",
		"tags": "book event"
	},
	{
		"id": "15",
		"href": "http:\/\/404sites.tumblr.com\/",
		"description": "404 pages",
		"extended": "A collection of 404 pages for inspiration.",
		"time": "2015-06-09T11:23:22Z",
		"shared": "yes",
		"toread": "no",
		"tags": "inspiration web errors"
	},
	{
		"id": "16",
		"href": "http:\/\/thesquid.ink\/solid-icons\/",
		"description": "Squid Ink Solid Icons",
		"extended": "A collection of icons.",
		"time": "2015-06-08T14:06:15Z",
		"shared": "yes",
		"toread": "no",
		"tags": "resource icons"
	},
	{
		"id": "17",
		"href": "http:\/\/callistaenterprise.se\/blogg\/teknik\/2015\/06\/08\/building-microservices-part-4-dockerize-your-microservices\/",
		"description": "Building Microservices: Dockerize your Microservices (Part 4)",
		"extended": "Part 4 of a series of blog posts about adopting micro services in production.",
		"time": "2015-06-08T09:55:19Z",
		"shared": "yes",
		"toread": "no",
		"tags": "article docker microservices"
	},
	{
		"id": "18",
		"href": "https:\/\/nucleoapp.com\/",
		"description": "Nucleo - The smartest set of icons for designers and developers",
		"extended": "A really cool set of icons that can be adjusted with multiple colors, different styles and strokes.",
		"time": "2015-06-04T14:28:44Z",
		"shared": "yes",
		"toread": "no",
		"tags": "icons resource"
	},
	{
		"id": "19",
		"href": "http:\/\/www.smashingmagazine.com\/2015\/06\/03\/fitting-after-effects-into-a-ux-workflow\/",
		"description": "Fitting After Effects Into A UX Workflow",
		"extended": "An article describing how to get started using After Effects to prototype UIs.",
		"time": "2015-06-03T13:41:32Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "prototype animations article"
	},
	{
		"id": "20",
		"href": "http:\/\/pewpewthespells.com\/blog\/xcconfig_guide.html",
		"description": "The Unofficial Guide to xcconfig files",
		"extended": "An article documenting Xcode xconfig files.",
		"time": "2015-05-30T08:37:33Z",
		"shared": "yes",
		"toread": "no",
		"tags": "xcode resource"
	},
	{
		"id": "21",
		"href": "http:\/\/brewhouse.io\/blog\/2015\/05\/13\/emberjs-an-antidote-to-your-hype-fatigue.html",
		"description": "Ember.js: An Antidote To Your Hype Fatigue",
		"extended": "An article that seems to be a great introduction to why you should choose Ember even if it's not Angular.",
		"time": "2015-05-14T07:56:28Z",
		"shared": "yes",
		"toread": "no",
		"tags": "ember article"
	},
	{
		"id": "22",
		"href": "http:\/\/sarasoueidan.com\/demos\/navicon-transformicons\/",
		"description": "Transformicons: Animated Navigation Icons with CSS3",
		"extended": "An article describing how to create navigation icons that animate into close when tapped.",
		"time": "2015-05-11T09:19:12Z",
		"shared": "yes",
		"toread": "no",
		"tags": "article css transitions"
	},
	{
		"id": "23",
		"href": "https:\/\/css-tricks.com\/sites-with-high-quality-photos-you-can-use-for-free\/",
		"description": "Sites with High Quality Photos You Can Use for Free",
		"extended": "A set of sites with nice photos.",
		"time": "2015-05-09T19:38:27Z",
		"shared": "yes",
		"toread": "no",
		"tags": "resource images"
	},
	{
		"id": "24",
		"href": "http:\/\/joren.co\/sass-burger\/",
		"description": "Sass Burger",
		"extended": "A Sass mixin to create a menu icon.",
		"time": "2015-05-07T20:26:54Z",
		"shared": "yes",
		"toread": "no",
		"tags": "sass icons project"
	},
	{
		"id": "25",
		"href": "http:\/\/csswizardry.com\/2015\/03\/more-transparent-ui-code-with-namespaces\/",
		"description": "More Transparent UI Code with Namespaces",
		"extended": "An article describing how to namespace CSS classes to make CSS better.",
		"time": "2015-05-07T20:18:24Z",
		"shared": "yes",
		"toread": "no",
		"tags": "css bem article"
	},
	{
		"id": "26",
		"href": "http:\/\/csswizardry.com\/2013\/01\/mindbemding-getting-your-head-round-bem-syntax\/",
		"description": "MindBEMding \u2013 getting your head \u2019round BEM syntax",
		"extended": "An article describing how BEM works.",
		"time": "2015-05-07T20:17:12Z",
		"shared": "yes",
		"toread": "no",
		"tags": "bem css article"
	},
	{
		"id": "27",
		"href": "https:\/\/css-tricks.com\/a-complete-guide-to-svg-fallbacks\/",
		"description": "A Complete Guide to SVG Fallbacks",
		"extended": "An article about how to use SVG in a safe way with fallbacks.",
		"time": "2015-05-04T19:34:06Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "svg article"
	},
	{
		"id": "28",
		"href": "http:\/\/www.manning.com\/sonmez\/",
		"description": "Manning: Soft Skills",
		"extended": "A book about the soft skills of software development.",
		"time": "2015-05-01T08:58:43Z",
		"shared": "yes",
		"toread": "no",
		"tags": "book wishlist productivity"
	},
	{
		"id": "29",
		"href": "http:\/\/www.raywenderlich.com\/87002\/getting-started-with-os-x-and-swift-tutorial-part-1",
		"description": "Getting Started With OS X and Swift Tutorial (Part 1)",
		"extended": "A tutorial on how to create OS X applications.",
		"time": "2015-04-30T20:16:09Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "tutorial osx swift"
	},
	{
		"id": "30",
		"href": "http:\/\/ember.town\/ember-hearth\/",
		"description": "Ember Hearth",
		"extended": "An OS X application for helping you more easily get started with Ember and its dependencies, and then beyond that provide tools and conveniences for working with it in your day to day.",
		"time": "2015-04-26T21:45:51Z",
		"shared": "yes",
		"toread": "no",
		"tags": "osx project ember"
	},
	{
		"id": "31",
		"href": "http:\/\/bulletjournal.com\/",
		"description": "Bullet Journal: An analog note-taking system for the digital age",
		"extended": "Bullet Journal is an anolog journaling and note taking system for the digital age",
		"time": "2015-04-16T18:25:07Z",
		"shared": "yes",
		"toread": "no",
		"tags": "project productivity"
	},
	{
		"id": "32",
		"href": "https:\/\/leanpub.com\/wewut",
		"description": "Working Effectively with Unit Tests",
		"extended": "A book on how to work with unit tests.",
		"time": "2015-04-15T18:38:56Z",
		"shared": "yes",
		"toread": "no",
		"tags": "test book wishlist"
	},
	{
		"id": "33",
		"href": "http:\/\/callistaenterprise.se\/blogg\/teknik\/2015\/04\/10\/building-microservices-with-spring-cloud-and-netflix-oss-part-1\/",
		"description": "Building microservices with Spring Cloud and Netflix OSS (Part 1)",
		"extended": "Part 1 of a series of blog posts about adopting micro services in production.",
		"time": "2015-04-15T11:50:20Z",
		"shared": "yes",
		"toread": "no",
		"tags": "microservices article"
	},
	{
		"id": "34",
		"href": "http:\/\/callistaenterprise.se\/blogg\/teknik\/2015\/04\/15\/building-microservices-with-spring-cloud-and-netflix-oss-part-2\/",
		"description": "Building microservices with Spring Cloud and Netflix OSS (Part 2)",
		"extended": "Part 2 of a series of blog posts about adopting micro services in production.",
		"time": "2015-04-15T11:49:51Z",
		"shared": "yes",
		"toread": "no",
		"tags": "article microservices"
	},
	{
		"id": "35",
		"href": "http:\/\/blog.xebia.com\/2015\/01\/30\/run-your-ios-app-without-overwriting-the-app-store-version\/",
		"description": "Run your iOS app without overwriting the App Store version",
		"extended": "Article on how to configure Xcode to allow multiple versions of your app on your device at the same time.",
		"time": "2015-04-14T21:15:52Z",
		"shared": "yes",
		"toread": "no",
		"tags": "xcode article"
	},
	{
		"id": "36",
		"href": "http:\/\/htmlhint.com\/",
		"description": "HTMLHint",
		"extended": "A tool for linting HTML files.",
		"time": "2015-04-12T08:18:27Z",
		"shared": "yes",
		"toread": "no",
		"tags": "html quality project"
	},
	{
		"id": "37",
		"href": "http:\/\/iosdesign.ivomynttinen.com\/",
		"description": "The iOS Design Guidelines",
		"extended": "A collection of guidelines for designing for iOS.",
		"time": "2015-04-10T11:41:04Z",
		"shared": "yes",
		"toread": "no",
		"tags": "design ios resource"
	},
	{
		"id": "38",
		"href": "http:\/\/martiancraft.com\/blog\/2015\/03\/core-data-stack\/",
		"description": "My Core Data Stack",
		"extended": "An article describing how to setup CoreData in a more production like way.",
		"time": "2015-04-03T17:22:56Z",
		"shared": "yes",
		"toread": "no",
		"tags": "coredata swift article"
	},
	{
		"id": "39",
		"href": "https:\/\/css-tricks.com\/starting-a-refactor-with-css-dig\/",
		"description": "Starting a Refactor with CSS Dig",
		"extended": "An article on how to refactor CSS.",
		"time": "2015-04-03T15:14:07Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "css quality article"
	},
	{
		"id": "40",
		"href": "https:\/\/css-tricks.com\/bem-101\/",
		"description": "BEM 101",
		"extended": "An introduction to BEM.",
		"time": "2015-04-02T14:17:38Z",
		"shared": "yes",
		"toread": "no",
		"tags": "bem css article"
	},
	{
		"id": "41",
		"href": "https:\/\/mattwilcox.net\/web-development\/http2-for-front-end-web-developers",
		"description": "HTTP2 for front-end web developers",
		"extended": "An article describing how HTTP2 changes how we should optimize our pages.",
		"time": "2015-03-12T15:56:27Z",
		"shared": "yes",
		"toread": "no",
		"tags": "http article"
	},
	{
		"id": "42",
		"href": "https:\/\/css-tricks.com\/using-the-html5-history-api\/",
		"description": "Using the HTML5 History API",
		"extended": "An article describing how to use the history API.",
		"time": "2015-03-09T21:02:03Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "article javascript history"
	},
	{
		"id": "43",
		"href": "https:\/\/stormpath.com\/blog\/where-to-store-your-jwts-cookies-vs-html5-web-storage\/",
		"description": "Where to Store your JWTs - Cookies vs HTML5 Web Storage",
		"extended": "An article discussing where to stir JWT tokens.",
		"time": "2015-03-08T09:59:07Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "jwt security javascript article"
	},
	{
		"id": "44",
		"href": "http:\/\/flickity.metafizzy.co\/",
		"description": "Flickity",
		"extended": "A nice responsive, flickable gallery that works great with touch.",
		"time": "2015-03-05T16:41:52Z",
		"shared": "yes",
		"toread": "no",
		"tags": "html css images project"
	},
	{
		"id": "45",
		"href": "http:\/\/www.sketchappsources.com\/",
		"description": "Sketch App Sources",
		"extended": "A site full of resources for Sketch.",
		"time": "2015-02-28T10:21:16Z",
		"shared": "yes",
		"toread": "no",
		"tags": "sketch resource"
	},
	{
		"id": "46",
		"href": "http:\/\/blog.gospodarets.com\/track_javascript_angularjs_and_jquery_errors_with_google_analytics\/",
		"description": "Track JavaScript, AngularJS and jQuery errors with Google Analytics",
		"extended": "An article about how to use Google Analytics for logging all kind of JavaScript errors.",
		"time": "2015-02-28T10:04:57Z",
		"shared": "yes",
		"toread": "no",
		"tags": "analytics javascript errors"
	},
	{
		"id": "47",
		"href": "http:\/\/sketchtoolbox.com\/",
		"description": "Sketch Toolbox",
		"extended": "A super simple plugin manager for Sketch.",
		"time": "2015-02-22T19:38:27Z",
		"shared": "yes",
		"toread": "no",
		"tags": "sketch tool"
	},
	{
		"id": "48",
		"href": "http:\/\/sketchdesign.io\/?rel=sar",
		"description": "SketchDesign.io",
		"extended": "Master Class video tutorials for Sketch.",
		"time": "2015-02-22T12:14:33Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "sketch tutorial"
	},
	{
		"id": "49",
		"href": "http:\/\/airwalk-design.com\/?cat=tutorials&inc=1744&stick=design-a-todo-list-app-icon-with-sketch-3",
		"description": "Design A To-Do List App Icon With Sketch 3",
		"extended": "A tutorial for creating an app icon using Sketch.",
		"time": "2015-02-22T12:13:33Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "tutorial sketch"
	},
	{
		"id": "50",
		"href": "http:\/\/www.kenu.com\/products\/stance",
		"description": "Kenu Stance",
		"extended": "A cool stand for iPhones.",
		"time": "2015-02-22T11:25:33Z",
		"shared": "yes",
		"toread": "no",
		"tags": "iPhone accessories wishlist"
	},
	{
		"id": "51",
		"href": "http:\/\/www.kenu.com\/products\/airframe",
		"description": "Kenu Airframe",
		"extended": "A nice car mount for an iPhone.",
		"time": "2015-02-22T11:21:00Z",
		"shared": "yes",
		"toread": "no",
		"tags": "iPhone accessories wishlist"
	},
	{
		"id": "52",
		"href": "http:\/\/www.newyorker.com\/magazine\/2015\/02\/23\/shape-things-come",
		"description": "Jonathan Ive and the Future of Apple",
		"extended": "An article about Jonathan Ive.",
		"time": "2015-02-16T19:54:56Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "apple article"
	},
	{
		"id": "53",
		"href": "http:\/\/www.infoq.com\/articles\/boot-microservices",
		"description": "Building Microservices with Spring Boot",
		"extended": "A long article about building microservices in Spring Boot.",
		"time": "2015-02-10T15:32:03Z",
		"shared": "yes",
		"toread": "no",
		"tags": "spring microservices article"
	},
	{
		"id": "54",
		"href": "http:\/\/tomdale.net\/2015\/02\/youre-missing-the-point-of-server-side-rendered-javascript-apps\/",
		"description": "You\u2019re Missing the Point of Server-Side Rendered JavaScript Apps",
		"extended": "An article describing the reason for creating Fastboot.",
		"time": "2015-02-08T15:31:26Z",
		"shared": "yes",
		"toread": "no",
		"tags": "javascript nodejs ember fastboot"
	},
	{
		"id": "55",
		"href": "http:\/\/css-tricks.com\/tour-performant-responsive-css-site\/",
		"description": "Tour of a Performant and Responsive CSS Only Site",
		"extended": "An article describing how to create performant websites, including a parallax effect.",
		"time": "2015-01-24T10:59:06Z",
		"shared": "yes",
		"toread": "no",
		"tags": "css parallax article"
	},
	{
		"id": "56",
		"href": "http:\/\/blog.jaredsinclair.com\/post\/93118460565\/a-candid-look-at-unreads-first-year",
		"description": "A Candid Look at Unread's First Year",
		"extended": "An article about the numbers behind Unread.",
		"time": "2015-01-17T15:46:48Z",
		"shared": "yes",
		"toread": "no",
		"tags": "article businesss"
	},
	{
		"id": "57",
		"href": "http:\/\/www.marco.org\/2015\/01\/15\/overcast-sales-numbers",
		"description": "Overcast\u2019s 2014 sales numbers",
		"extended": "An article about the numbers behind Unread.",
		"time": "2015-01-17T15:46:38Z",
		"shared": "yes",
		"toread": "no",
		"tags": "businesss article"
	},
	{
		"id": "58",
		"href": "http:\/\/fabian-kostadinov.github.io\/2014\/11\/13\/installation-of-jekyll-auth\/",
		"description": "Installation of Jekyll-Auth",
		"extended": "An article that describes how to use Jekyll-Auth with Github.",
		"time": "2015-01-16T20:19:51Z",
		"shared": "yes",
		"toread": "no",
		"tags": "jekyll github security article"
	},
	{
		"id": "59",
		"href": "http:\/\/blog.monumentvalleygame.com\/blog\/2015\/1\/15\/monument-valley-in-numbers",
		"description": "Monument Valley in Numbers",
		"extended": "An article about the numbers behind Monument Valley.",
		"time": "2015-01-16T18:19:46Z",
		"shared": "yes",
		"toread": "no",
		"tags": "businesss article"
	},
	{
		"id": "60",
		"href": "http:\/\/sass-guidelin.es\/",
		"description": "Sass Guidelines",
		"extended": "An opinionated styleguide for writing sane, maintainable and scalable Sass.",
		"time": "2015-01-06T19:53:03Z",
		"shared": "yes",
		"toread": "no",
		"tags": "sass styleguide"
	},
	{
		"id": "61",
		"href": "http:\/\/css-tricks.com\/approaches-media-queries-sass\/",
		"description": "Approaches to Media Queries in Sass",
		"extended": "An article describing different techniques for creating media queries using Sass.",
		"time": "2014-12-30T22:47:04Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "sass responsive article"
	},
	{
		"id": "62",
		"href": "http:\/\/www.javacodegeeks.com\/2014\/05\/java-8-features-tutorial.html",
		"description": "Java 8 Features Tutorial",
		"extended": "A tutorial describing the new features in Java 8.",
		"time": "2014-12-29T20:38:29Z",
		"shared": "yes",
		"toread": "yes",
		"tags": "article java"
	},
	{
		"id": "63",
		"href": "http:\/\/trackjs.com\/",
		"description": "{Track:js} Javascript Error and Event Logging",
		"extended": "A tool for tracking JavaScript errors.",
		"time": "2014-12-22T23:40:10Z",
		"shared": "yes",
		"toread": "no",
		"tags": "javascript errors tool"
	},
	{
		"id": "64",
		"href": "http:\/\/tympanus.net\/Development\/PerspectivePageViewNavigation\/index3.html",
		"description": "Perspective Page View Navigation",
		"extended": "Awesome technique for showing a menu using a 3D effect.",
		"time": "2014-12-20T21:00:47Z",
		"shared": "yes",
		"toread": "no",
		"tags": "html demo"
	},
	{
		"id": "65",
		"href": "http:\/\/tympanus.net\/Tutorials\/ShapeHoverEffectSVG\/index.html",
		"description": "Shape Hover Effect with SVG",
		"extended": "Demo that shows how to create cool hover effects with SVG.",
		"time": "2014-12-20T19:28:41Z",
		"shared": "yes",
		"toread": "no",
		"tags": "svg animations demo"
	},
	{
		"id": "66",
		"href": "http:\/\/dev.opera.com\/articles\/view\/advanced-cross-browser-flexbox\/",
		"description": "Advanced cross-browser flexbox",
		"extended": "Explaination of flexbox from Opera.",
		"time": "2013-06-15T20:38:55Z",
		"shared": "yes",
		"toread": "no",
		"tags": "css flexbox article"
	}
];
