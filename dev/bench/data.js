window.BENCHMARK_DATA = {
  "lastUpdate": 1668763550524,
  "repoUrl": "https://github.com/huggingface/safetensors",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "08b4ffb2bf3b05fc32d4a79abd140dca66e2e932",
          "message": "Splitting up tests from benchmarks.",
          "timestamp": "2022-11-01T07:54:34Z",
          "url": "https://github.com/huggingface/safetensors/pull/50/commits/08b4ffb2bf3b05fc32d4a79abd140dca66e2e932"
        },
        "date": 1667310830383,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.1761837679361133,
            "unit": "iter/sec",
            "range": "stddev: 0.06050114010900778",
            "extra": "mean: 850.2072782000141 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.1253939656762553,
            "unit": "iter/sec",
            "range": "stddev: 0.06444961940990351",
            "extra": "mean: 319.95966299999736 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.4366580735436916,
            "unit": "iter/sec",
            "range": "stddev: 0.011029530601841198",
            "extra": "mean: 290.9803590000024 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 3.011720158388529,
            "unit": "iter/sec",
            "range": "stddev: 0.010238305987880602",
            "extra": "mean: 332.0361612000056 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.4736011081103566,
            "unit": "iter/sec",
            "range": "stddev: 0.10068621348608785",
            "extra": "mean: 678.6096959999782 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.8846619885488627,
            "unit": "iter/sec",
            "range": "stddev: 0.010457356083472449",
            "extra": "mean: 346.6610659999901 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "4c5a241be09d14c808770f85627ab70127a32063",
          "message": "Splitting up tests from benchmarks.",
          "timestamp": "2022-11-01T07:54:34Z",
          "url": "https://github.com/huggingface/safetensors/pull/50/commits/4c5a241be09d14c808770f85627ab70127a32063"
        },
        "date": 1667311560266,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.4807334447792253,
            "unit": "iter/sec",
            "range": "stddev: 0.042547544004970704",
            "extra": "mean: 675.3409963999957 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.240013874828148,
            "unit": "iter/sec",
            "range": "stddev: 0.10431122389692941",
            "extra": "mean: 308.6406535999913 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.539606906137727,
            "unit": "iter/sec",
            "range": "stddev: 0.009123308719396818",
            "extra": "mean: 282.5172473999828 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.6129205656866854,
            "unit": "iter/sec",
            "range": "stddev: 0.010663307385052927",
            "extra": "mean: 382.713509600012 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.9082718331257809,
            "unit": "iter/sec",
            "range": "stddev: 0.08112930679265079",
            "extra": "mean: 524.0343553999764 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.699145247781729,
            "unit": "iter/sec",
            "range": "stddev: 0.018136643384694662",
            "extra": "mean: 175.46490859997448 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "15168a809b69b2297b919674ba61e113deb0dec1",
          "message": "Make GPU loading faster by removing all extra CPU copies.",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/33/commits/15168a809b69b2297b919674ba61e113deb0dec1"
        },
        "date": 1667336160596,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 0.9234793964248041,
            "unit": "iter/sec",
            "range": "stddev: 0.07689400323299302",
            "extra": "mean: 1.0828611919999958 sec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 1.9663002818321826,
            "unit": "iter/sec",
            "range": "stddev: 0.11837197429890743",
            "extra": "mean: 508.5693213999889 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 2.0818910599288447,
            "unit": "iter/sec",
            "range": "stddev: 0.008944479841901432",
            "extra": "mean: 480.3325299999983 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 1.600741779642756,
            "unit": "iter/sec",
            "range": "stddev: 0.01073290347342444",
            "extra": "mean: 624.7103766000123 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.0993446095506627,
            "unit": "iter/sec",
            "range": "stddev: 0.10641603073651551",
            "extra": "mean: 909.63287699999 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 1.8989976417442387,
            "unit": "iter/sec",
            "range": "stddev: 0.0938069992411799",
            "extra": "mean: 526.5935975999923 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "ef4b5376e576d4aacf4dc6f61bbb722fb7cc87ca",
          "message": "Adding M1 (mps) benchmarks (going first through CPU seems faster though? but PT is just as slow going directly on MPS.).",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/51/commits/ef4b5376e576d4aacf4dc6f61bbb722fb7cc87ca"
        },
        "date": 1667340479214,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.2724705472134157,
            "unit": "iter/sec",
            "range": "stddev: 0.08044266918841757",
            "extra": "mean: 785.8728064000388 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.8580227329207966,
            "unit": "iter/sec",
            "range": "stddev: 0.08729102818479534",
            "extra": "mean: 349.89224840001043 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.0195338390758084,
            "unit": "iter/sec",
            "range": "stddev: 0.009859319389670097",
            "extra": "mean: 331.1769475999881 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.3880156878685623,
            "unit": "iter/sec",
            "range": "stddev: 0.010386881288471457",
            "extra": "mean: 418.75771799998347 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.210452945917001,
            "unit": "iter/sec",
            "range": "stddev: 0.055273436198714845",
            "extra": "mean: 826.1370286000101 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.1099034460376394,
            "unit": "iter/sec",
            "range": "stddev: 0.03661509552614141",
            "extra": "mean: 321.55339140001615 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "87767a20a9aced71485d568047683f9499f782ff",
          "message": "Make GPU loading faster by removing all extra CPU copies.",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/33/commits/87767a20a9aced71485d568047683f9499f782ff"
        },
        "date": 1667341158680,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.414224537231388,
            "unit": "iter/sec",
            "range": "stddev: 0.05067191022293383",
            "extra": "mean: 707.1012937999853 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.96337995143045,
            "unit": "iter/sec",
            "range": "stddev: 0.0659099397657412",
            "extra": "mean: 252.30990019997535 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 4.634766916857968,
            "unit": "iter/sec",
            "range": "stddev: 0.01873333971286032",
            "extra": "mean: 215.76058040000134 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 5.594454318581948,
            "unit": "iter/sec",
            "range": "stddev: 0.010468423321213905",
            "extra": "mean: 178.74844319999283 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.162763433777928,
            "unit": "iter/sec",
            "range": "stddev: 0.02777295766742694",
            "extra": "mean: 462.37142000001086 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.9891785425878545,
            "unit": "iter/sec",
            "range": "stddev: 0.008593573038468876",
            "extra": "mean: 166.96780583333748 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "23306433fdd497caf536c116f71044079a2a9226",
          "message": "[WIP] Re-enabling manylinux2014 builds.",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/52/commits/23306433fdd497caf536c116f71044079a2a9226"
        },
        "date": 1667374336783,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.3993065739631083,
            "unit": "iter/sec",
            "range": "stddev: 0.08601422921345907",
            "extra": "mean: 714.639678399999 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.0423073852219016,
            "unit": "iter/sec",
            "range": "stddev: 0.07598818182350783",
            "extra": "mean: 328.69788399999607 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.3408914677369195,
            "unit": "iter/sec",
            "range": "stddev: 0.010191868864880103",
            "extra": "mean: 299.32130680000455 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 4.197308167047888,
            "unit": "iter/sec",
            "range": "stddev: 0.010022613189764641",
            "extra": "mean: 238.24793420001242 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.3858421902849614,
            "unit": "iter/sec",
            "range": "stddev: 0.09543105227221804",
            "extra": "mean: 721.5828807999969 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.8600184713155032,
            "unit": "iter/sec",
            "range": "stddev: 0.016094418135405443",
            "extra": "mean: 259.0661178000005 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "e4452e858bda08547ab50aacd62f1453c7561fde",
          "message": "[WIP] Re-enabling manylinux2014 builds.",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/52/commits/e4452e858bda08547ab50aacd62f1453c7561fde"
        },
        "date": 1667379906142,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 5.3793626218447494,
            "unit": "iter/sec",
            "range": "stddev: 0.00592131510509175",
            "extra": "mean: 185.89562933332596 msec\nrounds: 6"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 9.407259826160756,
            "unit": "iter/sec",
            "range": "stddev: 0.017415201010710195",
            "extra": "mean: 106.30088022221823 msec\nrounds: 9"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 9.477643605883697,
            "unit": "iter/sec",
            "range": "stddev: 0.003953560958778612",
            "extra": "mean: 105.51145850000125 msec\nrounds: 10"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 9.678783860419665,
            "unit": "iter/sec",
            "range": "stddev: 0.004687622906261461",
            "extra": "mean: 103.31876550001198 msec\nrounds: 10"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 4.196763934085295,
            "unit": "iter/sec",
            "range": "stddev: 0.029043732993601204",
            "extra": "mean: 238.2788299999902 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 10.140201478975584,
            "unit": "iter/sec",
            "range": "stddev: 0.009961507086089309",
            "extra": "mean: 98.61736988888954 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "20adb08fcee2936e8700b07e5d939b1da6cc9a3d",
          "message": "Adding more docs:",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/53/commits/20adb08fcee2936e8700b07e5d939b1da6cc9a3d"
        },
        "date": 1667379962947,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.5403925390009043,
            "unit": "iter/sec",
            "range": "stddev: 0.03965716511039398",
            "extra": "mean: 649.1851750000023 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.113830609810627,
            "unit": "iter/sec",
            "range": "stddev: 0.11455916664830022",
            "extra": "mean: 321.1478482000075 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.342211803125016,
            "unit": "iter/sec",
            "range": "stddev: 0.009506538347663985",
            "extra": "mean: 299.20306039999787 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.445945543944888,
            "unit": "iter/sec",
            "range": "stddev: 0.009896208535684037",
            "extra": "mean: 408.83984619999865 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 2.2938161334286082,
            "unit": "iter/sec",
            "range": "stddev: 0.07801634596401112",
            "extra": "mean: 435.95473300001686 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.928781760080088,
            "unit": "iter/sec",
            "range": "stddev: 0.007198198089719236",
            "extra": "mean: 168.66871483333057 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "b1a3929b989dd266c9aa4e9014db1415a6447b0f",
          "message": "Adding docs",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/55/commits/b1a3929b989dd266c9aa4e9014db1415a6447b0f"
        },
        "date": 1667382770535,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.0995342815455929,
            "unit": "iter/sec",
            "range": "stddev: 0.03303437392237581",
            "extra": "mean: 909.4759633999956 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.8974786054828523,
            "unit": "iter/sec",
            "range": "stddev: 0.09032870302649294",
            "extra": "mean: 345.1276562000203 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.3045559558715576,
            "unit": "iter/sec",
            "range": "stddev: 0.010011286799984103",
            "extra": "mean: 302.6125183999966 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.961154896698312,
            "unit": "iter/sec",
            "range": "stddev: 0.012419020331433292",
            "extra": "mean: 337.7060758000198 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.7575910518348794,
            "unit": "iter/sec",
            "range": "stddev: 0.02758585088863463",
            "extra": "mean: 568.9605661999849 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.6339860263439534,
            "unit": "iter/sec",
            "range": "stddev: 0.05500283249453685",
            "extra": "mean: 275.179924400004 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "committer": {
            "name": "huggingface",
            "username": "huggingface"
          },
          "id": "d4ff161df4f619ec4f5693ab3a305e8447f73774",
          "message": "Adding docs",
          "timestamp": "2022-11-01T16:19:06Z",
          "url": "https://github.com/huggingface/safetensors/pull/55/commits/d4ff161df4f619ec4f5693ab3a305e8447f73774"
        },
        "date": 1667403069142,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.4734789001331186,
            "unit": "iter/sec",
            "range": "stddev: 0.027445078580132364",
            "extra": "mean: 678.6659788000065 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.1225284913769347,
            "unit": "iter/sec",
            "range": "stddev: 0.11317590919820404",
            "extra": "mean: 320.25328280000167 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.390581383179492,
            "unit": "iter/sec",
            "range": "stddev: 0.010055167244534192",
            "extra": "mean: 294.9346696000134 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 4.782799189969209,
            "unit": "iter/sec",
            "range": "stddev: 0.00971862062247003",
            "extra": "mean: 209.08258119999346 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.7799574551364918,
            "unit": "iter/sec",
            "range": "stddev: 0.07889507295228787",
            "extra": "mean: 561.8111810000073 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.540831714575038,
            "unit": "iter/sec",
            "range": "stddev: 0.021990522046467755",
            "extra": "mean: 220.22397280001087 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c74743cf1ea2a706acef35b5f743664ed2b88f64",
          "message": "Benching only after merging. (#54)",
          "timestamp": "2022-11-02T16:52:53+01:00",
          "tree_id": "c24db81803903c08d2e348f0ec4df8898c84834a",
          "url": "https://github.com/huggingface/safetensors/commit/c74743cf1ea2a706acef35b5f743664ed2b88f64"
        },
        "date": 1667404735502,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.1947676259609223,
            "unit": "iter/sec",
            "range": "stddev: 0.04325297884001762",
            "extra": "mean: 836.9828394000251 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.848410486741267,
            "unit": "iter/sec",
            "range": "stddev: 0.09530253830763538",
            "extra": "mean: 351.0729948000062 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.0329889386927342,
            "unit": "iter/sec",
            "range": "stddev: 0.010107059744606612",
            "extra": "mean: 329.70776360002674 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.3523641343529134,
            "unit": "iter/sec",
            "range": "stddev: 0.010251724044664609",
            "extra": "mean: 425.10425380000925 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.6251960498779234,
            "unit": "iter/sec",
            "range": "stddev: 0.08129584768075743",
            "extra": "mean: 615.310380599999 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.3549433802748934,
            "unit": "iter/sec",
            "range": "stddev: 0.010443379063565022",
            "extra": "mean: 298.0676233999702 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be0683f561f1f742c9253d46325945f6251a0770",
          "message": "Make GPU loading faster by removing all extra CPU copies. (#33)\n\n* Faster gpu load.\r\n\r\nUse cuda-sys directly.\r\n\r\nFor slice too.\r\n\r\nFun unsafe.\r\n\r\nReduce unsafe.\r\n\r\nRemoving CPU unsafe.\r\n\r\nUsing shared `cuda-sys` (temporary, we need to use torch's cuda version).\r\n\r\nTmp rework\r\n\r\nCleaner device.\r\n\r\nAdding some statistics...\r\n\r\nWarmup steps.\r\n\r\nRemoving unsafe GPU accesses.\r\n\r\nRemoving dead code.\r\n\r\nRemoving libloading.\r\n\r\nRevert \"Removing unsafe GPU accesses.\"\r\n\r\nThis reverts commit 5325ba2b73fffc16416130193da1690353e0a7db.\r\n\r\nUnsafe comments.\r\n\r\nUsing GILOnceCell for module reuse.\r\n\r\nFinding the lib through the real python workload.\r\nStill requires transitive library parsing.\r\n\r\nStable with global lib ref.\r\n\r\nAbort.\r\n\r\nWeird bug on torch 1.13.\r\n\r\nWe **need** to get the data_ptr within the loop ?\r\n\r\n* Fixing speedup by loading directly the loaded C library within Python.\r\n\r\n* Cleanup.\r\n\r\n* Finishing touches.\r\n\r\n* Remove some code duplication.\r\n\r\nSome very weird errors in calling the `cudaMemcpy` that fail depending\r\non order. Even aliasing the `Symbol` seem to be unsafe.\r\n\r\n* Adding some comments.\r\n\r\n* Better signature. Static symbol instead of lib.",
          "timestamp": "2022-11-02T16:53:50+01:00",
          "tree_id": "07902b31e4b3c421260a8c271ca6130efb8498e5",
          "url": "https://github.com/huggingface/safetensors/commit/be0683f561f1f742c9253d46325945f6251a0770"
        },
        "date": 1667404775663,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.4376614890107318,
            "unit": "iter/sec",
            "range": "stddev: 0.05975114580496285",
            "extra": "mean: 695.574033000014 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.1667596518081544,
            "unit": "iter/sec",
            "range": "stddev: 0.106637509904798",
            "extra": "mean: 315.78020119999337 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.445499483337568,
            "unit": "iter/sec",
            "range": "stddev: 0.010133627222081592",
            "extra": "mean: 290.23368160001155 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 5.2753430264375085,
            "unit": "iter/sec",
            "range": "stddev: 0.009863524780532144",
            "extra": "mean: 189.5611327999859 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.6386920977630888,
            "unit": "iter/sec",
            "range": "stddev: 0.05051471643577982",
            "extra": "mean: 610.2427670000111 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.640529956555499,
            "unit": "iter/sec",
            "range": "stddev: 0.014328635652532755",
            "extra": "mean: 177.2883058333529 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4aec9801561e168b6d71b55168de202b4114a3a",
          "message": "Adding M1 (mps) benchmarks (going first through CPU seems faster though? (#51)\n\nbut PT is just as slow going directly on MPS.).",
          "timestamp": "2022-11-02T16:53:16+01:00",
          "tree_id": "e69f3b5138256aad4da0a617e562bc711dda4f58",
          "url": "https://github.com/huggingface/safetensors/commit/d4aec9801561e168b6d71b55168de202b4114a3a"
        },
        "date": 1667404790868,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.1496411334041343,
            "unit": "iter/sec",
            "range": "stddev: 0.09651667950452923",
            "extra": "mean: 869.8366567999869 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.5438040824448733,
            "unit": "iter/sec",
            "range": "stddev: 0.10067693368220738",
            "extra": "mean: 393.1120352000107 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 2.9777006560718733,
            "unit": "iter/sec",
            "range": "stddev: 0.011834415037646574",
            "extra": "mean: 335.8295932000033 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.3075123479993396,
            "unit": "iter/sec",
            "range": "stddev: 0.01166423561954808",
            "extra": "mean: 433.36712839999336 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.2201703785347369,
            "unit": "iter/sec",
            "range": "stddev: 0.048398102959783744",
            "extra": "mean: 819.5576761999973 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.090951687385472,
            "unit": "iter/sec",
            "range": "stddev: 0.011931145474421692",
            "extra": "mean: 244.44189920001236 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a76f9e82979bdbc9ba025edec47fa6005c633833",
          "message": "Adding more docs: (#53)\n\n- Simple python example on the README.md\r\n- Added `npz` and `arrow` formats to the table (not exhaustively)\r\n- Added `benefits` section.",
          "timestamp": "2022-11-02T16:53:33+01:00",
          "tree_id": "eada12be266a6c2a719be0a406c504b56f2f84bf",
          "url": "https://github.com/huggingface/safetensors/commit/a76f9e82979bdbc9ba025edec47fa6005c633833"
        },
        "date": 1667404800069,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.200630864476058,
            "unit": "iter/sec",
            "range": "stddev: 0.08736540124322084",
            "extra": "mean: 832.8954631999977 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.557507146633963,
            "unit": "iter/sec",
            "range": "stddev: 0.1018294582547695",
            "extra": "mean: 391.0057500000107 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 2.6490493188759108,
            "unit": "iter/sec",
            "range": "stddev: 0.019127147462848382",
            "extra": "mean: 377.4939156000073 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 3.732107474364879,
            "unit": "iter/sec",
            "range": "stddev: 0.011289711356490989",
            "extra": "mean: 267.9451239999935 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.1204952533801815,
            "unit": "iter/sec",
            "range": "stddev: 0.1300142001792",
            "extra": "mean: 892.4625044000095 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.236833629597236,
            "unit": "iter/sec",
            "range": "stddev: 0.029853898745044065",
            "extra": "mean: 308.9438984000026 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f00cffa729be2fcfb869c17a697c27fc23b1f402",
          "message": "Supporting `safe_open` for TF and Flax. (#58)\n\n* Supporting `safe_open` for TF and Flax.\r\n\r\n* Move tensors only on Pytorch.",
          "timestamp": "2022-11-03T17:04:27+01:00",
          "tree_id": "93c9c44796ca4b211f32003acf4e0d438f48a2ca",
          "url": "https://github.com/huggingface/safetensors/commit/f00cffa729be2fcfb869c17a697c27fc23b1f402"
        },
        "date": 1667491959723,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.1414805449763463,
            "unit": "iter/sec",
            "range": "stddev: 0.036337031617267646",
            "extra": "mean: 876.0552287999985 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.545628441128624,
            "unit": "iter/sec",
            "range": "stddev: 0.1038418596021533",
            "extra": "mean: 392.83030620000545 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 2.757274106959102,
            "unit": "iter/sec",
            "range": "stddev: 0.00967912121941567",
            "extra": "mean: 362.67703579999306 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 2.0984427735690474,
            "unit": "iter/sec",
            "range": "stddev: 0.009861086281262066",
            "extra": "mean: 476.54385079998747 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.2701282204345614,
            "unit": "iter/sec",
            "range": "stddev: 0.14530792772616472",
            "extra": "mean: 787.3220859999947 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.880937067880167,
            "unit": "iter/sec",
            "range": "stddev: 0.010005243046268762",
            "extra": "mean: 347.1092829999975 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f1da8be6258f520a7a849d68a56696ddb3464dc",
          "message": "Found out about `torch.asarray` + `torch.Storage` combo. (#56)\n\n* Found out about `torch.asarray` + `torch.Storage` combo.\r\n\r\nExtremely fast (I'm guessing it's just pointer arithmetic and actual\r\nload time would it when actually using the tensors.)\r\n\r\n* Dropping 1.10 support (no `asarray`.)\r\n\r\n* Accepting torch==1.10.0 in slow mode.\r\n\r\n* Adding a comment about `Storage`.",
          "timestamp": "2022-11-04T15:02:30+01:00",
          "tree_id": "b2a790aaee1d6e3f9261ad0e00ae454314aae4a4",
          "url": "https://github.com/huggingface/safetensors/commit/2f1da8be6258f520a7a849d68a56696ddb3464dc"
        },
        "date": 1667570893022,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.2679113162564155,
            "unit": "iter/sec",
            "range": "stddev: 0.04949065266930508",
            "extra": "mean: 788.6986945999979 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.318022938062026,
            "unit": "iter/sec",
            "range": "stddev: 0.0722661863232775",
            "extra": "mean: 301.3842937999925 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.8714826161530174,
            "unit": "iter/sec",
            "range": "stddev: 0.010536996550223074",
            "extra": "mean: 258.29897720002464 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 190.58565561757982,
            "unit": "iter/sec",
            "range": "stddev: 0.0006219523492831864",
            "extra": "mean: 5.246984599966709 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.6048717254997897,
            "unit": "iter/sec",
            "range": "stddev: 0.07911022158218482",
            "extra": "mean: 623.102758999994 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.012037754064634,
            "unit": "iter/sec",
            "range": "stddev: 0.013451905122312965",
            "extra": "mean: 332.00115059996733 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "119473908008378722ca3b59cf1f81cf7347a30e",
          "message": "Preparing for release. (#60)",
          "timestamp": "2022-11-04T15:42:43+01:00",
          "tree_id": "a71d4e1fd7677b07be29a9d72410d012cfe9ec5d",
          "url": "https://github.com/huggingface/safetensors/commit/119473908008378722ca3b59cf1f81cf7347a30e"
        },
        "date": 1667573351009,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.145381714692218,
            "unit": "iter/sec",
            "range": "stddev: 0.0689197106283898",
            "extra": "mean: 873.0713849999916 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.592060187654152,
            "unit": "iter/sec",
            "range": "stddev: 0.10759316500152569",
            "extra": "mean: 385.79351079999924 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 5.436084214063815,
            "unit": "iter/sec",
            "range": "stddev: 0.029641671081626148",
            "extra": "mean: 183.95594340000798 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 194.68430849148677,
            "unit": "iter/sec",
            "range": "stddev: 0.00011969847012696986",
            "extra": "mean: 5.136520799999289 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.3133527664030828,
            "unit": "iter/sec",
            "range": "stddev: 0.05339020179810053",
            "extra": "mean: 761.4100533999931 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.047859642059664,
            "unit": "iter/sec",
            "range": "stddev: 0.051299599292381065",
            "extra": "mean: 328.0990982000162 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "764ff0faf4b36b1a0b42a2bd57869f3b8ccb2aaf",
          "message": "Adding the convert scripts which will now prevent converting models (#59)\n\n* Adding the convert scripts which will now prevent converting models\r\n\r\nin case they will trigger warnigns in the `transformers` side.\r\nEven if the model is perfectly fine, core maintainers fear an influx\r\nof opened issues.\r\n\r\nThis is perfectly legit.\r\nOn the `transformers` side fixes are on the way: https://github.com/huggingface/transformers/pull/20042\r\n\r\nWe can wait for this PR to hit `main` before communicating super widely.\r\n\r\nIn the meantime this script of convertion will now prevent converting\r\nmodels that would trigger such warnings (so the output of the script\r\n**will** depend on the `transformers` freshness.\r\n\r\n* Adding a nicer diff for the error when reloading.",
          "timestamp": "2022-11-04T17:38:58+01:00",
          "tree_id": "fcae620c33c26f5246f757ecd039a2db34add15e",
          "url": "https://github.com/huggingface/safetensors/commit/764ff0faf4b36b1a0b42a2bd57869f3b8ccb2aaf"
        },
        "date": 1667580293041,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.4783809617931654,
            "unit": "iter/sec",
            "range": "stddev: 0.05922416427706766",
            "extra": "mean: 676.4156370000023 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 4.101111456077411,
            "unit": "iter/sec",
            "range": "stddev: 0.05815818075012042",
            "extra": "mean: 243.8363382000034 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 5.218556539955357,
            "unit": "iter/sec",
            "range": "stddev: 0.02408313574336143",
            "extra": "mean: 191.62386999998944 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 227.2820694510784,
            "unit": "iter/sec",
            "range": "stddev: 0.00015381513366589567",
            "extra": "mean: 4.399819142861361 msec\nrounds: 7"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.8810317299829102,
            "unit": "iter/sec",
            "range": "stddev: 0.06028957922813192",
            "extra": "mean: 531.623142799981 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.936693692795961,
            "unit": "iter/sec",
            "range": "stddev: 0.020659453048524873",
            "extra": "mean: 168.4439271666444 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77566b96c68a100e8beccc92443bb3e1cbd6bb7c",
          "message": "Adding cargo audit check. (#64)\n\n* Adding cargo audit check.\r\n\r\n* Update command line.\r\n\r\n* Update affected crates.",
          "timestamp": "2022-11-08T15:47:22+01:00",
          "tree_id": "116690acc247d3c45ca286f3eefd229f81a67980",
          "url": "https://github.com/huggingface/safetensors/commit/77566b96c68a100e8beccc92443bb3e1cbd6bb7c"
        },
        "date": 1667919196046,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.097422063871392,
            "unit": "iter/sec",
            "range": "stddev: 0.04136285549705616",
            "extra": "mean: 911.2264395999887 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.5033585634258015,
            "unit": "iter/sec",
            "range": "stddev: 0.10981381540275884",
            "extra": "mean: 399.463350800022 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 4.548101954255351,
            "unit": "iter/sec",
            "range": "stddev: 0.03249410316775824",
            "extra": "mean: 219.87194000001864 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 218.8057694879941,
            "unit": "iter/sec",
            "range": "stddev: 0.0002751499106134156",
            "extra": "mean: 4.57026340000084 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.3910298391429805,
            "unit": "iter/sec",
            "range": "stddev: 0.13442657335608524",
            "extra": "mean: 718.8918396000076 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.323226241419488,
            "unit": "iter/sec",
            "range": "stddev: 0.01627326011666446",
            "extra": "mean: 300.91240479999897 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeef55fe8f5022036f29609bd4c863730fc88df7",
          "message": "New version. (#63)\n\n* New version.\r\n\r\n* mmap2.",
          "timestamp": "2022-11-08T15:47:29+01:00",
          "tree_id": "48cb71306a651d8f145a7742f4974319e4911cc2",
          "url": "https://github.com/huggingface/safetensors/commit/eeef55fe8f5022036f29609bd4c863730fc88df7"
        },
        "date": 1667919211819,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.200909975699589,
            "unit": "iter/sec",
            "range": "stddev: 0.02903238635162233",
            "extra": "mean: 832.7018846000101 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 2.7527737571880264,
            "unit": "iter/sec",
            "range": "stddev: 0.0969971044751294",
            "extra": "mean: 363.26995540000553 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 5.5639104718907655,
            "unit": "iter/sec",
            "range": "stddev: 0.03196172102543622",
            "extra": "mean: 179.72970720001058 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 213.96434900415295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127323161647681",
            "extra": "mean: 4.673675799983812 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 0.9299454357993475,
            "unit": "iter/sec",
            "range": "stddev: 0.1194505037728026",
            "extra": "mean: 1.0753319082000075 sec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 2.9008914244986963,
            "unit": "iter/sec",
            "range": "stddev: 0.020145276627615755",
            "extra": "mean: 344.72162300000946 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmishig@gmail.com",
            "name": "Mishig",
            "username": "mishig25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050d5d398bfc0142e893c6ba397e01fc05df4772",
          "message": "pip install .[dev] (#68)\n\n* Update setup.py\r\n\r\n* add click==8.0.4 to setup.py\r\n\r\n* gh actions use pip install .[dev]\r\n\r\n* Update binding local dev readme\r\n\r\n* fix gh action\r\n\r\n* fix gh action\r\n\r\n* fix gh action ?\r\n\r\n* don't install jax flax on windows\r\n\r\n* try removing unused deps",
          "timestamp": "2022-11-16T16:35:03+01:00",
          "tree_id": "0c282ad5b308864d61cec4860cc676acd6c3ccd0",
          "url": "https://github.com/huggingface/safetensors/commit/050d5d398bfc0142e893c6ba397e01fc05df4772"
        },
        "date": 1668613261534,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.4073831684119906,
            "unit": "iter/sec",
            "range": "stddev: 0.01991015581292761",
            "extra": "mean: 710.5385529999921 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.917838556300919,
            "unit": "iter/sec",
            "range": "stddev: 0.0640741664632032",
            "extra": "mean: 255.24277879999318 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 4.466203924945665,
            "unit": "iter/sec",
            "range": "stddev: 0.02085664666656434",
            "extra": "mean: 223.903793199986 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 218.54028464442,
            "unit": "iter/sec",
            "range": "stddev: 0.00038779852758449455",
            "extra": "mean: 4.575815400016836 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.6919817101135997,
            "unit": "iter/sec",
            "range": "stddev: 0.07699478695831562",
            "extra": "mean: 591.022937199989 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 5.906046348909113,
            "unit": "iter/sec",
            "range": "stddev: 0.007917755371955378",
            "extra": "mean: 169.31800750001003 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmishig@gmail.com",
            "name": "Mishig",
            "username": "mishig25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "639791c6e2b79102e8c52b9cb32b6a724cad62db",
          "message": "Fix doc build actions (#70)\n\n* Fix doc build actions\r\n\r\n* Add remaining doc gh ymls",
          "timestamp": "2022-11-17T10:37:40+01:00",
          "tree_id": "97d4ccca7fe638179e074bc7f34c3af12b92f12d",
          "url": "https://github.com/huggingface/safetensors/commit/639791c6e2b79102e8c52b9cb32b6a724cad62db"
        },
        "date": 1668678211036,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.3378876416490648,
            "unit": "iter/sec",
            "range": "stddev: 0.01618344512373872",
            "extra": "mean: 747.4469221999925 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.0882434771454528,
            "unit": "iter/sec",
            "range": "stddev: 0.11911854375962681",
            "extra": "mean: 323.8086657999929 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 4.190950609597149,
            "unit": "iter/sec",
            "range": "stddev: 0.04380455930471843",
            "extra": "mean: 238.6093498000264 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 228.22728790395809,
            "unit": "iter/sec",
            "range": "stddev: 0.00017945243435985736",
            "extra": "mean: 4.381597000008242 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.5818723673202721,
            "unit": "iter/sec",
            "range": "stddev: 0.0431793029626408",
            "extra": "mean: 632.1622531999992 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.72955716288872,
            "unit": "iter/sec",
            "range": "stddev: 0.011355326839872006",
            "extra": "mean: 211.43628580000495 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmishig@gmail.com",
            "name": "Mishig",
            "username": "mishig25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d18e4b14c00afabe7cb8bc3cc96c744d02d9accb",
          "message": "Add installation section (#71)",
          "timestamp": "2022-11-17T11:16:11+01:00",
          "tree_id": "05958c07542cf6075e1c5f466680830cca8b2016",
          "url": "https://github.com/huggingface/safetensors/commit/d18e4b14c00afabe7cb8bc3cc96c744d02d9accb"
        },
        "date": 1668680521752,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.2687437512356223,
            "unit": "iter/sec",
            "range": "stddev: 0.027686464571892663",
            "extra": "mean: 788.1812217999936 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.2940428944520956,
            "unit": "iter/sec",
            "range": "stddev: 0.06695592403349997",
            "extra": "mean: 303.57831759999954 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.7136347111499823,
            "unit": "iter/sec",
            "range": "stddev: 0.041143548701278065",
            "extra": "mean: 269.27796559999706 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 214.98345229337048,
            "unit": "iter/sec",
            "range": "stddev: 0.00043107614288927996",
            "extra": "mean: 4.651520800007347 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.270474026243779,
            "unit": "iter/sec",
            "range": "stddev: 0.11747829659110559",
            "extra": "mean: 787.1077875999958 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 4.151527350690178,
            "unit": "iter/sec",
            "range": "stddev: 0.015857391170053955",
            "extra": "mean: 240.87520460000178 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patry.nicolas@protonmail.com",
            "name": "Nicolas Patry",
            "username": "Narsil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b4d4794f46074eb73894d52e180052614dc47a",
          "message": "Fixing unimplemented into real exception. (#78)",
          "timestamp": "2022-11-17T20:08:25+01:00",
          "tree_id": "67cc68499a34e9445c986d7489270d9c6fc84591",
          "url": "https://github.com/huggingface/safetensors/commit/25b4d4794f46074eb73894d52e180052614dc47a"
        },
        "date": 1668712530069,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.1593687278550722,
            "unit": "iter/sec",
            "range": "stddev: 0.029379748272018186",
            "extra": "mean: 862.5383589999728 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.0030456823247507,
            "unit": "iter/sec",
            "range": "stddev: 0.07506717374466271",
            "extra": "mean: 332.99526739995144 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 3.887752051440298,
            "unit": "iter/sec",
            "range": "stddev: 0.039691374895293494",
            "extra": "mean: 257.2180496000328 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 131.64574372565627,
            "unit": "iter/sec",
            "range": "stddev: 0.00015567484798676882",
            "extra": "mean: 7.596143800014943 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.3196060706573562,
            "unit": "iter/sec",
            "range": "stddev: 0.06542782950616803",
            "extra": "mean: 757.8019094000183 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.9478327942352975,
            "unit": "iter/sec",
            "range": "stddev: 0.025398930977120843",
            "extra": "mean: 253.3035343999927 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "KOLANICH@users.noreply.github.com",
            "name": "KOLANICH",
            "username": "KOLANICH"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1373abcc44fb29bdb9db0dc45482d71244ad67c",
          "message": "Made the rust version consistent between `safetensors` and this crate. (#83)",
          "timestamp": "2022-11-18T10:19:54+01:00",
          "tree_id": "7b30fc3ae82f9543703154ca72044670e449a8ed",
          "url": "https://github.com/huggingface/safetensors/commit/d1373abcc44fb29bdb9db0dc45482d71244ad67c"
        },
        "date": 1668763549881,
        "tool": "pytest",
        "benches": [
          {
            "name": "benches/test_flax.py::test_flax_flax_load",
            "value": 1.2644879378822467,
            "unit": "iter/sec",
            "range": "stddev: 0.0740953147151298",
            "extra": "mean: 790.8339574000138 msec\nrounds: 5"
          },
          {
            "name": "benches/test_flax.py::test_flax_sf_load",
            "value": 3.4058953038261603,
            "unit": "iter/sec",
            "range": "stddev: 0.055113454393563154",
            "extra": "mean: 293.6085553999874 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_pt_load_cpu",
            "value": 4.288842162812033,
            "unit": "iter/sec",
            "range": "stddev: 0.04143626969543044",
            "extra": "mean: 233.1631619999598 msec\nrounds: 5"
          },
          {
            "name": "benches/test_pt.py::test_pt_sf_load_cpu",
            "value": 217.57393243805083,
            "unit": "iter/sec",
            "range": "stddev: 0.00017898831471550888",
            "extra": "mean: 4.596138833335317 msec\nrounds: 6"
          },
          {
            "name": "benches/test_tf.py::test_tf_tf_load",
            "value": 1.365769867262804,
            "unit": "iter/sec",
            "range": "stddev: 0.07182144274594406",
            "extra": "mean: 732.1877747999679 msec\nrounds: 5"
          },
          {
            "name": "benches/test_tf.py::test_tf_sf_load",
            "value": 3.9392648028926796,
            "unit": "iter/sec",
            "range": "stddev: 0.015096393356353374",
            "extra": "mean: 253.85447539999862 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}