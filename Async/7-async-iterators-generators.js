'use strict';

const fetch = require('node-fetch');

const REPO = 'lmiller1990/vue-testing-handbook';
const URL = `https://api.github.com/repos/${REPO}/commits`;
const REGEX = /<(.*?)>; rel="next"/;

const data = { URL, REGEX };

( async ({ URL, REGEX }) => {
  async function getCommitsNumber (url) {
    const commits = []

    for await (let commit of fetchCommits(url)) {
      commits.push(commit)
    }

    return commits
  }

  async function* fetchCommits (inputUrl) {
    let url = inputUrl

    while (url) {
      const response = await fetch(url, { headers: {'User-Agent': 'script disruptor'} })
      const body = await response.json()
      const nextPageLink = response.headers.get('Link').match(REGEX)
      const nextPage = nextPageLink && nextPageLink[1]

      url = nextPage

      for (let commit of body) {
        yield commit
      }
    }
  }

  const result = await getCommitsNumber(URL)

  result.forEach( (v, i) => console.log(i, v.sha) )
  
})(data);