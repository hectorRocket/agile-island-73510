const { REDIRECT_DOMAIN } = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Esta es como una del tío Andy!</h3>
          <p>LO ÚLTIMO QUE SE PIERDE ES LA BARRIGA, SEÑOR ESPERANZA</p>
          <p>${survey.body}</p>
          <div>
            <a href="${REDIRECT_DOMAIN}">SI</a>
          </div>
          <div>
            <a href="${REDIRECT_DOMAIN}">NO</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
