export const PostData = (type, userData) => {
  // let baseUrl = "http://klasifikasi-ptpnx-djoembang.herokuapp.com/api/"
  let baseUrl = "http://localhost:5000/api/"

  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res =>
      res
        .json({
          msg: res
        })
        .then(resJson => resolve(resJson))
        .catch(err => reject(err))
    )
  })
}
