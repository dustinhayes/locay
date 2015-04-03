'use strict';

export default (subj, deft) =>
  Object.keys(subj).reduce((base, curr) =>
    (base[curr] = subj[curr] ? subj[curr] : deft[curr], base),
  {});
