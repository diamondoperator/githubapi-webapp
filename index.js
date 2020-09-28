let username = " ";//value form form here
let url ="https://api.github.com/users/`${username}`/repos"


function displayResults(responseJson) {

    // if there are previous results, remove them
    
    console.log(responseJson);
    
    $('#results-list').empty();
    
    // iterate through the articles array, stopping at the max number of results
    
    for (let i = 0; i < responseJson.length; i++){
    
    // for each video object in the articles
    
    //array, add a list item to the results
    
    //list with the article title, source, author,
    
    //description, and image
    
    $('#results-list').append(
        `
        <li><h3>${responseJson[i].full_name}</h3></li>
        <p><a href ="${responseJson[i].html_url}"</a>${responseJson[i].html_url}</p><br>`
    
   // `<li><h3><a href="${responseJson.value[i].html_url}">${responseJson.value[i].url}</a></h3>
    
    //</li>`
    
    )};
    
    //display the results section
    
    $('#results-list').removeClass('hidden');
    
    };


    function getrepos(url){

    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}



    //watches the form for the submit event
    //prevent default
    //get the value from the form
    //pass it on to the get news function

    function watchForm() {
        $('form').submit(event => {
          event.preventDefault();
          let username = $('#search-term').val();
          let newurl = "https://api.github.com/users/"+username+"/repos"
          getrepos(newurl);
        });
      }
      
      $(watchForm);