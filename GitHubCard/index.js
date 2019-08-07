/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/stlachman")
  .then(function(response) {
    // handle success
    let cards = document.querySelector(".cards");
    cards.appendChild(githubProfile(response.data));
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function githubProfile(profile) {
  console.log(profile);
  const card = document.createElement("div");
  card.className = "card";
  const userImg = document.createElement("img");
  userImg.src = profile.avatar_url;
  card.appendChild(userImg);
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  card.append(cardInfo);

  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = profile.name;
  cardInfo.appendChild(name);

  const username = document.createElement("p");
  username.className = "username";
  username.textContent = profile.login;

  cardInfo.appendChild(username);

  const location = document.createElement("p");
  location.textContent = profile.location;

  cardInfo.appendChild(location);

  const profileArea = document.createElement("p");
  profileArea.textContent = "Profile: ";

  cardInfo.appendChild(profileArea);

  const profileLink = document.createElement("a");
  profileLink.href = profile.html_url;
  profileLink.textContent = profile.html_url;

  profileArea.appendChild(profileLink);

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${profile.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${profile.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${profile.bio}`;

  return card;
}

// card.appendChild(githubProfile());
