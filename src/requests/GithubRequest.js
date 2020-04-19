const GithubProfileUrl = 'https://api.github.com/users/';

const GithubRequest = (username) => {
  let githubRequest = new Request(`${GithubProfileUrl}${username}`);
  
  return(
    fetch(githubRequest)
      .then((response) => {
        if (!response.ok) { return false; }
        return response.json();
      })
  )
}

export default GithubRequest;
