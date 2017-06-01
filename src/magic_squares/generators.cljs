(ns magic-squares.generators)

(defn fill-square
  [side]
  (into []
    (partition side (range (* side side))))
    )

(defn transpose
  [matrix]
  (apply mapv vector matrix))


(defn rotate-seq
  [how-many seq]
  (let [n (count seq)]
    (concat (drop (mod how-many n) seq) (take (mod how-many n) seq))
    ))


(defn rows-of-matrix
  [matrix label]
  (into {}
    (map-indexed
      (fn [idx row]
        [(keyword (str label (inc idx))) (set row)])
      matrix
      )))


(defn diags-of-matrix
  [matrix offset]
  (vector
    (reduce-kv
      (fn [diag idx row] (conj diag (first (rotate-seq (+ offset idx) row))))
      #{}
      matrix
      )
    (reduce-kv
      (fn [diag idx row] (conj diag (last (rotate-seq (+ offset (- idx)) row))))
      #{}
      matrix
      )))


(defn many-diags
  [matrix howmany]
  (reduce
    #(into %1
      (diags-of-matrix matrix %2))
    []
    (range howmany)))


(defn semimagic-square
  [side]
  (let [nodes (fill-square side)]
    (merge
      (rows-of-matrix nodes "r")
      (rows-of-matrix (transpose nodes) "c")
      )))


(defn magic-square
  [side diag-count]
  (let [nodes (fill-square side)
        diag-labels (map #(keyword (str "d" %)) (range 1 (inc diag-count)))]
    (merge
      (semimagic-square side)
      (apply assoc
             {}
            (interleave
              diag-labels
              (many-diags nodes (/ diag-count 2))
              ))
              )))


(defn sums-of-subsets
  [hypergraph assignment-vector]
  (reduce-kv
    (fn [scores which items]
      (assoc scores which
        (apply + (map assignment-vector (which hypergraph)))
        ))
    {}
    hypergraph
    ))


(defn target-sum
  [hypergraph assignment-vector]
  (/
    (apply + (vals (sums-of-subsets hypergraph assignment-vector)))
    (count hypergraph)))


(defn abs
  [n]
  (max n (- n)))


(defn subset-errors
  [hypergraph assignment-vector]
  (let [target (target-sum hypergraph assignment-vector)
        sums (sums-of-subsets hypergraph assignment-vector)
        howmany (count hypergraph)]
    (reduce-kv
      (fn [scores subset sum] (assoc scores subset (abs (- target sum))))
      {}
      sums)
      ))


(defn total-error
  [hypergraph assignment-vector]
  (apply + (vals (subset-errors hypergraph assignment-vector))))
