(ns magic-squares.core
  (:require #_[om.core :as om :include-macros true]
            [sablono.core :as sab :include-macros true]
            [magic-squares.generators :as gen])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [cljs.test :as test :refer [testing is]]
   ))

(enable-console-print!)

(defcard first-card
  (sab/html [:div
              [:h1 "Something something magic squares"]
              ]))


(deftest helpers
  (testing "rotating collections"
    (is (= (gen/rotate-seq 1 [1 2 3 4 5 6]) [2 3 4 5 6 1] ))
    (is (= (gen/rotate-seq 3 [1 2 3 4 5 6]) [4 5 6 1 2 3] ))
    (is (= (gen/rotate-seq -2 [1 2 3 4 5 6]) [5 6 1 2 3 4] ))
    (is (= (gen/rotate-seq 11 [1 2 3 4 5 6]) [6 1 2 3 4 5] ))
    (is (= (gen/rotate-seq 0 [1 2 3 4 5 6]) [1 2 3 4 5 6]))
    )
  (testing "build a numbered square of a given size"
    (is (= (gen/fill-square 3)
           '((0 1 2) (3 4 5) (6 7 8))
           )))
             )


(deftest diagonals
  (testing "diagonals"
    (is (= (gen/diags-of-matrix (gen/fill-square 3) 0)
      [#{0 4 8} #{2 4 6}]
      ))
    (is (= (gen/diags-of-matrix (gen/fill-square 4) 1)
      [#{1 6 11 12} #{0 7 10 13}]
      ))
    (is (= (gen/diags-of-matrix (gen/fill-square 5) 3)
      [#{3 9 10 16 22} #{2 6 10 19 23}]
      ))
    (is (= (gen/diags-of-matrix (gen/fill-square 6) -3)
      [#{3 10 17 18 25 32} #{2 7 12 23 28 33}]
      )))
  (testing "many-diags"
    (is (= (gen/many-diags (gen/fill-square 3) 0)
      []
      ))
    (is (= (gen/many-diags (gen/fill-square 3) 1)
      [#{0 4 8} #{2 4 6}]
      ))
    (is (= (gen/many-diags (gen/fill-square 3) 2)
      [#{0 4 8} #{2 4 6} #{1 5 6} #{0 5 7}]
      ))
    (is (= (gen/many-diags (gen/fill-square 3) 3)
       [#{0 4 8} #{2 4 6} #{1 5 6} #{0 5 7} #{2 3 7} #{1 3 8}]
      ))
  ))


(deftest semimagic-squares
  (testing "rows, columns only are returned"
    (is (= (gen/semimagic-square 3)
          {:r1 #{0 1 2},
          :r2 #{3 4 5},
          :r3 #{6 7 8},
          :c1 #{0 3 6},
          :c2 #{1 4 7},
          :c3 #{2 5 8}}
          ))))

(deftest basic-magic-squares
  (testing "same rows and column as semimagic, plus the indicated diagonals"
    (is (= (gen/magic-square 3 2)
          (merge (gen/semimagic-square 3) {:d1 #{0 4 8} :d2 #{2 4 6}})
          ))))

;  0  1  2  3
;  4  5  6  7
;  8  9 10 11
; 12 13 14 15

(deftest pandiagonal-squares
  (testing "by indicating more diagonals, I can get a pandiagonal square"
    (is (= (gen/magic-square 4 8)
          (merge (gen/semimagic-square 4)
            {:d1 #{0 5 10 15} :d2 #{3 6 9 12}
             :d3 #{1 6 11 12} :d4 #{0 7 10 13}
             :d5 #{2 7 8 13} :d6 #{1 4 11 14}
             :d7 #{3 4 9 14} :d8 #{2 5 8 15}})
            ))))



(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
