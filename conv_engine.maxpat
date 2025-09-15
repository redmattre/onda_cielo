{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 9,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 124.0, 141.0, 918.0, 674.0 ],
		"gridsize" : [ 15.0, 15.0 ],
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1329.0, 8.0, 105.0, 22.0 ],
					"text" : "r ---loadConvolver"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2001.0, 325.0, 150.0, 20.0 ],
					"text" : "dum"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-84",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 417.0, 23.0, 150.0, 100.0 ],
					"text" : "DA FARE:\n\n- rendere dinamico il numero di canali preset bla\n- sistemare questi spaghettoni"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-577",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 1026.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1044.210563659667969, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-576",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 912.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1020.000036478042603, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-575",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 798.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 994.736877679824829, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-569",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 978.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-570",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 868.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-571",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 758.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-572",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 978.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-573",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 868.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-574",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 758.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-513",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 684.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 971.57898211479187, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-512",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 568.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 946.315823316574097, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-511",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 440.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 922.10529613494873, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-510",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 316.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 897.894768953323364, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-509",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1387.0, 378.0, 29.5, 22.0 ],
					"text" : "+ 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-505",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1250.0, 409.0, 31.0, 22.0 ],
					"text" : "t b s"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-493",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1376.0, 547.0, 29.5, 22.0 ],
					"text" : "join"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-488",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1376.0, 501.0, 29.5, 22.0 ],
					"text" : "join"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-483",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1250.0, 467.0, 78.0, 22.0 ],
					"text" : "append set 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-479",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1250.0, 438.0, 88.0, 22.0 ],
					"text" : "pack setvalue i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-475",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "int" ],
					"patching_rect" : [ 1269.0, 378.0, 63.0, 22.0 ],
					"text" : "unpack s i"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-469",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1357.0, 304.0, 29.5, 22.0 ],
					"text" : "join"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-450",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1329.0, 74.0, 31.0, 22.0 ],
					"text" : "t b s"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-435",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1204.0, 167.0, 34.0, 22.0 ],
					"text" : "sel 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-430",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 4,
					"outlettype" : [ "int", "", "", "int" ],
					"patching_rect" : [ 1204.0, 98.0, 61.0, 22.0 ],
					"text" : "counter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-424",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1204.0, 131.0, 29.5, 22.0 ],
					"text" : "% 6"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-422",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"patching_rect" : [ 1357.0, 191.0, 31.0, 22.0 ],
					"text" : "t s b"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-417",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1273.0, 46.0, 42.0, 22.0 ],
					"text" : "goto 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-415",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1273.0, 264.0, 29.5, 22.0 ],
					"text" : "+ 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-414",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 4,
					"outlettype" : [ "int", "", "", "int" ],
					"patching_rect" : [ 1273.0, 228.0, 61.0, 22.0 ],
					"text" : "counter"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-399",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 1357.0, 155.0, 77.0, 22.0 ],
					"text" : "route symbol"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-398",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1329.0, 44.0, 39.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1071.289512157440186, 389.0, 39.0, 22.0 ],
					"text" : "dump"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-382",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 1341.0, 116.0, 86.0, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0,
						"precision" : 6
					}
