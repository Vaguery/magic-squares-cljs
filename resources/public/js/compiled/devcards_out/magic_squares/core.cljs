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

(defcard scoring-card
  (sab/html [:div
              [:h1 "Just how magic is that square?"]
              ]))

(deftest subset-totals-of-assignment
  (testing "given a hypergraph and an assignment, return individual sums per subset"
    (is (= (gen/sums-of-subsets
              (gen/magic-square 3 2)
              (into [] (range 1 10)))
           {:r1 6, :r2 15, :r3 24, :c1 12, :c2 15, :c3 18, :d1 15, :d2 15}
           ))
    (is (= (count (gen/sums-of-subsets
              (gen/magic-square 17 34)
              (into [] (shuffle (range 1 (inc (* 17 17)))))))
            68
            ))))

(deftest target-sum-of-assignment
  (testing "given a hypergraph and assignment, return the average of the subset sums"
    (is (= (gen/target-sum
              (gen/magic-square 3 2)
              (into [] (range 1 10)))
           (/ (apply +
             (vals (gen/sums-of-subsets
             (gen/magic-square 3 2)
             (into [] (range 1 10)))))
             (count (gen/magic-square 3 2)))
           ))
   (is (= (gen/target-sum
             (gen/magic-square 54 108)
             (into [] (range 1 (inc (* 54 54)))))
          (/ (apply +
            (vals (gen/sums-of-subsets
            (gen/magic-square 54 108)
            (into [] (range 1 (inc (* 54 54)))))))
            (count (gen/magic-square 54 108)))
          ))
    )
  (testing "this works for arbitrary assignments"
    (is (= (gen/target-sum
              {:l1 #{0 1 2} :l2 #{0 2 4}}
              [-3 8 3 99 72])
            40 ; ((-3 + 8 + 3) + (-3 + 3 + 72))/2
           ))
    )
  )


(deftest subset-errors
  (testing "given a hypergraph and assignment, return the hash of errors for each subset"
    (is (= (gen/subset-errors
              (gen/magic-square 3 2)
              (into [] (range 1 10)))
           {:r1 9, :r2 0, :r3 9, :c1 3, :c2 0, :c3 3, :d1 0, :d2 0}
           ))
    (is (= (gen/subset-errors
              (gen/magic-square 3 2)
              [8 16 24 -8 -72 32 16 0 -88])
              {:r1 89, :r2 7, :r3 31, :c1 57, :c2 15, :c3 9, :d1 111, :d2 9}
           ))
  ))

(defn tweak-assignment
  [nums i diff]
  (update-in nums [i] #(+ % diff))
  )

(defn random-swap
  [assignment]
  (let [[i j] (take 2 (shuffle (range (count assignment))))
        n1 (nth assignment i)
        n2 (nth assignment j)]
    (-> assignment
      (assoc , i n2)
      (assoc , j n1))
  ))

(deftest random
  (testing "some data on random assignment scores for small squares"
    (let [assignment (into [] (shuffle (range 1 26)))
          five-square (gen/magic-square 5 10)
          seventeen (gen/magic-square 17 34)]
      (is (= (vals (gen/subset-errors five-square assignment))
            99
            ))
      (is (= (sort
              (map
                #(gen/total-error five-square %)
                (map #(tweak-assignment assignment % 1) (range 0 25))))
            (gen/total-error five-square assignment)
            ))


      (is (=
        (loop [best [(shuffle (range 1 (inc (* 17 17))))]
               counter 1]
          (println (str counter ":" (last best)))
          (println (into [] (map #(gen/total-error seventeen %) best)))
          (if (or
                (zero? (gen/total-error seventeen (last best)))
                (> counter 500))
            (do (println (last best))
              99); best
            (let [variations (concat
                  best
                  (repeatedly 20 #(random-swap (last best)))
                  (repeatedly 5 #(shuffle (last best))))]
              ; (println variations)
              (recur [(first
                        (sort-by #(gen/total-error seventeen %) variations))]
                     (inc counter)))))
        99
        ))
      )
  ))



(defcard
  (str "## Some notes

  First off, there are apparently many `target-sum` values that are non-integer. This seems like will cause troubles with infeasible assignments.

  Then there's the question of what to do to keep assignments with unique values."
  ))







(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
