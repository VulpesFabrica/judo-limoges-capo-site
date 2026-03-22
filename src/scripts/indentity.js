import netlifyIdentity from "@netlify/identity";

const identity = netlifyIdentity.init({
    APIUrl: "https://judo-limoges-capo.netlify.app/.netlify/identity"
});

export default identity;