,
					"text" : "coll polyamore"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-381",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 20.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 848.421082973480225, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-380",
					"maxclass" : "meter~",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 178.0, 290.0, 104.0, 76.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 873.684241771697998, 274.736851930618286, 15.789474248886108, 75.78947639465332 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-371",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 646.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-370",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 536.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-369",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 426.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-368",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 316.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-359",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 206.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-342",
					"maxclass" : "newobj",
					"numinlets" : 9,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 97.0, 228.0, 103.0, 22.0 ],
					"text" : "mc.pack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-341",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 646.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-340",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 536.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-339",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 426.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-338",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 316.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-337",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 206.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-336",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 9,
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 97.0, 185.0, 103.0, 22.0 ],
					"text" : "mc.unpack~ 9"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-305",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 6,
					"outlettype" : [ "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal", "multichannelsignal" ],
					"patching_rect" : [ 97.0, 136.0, 185.0, 22.0 ],
					"text" : "mc.multiconvolve~ 1 6 @chans 9"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-2",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 97.0, 423.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "multichannelsignal" ],
					"patching_rect" : [ 97.0, 63.0, 30.0, 30.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-305", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-336", 0 ],
					"source" : [ "obj-305", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-337", 0 ],
					"source" : [ "obj-305", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-338", 0 ],
					"source" : [ "obj-305", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-339", 0 ],
					"source" : [ "obj-305", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-340", 0 ],
					"source" : [ "obj-305", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-341", 0 ],
					"source" : [ "obj-305", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 0 ],
					"source" : [ "obj-336", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 0 ],
					"source" : [ "obj-336", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 0 ],
					"source" : [ "obj-336", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 0 ],
					"source" : [ "obj-336", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 0 ],
					"source" : [ "obj-336", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 0 ],
					"source" : [ "obj-336", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 0 ],
					"source" : [ "obj-336", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 0 ],
					"source" : [ "obj-336", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 0 ],
					"source" : [ "obj-336", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 1 ],
					"source" : [ "obj-337", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 1 ],
					"source" : [ "obj-337", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 1 ],
					"source" : [ "obj-337", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 1 ],
					"source" : [ "obj-337", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 1 ],
					"source" : [ "obj-337", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 1 ],
					"source" : [ "obj-337", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 1 ],
					"source" : [ "obj-337", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 1 ],
					"source" : [ "obj-337", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 1 ],
					"source" : [ "obj-337", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 2 ],
					"source" : [ "obj-338", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 2 ],
					"source" : [ "obj-338", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 2 ],
					"source" : [ "obj-338", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 2 ],
					"source" : [ "obj-338", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 2 ],
					"source" : [ "obj-338", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 2 ],
					"source" : [ "obj-338", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 2 ],
					"source" : [ "obj-338", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 2 ],
					"source" : [ "obj-338", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 2 ],
					"source" : [ "obj-338", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 3 ],
					"source" : [ "obj-339", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 3 ],
					"source" : [ "obj-339", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 3 ],
					"source" : [ "obj-339", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 3 ],
					"source" : [ "obj-339", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 3 ],
					"source" : [ "obj-339", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 3 ],
					"source" : [ "obj-339", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 3 ],
					"source" : [ "obj-339", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 3 ],
					"source" : [ "obj-339", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 3 ],
					"source" : [ "obj-339", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 4 ],
					"source" : [ "obj-340", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 4 ],
					"source" : [ "obj-340", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 4 ],
					"source" : [ "obj-340", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 4 ],
					"source" : [ "obj-340", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 4 ],
					"source" : [ "obj-340", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 4 ],
					"source" : [ "obj-340", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 4 ],
					"source" : [ "obj-340", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 4 ],
					"source" : [ "obj-340", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 4 ],
					"source" : [ "obj-340", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 5 ],
					"source" : [ "obj-341", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 5 ],
					"source" : [ "obj-341", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 5 ],
					"source" : [ "obj-341", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 5 ],
					"source" : [ "obj-341", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 5 ],
					"source" : [ "obj-341", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 5 ],
					"source" : [ "obj-341", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 5 ],
					"source" : [ "obj-341", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 5 ],
					"source" : [ "obj-341", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 5 ],
					"source" : [ "obj-341", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 0,
					"source" : [ "obj-342", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-381", 0 ],
					"order" : 1,
					"source" : [ "obj-342", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-359", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-380", 0 ],
					"order" : 0,
					"source" : [ "obj-359", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-368", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-510", 0 ],
					"order" : 0,
					"source" : [ "obj-368", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-369", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-511", 0 ],
					"order" : 0,
					"source" : [ "obj-369", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-370", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-512", 0 ],
					"order" : 0,
					"source" : [ "obj-370", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-371", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-513", 0 ],
					"order" : 0,
					"source" : [ "obj-371", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-399", 0 ],
					"source" : [ "obj-382", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-450", 0 ],
					"source" : [ "obj-398", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-422", 0 ],
					"source" : [ "obj-399", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-415", 0 ],
					"source" : [ "obj-414", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-469", 1 ],
					"source" : [ "obj-415", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-414", 0 ],
					"order" : 0,
					"source" : [ "obj-417", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-430", 0 ],
					"order" : 1,
					"source" : [ "obj-417", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-430", 0 ],
					"source" : [ "obj-422", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-469", 0 ],
					"source" : [ "obj-422", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-435", 0 ],
					"order" : 1,
					"source" : [ "obj-424", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-509", 0 ],
					"midpoints" : [ 1213.5, 156.0, 1260.0, 156.0, 1260.0, 363.0, 1396.5, 363.0 ],
					"order" : 0,
					"source" : [ "obj-424", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-424", 0 ],
					"source" : [ "obj-430", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-414", 0 ],
					"source" : [ "obj-435", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-382", 0 ],
					"source" : [ "obj-450", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-417", 0 ],
					"midpoints" : [ 1338.5, 106.0, 1318.34765625, 106.0, 1318.34765625, 36.0, 1282.5, 36.0 ],
					"source" : [ "obj-450", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-475", 0 ],
					"source" : [ "obj-469", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-479", 1 ],
					"source" : [ "obj-475", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-505", 0 ],
					"source" : [ "obj-475", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-483", 0 ],
					"source" : [ "obj-479", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-488", 0 ],
					"midpoints" : [ 1259.5, 498.0, 1385.5, 498.0 ],
					"source" : [ "obj-483", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-493", 0 ],
					"source" : [ "obj-488", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-305", 0 ],
					"midpoints" : [ 1385.5, 579.0, 1175.5546875, 579.0, 1175.5546875, 126.0, 106.5, 126.0 ],
					"source" : [ "obj-493", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-398", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-479", 0 ],
					"source" : [ "obj-505", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-493", 1 ],
					"midpoints" : [ 1271.5, 432.0, 1281.0, 432.0, 1281.0, 420.0, 1350.0, 420.0, 1350.0, 534.0, 1396.0, 534.0 ],
					"source" : [ "obj-505", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-488", 1 ],
					"source" : [ "obj-509", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-569", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-577", 0 ],
					"order" : 0,
					"source" : [ "obj-569", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-570", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-576", 0 ],
					"order" : 0,
					"source" : [ "obj-570", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-571", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-575", 0 ],
					"order" : 0,
					"source" : [ "obj-571", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 8 ],
					"source" : [ "obj-572", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 8 ],
					"source" : [ "obj-572", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 8 ],
					"source" : [ "obj-572", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 8 ],
					"source" : [ "obj-572", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 8 ],
					"source" : [ "obj-572", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 8 ],
					"source" : [ "obj-572", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 8 ],
					"source" : [ "obj-572", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 8 ],
					"source" : [ "obj-572", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 8 ],
					"source" : [ "obj-572", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 7 ],
					"source" : [ "obj-573", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 7 ],
					"source" : [ "obj-573", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 7 ],
					"source" : [ "obj-573", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 7 ],
					"source" : [ "obj-573", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 7 ],
					"source" : [ "obj-573", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 7 ],
					"source" : [ "obj-573", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 7 ],
					"source" : [ "obj-573", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 7 ],
					"source" : [ "obj-573", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 7 ],
					"source" : [ "obj-573", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-342", 6 ],
					"source" : [ "obj-574", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-359", 6 ],
					"source" : [ "obj-574", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-368", 6 ],
					"source" : [ "obj-574", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-369", 6 ],
					"source" : [ "obj-574", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-370", 6 ],
					"source" : [ "obj-574", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-371", 6 ],
					"source" : [ "obj-574", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-569", 6 ],
					"source" : [ "obj-574", 8 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-570", 6 ],
					"source" : [ "obj-574", 7 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-571", 6 ],
					"source" : [ "obj-574", 6 ]
				}

			}
 ],
		"originid" : "pat-800"
	}

}
