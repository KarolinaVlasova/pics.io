/// <reference types='cypress' />

//const { multiply } = require("cypress/types/lodash");

const user = {
  email: 'carolina150897@gmail.com',
  password: 'carolina'
};

describe('Pics.io', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow user to login', () => {
    cy.get('.nav-opener')
      .click();
    cy.contains('a', 'Log in')
      .click();
    cy.get('#login-email')
      .type(user.email);
    cy.get('#login-password')
      .type(user.password);
    cy.contains('.btn-primary', 'Log in')
      .click();
  });

  it('should play/stop the video', () => {
    cy.login();
    cy.get('.showStars > .catalogItem__media > .catalogItem__media-inner > .catalogItem__media-smallPreview')
      .click();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('.popupPlayVideo')
      .click();
    cy.get('video')
      .click();
  });

  it('should rewind video', () => {
    cy.login();
    cy.clickOnThumbnail();
    cy.get('[data-testid="actionRewindRightButton"]')
      .dblclick();
    cy.get('[data-testid="actionRewindLeftButton"]')
      .click();
  });

  it('should mute/unmute video while playing', () => {
    cy.login();
    cy.clickOnThumbnail();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('.btnVolumeVideo')
      .click();
    cy.get('.btnVolumeVideo')
      .click();
  });

  it('should allow to change the speed of the video', () => {
    cy.login();
    cy.clickOnThumbnail();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('[data-testid="playbackRate"] > .MenuOnHoverOpener')
      .click();
    cy.contains('.PicsioMenuItem__text--primary', '1.5')
      .click();
    cy.get('[data-testid="playbackRate"] > .MenuOnHoverOpener')
      .click();
    cy.contains('.PicsioMenuItem__text--primary', 'normal')
      .click();
  });

  it('should allow to change the quality of the video', () => {
    cy.login();
    cy.clickOnThumbnail();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('[data-testid="qualityVideo"] > .MenuOnHoverOpener')
      .click();
    cy.contains('.PicsioMenuItem__text--primary', '720p')
      .click();
    cy.get('[data-testid="qualityVideo"] > .MenuOnHoverOpener')
      .click();
    cy.contains('.PicsioMenuItem__text--primary', '1080p')
      .click();
  });

  it('should allow to enable fullscreen mode while playing', () => {
    cy.login();
    cy.clickOnThumbnail();
    cy.get('.btnPlayVideo')
      .click();
    cy.get('.btnFullscreenVideo')
      .click();
  });
});
