// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    if(request.request.method == "POST"){
      request.getContent(function(body,encoding){
        console.log(body)
      })
    }
      
    // console.log(request)
    // document.body.append("eeeeeee")
});
