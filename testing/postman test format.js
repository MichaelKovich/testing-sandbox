pm.test('Response has a status of 200', () => {
  pm.expect(pm.response).to.have.status(200);
});

pm.test('Response has a length of 52', () => {
  pm.expect(pm.response.json().length).is.eql(52);
});

pm.test('Products have an image URL', () => {
  const hasImages = pm.response.json().reduce((acc, cur) => cur.imgUrl && acc, true);
  pm.expect(hasImages).to.eql(true);
});
