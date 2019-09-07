//matches in manifest = trigger when on this page, what webpages are we initializing going to target

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);


