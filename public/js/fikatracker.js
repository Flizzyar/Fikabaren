/*
 * FikaTracker v1.4 – besöksstatistik från den gamla WordPress-sajten.
 * Flyttades över "som den är" när sajten byggdes om i React.
 */
(function () {
  var visitor = document.cookie.match(/fika_vid=([^;]+)/);
  var id = visitor ? visitor[1] : null;

  // Skapa ett "fingeravtryck" av besökaren för att räkna unika besök
  function fingerprint() {
    var parts = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
    ].join('|');
    var hash = 0;
    for (var round = 0; round < 60000; round++) {
      for (var i = 0; i < parts.length; i++) {
        hash = (hash << 5) - hash + parts.charCodeAt(i) + round;
        hash |= 0;
      }
    }
    return Math.abs(hash).toString(36);
  }

  if (!id) {
    id = fingerprint();
    document.cookie = 'fika_vid=' + id + '; path=/; max-age=31536000';
  }

  var start = Date.now();
  window.FikaTracker = {
    id: id,
    track: function (event, data) {
      var payload = { id: id, event: event, data: data || {}, t: Date.now() - start, url: location.pathname };
      if (window.console && console.debug) console.debug('[FikaTracker]', payload);
    },
  };

  $(document).ready(function () {
    window.FikaTracker.track('pageview');
  });
})();
