export const blogPosts = [
  {
    id: 1,
    title: 'How to optimize a website\'s Core Vitals and Page Speed Score?',
    author: 'Michael Smith',
    date: "July 12, 2024",
    image: '/1.jpg',
    description: 'Google\'s new Core Vitals metrics are changing how sites get ranked based on and optimized mobile experience. I will show you everything you need to know about how to satisfy these new metrics and get 95+ scores on speed and performance for hand made HTML and CSS websites. These can also apply to any website regardless on how it\'s built.',
    content: `
    <p>I recently took an interest in optimizing a website&apos;s page speed scores after Google announced their new Core Vitals metrics and how it will be the leading ranking factor going forward. It is basically favoring websites that have the fastest and best mobile experience. And that is what I am going to show you how to do right now.</p>
    <p>You can watch me as I use all of these steps to optimize a real client of mines website, and I exaplain everything I do and why.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Asset Optimization</h2>
    <p>Generally a lot of it comes down to asset optimization like having images the same size as they are being displayed at. Like not having a 1000px wide image resized in css to be 300px wide on the screen. That’s a waste of space. Also losslessly compressing all your assets can save up to 80% of the file size. I use Compressor.io to lossly compress all my images. I pay for the pro subscription so I can upload 100 images to compress at a time. I've been using it for years. I highly reccomend them.</p>
    <p>Also, background images. Why have a 2300px wide stock photo loading on a 400px wide phone screen? Resize that sucker to 500px wide and compress it. You go from 2.3MB to like 37k or less. HUGE reduction in size and load times. Then on tablet and desktop you just reset the background image to the larger 2300px image. I saw a website from someone who was loading multiple 4000px wide images as backgrounds and it was slow as all hell. It’s not enough to compress it. Because even if it compresses 70%, 70% of 4MB is still like 1.2MB which is huge for an image to load on mobile. Resize your images and load the smaller ones for mobile and the larger ones for tablet and desktop and compress them.</p>
    <p>Then theres picking the right sized images for the right screen size, ad that's what the attribute "srcset" does. You can read about it here from Mozilla Developer Network. What it does is you provide a list of different sized images to load at the screen sizes you want them to load, and using "src" as your fallback image. This way, if you have an image that's 700px wide in your html on desktop, you can load a verison of it that's 350px wide on screens under 480px or whatever you want and load a smaller file which in turn improves your laod time.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Lazy Loading</h2>
    <p>Then there’s lazy loading, using the loading=“lazy” attribute that is supported by most browsers. This used the browsers built in lazy loading without you having to do a lot of fancy JavaScript. But don’t lazy load any images that are “above the fold” meaning the bottom of the screen when the website loads. If the image will load on the landing page section and in the viewport, don’t lazy load it. It will create content layout shifts. So whatever images are on the screen when your website first loads should not be lazy loaded.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Remove jQuery, Google Fonts, and all other nonessential CDN links</h2>
    <p>There's a time and place for everything, and jQuery's time is 5 years ago and it's place in on the bench. Class toggling and all that can be handled within javascript now and there’s really no reason to be using JQuery anymore. It’s bloated and removing it can make your website more secure and load much faster. Remove it! Google's page speed score will label it as something you need to remove to improve your score, so we should all just get used to working without it unless its absolutely necessary.</p>
    <p>Then there's your Google Fonts CDN links. Instead of linking to them in your head, download your fonts from them if it’s not a standard font on browsers. I use the @font-face to load my fonts locally. I store all the downloaded files in a fonts folder snd then load them in on my core-styles.css sheet that is shared on all pages of the site. This way I can eliminate using the google fonts cdn which eliminates it as a render blocking resource.</p>
    <p>Just copy and paste this code in your CSS sheet that is shared on ALL your pages. Replaces the file path with the file path of your font that you downloaded. The font-family property in here is what YOU name it. So it doesn't have to be "Lobster" like in the example code. It can be called whatever I want it to be and thats what I sue when I declare it in CSS somewhere.</p>
    <p>By downlaoding and loading your fonts locally you can eliminate the need for using the Google CDN, and load your fonts even faster while also removing a render blocking resource. I highly recommend doing this for all your sites.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Defer your nonessential Javascript</h2>
    <p>On all your script tags, add the defer attribute to the opening script tag and this will "defer" its loading until AFTER the website has loaded. This way, the Javascript doesn't interrupt the website from loading it's HTML and CSS first and painting the page. It waits its turn patiently until everyone else is finished.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Use SVG's as often as you can over PNG's</h2>
    <p>Use as many svgs as you can over pngs. Svgs are much smaller and load much faster. I use Flaticon to get all my svg graphics and icons and I can customize their colors and download the svg. Love it. This also replaces Fontawesome since that’s another cdn link you don’t need to be loading. Rather than using Fontawesome, just load in the icons you need as svgs. It’s much more lightweight than using Fontawesome.</p>
    <p>If you can, hire someone off Fiverr who is an SVG graphic illustrator to convert your clients logos to svgs and load those into the site instead. Much more optimized and scalable. You can replace a 36k png or more with a 2k svg. It's worth every penny. You can find some affordable options for under $30 per graphic. A fantastic investment.</p>
    <p>It’s always a great idea to convert your clients logos into svg format and then give it to them to use for decals, business cards, and t-shirts. They will love you for it.</p>
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Google Lighthouse</h2>
    <p>When all is said and done check your Google Lighthouse scores in your dev tools inspector and satisfy those as well. Usually you just need to check off some accessibility stuff like adding aria-label attributes to links with no text in them or alt tags on images or contrast issues. Once you have a 96+ page speed score and nearly 100’s across the board on lighthouse, your website is now properly optimized and dressed to impress.</p>
    <p>These are the optimzation steps I take everytime I finish a website. I wanted to detail this out for anyone looking for a detailed "prcoess" on what to do and how to do it wihtout all the jargon and over complicated lengthy descriptions. I hope this helps!</p>
    `,
  },
  {
    id: 2,
    title: 'How to design a website for beginners',
    description: 'In this article I discuss how to create a repeatable process for web design that you can use for each new site. This is for everyone who ever just stared into their screen wondering how the heck they start a website design....',
    author: 'Michael Smith',
    date: "July 12, 2024",
    image: '/1.jpg',
    content: `
    <h2 class="border-l-4 border-blue-400 pl-4 text-2xl font-bold !my-10">Turn your website design into a repeatable process</h2>
<p>This isn\’t a professional “how to design 101” it\’s just a process I have used to build and design websites without a design background and it\’s been very helpful to me.</p>
<p>I know a lot of people have trouble starting from scratch designing a website so I wanted to share with everyone my process.</p>
<p>First thing you need to do is expose yourself to designs that look good and are practical.</p>
<p>I like to go to ThemeForest and look at all the top rated Wordpress themes and just study all the ways you can arrange content.</p>
<p>Then you can borrow a few things here and there and create something yourself.</p>
<p>Not all design is pure original content. Design is almost always based on something else or inspired from something.</p>
<p>It helps to expose yourself to them and just have a good idea of the different layouts that are out there.</p>
<p>There\’s more typical designs there that you\’d find used for regular businesses in the real world on ThemeForest.</p>
<p>I find places like has a lot of fancy looking stuff that doesn\’t transfer well to a lot of business markets.</p>
<p>Kind of like how there\’s some wild weird shit at New York fashion shows that no regular sane person would ever wear, that\’s how I see a lot of the awwwards stuff.</p>
<p>Maybe if you\’re working on some high end tech startup some of those could work but making small to medium sized business websites? Not really the right look and won\’t transfer well.</p>
<p>Then once I find a few things I like, I find it easier if I draw out my designs on paper.</p>
<p>I tape 4-5 pieces of paper together and started in pencil and finished in marker.</p>
<p>Just a general wireframe. Nothing fancy.</p>
<a href="https://i.imgur.com/9GynRBD.jpg">Pencil and marker drawing</a>
<p>And then I take this design and I go over to Figma and try to recreate it, refine it, and make it better by adding colors, images, text, and proper spacing.</p>
<p>Here\’s the figma link of the mock up I drew from the paper design I made.</p>
<p>First draft using Figma</p>
<p>Client loved it. But they had some notes and wanted extra stuff or changed a few things which is normal.</p>
<p>You take in that feedback and play around with the figma file and send it over hoping that\’s what they want.</p>
<p>Here\’s the V2 of the original figma design with their edits and requests:</p>
<p>2nd draft using Figma</p>
<p>3rd draft using Figma</p>
<p>It\’s really starting to come together now from the paper to Figma.</p>
<p>This is my process on how I like to start designing a website.</p>
<p>Now for the details on HOW I like to design a website.</p>
<p>For clarification, I am not a trained designer.</p>
<p>These are things I have learned throughout my process that has resulted in some success and makes the process easier.</p>
<p>Number 1: It's Important to understanding visual hierarchy and how to layout a website what elements are most important and what are not.</p>
<p>You want your most important information displayed prominently, not hidden behind other elements or crowded by others.</p>
<p>Here\’s some great resources to learn about it:</p>
<p>Read 2stallions take on visual hierarchy</p>
<p>Read Adobe's information on visual hierarchy principles</p>
<p>I also really like this video on designing landing pages that touches up on visual hierarchy, creative design, and white space.</p>
<p>Watch a good video on the landing page design</p>
<p>And I like the information in this short video on white space:</p>
<p>A good video on white space</p>
<p>White space is HUGE. I see a lot of portfolios and websites online and in forums that have their content too close to each other.</p>
<p>There\’s no breathing room and the design feels cluttered.</p>
<p>For example, on all my websites I have a padding of 50px top and bottom for each section of the site on mobile to keep the content spaced out evenly away from the edges of the content above and below it.</p>
<p>Sometimes I see these sections only have 10-20px of space and that\’s just not enough.</p>
<p>Then on desktop I increase it to 75-100px for my large main sections.</p>
<p>Your paragraphs should have 1.4-1.5em line height for the most optimal spacing for easy readability.</p>
<p>I see them go as high as 1.7 sometimes.</p>
<p>And if you wanna make a heading over a paragraph make sure it\’s at least 1.5 times the font size of the paragraph for good visual hierarchy, and I like to bold them to also help separate and draw attention to them.</p>
<p>For website structure I like to do this:</p>
<p>LANDING</p>
<p>- h1 - Main thing they do with most important keyword phrase</p>
<p>- h2 - Be more descriptive of the services and solutions they offer related to the h1</p>
<p>- 1 - 2 call to action buttons (what are the first things you want the customer to do when they land on your website?)</p>
<p>SERVICES</p>
<p>- What do they do? What problems do they solve? I usually like to do cards for these sections. Maybe have some icons for color.</p>
<p>ABOUT</p>
<p>- Company history, who they are, why they\’re the experts, etc. Let the customer get to know who the company is, helps humanize them and become more familiar with.</p>
<p>This is where the client sells themselves and why they\’re the best choice.</p>
<p>ADDITIONAL CONTENT</p>
<p>- This can be anything. Google likes to see content, and I recommend at least 1200 words on your home page.</p>
<p>I like to use the middle section of the website to add extra content around their keywords and services they offer. Helps their ranking better.</p>
<p>I put it here because people tend to remember the first and last parts of the website.</p>
<p>So we have the services up top because we want people to remember what they do, and testimonials at the bottom so they remember the nice things people have to say about them and be that last nudge to choose them for their needs.</p>
<p>So put your additional search rankings content in the middle. It really works.</p>
<p>I also like to put “reasons to choose us” in this action as well.</p>
<p>This section can also have additional content the client may want to show on their site. Maybe a step by step process on how their estimating process is, or we highlight a few products and services, anything.</p>
<p>GALLERY/PORTFOLIO</p>
<p>- A collection of your client's best work.</p>
<p>TESTIMONIALS/COMPETITOR COMPARISON</p>
<p>- End on a good note for them to remember why your service is best and the problems they solve.</p>
<p>I like to link out to a dedicated testimonials page and add all their reviews. This is a content gold mine.</p>
<p>It\’s organic, natural content written by actual people with all your clients keywords in it. Testimonials are GREAT for free content to help rank on google. Add as many as you can to that page.</p>
<p>FOOTER</p>
<p>- Put the contact info here, maybe a sitemap, the logo, and social media links</p>
<p>And that\’s the general “layout” of a website that I like to do.</p>
<p>Once you have this structure it\’s easier to design a website because you know WHAT content you need and WHERE it should go.</p>
<p>It\’s like a paint by numbers kind of thing, but instead of painting with a brush and acrylic, you\’re painting with content.</p>
<p>And that\’s it!</p>
<p>Just expose yourself to good designs and study the ways content can be organized, have a general structure, draw it out on paper, refine in Figma, use that to send to the client for approval and tweaks, and develop off of that.</p>
<p>Once you get the hang of it things become a lot easier.</p>
<p>Also, if you need help with building that desktop design mobile first and responsive, here\’s another post I wrote explaining my process on how I start a new website for mobile first.</p>
<p>Mobile first responsive web design for beginners</p>
<p>There\’s a ton of Great online about how to be a better designer, and those are awesome and worth the read.</p>
<p>But I don\’t really see a good process or roadmap to follow for each site for developers just starting design.</p>
<p>It can be overwhelming going over all the rules and guidelines for design, and I haven\’t really seen any good resources to help structure that information and create a process to follow in which you can use those design nuggets.</p>
<p>So I wanted to make a post that\’s quick, and can have an immediate impact on your design work and get you started.</p>
<p>I think it helps a lot to know how to plan your website and then using all the other design tutorials and guides to refine, tweak, and make something unique.</p>
<p>Hopefully this helps!</p>
    `,
  },
  {
    id: 3,
    title: 'How to build a mobile first and responsive website from scratch in html and css.',
    description: 'If you\’re going to build a website now a days, your number one focus should be making sure it\’s responsive and adaptable to all screen sizes. This is because Google has made announcements that all websites that are responsive will rank better because of better load times, better usability, and will be preferred in mobile searches....',
    author: 'Michael Smith',
    date: "July 12, 2024",
    image: '/1.jpg',
    content: '<p>Building <strong>responsive websites</strong> is crucial in today\'s mobile-first world.</p>',
  },
  {
    id: 4,
    title: 'What is the difference between hand coded websites and Wordpress sites?',
    description: 'What makes the websites I build special and unique compared to using a page builder like Wordpress? It all comes down to how they are made, and how that affects load times, user retention, and your search rankings...',
    author: 'Michael Smith',
    date: "July 12, 2024",
    image: '/1.jpg',
    content: '<p>Building <strong>responsive websites</strong> is crucial in today\'s mobile-first world.</p>',
  },
  {
    id: 5,
    title: 'Christmas Yearly Recap',
    description: 'I am happy to say that this year I have lots of holiday cards to send my clients! When I opened for business in the middle of 2019 I only had 3 Christmas cards to send. But at the end of 2020 I now have 27 to mail out...',
    author: 'Michael Smith',
    date: "January 1, 2024",
    image: '/1.jpg',
    content: '<p>Building <strong>responsive websites</strong> is crucial in today\'s mobile-first world.</p>',
  },
  {
    id: 6,
    title: 'How to add dark mode to your website',
    description: 'In this post, I will share the code that I use to add dark mode to all my sites and it takes less than 5 minutes to implement. I provide the code and I even made the button for you!',
    author: 'Michael Smith',
    date: "December 15, 2023",
    image: '/1.jpg',
    content: '<p>Building <strong>responsive websites</strong> is crucial in today\'s mobile-first world.</p>',
  },
];