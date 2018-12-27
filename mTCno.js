/**
 * T.C. Kimlik No Algoritma Kontrolü
 * 12.12.2014
 * Mehmet ÖZDEMİR
 * http://fsmtek.com
 * jQuery ile Turkiye Cumhuriyeti Kimlik Numarası Kontrol Eklentisi
 * Eklenti verilen seçici içerisindeki datanın T.C. Numarası algoritmasına uyumlu olup olmadığını kontrol ederek geribildirimde bulunur.
 */
jQuery.fn.mTCno = function() {
    var args = arguments[0] || {};
    var gosterim = args.gosterim;
    var mesaj = args.mesaj;
    if (!mesaj) {
        mesaj = ' Hatalı !';
        mesaj1 = ' Dogru !';
    }
    var tcno = null;
    tc = function mTCno(n) {
        var t = String(n), i;
        if (t == "")
            return !0;
        if (!t.match(/^[0-9]{11}$/))
            return !1;
        if (i = parseInt(t.substr(0, 1)), i == 0)
            return !0;
        var r = parseInt(t.substr(1, 1)),
            u = parseInt(t.substr(2, 1)),
            f = parseInt(t.substr(3, 1)),
            e = parseInt(t.substr(4, 1)),
            o = parseInt(t.substr(5, 1)),
            s = parseInt(t.substr(6, 1)),
            h = parseInt(t.substr(7, 1)),
            c = parseInt(t.substr(8, 1)),
            l = parseInt(t.substr(9, 1)),
            a = parseInt(t.substr(10, 1));
        return (10 - ((i + u + e + s + c) * 3 + r + f + o + h) % 10) % 10 != l || (10 - ((r + f + o + h + l) * 3 + i + u + e + s + c) % 10) % 10 != a ? !1 : !0
    };

    numeric = function jssayi(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        return ((charCode >= 48 && charCode < 58) || (charCode >= 96 && charCode < 106) || charCode == 8 || charCode == 46 || charCode == 39 || charCode == 37);
    };

    return this.each(function() {
        var $this = $(this);
        var error = null;
        $this.keyup(function(event) {
            tcno = jQuery(this).val();
            if (numeric(event) == false) {
                jQuery(this).val(tcno.substr(0, parseFloat(tcno.length) - 1));
            }
            else if (tcno.length > 11) {
                jQuery(this).val(tcno.substr(0, 11));
            }
            else if (tcno.length < 11) {
                error = ' 11 Hanedir.';
            }
            else if (tc(tcno) == false) {
                error = mesaj;
            } else {
                error = mesaj1;
            }
            jQuery(gosterim).text(error);
        });
    });
};
