module.exports = {

  iClickOnCreateNewBook: async () => {
    await browser.asControl({
      selector: {
        id: "books::BooksList--fe::table::Books::LineItem::StandardAction::Create",
        interaction: {
          idSuffix: "BDI-content"
        }
      }
    }).press();

  },

  theBookListContains: async (sBook) => {
    const text = await browser.asControl({
      selector: {
        controlType: "sap.m.Link",
        viewName: "sap.fe.templates.ListReport.ListReport",
        viewId: "books::BooksList",
        properties: {
          text: sBook
        }
      }
    }).getText();
    expect(text).toEqual(sBook);
  }
  /**
    * define actions for the page object
  */

  /**
   * define assertions for the page object
   */
}

