(ns magic-squares.core
  (:require #_[om.core :as om :include-macros true]
            [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [cljs.test :as test :refer [testing is]]
   ))

(enable-console-print!)

(defcard first-card
  (sab/html [:div
              [:h1 "Something something magic squares"]
              ]))





(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
