import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock'

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const PROFILE_TOKEN_KEY = 'profile_token';
const CLIENT_ID = '2OpU7GoW2DnK8Hlz1HLVoLxfYiDA0bui';
const CLIENT_DOMAIN = 'beancrunch.eu.auth0.com';
const REDIRECT = location.origin+'/callback';
const SCOPE = 'email';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

const lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN, {
              auth: {
                redirectUrl: '/login',
                responseType: 'token'
              }
            });

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  clearProfile();
  browserHistory.push('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getLock() {
  return lock;
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function getProfile() {
  const profile = localStorage.getItem(PROFILE_TOKEN_KEY)
  return profile ? JSON.parse(profile) : {}
}

function getTokenExpirationDate(encodedToken) {
  if (encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }  
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function clearProfile() {
  localStorage.removeItem(PROFILE_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
