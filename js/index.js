

fetch( "https://newsapi.org/v2/top-headlines?apiKey=6a51b359f3b14743922327a9bed5ab4f&q=apple&pageSize=3" )
    .then( res => res.json())
    .then( responseJSON => console.log( responseJSON ))
    .catch( err => console.log( err ))