(()=>{
    var e = {
        249: (e,t,a)=>{
            "use strict";
            a.r(t)
        }
        ,
        171: (e,t,a)=>{
            "use strict";
            a.d(t, {
                p: ()=>n
            });
            const n = {
                en: {
                    Accident: {
                        ClaimTooltip: "If the cost of the repair is put through insurance, there could be an associated insurance claim. Note that the insurance claims identified in this report do not include any medical pay-outs, damage to other vehicles, damage to property, towing, rental cars or any other incidental damages.",
                        DamageDetail: "Damage Detail",
                        EstimateTooltip: "An estimate record is generated when a vehicle is taken to a repair facility to assess how much it will cost to fix the damage. The estimate sometimes happens a few days after the incident, which is why the date of the estimate may be different than the incident date.",
                        Glass26: "Glass Claim",
                        GlassRecord: "Glass Record",
                        FixAutoRepair: "Repair Record",
                        IncidentTitles: {
                            Claim: "Claim",
                            ClaimReported: "Claim Reported",
                            DamageDetail: "Damage Detail",
                            DamageRepair: "Damage Repair",
                            Estimate: "Estimate",
                            PoliceReportedAccident: "Police Reported Accident",
                            AccidentReported: "Accident Reported"
                        },
                        NoAccidentDamage: "There are no accidents/damage reported on this vehicle.",
                        NoAccidentDamageHasOtherDamage: "There are no police reported accidents, estimates, or claims reported on this vehicle, however, we found other damage records that are outlined below.",
                        NotReported: "Not Reported",
                        NotReportedTooltip: "This record indicates that there was an insurance claim associated with this incident, however, the dollar amount was not reported to CARFAX Canada.",
                        SectionHeading: "Accident/Damage",
                        SectionHeadingTooltip: "There are many ways that a vehicle can sustain damage, but it typically falls into one of two categories: a motor vehicle accident (where the vehicle collides with another vehicle, a tree, an animal, etc.), or other damage which can include things like hail damage, fire, vandalism, etc. In either case, damage can range from minor (scratches, dings, etc.) to severe (broken axles, bent frame, etc.).",
                        TableHeadingDamageAmount: "Amount",
                        TableHeadingDetails: "Details",
                        TableHeadingEstimateDate: "Estimate Date",
                        TableHeadingIncidentDate: "Incident Date",
                        TableMainHeadingOtherDamage: "Other Damage Records",
                        TableHeadingRecordDate: "Record Date",
                        AccidentDetailTypes: {
                            1: "Unknown",
                            2: "Right front corner",
                            3: "Right front",
                            4: "Right centre",
                            5: "Right rear",
                            6: "Right rear corner",
                            7: "Back centre",
                            8: "Left rear corner",
                            9: "Left rear",
                            10: "Left centre",
                            11: "Left front",
                            12: "Left front corner",
                            13: "Front centre",
                            14: "Front complete",
                            15: "Right side complete",
                            16: "Back complete",
                            17: "Left side complete",
                            18: "Top",
                            19: "Undercarriage",
                            20: "No contact",
                            21: "Airbag deployed",
                            22: "AirBag Deployed",
                            23: "Front",
                            24: "Left Front",
                            25: "Left Rear",
                            26: "Left Side",
                            27: "Rear",
                            28: "Right Front",
                            29: "Right Rear",
                            30: "Right Side",
                            31: "Roof",
                            32: "Undercarriage"
                        },
                        ClaimType: {
                            1: "English",
                            2: "ANIMAL COLLISION",
                            3: "Attempted Theft Of Vehicle",
                            4: "Bodily Injury, WITHIN PROVINCE, by passengers in the insured automobile.",
                            5: "Bodily Injury, WITHIN PROVINCE, by any other third party",
                            6: "Bodily Injury, OUTSIDE PROVINCE, by passengers in the insured automobile",
                            7: "Bodily Injury, OUTSIDE PROVINCE, by any other third party.",
                            8: "Uninsured Automobile – Bodily Injury",
                            9: "Bodily Injury by passengers in the insured automobile",
                            10: "Bodily Injury by any other third party",
                            11: "Damage to contents, not owned by the insured but under his care, custody or control",
                            12: "CASH SETTLEMENT",
                            13: "Other Comprehensive",
                            14: "Collision",
                            15: "COLLISION",
                            16: "COLLISION CLAIM",
                            17: "Collision",
                            18: "Collision With Wildlife",
                            19: "COMPREHENSIVE",
                            20: "CONTRACT",
                            21: "Collision with Domestic Animal",
                            22: "Vehicle was stolen today but has not been recovered",
                            23: "A total loss claim with no amount paid is suspect for several possible reasons",
                            24: "Rebuilt vehicle has no claims",
                            25: "Any rebuilt vehicle should have an associated TOTAL LOSS claim",
                            26: "A salvaged vehicle should not be on the road",
                            27: "Bad status returned from call to HI$001",
                            28: "Not all VINs have been displayed",
                            29: "Not all claims have been displayed",
                            30: "Invalid VDWS Message Header",
                            31: "Property Damage to contents owned by the insured",
                            32: "Loss of use",
                            33: "Other Damage",
                            34: "Death benefits",
                            35: "Disability income benefits",
                            36: "Host Warning - Unable to process request",
                            37: "Fire Lighted Material",
                            38: "FIRE",
                            39: "Fire",
                            40: "FLOOD",
                            41: "All Underinsured motorist claims",
                            42: "Funeral services",
                            43: "GLASS",
                            44: "Glass/windshield damage not caused by windstorm or hail",
                            45: "Hail",
                            46: "Physical Damage - Hail",
                            47: "Bodily Injury outside Quebec or excluded under section 17b of the Automobile Insurance Act",
                            48: "Accident Benefits – Death Benefits (Quebec)",
                            49: "Accident Benefits – Total Disability (Quebec)",
                            50: "Accident Benefits – Dismemberment Benefits (Quebec)",
                            51: "Physical Damage, Emergency Services Expense Ends",
                            52: "Physical Damage, Glass – Not caused by Wind or Hail",
                            53: "Physical Damage, Loss of Use",
                            54: "Accident Benefits – Medical Expenses (Quebec)",
                            55: "Physical Damage, Other Claims Not Collision",
                            56: "Loss Transfer recovery – Caregiver disability income benefit",
                            57: "Loss Transfer recovery – Attendant/Long care",
                            58: "Loss Transfer recovery – rehabilitation – vocational",
                            59: "Caregiver disability income benefit",
                            60: "Attendant / Long term care",
                            61: "Rehabilitation - Vocational",
                            62: "Physical Damage, Windstorm and Hail",
                            63: "Lightning",
                            64: "Loss Transfer provision (applies to the company making the loss transfer indemnification payment to the insurer paying the accident benefits)",
                            65: "Medical expenses",
                            66: "Miscellaneous",
                            67: "NOT AVAILABLE",
                            68: "NO DETAILS",
                            69: "Uninsured Automobile – Property Damage",
                            70: "Property Damage",
                            71: "Property Damage to third party vehicle, or contents thereof, or to other property not under the care, custody or control of the insured",
                            72: "Accidents occurring in Quebec, Manitoba or Saskatchewan of vehicle garaged in province, and payments in excess of provincial benefits",
                            73: "REPAIRS",
                            74: "Loss Transfer recovery – cost of examinations",
                            75: "Loss Transfer recovery – dependant care expenses benefits",
                            76: "Loss Transfer recovery – employed/deemed employed disability income benefits",
                            77: "Loss Transfer recovery – housekeeping and home maintenance expenses benefits",
                            78: "Loss Transfer recovery – all others – non earner disability income benefits",
                            79: "Loss Transfer recovery – all other including replacement of clothing, hearing aids, glasses and other devices",
                            80: "Loss Transfer recovery – student disability income benefits",
                            81: "Loss Transfer recovery – Attendant care",
                            82: "Loss Transfer recovery – caregiver disability income benefits",
                            83: "Loss Transfer recovery – death benefits",
                            84: "Loss Transfer recovery – disability income benefits",
                            85: "Loss Transfer recovery – funeral benefits",
                            86: "Loss Transfer recovery – medical, excluding rehabilitation and extended care",
                            87: "Loss Transfer recovery – rehabilitation other than renovations",
                            88: "Loss Transfer recovery – replacement of clothing, hearing aids, glasses and other devices",
                            89: "Loss Transfer recovery – rehabilitation renovations",
                            90: "Loss Transfer recovery – visitation expenses benefits",
                            91: "Attendant care",
                            92: "Caregiver disability income benefits",
                            93: "Death benefits",
                            94: "Disability income benefits",
                            95: "Funeral benefits",
                            96: "Medical, excluding rehabilitation and extended care",
                            97: "Rehabilitation – other than renovations",
                            98: "Replacement of clothing, hearing aids, glasses and other devices",
                            99: "Rehabilitation – renovations",
                            100: "Costs of examinations",
                            101: "Dependant care expenses benefits",
                            102: "Employed/deemed employed disability income benefits",
                            103: "Housekeeping and home maintenance expenses benefits",
                            104: "All others – non earner disability income benefits",
                            105: "All other including replacement of clothing, hearing aids, glasses and other devices",
                            106: "Student disability income benefits",
                            107: "Vacation expenses benefits",
                            108: "SPECIAL EQUIPMENT",
                            109: "Total Theft",
                            110: "Theft",
                            111: "Theft of contents of the vehicle",
                            112: "THEFT",
                            113: "Theft",
                            114: "THEFT FROM VEHICLE",
                            115: "Partial Theft",
                            116: "Damage to trailer, not owned by the insured, but under his care, custody or control",
                            117: "TOTAL LOSS",
                            118: "TOTAL THEFT OF AUTO",
                            119: "Uninsured and unidentified automobile claims",
                            120: "UNKNOWN",
                            121: "Vandalism",
                            122: "VANDALISM",
                            123: "Vandalism",
                            124: "Damage to Vehicle",
                            125: "Windstorm"
                        },
                        ClaimsDescription: {
                            1: "Right front corner",
                            2: "Right front side",
                            3: "Right side",
                            4: "Right rear side",
                            5: "Right rear corner",
                            6: "Rear centre",
                            7: "Left rear corner",
                            8: "Left rear side",
                            9: "Left side",
                            10: "Left front side",
                            11: "Left front corner",
                            12: "Front centre",
                            13: "Rollover",
                            14: "Unknown",
                            15: "Total loss",
                            16: "Non-collision",
                            17: "All over",
                            18: "Undercarriage"
                        }
                    },
                    Auction: {
                        AccidentRepair: "AUCTION ANNOUNCED AS ACCIDENT REPAIR",
                        AdjacentPanelsReplaced: "AUCTION ANNOUNCED AS ADJACENT PANELS REPLACED",
                        AirBagsMissingDefective: "AUCTION ANNOUNCED AS AIR BAGS MISSING/DEFECTIVE",
                        FireDamage: "AUCTION ANNOUNCED AS FIRE DAMAGE",
                        FloodDamage: "AUCTION ANNOUNCED AS FLOOD DAMAGE",
                        Irreparable: "AUCTION ANNOUNCED AS IRREPARABLE",
                        MajorRepair: "AUCTION ANNOUNCED AS MAJOR REPAIR",
                        StructuralDamage: "AUCTION ANNOUNCED AS STRUCTURAL DAMAGE",
                        TitleBranded: "AUCTION ANNOUNCED AS TITLE BRANDED",
                        TitleBrandedAtSalvageAuction: "AUCTION ANNOUNCED AT SALVAGE AUCTION",
                        TotalLoss: "AUCTION ANNOUNCED AS TOTAL LOSS",
                        AirConditioningNeedsRepair: "AUCTION ANNOUNCED AS AIR CONDITIONING NEEDS REPAIR",
                        ComputerNeedsRepair: "AUCTION ANNOUNCED AS COMPUTER NEEDS REPAIR",
                        ElectricalSystemNeedsRepair: "AUCTION ANNOUNCED AS ELECTRICAL SYSTEM NEEDS REPAIR",
                        EmissionsSystemNeedsRepair: "AUCTION ANNOUNCED AS EMISSIONS SYSTEM NEEDS REPAIRS",
                        EngineNeedsRepair: "AUCTION ANNOUNCED AS ENGINE NEEDS REPAIR",
                        FuelSystemNeedsRepair: "AUCTION ANNOUNCED AS FUEL SYSTEM NEEDS REPAIR",
                        HailDamage: "AUCTION ANNOUNCED AS HAIL DAMAGE",
                        MajorAccessoryNeedsRepair: "AUCTION ANNOUNCED AS MAJOR ACCESSORY NEEDS REPAIR",
                        PowerTrainNeedsRepair: "AUCTION ANNOUNCED AS POWER TRAIN NEEDS REPAIR",
                        SuspensionNeedsRepair: "AUCTION ANNOUNCED AS SUSPENSION NEEDS REPAIR",
                        TransmissionNeedsRepair: "AUCTION ANNOUNCED AS TRANSMISSION NEEDS REPAIR",
                        TwoOrMoreBodyPanelsReplaced: "AUCTION ANNOUNCED AS TWO OR MORE BODY PANELS REPLACED",
                        WaterDamage: "AUCTION ANNOUNCED AS WATER DAMAGE"
                    },
                    BCDisclaimer: {
                        BcDisclaimerLi1: "vehicles sold by insurance companies as salvage",
                        BcDisclaimerLi2: "salvage vehicles which have been rebuilt, inspected, and relicensed",
                        BcDisclaimerLi3: "wrecked vehicles that have been decommissioned and can only be resold for parts",
                        BcDisclaimerLink: "http://apps.icbc.com/registration/vchr/Limitation.html",
                        BcDisclaimerP1: "The information supplied by ICBC is a report of the vehicle’s status and the vehicle’s claims history. Vehicle status shows whether a vehicle is qualified to be licensed and is used to track:",
                        BcDisclaimerP2: "The vehicle status may not represent the vehicle accurately for a number of reasons, including a written-off vehicle that hasn’t been reported to the B.C. vehicle registry or a vehicle with major damage that was repaired by its owner. The vehicle claims history is a report of vehicle damage and includes repairs paid by ICBC and outstanding damage estimates. It may be incomplete for various reasons, including the owner did not make a claim to ICBC or ICBC has denied the claim. In addition, the estimate information may not necessarily reflect the actual cost of repairs, list the area of the vehicle that sustained the greatest force of impact, or indicate the primary area of damage.",
                        BcDisclaimerP3: "Consumers are encouraged to read ICBC’s full statement of limitations at",
                        BcDisclaimerP4: "ICBC recommends the vehicle be inspected by a qualified mechanic to obtain a more complete assessment of the vehicle’s condition.",
                        BcDisclaimerTitle: "ICBC Disclaimer"
                    },
                    BCUpgradeMessage: {
                        AddIcbcDataTitle: "Add ICBC Accident Data",
                        AutoIncludeICBC: "To automatically include ICBC data each time B.C. registration is detected, contact CARFAX Canada at",
                        ContactSupportEnd: "and we can assist you in obtaining this information.",
                        ContactSupportStart: "Please contact CARFAX Canada at",
                        DealerSameDay: "To obtain this information, you can upgrade your report for an additional $\x3c!--AMOUNT--\x3e.",
                        ICBCChargesMoney: "ICBC charges $\x3c!--AMOUNT--\x3e for information on claims made under their coverage. We recommend upgrading the report to include ICBC data.",
                        MobilePleaseNote: "Please note",
                        MobileVehicleRegisteredInBC: "This vehicle has been registered in British Columbia but this report does not include information from ICBC, the province’s insurance provider.",
                        NoICBCInfoEnd: "By providing us with more information about the vehicle, we can access the details for you.",
                        NoICBCInfoTitle: "This report does not contain ICBC information on your vehicle.",
                        NoICBCInfoStart: "Please contact CARFAX Canada at",
                        RetailICBC: "This vehicle has been registered in British Columbia but this report does not include information from ICBC, the province’s insurance provider.",
                        RetailObtainICBC: "To obtain ICBC records for this vehicle, please",
                        RetailFAQ: "visit our FAQs",
                        RetailNextSteps: "for next steps.",
                        SuccessfulUpgradeBodyOne: "We’ll now begin collecting info from our data sources.",
                        SuccessfulUpgradeTitle: "Your report has been successfully upgraded!",
                        VehicleRegisteredInBC: "This vehicle has been registered in British Columbia but this report does not include information from ICBC, the province’s insurance provider."
                    },
                    DetailedHistory: {
                        AccidentReported: "Accident Reported",
                        ImportRecordTooltip: "If a vehicle was originally manufactured for the U.S. market and has been imported into Canada, it is required to go through Canada’s national program of vehicle registration, inspection and certification (known as the Registrar of Imported Vehicles). This program aims to ensure that vehicles being permanently imported into Canada meet Canadian road safety standards. Details can be found at riv.ca. This report does not include import records for vehicles coming into Canada from countries other than the U.S.",
                        PreviousUse: "Previous Use",
                        TableHeadingDataSource: "Source",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Details",
                        TableHeadingOdometer: "Odometer",
                        TableHeadingRecordType: "Record Type",
                        Tooltip: "This is the full list of information CARFAX Canada has about this vehicle.",
                        SectionHeading: "Detailed History",
                        UnknownUnitOfMeasureMessage: "*Unknown. The unit of measure for this odometer reading was not supplied, and cannot be provided in this report.",
                        DataSourceTypes: {
                            1: "Auto Auction",
                            2: "Service Facility",
                            3: "Police Reported Accident",
                            4: "Insurance Records",
                            5: "Motor Vehicle Dept.",
                            6: "Independent Source",
                            7: "Repair Facility",
                            8: "CAMVAP",
                            9: "Drive Clean",
                            10: "PPSR",
                            11: "Speedy Auto Service",
                            12: "Damage Records",
                            13: "Accident Reported"
                        },
                        DetailTypes: {
                            1: "Vehicle serviced",
                            2: "AUCTION ANNOUNCED AS MANUFACTURER REPURCHASE",
                            3: "AUCTION ANNOUNCED AS ODOMETER BROKEN/FAULTY",
                            4: "AUCTION ANNOUNCED AS ODOMETER MILES",
                            5: "AUCTION ANNOUNCED AS ODOMETER REPLACED",
                            6: "AUCTION ANNOUNCED AS ODOMETER ROLLBACK",
                            7: "AUCTION ANNOUNCED AS STOLEN AND RECOVERED",
                            8: "AUCTION ANNOUNCED AS TRUE KILOMETRES/MILES UNKNOWN",
                            9: "AUCTION ANNOUNCED AS US VEHICLE",
                            10: "AUCTION ANNOUNCED AS WARRANTY CANCELLED",
                            11: "AUCTION ANNOUNCED AS ODOMETER READING",
                            12: "AUCTION ANNOUNCED AS PREVIOUS DAILY RENTAL",
                            13: "AUCTION ANNOUNCED AS PREVIOUS EMERGENCY SERVICES VEHICLE",
                            14: "AUCTION ANNOUNCED AS PREVIOUS POLICE VEHICLE",
                            15: "AUCTION ANNOUNCED AS PREVIOUS TAXI LIMO",
                            16: "REPORTED AT AUTO AUCTION",
                            17: "Daily Rental",
                            18: "Registration Issued or Renewed",
                            19: "First Owner Reported",
                            20: "New Owner Reported",
                            21: "Title issued or updated",
                            22: "Loan or lien reported",
                            23: "Dealer took title of this vehicle while it was in inventory",
                            24: "Title or registration issued",
                            25: "Vehicle failed safety inspection and declared unsafe",
                            26: "AUCTION ANNOUNCED AS ACCIDENT REPAIR",
                            27: "AUCTION ANNOUNCED AS ADJACENT PANELS REPLACED",
                            28: "AUCTION ANNOUNCED AS AIR BAGS MISSING/DEFECTIVE",
                            29: "AUCTION ANNOUNCED AS FIRE DAMAGE",
                            30: "AUCTION ANNOUNCED AS FLOOD DAMAGE",
                            31: "AUCTION ANNOUNCED AS IRREPARABLE",
                            32: "AUCTION ANNOUNCED AS TOTAL LOSS",
                            33: "AUCTION ANNOUNCED AS STRUCTURAL DAMAGE",
                            34: "AUCTION ANNOUNCED AS TITLE BRANDED",
                            35: "AUCTION ANNOUNCED AT SALVAGE AUCTION",
                            36: "AUCTION ANNOUNCED AS MAJOR REPAIR",
                            37: "Taxi",
                            38: "Corporate",
                            39: "Police",
                            40: "Non-profit",
                            41: "Government",
                            42: "Personal lease",
                            43: "REBUILT TITLE ISSUED",
                            44: "Passed safety or emissions inspection",
                            45: "Vehicle serviced",
                            46: "Safety inspection performed",
                            47: "Emissions inspection performed",
                            48: "Passed Safety Inspection",
                            49: "Failed Safety Inspection",
                            50: "Pass Emissions Inspection",
                            51: "Failed Emissions Inspection",
                            52: "Vehicle Registered as Certified Pre-Owned (CPO)",
                            53: "Vehicle Sold as Certified Pre-Owned (CPO)",
                            54: "Manufacturer Buyback Lemon",
                            55: "Lease",
                            56: "Rebuilt/Rebuildable",
                            57: "Vehicle imported to United States from Canada",
                            58: "Vehicle imported to Canada from United States",
                            59: "Previous Daily Rental",
                            60: "AirBag Deployed",
                            61: "Front",
                            62: "Left Front",
                            63: "Left Rear",
                            64: "Left Side",
                            65: "Rear",
                            66: "Right Front",
                            67: "Right Rear",
                            68: "Right Side",
                            69: "Roof",
                            70: "Undercarriage",
                            71: "Collision",
                            72: "Non-collision",
                            84: "Registered/Renewed",
                            85: "Fleet",
                            86: "Total Loss",
                            87: "VEHICLE DECLARED TOTAL LOSS",
                            88: "Vehicle Sold at Auction",
                            89: "Listed as a Dealer Vehicle",
                            90: "Structural alteration disclosed by seller",
                            91: "Vehicle sold",
                            92: "Listed as a manufacturer vehicle",
                            93: "SALVAGE TITLE/CERTIFICATE ISSUED",
                            94: "Sold at salvage auction",
                            95: "Collision damage reported",
                            96: "SEVERE DAMAGE HISTORY DISCLOSED BY SELLER",
                            100: "AUCTION ANNOUNCED AS ENGINE NEEDS REPAIR",
                            101: "AUCTION ANNOUNCED AS AIR CONDITIONING NEEDS REPAIR",
                            102: "AUCTION ANNOUNCED AS ALTERNATE FUEL OR CONVERSION",
                            103: "AUCTION ANNOUNCED AS COMPLETE REPAINT",
                            104: "AUCTION ANNOUNCED AS COMPUTER NEEDS REPAIR",
                            105: "AUCTION ANNOUNCED AS ELECTRICAL SYSTEM NEEDS REPAIR",
                            106: "AUCTION ANNOUNCED AS EMISSIONS SYSTEM NEEDS REPAIR",
                            107: "AUCTION ANNOUNCED AS FORMER FIFTH WHEEL",
                            108: "AUCTION ANNOUNCED AS PREVIOUS LEASE",
                            109: "AUCTION ANNOUNCED AS PREVIOUS SNOW PLOW VEHICLE",
                            110: "AUCTION ANNOUNCED AS FUEL SYSTEM NEEDS REPAIR",
                            111: "AUCTION ANNOUNCED AS HAIL DAMAGE",
                            112: "AUCTION ANNOUNCED AS MAJOR ACCESSORY NEEDS REPAIR",
                            113: "AUCTION ANNOUNCED AS REQUIRES TOW",
                            114: "AUCTION ANNOUNCED AS OBD-II CODES PRESENT",
                            115: "AUCTION ANNOUNCED AS POWER TRAIN NEEDS REPAIR",
                            116: "AUCTION ANNOUNCED AS PREVIOUS DRIVING SCHOOL VEHICLE",
                            117: "AUCTION ANNOUNCED AS REPLACEMENT PUBLIC VIN PLATE",
                            118: "AUCTION ANNOUNCED AS STRUCTURAL ALTERATION",
                            119: "AUCTION ANNOUNCED AS SUSPENSION NEEDS REPAIR",
                            120: "AUCTION ANNOUNCED AS TRANSFERABLE TITLE NOT ON HAND",
                            121: "AUCTION ANNOUNCED AS TRANSMISSION NEEDS REPAIR",
                            122: "AUCTION ANNOUNCED AS TWO OR MORE BODY PANELS REPLACED",
                            123: "AUCTION ANNOUNCED AS VIN PLATE ISSUES",
                            124: "AUCTION ANNOUNCED AS WATER DAMAGE",
                            125: "AUCTION ANNOUNCED AS PREVIOUS POLICE OR EMS VEHICLE",
                            126: "AUCTION ANNOUNCED AS OUT OF PROVINCE",
                            127: "AUCTION ANNOUNCED AS ABS DEFECTIVE",
                            128: "AUCTION ANNOUNCED AS ADDITIONAL DISCLOSURE",
                            129: "AUCTION ANNOUNCED AS INCORRECT VEHICLE MARKING",
                            130: "AUCTION ANNOUNCED AS MATERIAL VARIATION FROM PRODUCTION SPECS",
                            131: "Vehicle colour noted as almond",
                            132: "Vehicle colour noted as aluminum",
                            133: "Vehicle colour noted as amethyst",
                            134: "Vehicle colour noted as aquamarine",
                            135: "Vehicle colour noted as beige",
                            136: "Vehicle colour noted as black",
                            137: "Vehicle colour noted as blue",
                            138: "Vehicle colour noted as bronze",
                            139: "Vehicle colour noted as brown",
                            140: "Vehicle colour noted as burgundy",
                            141: "Vehicle colour noted as camouflage",
                            142: "Vehicle colour noted as chrome",
                            143: "Vehicle colour noted as copper",
                            144: "Vehicle colour noted as coral",
                            145: "Vehicle colour noted as cream",
                            146: "Vehicle colour noted as dark blue",
                            147: "Vehicle colour noted as dark brown",
                            148: "Vehicle colour noted as dark gray",
                            149: "Vehicle colour noted as dark green",
                            150: "Vehicle colour noted as gold",
                            151: "Vehicle colour noted as gray",
                            152: "Vehicle colour noted as green",
                            153: "Vehicle colour noted as ivory",
                            154: "Vehicle colour noted as lavender",
                            155: "Vehicle colour noted as light blue",
                            156: "Vehicle colour noted as light brown",
                            157: "Vehicle colour noted as light gray",
                            158: "Vehicle colour noted as light green",
                            159: "Vehicle colour noted as maroon",
                            160: "Vehicle colour noted as mauve",
                            161: "Vehicle colour noted as medium blue",
                            162: "Vehicle colour noted as medium brown",
                            163: "Vehicle colour noted as medium gray",
                            164: "Vehicle colour noted as medium green",
                            165: "Vehicle colour noted as orange",
                            166: "Vehicle colour noted as pewter",
                            167: "Vehicle colour noted as pink",
                            168: "Vehicle colour noted as primer",
                            169: "Vehicle colour noted as purple",
                            170: "Vehicle colour noted as red",
                            171: "Vehicle colour noted as rust",
                            172: "Vehicle colour noted as sage",
                            173: "Vehicle colour noted as silver",
                            174: "Vehicle colour noted as tan",
                            175: "Vehicle colour noted as taupe",
                            176: "Vehicle colour noted as teal",
                            178: "Vehicle colour noted as turquois",
                            179: "Vehicle colour noted as turquoise",
                            180: "Vehicle colour noted as white",
                            181: "Vehicle colour noted as wood",
                            182: "Vehicle colour noted as yellow"
                        },
                        RecordTypes: {
                            0: "Other",
                            1: "Auction Announcement",
                            2: "Canadian Renewal",
                            3: "Certification Record",
                            4: "Condition Report",
                            5: "Damage Event",
                            6: "Dealer Listing",
                            7: "DMV Record Adjustment",
                            8: "Fleet/Lease",
                            9: "Import Record",
                            10: "Initial Registration",
                            11: "Recall",
                            12: "Odometer reading",
                            13: "Police Report",
                            14: "Previous use",
                            15: "Private Listing",
                            16: "Rebuilt/Rebuildable",
                            17: "Recall",
                            18: "Registration Event",
                            19: "Registration Status",
                            20: "Salvage",
                            21: "Service Record",
                            22: "Sold Record",
                            23: "Estimate Repair",
                            24: "Service Record",
                            25: "Emission",
                            26: "Safety",
                            27: "Non-collision",
                            28: "Collision",
                            29: "Registration Records",
                            30: "Estimate Record",
                            31: "COMPREHENSIVE",
                            32: "COLLISION",
                            33: "Glass Record",
                            34: "ANIMAL COLLISION",
                            35: "VANDALISM",
                            36: "Repair Record",
                            37: "GLASS",
                            38: "REPAIRS",
                            39: "Disclosed by Seller"
                        },
                        GroupedDetailTypes: {
                            1: "Registration Issued or Renewed",
                            2: "Title issued or updated",
                            3: "Loan or lien reported",
                            4: "Title or registration issued",
                            5: "Duplicate title issued",
                            6: "First Owner Reported",
                            7: "New Owner reported",
                            8: "New Owner Reported",
                            9: "Vehicle failed safety inspection and declared unsafe",
                            10: "Salvage Event",
                            11: "Rebuilt",
                            12: "Registration Event: Salvage",
                            13: "Salvage",
                            14: "Passed Safety Inspection",
                            15: "Registration Event: Rebuilt",
                            16: "Rebuilt/Rebuildable",
                            17: "Registration Event Salvage",
                            18: "Rebuilt Event",
                            19: "Non-Repairable",
                            20: "Vehicle declared unsafe",
                            21: "Rebuilt/ Rebuildable",
                            22: "Registration Event: Rebuilt Event",
                            23: "Registration Event: Salvage Event",
                            24: "Clone Alert: VIN was fraudulently copied and used on another vehicle CARFAX suspects the records collected in California belong to the cloned vehicle, while the original vehicle remains in Quebec",
                            25: "VIN was fraudulently copied and used on another vehicle.CARFAX suspects the records collected in AL, OR, and ID belong to the cloned vehicle.The original vehicle remains in QC.",
                            26: "Personal",
                            27: "Lease",
                            28: "Commercial",
                            29: "Rental",
                            30: "Personal lease",
                            31: "Fleet",
                            32: "Taxi",
                            33: "Corporate",
                            34: "Government",
                            35: "Police",
                            36: "Non-profit",
                            37: "Dealer took title of this vehicle while it was in inventory",
                            38: "Dealer took registration of this vehicle while it was in inventory",
                            39: "Vehicle colour noted as almond",
                            40: "Vehicle colour noted as aluminum",
                            41: "Vehicle colour noted as amethyst",
                            42: "Vehicle colour noted as aquamarine",
                            43: "Vehicle colour noted as beige",
                            44: "Vehicle colour noted as black",
                            45: "Vehicle colour noted as blue",
                            46: "Vehicle colour noted as bronze",
                            47: "Vehicle colour noted as brown",
                            48: "Vehicle colour noted as burgundy",
                            49: "Vehicle colour noted as camouflage",
                            50: "Vehicle colour noted as chrome",
                            51: "Vehicle colour noted as copper",
                            52: "Vehicle colour noted as coral",
                            53: "Vehicle colour noted as cream",
                            54: "Vehicle colour noted as dark blue",
                            55: "Vehicle colour noted as dark brown",
                            56: "Vehicle colour noted as dark gray",
                            57: "Vehicle colour noted as dark green",
                            58: "Vehicle colour noted as gold",
                            59: "Vehicle colour noted as gray",
                            60: "Vehicle colour noted as green",
                            61: "Vehicle colour noted as ivory",
                            62: "Vehicle colour noted as lavender",
                            63: "Vehicle colour noted as light blue",
                            64: "Vehicle colour noted as light brown",
                            65: "Vehicle colour noted as light gray",
                            66: "Vehicle colour noted as light green",
                            67: "Vehicle colour noted as maroon",
                            68: "Vehicle colour noted as mauve",
                            69: "Vehicle colour noted as medium blue",
                            70: "Vehicle colour noted as medium brown",
                            71: "Vehicle colour noted as medium gray",
                            72: "Vehicle colour noted as medium green",
                            73: "Vehicle colour noted as orange",
                            74: "Vehicle colour noted as pewter",
                            75: "Vehicle colour noted as pink",
                            76: "Vehicle colour noted as primer",
                            77: "Vehicle colour noted as purple",
                            78: "Vehicle colour noted as red",
                            79: "Vehicle colour noted as rust",
                            80: "Vehicle colour noted as sage",
                            81: "Vehicle colour noted as silver",
                            82: "Vehicle colour noted as tan",
                            83: "Vehicle colour noted as taupe",
                            84: "Vehicle colour noted as teal",
                            85: "Vehicle colour noted as turquois",
                            86: "Vehicle colour noted as turquoise",
                            87: "Vehicle colour noted as white",
                            88: "Vehicle colour noted as wood",
                            89: "Vehicle colour noted as yellow"
                        }
                    },
                    ImportExports: {
                        CaseDossier: "Case/Dossier:",
                        CustomsEntered: "Entered Customs:",
                        CustomsInspected: "Inspection Date:",
                        From: "From",
                        ImportDate: "Import Date:",
                        ImportedAs: "Imported Into Canada As:",
                        RivDescription: "This vehicle has been imported into Canada from the US. For more information than is set out below, please contact RIV (<a href='http://www.riv.ca/' style='color:#1294ef;' target='_blank'>www.riv.ca</a>).",
                        OtherRivData: "RIV has also provided the following information:",
                        To: "To",
                        "": ""
                    },
                    Lien: {
                        Canadian: "Canadian",
                        Guarantee: "If for some reason our lien check fails to accurately reflect the Canadian enforceable lien status of a vehicle at the time of the search, CARFAX Canada will reimburse the party that purchased the report and relied on it to their detriment to a maximum amount of (1) the value of the car (2) the value of the lien (3) Five Thousand Dollars Canadian ($5,000.00), whichever is lower.",
                        GuaranteeTitle: "CARFAX Canada Canadian Lien Guarantee",
                        HowWeCheck1: "CARFAX Canada uses the VIN to search government records in each Canadian province and territory (excluding Northwest Territories) where the vehicle is currently registered and where it has historically been registered. We do not check for liens or title in any U.S. state.",
                        HowWeCheck2: "If a VIN has no registration records in Canada, we cannot check for liens. We cannot guarantee lien checks on trailers, recreational vehicles or heavy-duty equipment.",
                        HowWeCheck3: "Purchasers should always get written confirmation from vendors that there is no lien on the vehicle.",
                        HowWeCheckLE1: "CARFAX Canada uses the VIN to search government records in the Canadian province or territory selected.",
                        HowWeCheckLE2: "We cannot guarantee lien checks on trailers, recreational vehicles or heavy-duty equipment.",
                        HowWeCheckLE3: "Purchasers should always get written confirmation from vendors that there is no lien on the vehicle.",
                        HowWeCheckTitle: "How We Check for Liens",
                        LienCheckRecordsFound: "Lien Record(s) Found",
                        LienDetailHeading: "Lien Details",
                        LienExpressSectionHeading: "Lien Express",
                        LienMultipleOntario: "Please note that our search has identified more than one lien registered against this VIN. Unfortunately, due to requirements imposed by the personal property security registration office in Ontario, we are unable provide you with additional information about one or more of these liens. CARFAX Canada’s lien information is presented exactly as it is reported to us by the government at the time the search was made. For additional information regarding one or more of the liens registered against this VIN, please contact the personal property security registration office in Ontario.",
                        LienRecordsFound: "Lien Record(s) found in",
                        LienStatusNoLien: "No lien records found in",
                        LienTooltip: "This section includes details of the lien(s) that were found against the vehicle. Lien information varies by province, so it may look different from report to report. Visit the Resources page at carfax.ca/resource-centre to find out how to ensure the lien gets cleared before taking possession of the vehicle.",
                        No: "No",
                        NoRegistrationDetected: "registration history detected.",
                        PendingTooltip: "You may notice a delay in receiving lien information,",
                        Tooltip: "A lien is a claim or security interest that a lender has registered against an asset (like a car). The lender uses the asset as security or collateral to ensure that they get paid the money that they are owed. If a vehicle has a lien on it, the new owner could find themselves responsible for the previous owner’s debt. In this section, you’ll see where we’ve checked for liens, and if we found any liens registered against the vehicle.If a lien is found, further details will appear at the end of the report.",
                        SectionHeading: "Lien Check",
                        ViewLienDetails: "View Lien Details",
                        NotAvailable: "Not Available",
                        NoLienRecordsFound: "No Lien Records  Found"
                    },
                    LienCheck: {
                        LienRecordsFound: "Lien Record(s) Found"
                    },
                    OtherRecords: {
                        CamvapDescription: "CAMVAP is a cross-Canada program that consumers can use to resolve disputes with a vehicle manufacturer about defects in the vehicle assembly, materials, or how the manufacturer is applying or administering its new vehicle warranty. A CAMVAP Buyback is a vehicle which the manufacturer has been ordered to purchase from a consumer under the Canadian Motor Vehicle Arbitration Plan. For more information, see",
                        CamvapUrl: "www.camvap.ca",
                        NotAvailable: "Not Available",
                        OtherRecordsHeading: "Other Records",
                        TableHeadingDataSource: "Source",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Details",
                        TableHeadingOdometer: "Odometer"
                    },
                    Registration: {
                        A: "a",
                        An: "an",
                        Branding: " branding.",
                        BrandingCheckCanada: "Inspection Required, Normal, Non-repairable, Rebuilt, Salvage and Stolen.",
                        BrandingCheckUS: "Salvage, Junk, Rebuilt, Fire, Flood, Hail and Lemon.",
                        BrandingInformation: {
                            0: "This vehicle has been registered as Normal in this jurisdiction.",
                            1: "Declared stolen to the police and has not been reported recovered.",
                            2: "Vehicle must be certified or pass inspection (usually mechanical). Vehicle may have not been roadworthy or jurisdiction may be routinely ensuring that an inspection is done prior to next registration.",
                            4: "Damaged to the extent that cost of repairing the vehicle for legal operation on the public roads exceeds its fair market value immediately prior to damage.",
                            5: "Vehicle registered by or exported to another jurisdiction.",
                            7: "Vehicle has been identified as sold by the registered owner.",
                            8: "A salvage vehicle which has been repaired. It must have been certified or passed inspection to allow it to be registered.",
                            9: "Incapable of operation or use on public roads. It also has no resale value except as a source of parts or scrap."
                        },
                        BrandingValue: {
                            0: "Normal",
                            1: "Stolen",
                            2: "Inspection Required",
                            4: "Salvage",
                            5: "Moved",
                            7: "Sold",
                            8: "Rebuilt/Rebuildable",
                            9: "Non-Repairable",
                            V: "Unknown",
                            X: "Unknown",
                            99: "Unknown"
                        },
                        BrandingValueUS: {
                            Normal: "Normal",
                            Salvage: "Salvage",
                            "Non-Repairable": "Junk",
                            Stolen: "Stolen",
                            "Rebuilt/Rebuildable": "Rebuilt",
                            Lemon: "Lemon",
                            Moved: "Moved",
                            FireBranded: "Fire",
                            Fire: "Fire",
                            Flood: "Flood",
                            Hail: "Hail",
                            "Manufacturer Buyback Lemon": "Lemon",
                            "Not Actual Mileage": "Not Actual Mileage",
                            "Exceeds Mechanical Limits": "Exceeds Mechanical Limits"
                        },
                        Details: "Details:",
                        ImportImportedAs: "Imported as:",
                        InCanada: "in <strong>Canada</strong> with",
                        InUS: "in the <strong>United States</strong>",
                        Issue: "issue",
                        NoMajorProblem: "No major title problems were reported.",
                        NoRegistrationFoundCanadaUS: "No registration records were found for this vehicle in Canada or the United States.",
                        PendingTooltip: "You may notice a delay in receiving registration information,",
                        ProvinceOf: "In the province of",
                        RecordType_Import: "Import Record",
                        RegisteredInFollowingCA: "This vehicle has been registered in the following locations in <strong>Canada</strong> (listed oldest to newest):",
                        RegisteredInFollowingUS: "This vehicle has been registered in the following locations in the <strong>United States</strong> (listed oldest to newest):",
                        RegisteredInProvince: "This vehicle has been registered in the province of",
                        RegisteredInState: "This vehicle has been registered in the state of",
                        SectionHeading: "Registration",
                        StateOf: "In the state of",
                        Title: "title.",
                        TooltipBody: "In Canada, when a vehicle is registered with the Ministry of Transportation, “branding” is applied to classify the condition of the vehicle. Salvage, Rebuilt, Junk and Non-Repairable are examples of negative vehicle branding in Canada. In the U.S., when a vehicle is registered with the Department of Motor Vehicles, a “title” is applied to classify the condition of the vehicle. Salvage, Junk, Rebuilt, Fire, Flood, Hail and Lemon are examples of negative vehicle titles in the U.S. To understand more about each brand/title, refer to the glossary at carfax.ca/glossary.",
                        WeCheckedFor: "We checked for:",
                        With: "with"
                    },
                    ServiceHistory: {
                        CertificationRecord: "Certification Record",
                        NoOtherServiceRecordsFound: "No other condition records found",
                        SectionDescription: "These are records of service performed on the vehicle. These are the records reported to CARFAX Canada when this report was run – it is possible that service has occurred that is not captured here.",
                        SectionHeading: "Service Records",
                        ServiceFacility: "Service Facility",
                        TableHeadingAddress: "Address",
                        TableHeadingDataSource: "Source",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Details",
                        TableHeadingOdometer: "Odometer",
                        TableHeadingTypeOfRecord: "Type of Record",
                        TooltipBody: "Service history gives you an idea of how the vehicle was maintained and the type of condition that it's in. It's possible that service has occurred that is not captured here (for example, the owner may have performed regular oil changes in their garage, which wouldn't show on our reports). We always recommend having the vehicle inspected by a licensed mechanic so that they can assess how the vehicle has been maintained.",
                        TooltipHeading: "Service Records",
                        UnspecifiedDate: "Unspecified date",
                        VehicleServiced: "Vehicle serviced"
                    },
                    Recall: {
                        ExperianRecallMessage: "Recall notice issued by manufacturer. Please visit <a href='{0}'>{1}</a> for more information.",
                        Honda_Info_Url: "http://honda.ca/recalls",
                        Kia_Info_Url: "http://www.kia.ca/pages/owner/recall.aspx",
                        Mazda_Info_Url: "http://www.mazda.ca/MciWeb/loadDealerSearch.action?locale=en",
                        MazdaRecallMessage: "Recall notice issued by manufacturer. Please contact your local <a href='{0}'>{1}</a> for more information.",
                        ManufacturerRecallIssued: "Manufacturer Recall Issued<br/>",
                        RecallDate: "Recall Date:",
                        MoreInformation: "This recall was open as of the date/time that this report was generated.  For more information, or to find out if the recall has been closed, please contact",
                        NoRecalls: "No safety recall information available as of the date/time that this report was generated. For additional safety recall information and non-safety related recall campaigns, please contact",
                        RecallsVehicle: "vehicle",
                        UnableToCheckRecalls: "We are unable to check for recall information on this vehicle. Please visit",
                        UnableToCheckRecalls_Visit: "'s website for the most current recall information on this, or any,",
                        RecallDescription: "Recall Description",
                        RecallMessage: "Recall notice issued by manufacturer.  Please visit <a href='{0}'>{1}</a> for more information.",
                        RecallNumber: "Recall #: ",
                        RecallNumberDetailedHistory: "Recall # ",
                        RecallRemedy: "Remedy",
                        SectionHeading: "Open Recalls",
                        TooltipBody: "Recall notices are issued when the manufacturer or transportation authority detects a potential safety issue or defect with a group of vehicles. This section outlines any open (unfixed) safety recalls on the vehicle that have been reported to CARFAX Canada. Previous safety recalls that have already been fixed (closed) will not show in this section.",
                        URL_EXPERIAN_ACURA: "http://owners.acura.com/service-maintenance/recalls",
                        URL_EXPERIAN_HONDA: "http://owners.honda.com/service-maintenance/recalls",
                        URL_EXPERIAN_INFINITI: "http://www.infinitiusa.com/recalls-vin",
                        URL_EXPERIAN_NISSAN: "http://www.nissanusa.com/recalls-vin",
                        URL_EXPERIAN_SUZUKI: "http://www.suzukiauto.com/Campaigns.aspx",
                        RecallTypes: {
                            1: " or visit <a href='http://www.acura.ca/recalls' target='_blank'>Acura's website.</a>",
                            2: " or visit <a href='http://web.audiusa.com/recall/' target='_blank'>Audi's website.</a>",
                            3: " <a href='http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true' target='_blank' class=`recall-link'>http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true.</a>",
                            4: " or visit <a href='http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true' target='_blank'>Bentley's website.</a>",
                            5: " or visit <a href='https://www.bmw.ca/en/ssl/VehicleRecall.html' target='_blank'>BMW's website.</a>",
                            6: " or visit <a href='https://www.mopar.com/en-ca/my-vehicle/recalls/search.html' target='_blank'>Chrysler's website.</a>",
                            7: " or visit <a href='https://my.gm.ca/gm/en/recalls#%2F' target='_blank'>GM's website.</a>",
                            8: " or visit <a href='https://www.mopar.com/en-ca/my-vehicle/recalls/search.html' target='_blank'>Dodge's website.</a>",
                            9: " or visit <a href='https://www.ferrari.com/en-EN/auto/car-part-services' target='_blank'>Ferrari's website.</a>",
                            10: " or visit <a href='https://www.mopar.com/en-ca/my-vehicle/recalls/search.html' target='_blank'>Fiat's website.</a>",
                            11: " or visit <a href='https://www.ford.com/support/recalls/' target='_blank'>Ford's website.</a>",
                            12: " or visit <a href='https://owner.lincoln.com/tools/account/maintenance/recalls.html?pagename=Owner/Page/RecallsPage' target='_blank'>Lincoln's website.</a>",
                            13: " or visit <a href='http://owner.ford.com/servlet/ContentServer?pagename=Owner/Page/RecallsPage' target='_blank'>Mecury's website.</a>",
                            14: " or visit <a href='http://www.honda.ca/recalls' target='_blank'>Honda's website.</a>",
                            15: " <a href='https://recall.hyundaicanada.com/' target='_blank'>https://recall.hyundaicanada.com/</a>.",
                            16: " or visit <a href='https://recall.hyundaicanada.com/' target='_blank'>Hyundai's website.</a>",
                            17: " or visit <a href='http://nna.force.com/support/ContactUsInfiniti?recallLookup' target='_blank'>Infiniti's website.</a>",
                            18: " or visit <a href='http://http://www.isuzu.com/index.jsp' target='_blank'>Isuzu's website.</a>",
                            19: " or visit <a href='http://www.jaguarusa.com/owners/vin-recall.html' target='_blank'>Jaguar's website.</a>",
                            20: " or visit <a href='https://www.mopar.com/en-ca/my-vehicle/recalls/search.html' target='_blank'>Jeep's website.</a>",
                            21: " or visit <a href='http://www.kia.ca/kia-recall' target='_blank'>Kia's website.</a>",
                            22: " or visit <a href='http://www.landroverusa.com/ownership/product-recall-search.html' target='_blank'>Land Rover's website.</a>",
                            23: " or visit <a href='https://www.lexus.ca/lexus/en/maintain-your-lexus/campaigns' target='_blank'>Lexus's website.</a>",
                            24: " or visit <a href='https://www.maserati.com/ca/en/shopping-tools/recall-by-vin' target='_blank'>Maserati's website.</a>",
                            25: " or visit <a href='https://www.mazda.ca/en/owners/recalls/' target='_blank'>Mazda's website.</a>",
                            26: " or visit <a href='https://www.mercedes-benz.ca/en/recalls' target='_blank'>Mercedes Benz's website.</a>",
                            27: " or visit <a href='http://www.miniusa.com/content/miniusa/en/owners/tools-support/recall.html' target='_blank'>Mini's website.</a>",
                            28: " or visit <a href='https://www.mitsubishicars.com/owners/service' target='_blank'>Mitsubishi's website.</a>",
                            29: " or visit <a href='https://nna.secure.force.com/support/ContactUsNissan?recallLookup' target='_blank'>Nissan's website</a>.",
                            30: " or visit <a href='https://recall.porsche.com/prod/pag/vinrecalllookup.nsf/VIN?ReadForm' target='_blank'>Porche's website.</a>",
                            31: " or visit <a href='https://www.mopar.com/en-ca/my-vehicle/recalls/search.html' target='_blank'>Ram's website.</a>",
                            32: " or visit <a href='http://www.rolls-roycemotorcars.com/recall/' target='_blank'>Rolls Royce's website.</a>",
                            33: " or visit <a href='https://www.toyota.ca/toyota/en/owners/recalls' target='_blank'>Scion's website.</a>",
                            34: " or visit <a href='https://www.mercedes-benz.ca/en/recalls' target='_blank'>Smart's website.</a>",
                            35: " or visit <a href='https://www.subaru.ca/WebPage.aspx?WebSiteID=282&WebPageID=21091' target='_blank'>Subaru's website.</a>",
                            36: ".",
                            37: " <a href='https://www.toyota.ca/toyota/en/owners/recalls' target='_blank' class='recall-link'>https://www.toyota.ca/toyota/en/owners/recalls.</a>",
                            38: " or visit <a href='https://www.toyota.ca/toyota/en/owners/recalls' target='_blank'>Toyota's website.</a>",
                            39: " or visit <a href='http://www.vw.ca/en/owners/about_your_volkswagen/vin_recall.html' target='_blank'>Volkswagen's website.</a>",
                            40: " or visit <a href='https://www.volvocars.com/en-ca/own/explore/recall-information' target='_blank'>Volvo's website.</a>",
                            41: "This recall was open as of the date/time that this report was generated. For more information, or to find out if the recall has been closed, please contact your local BMW Retailer.",
                            42: "No safety recall information available as of the date/time that this report was generated. For additional safety recall information and non-safety related recall campaigns, please contact your local BMW Retailer.",
                            43: " or visit <a href='https://recall.hyundaicanada.com/' target='_blank'>Genesis' website.</a>"
                        }
                    },
                    Stolen: {
                        CarfaxCanadaRecommends: "CARFAX Canada recommends that you contact local police to ask for assistance.",
                        IsCurrentlyDeclaredStolen: "This vehicle is currently registered as <strong>STOLEN</strong> in the Canadian Police Information Centre (CPIC) database.",
                        NotCurrentlyDeclaredStolen: "This vehicle is not actively declared stolen.",
                        TooltipHeading: "If the vehicle is currently reported as stolen, we’ll let you know in this section. If the vehicle was previously stolen (at any point during its life) and was recovered, it won’t be reflected here.",
                        SectionHeading: "Stolen Vehicle Check",
                        StolenNotRecovered: "Declared stolen to the police and has not been reported recovered."
                    },
                    ReportDate: {
                        1: "January",
                        2: "February",
                        3: "March",
                        4: "April",
                        5: "May",
                        6: "June",
                        7: "July",
                        8: "August",
                        9: "September",
                        10: "October",
                        11: "November",
                        12: "December"
                    },
                    WebReportType: {
                        2: "Vehicle History Report + Lien Check",
                        3: "Vehicle History Report + Lien Check (BC)",
                        4: "Vehicle History Report",
                        5: "Lien",
                        6: "Lien Express",
                        9: "Vehicle History Report (BC)",
                        10: "Vehicle History Report + Lien Express (QC)",
                        11: "Vehicle History Report + Lien Express",
                        12: "Vehicle History Report (BC) + Lien Express"
                    },
                    Shared: {
                        And: "and",
                        Cancel: "Cancel",
                        CollapseAll: "Collapse All",
                        Countries: {
                            Canada: "Canada",
                            "United States": "United States",
                            "United States of America": "United States of America"
                        },
                        DamageEvent: "Damage Event",
                        DialogErrorAlreadyUpgraded: "It appears that the current report has already been upgraded, for further assistance please contact us at",
                        DialogErrorForAssistance: "for assistance.",
                        DialogErrorTitle: "Uh-oh!  Unfortunately, we were unable to upgrade your report.",
                        DialogErrorTryAgain: "Please try again later. If this continues, please contact us at",
                        ExpandAll: "Expand All",
                        LearnMore: "Learn More",
                        LemonBuyback: "Manufacturer Buyback Lemon",
                        NotAvailableAbbreviation: "n/a",
                        OrVisitOur: "or visit our",
                        Pending: "Pending",
                        PendingDataFrom: "Almost done! Just collecting info from",
                        PendingTooltipOne: "If a report is ordered outside of regular business hours, including weekends and holidays, certain data providers may be closed.",
                        PendingTooltipTwo: "however your report will complete promptly when the data providers return to office, typically the following business day.",
                        PhoneNumberSupport: "1.866.835.8612",
                        PleaseNote: "Please note",
                        Rebuilt: "Rebuilt/Rebuildable",
                        RegistrationEvent: "Registration Event",
                        Salvage: "Salvage",
                        PendingCollectionData: "Almost done! Just collecting a bit more data to complete your report.",
                        CarfaxPhone: "1.866.835.8612",
                        CustomerSupportPortal: "Customer Support Portal",
                        CustomerSupport: "Customer Support",
                        SupportPortalLink: "https://support.carfax.ca/en/support/home",
                        SupportPortalAddIcbcLink: "https://support.carfax.ca/en/support/solutions/articles/17000131694-how-do-i-add-icbc-to-my-vehicle-history-report-",
                        SupportLinkText: "support.carfax.ca",
                        VisitUsAt: "Visit us at",
                        CarfaxAddress: "100 Kellogg Ln Suite 301, London ON",
                        CarfaxAddressLine1: "100 Kellogg Ln Suite 301,",
                        CarfaxAddressLine2: "London ON N5W 0B4",
                        CarfaxPostalCode: "N5W 0B4",
                        SupportFaqLink: "https://support.carfax.ca/en/support/solutions",
                        CountryCA: "Canada",
                        CountryUS: "United States",
                        CountryUSA: "United States of America",
                        MobileOrderButton: "Chronological Order",
                        Provinces: {
                            AB: "Alberta",
                            AK: "Alaska",
                            AL: "Alabama",
                            AR: "Arkansas",
                            AZ: "Arizona",
                            Alabama: "Alabama",
                            Alaska: "Alaska",
                            Alberta: "Alberta",
                            Arizona: "Arizona",
                            Arkansas: "Arkansas",
                            BC: "British Columbia",
                            "British Columbia": "British Columbia",
                            CA: "California",
                            CO: "Colorado",
                            CT: "Connecticut",
                            California: "California",
                            Colorado: "Colorado",
                            Connecticut: "Connecticut",
                            DC: "District of Columbia",
                            DE: "Delaware",
                            Delaware: "Delaware",
                            "District of Columbia": "District of Columbia",
                            FL: "Florida",
                            Florida: "Florida",
                            GA: "Georgia",
                            Georgia: "Georgia",
                            HI: "Hawaii",
                            Hawaii: "Hawaii",
                            IA: "Iowa",
                            ID: "Idaho",
                            IL: "Illinois",
                            IN: "Indiana",
                            Idaho: "Idaho",
                            Illinois: "Illinois",
                            Indiana: "Indiana",
                            Iowa: "Iowa",
                            KS: "Kansas",
                            KY: "Kentucky",
                            Kansas: "Kansas",
                            Kentucky: "Kentucky",
                            LA: "Louisiana",
                            Louisiana: "Louisiana",
                            MA: "Massachusetts",
                            MB: "Manitoba",
                            MD: "Maryland",
                            ME: "Maine",
                            MI: "Michigan",
                            MN: "Minnesota",
                            MO: "Missouri",
                            MS: "Mississippi",
                            MT: "Montana",
                            Maine: "Maine",
                            Manitoba: "Manitoba",
                            Maryland: "Maryland",
                            Massachusetts: "Massachusetts",
                            Michigan: "Michigan",
                            Minnesota: "Minnesota",
                            Mississippi: "Mississippi",
                            Missouri: "Missouri",
                            Montana: "Montana",
                            NB: "New Brunswick",
                            NC: "North Carolina",
                            ND: "North Dakota",
                            NE: "Nebraska",
                            NF: "Newfoundland",
                            NH: "New Hampshire",
                            NJ: "New Jersey",
                            NM: "New Mexico",
                            NS: "Nova Scotia",
                            NT: "Northwest Territories",
                            NU: "Nunavut",
                            NV: "Nevada",
                            NY: "New York",
                            Nebraska: "Nebraska",
                            Nevada: "Nevada",
                            "New Brunswick": "New Brunswick",
                            "New Hampshire": "New Hampshire",
                            "New Jersey": "New Jersey",
                            "New Mexico": "New Mexico",
                            "New York": "New York",
                            Newfoundland: "Newfoundland",
                            "North Carolina": "North Carolina",
                            "North Dakota": "North Dakota",
                            "Northwest Territories": "Northwest Territories",
                            "Nova Scotia": "Nova Scotia",
                            Nunavut: "Nunavut",
                            OH: "Ohio",
                            OK: "Oklahoma",
                            ON: "Ontario",
                            OR: "Oregon",
                            Ohio: "Ohio",
                            Oklahoma: "Oklahoma",
                            Ontario: "Ontario",
                            Oregon: "Oregon",
                            PA: "Pennsylvania",
                            PE: "Prince Edward Island",
                            PR: "Puerto Rico",
                            Pennsylvania: "Pennsylvania",
                            "Prince Edward Island": "Prince Edward Island",
                            "Puerto Rico": "Puerto Rico",
                            QC: "Québec",
                            Quebec: "Québec",
                            RI: "Rhode Island",
                            "Rhode Island": "Rhode Island",
                            SC: "South Carolina",
                            SD: "South Dakota",
                            SK: "Saskatchewan",
                            Saskatchewan: "Saskatchewan",
                            "South Carolina": "South Carolina",
                            "South Dakota": "South Dakota",
                            TN: "Tennessee",
                            TX: "Texas",
                            Tennessee: "Tennessee",
                            Texas: "Texas",
                            UT: "Utah",
                            Utah: "Utah",
                            VA: "Virginia",
                            VT: "Vermont",
                            Vermont: "Vermont",
                            Virginia: "Virginia",
                            WA: "Washington",
                            WI: "Wisconsin",
                            WV: "West Virginia",
                            WY: "Wyoming",
                            Washington: "Washington",
                            "West Virginia": "West Virginia",
                            Wisconsin: "Wisconsin",
                            Wyoming: "Wyoming",
                            YT: "Yukon",
                            "Yukon Territories": "Yukon",
                            Yukon: "Yukon"
                        },
                        VIN: "VIN",
                        YouCanVisitOur: "or you can visit our"
                    },
                    VehicleDetails: {
                        CountryOfAssembly: "Country of Assembly",
                        Cylinders: "Cylinders",
                        LastReportedOdometer: "Last Reported Odometer",
                        LastReportedOdometerTooltip: "Odometer readings are an important part of a vehicle’s history because it indicates how much a vehicle has been driven, which can impact its condition and value. The last reported odometer reading shown on this report is the most recent record received by CARFAX Canada. The current odometer reading on the vehicle could be different from what’s reported here, so checking the physical odometer on the vehicle is the best way to verify the mileage.",
                        Rotary: "Rotary",
                        Unknown: "Unknown Cylinders",
                        VinDidNotDecode: "VIN did not decode"
                    },
                    Date: {
                        1: "Jan",
                        2: "Feb",
                        3: "Mar",
                        4: "Apr",
                        5: "May",
                        6: "Jun",
                        7: "Jul",
                        8: "Aug",
                        9: "Sep",
                        10: "Oct",
                        11: "Nov",
                        12: "Dec"
                    },
                    VehicleHistory: {
                        Complete: "Complete",
                        Pending: "Pending"
                    },
                    Summary: {
                        Badge: {
                            AccidentFreeBadgeImage: "accident-free@1x.svg",
                            FCACertifiedBadgeImage: "FCA.png",
                            KiaCPOBadgeImage: "KIA_EN.svg",
                            KiaCPOBadgeImageOld: "KIA_EN.png",
                            LowKilometerBadgeImage: "low-kilometers@1x.svg",
                            OneOwnerBadgeImage: "one-owner@1x.svg",
                            TopConditionBadgeImage: "top-condition@1x.svg"
                        },
                        ReportDetailDate: "Report Date",
                        ReportDetailStatus: "Report Status",
                        ReportDetailReference: "Reference",
                        VHRPlusLienCheckBC: "VHR + Lien Check (BC)",
                        VHRPlusLienCheck: "VHR + Lien Check",
                        ReportType: {
                            Lien: "Lien",
                            LienExpress: "Lien Express",
                            VehicleHistoryReport: "Vehicle History Report",
                            VehicleHistoryReportBC: "Vehicle History Report (BC)",
                            VehicleHistoryReportBCPlusLienExpress: "Vehicle History Report (BC) + Lien Express",
                            VehicleHistoryReportPlusLienCheck: "Vehicle History Report + Lien Check",
                            VehicleHistoryReportPlusLienCheckBC: "Vehicle History Report + Lien Check (BC)",
                            VehicleHistoryReportPlusLienExpress: "Vehicle History Report + Lien Express",
                            VehicleHistoryReportPlusLienExpressQC: "Vehicle History Report + Lien Express (QC)"
                        }
                    },
                    Legal: {
                        LegalText: "This vehicle history report is compiled from multiple data sources. It is not always possible for CARFAX Canada ULC or its source data providers to obtain complete information on any one vehicle. For example, there may be other title, brands, registrations, declarations, accident information, service records, recall information, odometer readings or other information where discrepancies that apply to this vehicle are not reflected in this report. CARFAX Canada and its source data providers receive data and information from external sources believed to be reliable, but no responsibility is assumed by CARFAX Canada, its source data providers or its agents for any errors, inaccuracies or omissions. The reports are provided strictly on an as-is where-is basis, and CARFAX Canada and its source data providers further expressly disclaim all warranties, express or implied, including any warranties of timeliness, accuracy, merchantability, merchantable quality or fitness for a particular purpose regarding this report or its contents. Neither CARFAX Canada nor any of its source data providers shall be liable for any losses, expenses or damages in connection with any report or any information contained within a report, including the accuracy thereof or any delay or failure to provide a report or any information. Other information about the vehicle that is the subject matter of this vehicle history report, including problems, may not have been reported to CARFAX Canada. Use this report as one important tool, along with a vehicle inspection and test drive, to make a better decision about your next used car. By obtaining, reviewing and/or using this vehicle history report, you agree to be bound by all of the terms and conditions in CARFAX Canada’s Conditions of Use and any CARFAX Canada End User License Agreements as each may be amended from time to time by CARFAX Canada.",
                        CarfaxCanadaPrivacyLegalURL: "https://www.carfax.ca/about-carfax/privacy-legal/conditions-of-use",
                        TermsConditions: "Conditions of Use",
                        CopyrightText1: "© ",
                        CopyrightText2: "CARFAX Canada ULC. All rights reserved.",
                        OneOwnerDisclaimerText: "The CARFAX Canada One Owner™ badge that is based on the registration information reported to CARFAX Canada. The badge is available for personal and commercial vehicles that have only been registered in the provinces of British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, Nova Scotia, New Brunswick, or PEI.",
                        OneOwnerDisclaimerTitle: "CARFAX Canada One Owner™ Badge",
                        LowKilometresDisclaimerText: "The CARFAX Canada Low Kilometres™ badge is based on the odometer information reported to CARFAX Canada. The CARFAX Canada Low Kilometres™ badge is available for vehicles registered in Canada that have accumulated, as reported to CARFAX Canada via odometer records, less than 18,000 kilometres per year from the beginning of September in the year prior to the vehicle’s model year until the date that this report was generated.",
                        LowKilometresDisclaimerTitle: "CARFAX Canada Low Kilometres™ Badge",
                        TopConditionDisclaimerText: "The CARFAX Canada Top Condition™ badge is based on Certified Pre-Owned (CPO) data, Certified Previous Daily Rental (CPDR) data and/or vehicle history information reported to CARFAX Canada. The badge is available for vehicles registered in Canada that meet the conditions of the manufacturer’s CPO or CPDR program, as applicable, and/or standards that CARFAX Canada sets from time to time as requirements for vehicles to achieve CARFAX Canada Top Condition™ status.",
                        TopConditionDisclaimerTitle: "CARFAX Canada Top Condition™ Badge",
                        AccidentFreeDisclaimerText: "The CARFAX Canada No Reported Accidents™ badge is based on the damage records and/or branding information reported to CARFAX Canada. The badge is available for personal vehicles that have only been registered in Canada, and were not, at the time this report was generated, declared stolen.",
                        AccidentFreeDisclaimerTitle: "CARFAX Canada No Reported Accidents™  Badge",
                        KiaExplanation: "KIA Certified Pre-Owned vehicles with Top Condition badges have exceeded strict maintenance and condition requirements and have been thoroughly inspected by KIA technicians to ensure they meet KIA Canada’s standards.",
                        FcaExplanation: "<b>DID YOU KNOW?</b> An FCA Certified Previous Daily Rental vehicle has exceeded strict maintenance and condition requirements to be considered Top Condition.",
                        SummaryLegalShortText1: "This vehicle history report is based on <a target='_blank' href='https://www.carfax.ca/vehicle-history-data'>information</a> <span class='disclaimer-information-print'>(https://www.carfax.ca/vehicle-history-data)</span> that was reported and available to CARFAX Canada as of",
                        SummaryLegalShortText2: "(or once all the data was collected from our data sources and the report was complete). CARFAX Canada draws on billions of data records from thousands of sources across North America, and we receive new historical data records every day.",
                        SummaryLegalShortText3: "There may be other information about this vehicle that has not been reported to CARFAX Canada.",
                        SummaryLegalShortText4: "When buying a used vehicle, we always recommend using a CARFAX Canada Vehicle History Report, along with a vehicle inspection and test drive, to make an informed decision."
                    },
                    Upgrade: {
                        AccessReport: "Access Report",
                        AddLienCheck: "Purchase Vehicle History Report + Lien Check",
                        AddLienExpress: "Add Lien Express",
                        BuyNow: "Buy Now",
                        BuyVHRLCheckModalBodyText: "A CARFAX Canada Vehicle History Report + Lien Check searches government records in each Canadian province and territory (excluding Northwest Territories) where the vehicle is currently registered and where it has historically been registered.",
                        ErrorAlreadyUpgraded: "It appears that the current report has already been upgraded, for further assistance please contact us at",
                        ErrorForAssistance: "for assistance.",
                        ErrorTitle: "Uh-oh!  Unfortunately, we were unable to upgrade your report.",
                        ErrorTryAgain: "Please try again later. If this continues, please contact us at",
                        LienExpressLegal: "If you select the “Buy Now” button above, we will search for liens in the Canadian provinces/territories that are listed.",
                        LienExpressPopUpBodyOne: "We have identified vehicle registration records pertaining to this vehicle in the provinces and territories below as of the date this report was generated.",
                        LienExpressPopUpBodyTwo: "Would you like to search for liens which may be registered against this vehicle in these provinces and territories?",
                        PurchaseLienCheck: "Purchase Lien Check",
                        ReportAlreadyUpgraded: "This Report Has Already Been Upgraded!",
                        SuccessfulUpgrade: "Your report has been successfully upgraded!",
                        SuccessfulUpgradeBodyOne: "We’ll now begin collecting info from our data sources.",
                        SuccessfulUpgradeBodyTwo: "If a report is ordered outside of regular business hours, including weekends and holidays, you may notice a delay in receiving lien information.",
                        Total: "Total",
                        ViewUpgradedReport: "View Upgraded Report"
                    },
                    VehicleHistoryTiles: {
                        AccidentDamage: "Accident/Damage",
                        AccidentDamageRecordsFound: "Accident/Damage Records Found",
                        AccidentDamageRecordsFoundFlyout: "Accident​&#8203;/&#8203;​Damage<br/>Records Found",
                        CollectingData: "Collecting data...",
                        GlassRecordsFound: "Glass Records found",
                        GlassRecordsFoundFlyout: "Glass Records<br/>Found",
                        ImportRecordFound: "Import Record Found",
                        ImportRecordFoundFlyout: "Import Record<br/>Found",
                        LastRegisteredIn: "Last Registered In",
                        LienRecordFoundFlyout: "Lien Record<br/>Found",
                        LienRecordsFoundFlyout: "Lien Records<br/>Found",
                        LienRecordsNotFoundFlyout: "No Lien Records<br/>Found",
                        NoAccidentDamageRecordsFound: "No Accident/Damage Records Found",
                        NoAccidentDamageRecordsFoundFlyout: "No Accident&#8203;/&#8203;​Damage<br/>Records Found",
                        ICBCNotIncludedAccidentTile: "ICBC information not included",
                        NoImportRecordsFound: "No Import Record Found",
                        NoImportRecordsFoundFlyout: "No Import Record<br/>Found",
                        NoRegistrationFound: "No registration records found",
                        NoRegistrationFoundFlyout: "No Registration<br/>Records Found",
                        OpenRecall: "Open Recalls",
                        RecallFound: "Open Recall Found",
                        RecallFoundFlyout: "Open Recall<br/>Found",
                        RecallsFound: "Open Recalls Found",
                        RecallsFoundFlyout: "Open Recalls<br/>Found",
                        RecallsNotFound: "No Open Recalls Found",
                        RecallsNotFoundFlyout: "No Open Recalls<br/>Found",
                        RecallsUnableToCheck: "Unable to check for recall information",
                        Registration: "Registration",
                        ServiceRecordFound: "Service Record Found",
                        ServiceRecordFoundFlyout: "Service<br/>Record Found",
                        ServiceRecordsFound: "Service Records Found",
                        ServiceRecordsFoundFlyout: "Service<br/>Records Found",
                        Stolen: "Stolen",
                        StolenFlyout: "Actively<br/>Declared Stolen",
                        StolenStatusNotFound: "Not Actively Declared Stolen",
                        StolenStatusNotFoundFlyout: "Not Actively<br/>Declared Stolen",
                        UsHistory: "U.S. History",
                        USHistoryFound: "U.S. History Found",
                        USHistoryFoundFlyout: "U.S.<br/>History Found",
                        USHistoryNotFound: "No U.S. History Found",
                        USHistoryNotFoundFlyout: "No U.S.<br/>History Found",
                        ImportRecord: "Import Records"
                    },
                    Email: "Email",
                    FooterGlossary: "Glossary",
                    FooterHeadingQuestionText: "Questions",
                    FooterHeadingText: "We're here to help.",
                    ClickToFindMore: "Click here to find out more",
                    Language: "Language",
                    Print: "Print",
                    InformationDisclaimer: {
                        SAAQDisclaimerBody: "<p class='information-paragraph'><span>Please Note:</span> Société de l'assurance automobile du Québec (SAAQ) will be updating their systems over the next few weeks, which will prevent any vehicle registration updates in the province of Quebec.</p><p class='information-paragraph'>As a result, CARFAX Canada will report Quebec registration/branding records up to the transition period referenced on the <a target='_blank' href='https://saaq.gouv.qc.ca/en/newsroom/available-services#c80581'>SAAQ website</a>. No other data on our vehicle history reports is impacted.</p><p class='information-paragraph'>For your reference, registration/branding information continues to be available on the physical vehicle ownership.</p>",
                        SeeRegistrationSection: "<p><span>Please check the Registration section for important information about Quebec registration data.</span></p>"
                    },
                    BackToTop: "Back To Top",
                    FoxImage: "img-fox.png",
                    FoxImage3x: "img-fox@3x.png"
                },
                fr: {
                    Accident: {
                        ClaimTooltip: "Si le coût de la réparation passe par l'assurance, il pourrait y avoir une réclamation d'assurance associée. Notez que les réclamations d'assurance identifiées dans ce rapport n'incluent aucun paiement médical, dommages à d'autres véhicules, dommages à la propriété, remorquage, voitures de location ou tout autre dommage accessoire.",
                        DamageDetail: "Détail des dommages",
                        EstimateTooltip: "Un dossier d'estimation est généré lorsqu'un véhicule est amené à un atelier de réparation pour évaluer combien il en coûtera pour réparer les dommages. L'estimation est produite parfois quelques jours après l'incident, c'est pourquoi la date de l'estimation peut être différente de la date de l'incident.",
                        Glass26: "Réclamation de Verre",
                        GlassRecord: "Dossier de verre",
                        FixAutoRepair: "Historique des réparations",
                        IncidentTitles: {
                            Claim: "Réclamation",
                            ClaimReported: "Réclamation rapportée",
                            DamageDetail: "Détail des dommages",
                            DamageRepair: "Réparation de dommages",
                            Estimate: "Estimé",
                            PoliceReportedAccident: "Accident Rapporté à la Police",
                            AccidentReported: "Accident rapporté"
                        },
                        NoAccidentDamage: "Il n’y a pas d’accident/dommage rapporté sur ce véhicule.",
                        NoAccidentDamageHasOtherDamage: "Il n'y a pas d'accidents, d'estimations ou de réclamations rapportés par la police pour ce véhicule, cependant, nous avons trouvé d'autres dossiers de dommages qui sont décrits ci-dessous.",
                        NotReported: "Non rapporté",
                        NotReportedTooltip: "Ce dossier indique qu'il y a eu une réclamation d'assurance associée à cet incident, cependant, le montant en dollars n'a pas été rapporté à CARFAX Canada.",
                        SectionHeading: "Accidents/dommages",
                        SectionHeadingTooltip: "Il existe de nombreuses façons dont un véhicule peut subir des dommages, mais cela se résume généralement à l'une des deux catégories suivantes. Il peut s’agir d’un accident de la route (où le véhicule entre en collision avec un autre véhicule, un arbre, un animal, etc.) ou d'autres dommages causés par la grêle, un incendie, du vandalisme, etc. Dans les deux cas, les dommages peuvent varier de mineurs (égratignures, bosses, etc.) à graves (essieux cassés, châssis tordu, etc.).",
                        TableHeadingDamageAmount: "Montant",
                        TableHeadingDetails: "Détails",
                        TableHeadingEstimateDate: "Date de l'estimation",
                        TableHeadingIncidentDate: "Date de l’incident",
                        TableMainHeadingOtherDamage: "Autres dossiers de dommages",
                        TableHeadingRecordDate: "Date de l’événement",
                        AccidentDetailTypes: {
                            1: "Unknown",
                            2: "Right front corner",
                            3: "Right front",
                            4: "Right centre",
                            5: "Right rear",
                            6: "Right rear corner",
                            7: "Back centre",
                            8: "Left rear corner",
                            9: "Left rear",
                            10: "Left centre",
                            11: "Left front",
                            12: "Left front corner",
                            13: "Front centre",
                            14: "Front complete",
                            15: "Right side complete",
                            16: "Back complete",
                            17: "Left side complete",
                            18: "Top",
                            19: "Undercarriage",
                            20: "No contact",
                            21: "Airbag deployed",
                            22: "Coussins gonflables déployé",
                            23: "Devant",
                            24: "Devant gauche",
                            25: "Arrière gauche",
                            26: "Côté gauche",
                            27: "Arrière",
                            28: "Devant droite",
                            29: "Arrière droite",
                            30: "Côté droit",
                            31: "Toit",
                            32: "Châssis"
                        },
                        ClaimType: {
                            1: "Anglais",
                            2: "COLLISION AVEC UN ANIMAL",
                            3: "Tentative de vol de véhicule",
                            4: "Blessures subies par les passagers dans le véhicule assuré, DANS LA PROVINCE",
                            5: "Blessures subies par tout autre tiers, DANS LA PROVINCE",
                            6: "Blessures subies par les passagers dans le véhicule assuré, À L'EXTÉRIEUR DE LA PROVINCE",
                            7: "Blessures subies par tout autre tiers, À L'EXTÉRIEUR DE LA PROVINCE",
                            8: "Véhicule non assuré – blessures",
                            9: "Blessures subies par les passagers dans le véhicule assuré",
                            10: "Blessures subies par tout autre tiers",
                            11: "Dommages causés au contenu qui n’appartient pas à l’assuré, mais dont il a la responsabilité, la garde ou le contrôle",
                            12: "RÈGLEMENT EN ESPÈCES",
                            13: "Autre – détaillé",
                            14: "Collision",
                            15: "COLLISION",
                            16: "COLLISION CLAIM (FR)",
                            17: "Collision",
                            18: "Collision avec un animal sauvage",
                            19: "COMPRÉHENSIF",
                            20: "CONTRAT",
                            21: "Collision avec un animal domestique",
                            22: "Le véhicule a été volé aujourd'hui, et il n'a pas été récupéré.",
                            23: "Une réclamation pour perte totale n'ayant fait l'objet d'aucune indemnité est suspecte pour plusieurs raisons.",
                            24: "Le véhicule reconstruit n'a fait l'objet d'aucune réclamation",
                            25: "Tout véhicule reconstruit doit être associé à une réclamation pour PERTE TOTALE",
                            26: "Un véhicule récupéré ne doit pas circuler sur la route",
                            27: "Mauvais statut obtenu avec l'appel à HI$001",
                            28: "Aucune réclamation n'a été affichée",
                            29: "Aucune réclamation n'a été affichée",
                            30: "En-tête de message VDWS non valide",
                            31: "Dommages causés au contenu détenu par l'assuré",
                            32: "Perte de jouissance",
                            33: "Autre dommage",
                            34: "Prestations de décès",
                            35: "Prestations d'invalidité",
                            36: "Avertissement du site d'hébergement – impossible de traiter la demande",
                            37: "Matériau inflammable",
                            38: "FEU",
                            39: "Feu",
                            40: "INONDATION",
                            41: "Toutes les réclamations des automobilistes sous-assurés",
                            42: "Services funéraires",
                            43: "VERRE",
                            44: "Dommages aux vitres ou au pare-brise non causés par une tempête de vent ou de la grêle",
                            45: "Grêle",
                            46: "Dommages Matériels - Grêle",
                            47: "Blessures subies à l'extérieur du Québec ou exclues de l'alinéa 17b) de la Loi sur l'assurance automobile",
                            48: "Indemnités d'accident – prestations de décès (Québec)",
                            49: "Indemnités d'accident – invalidité totale (Québec)",
                            50: "Indemnités d'accident – indemnités de mutilation (Québec)",
                            51: "Dommages matériels – fin des dépenses pour les services d'urgence",
                            52: "Dommages matériels aux vitres – non causés par le vent ou la grêle",
                            53: "Dommages matériels – perte de jouissance",
                            54: "Indemnités d'accident – frais médicaux (Québec)",
                            55: "Dommages matériels – autres réclamations sans collision",
                            56: "Recouvrement par le transfert de sinistre – prestations d'invalidité pour soignant",
                            57: "Recouvrement par le transfert de sinistre – soins auxiliaires/de longue durée",
                            58: "Recouvrement par le transfert de sinistre – réadaptation – professionnelle",
                            59: "Prestation d'invalidité pour soignant",
                            60: "Soins auxiliaires/de longue durée",
                            61: "Réadaptation – professionnelle",
                            62: "Dommages matériels, tempête de vent et grêle",
                            63: "Foudre",
                            64: "Disposition concernant le transfert de sinistre (s'applique à l'entreprise qui verse une indemnité dans le cadre du transfert de sinistre à l'assureur, lequel est tenu de verser les indemnités d'accident)",
                            65: "Frais médicaux",
                            66: "Divers",
                            67: "PLUS DISPONIBLES",
                            68: "AUCUN DÉTAIL",
                            69: "Automobile non assurée – dommages matériels",
                            70: "Dommages matériels",
                            71: "Dommages matériels causés au véhicule du conducteur tiers, à son contenu ou à un autre bien dont l’assuré n’a pas la responsabilité, la garde ou le contrôle",
                            72: "Accidents survenus au Québec, au Manitoba ou en Saskatchewan avec un véhicule mis au garage dans la province, et paiements supérieurs aux indemnités provinciales.",
                            73: "RÉPARATIONS",
                            74: "Recouvrement par le transfert de sinistre – coûts d'examen",
                            75: "Recouvrement par le transfert de sinistre – prestations pour soins de personne à charge",
                            76: "Recouvrement par le transfert de sinistre – prestations d'invalidité de personne employée/présumée employée",
                            77: "Recouvrement par le transfert de sinistre – prestations de frais d'entretien ménager",
                            78: "Recouvrement par le transfert de sinistre – autres – prestations d'invalidité des personnes sans revenu d'emploi",
                            79: "Recouvrement par le transfert de sinistre – tout autre, y compris le remplacement de vêtements, de prothèses auditives, de lunettes et autres",
                            80: "Recouvrement par le transfert de sinistre – prestations d'invalidité de l'étudiant",
                            81: "Recouvrement par le transfert de sinistre – soins auxiliaires",
                            82: "Recouvrement par le transfert de sinistre – prestations d'invalidité pour soignant",
                            83: "Recouvrement par le transfert de sinistre – prestations de décès",
                            84: "Recouvrement par le transfert de sinistre – prestations d'invalidité",
                            85: "Recouvrement par le transfert de sinistre – indemnités pour frais funéraires",
                            86: "Recouvrement par le transfert de sinistre – soins médicaux, à l’exception de la réadaptation et des soins prolongés",
                            87: "Recouvrement par le transfert de sinistre – réadaptation, autre que rénovations",
                            88: "Recouvrement par le transfert de sinistre – remplacement de vêtements, de prothèses auditives, de lunettes et autres",
                            89: "Recouvrement par le transfert de sinistre – réadaptation, rénovations",
                            90: "Recouvrement par le transfert de sinistre – prestations de frais de visite",
                            91: "Soins auxiliaires",
                            92: "Prestation d'invalidité pour soignant",
                            93: "Prestations de décès",
                            94: "Prestation d'invalidité",
                            95: "Indemnités de frais funéraires",
                            96: "Soins médicaux, à l’exception de la réadaptation et des soins prolongés",
                            97: "Réadaptation – autre que rénovations",
                            98: "Remplacement de vêtements, de prothèses auditives, de lunettes et autres",
                            99: "Réadaptation – rénovations",
                            100: "Coûts d'examen",
                            101: "Prestations pour soins de personne à charge",
                            102: "Prestations d'invalidité de personne employée/présumée employée",
                            103: "Prestations de frais d'entretien ménager",
                            104: "Toutes autres – prestations d'invalidité des personnes sans revenu d'emploi",
                            105: "Toutes autres, y compris le remplacement de vêtements, de prothèses auditives, de lunettes et autres",
                            106: "Prestation d'invalidité de l'étudiant",
                            107: "Prestations de frais de vacances",
                            108: "ÉQUIPEMENT SPÉCIAL",
                            109: "Nombre total de véhicules volés",
                            110: "Vol",
                            111: "Vol du contenu du véhicule",
                            112: "VOL",
                            113: "Vol",
                            114: "VOL DU VÉHICULE",
                            115: "Vol partiel",
                            116: "Dommages causés à des remorques qui n’appartiennent pas à l’assuré, mais dont il a la responsabilité, la garde ou le contrôle",
                            117: "PERTE TOTALE",
                            118: "VOL ENTIER DU VÉHICULE",
                            119: "Prestations de sinistre causé par un automobiliste non assuré ou non identifié",
                            120: "INCONNU",
                            121: "Vandalisme",
                            122: "VANDALISME",
                            123: "Vandalisme",
                            124: "Dommage au véhicule",
                            125: "Tempête de vent"
                        },
                        ClaimsDescription: {
                            1: "Coin avant droit",
                            2: "Côté avant droit",
                            3: "Côté droit",
                            4: "Côté arrière droit",
                            5: "Coin arrière droit",
                            6: "Centre arrière",
                            7: "Coin arrière gauche",
                            8: "Côté arrière gauche",
                            9: "Côté gauche",
                            10: "Côté avant gauche",
                            11: "Coin avant gauche",
                            12: "Centre avant",
                            13: "Tonneau",
                            14: "Inconnu",
                            15: "Perte totale",
                            16: "Sans collision",
                            17: "Partout autour",
                            18: "Soubassement"
                        }
                    },
                    Auction: {
                        AccidentRepair: "RÉPARATION D’ACCIDENT ANNONCÉE À L’ENCAN",
                        AdjacentPanelsReplaced: "ENCHÈRE ANNONCÉE COMME PANNEAUX ADJACENTS REMPLACÉS",
                        AirBagsMissingDefective: "ENCHÈRE ANNONCÉE COMME COUSSINS GONFLABLES MANQUANTS/DÉFECTUEUX",
                        FireDamage: "ENCHÈRE ANNONCÉE COMME ENDOMMAGÉ PAR LE FEU",
                        FloodDamage: "ENCHÈRE ANNONCÉE COMME ENDOMMAGÉ PAR L'EAU",
                        Irreparable: "ENCHÈRE ANNONCÉE COMME IRRÉPARABLE",
                        MajorRepair: "ENCHÈRE ANNONCÉE COMME RÉPARATIONS MAJEURES",
                        StructuralDamage: "ENCHÈRE ANNONCÉE COMME DOMMAGE STRUCTUREL",
                        TitleBranded: "ENCHÈRE ANNONCÉE COMME STATUT ANORMAL DÉTECTÉ",
                        TitleBrandedAtSalvageAuction: "ANNONCE D'ENCAN À L'ENCAN DE VÉHICULES RÉCUPÉRÉS",
                        TotalLoss: "ENCHÈRE ANNONCÉE COMME PERTE TOTALE",
                        AirConditioningNeedsRepair: "ENCHÈRE ANNONCÉE COMME CLIMATISATION DOIT ÊTRE RÉPARÉE",
                        ComputerNeedsRepair: "ENCHÈRE ANNONCÉE COMME ORDINATEUR DOIT ÊTRE RÉPARÉ",
                        ElectricalSystemNeedsRepair: "ENCHÈRE ANNONCÉE COMME SYSTÈME ÉLECTRIQUE DOIT ÊTRE RÉPARÉ",
                        EmissionsSystemNeedsRepair: "ENCHÈRE ANNONCÉE COMME SYSTÈME ANTIPOLLUTION DOIT ÊTRE RÉPARÉ",
                        EngineNeedsRepair: "ENCHÈRE ANNONCÉE COMME MOTEUR DOIT ÊTRE RÉPARÉ",
                        FuelSystemNeedsRepair: "ENCHÈRE ANNONCÉE COMME SYSTÈME DE CARBURANT DOIT ÊTRE RÉPARÉ",
                        HailDamage: "ENCHÈRE ANNONCÉE COMME DOMMAGE CAUSÉ PAR LA GRÊLE",
                        MajorAccessoryNeedsRepair: "ENCHÈRE ANNONCÉE COMME ACCESSOIRE MAJEUR DOIT ÊTRE RÉPARÉ",
                        PowerTrainNeedsRepair: "ENCHÈRE ANNONCÉE COMME GROUPE MOTOPROPULSEUR DOIT ÊTRE RÉPARÉ",
                        SuspensionNeedsRepair: "ENCHÈRE ANNONCÉE COMME SUSPENSION DOIT ÊTRE RÉPARÉE",
                        TransmissionNeedsRepair: "ENCHÈRE ANNONCÉE COMME TRANSMISSION DOIT ÊTRE RÉPARÉE",
                        TwoOrMoreBodyPanelsReplaced: "ENCHÈRE ANNONCÉE COMME REMPLACEMENT DE DEUX PANNEAUX DE CARROSSERIE OU PLUS",
                        WaterDamage: "ENCHÈRE ANNONCÉE COMME DOMMAGES CAUSÉS PAR L’EAU"
                    },
                    BCDisclaimer: {
                        BcDisclaimerLi1: "des véhicules vendus par les compagnies comme étant récupérés;",
                        BcDisclaimerLi2: "des véhicules récupérés qui ont été reconstruits, inspectés et à nouveau immatriculés;",
                        BcDisclaimerLi3: "des véhicules envoyés à la casse qui ont été mis hors service et qui ne peuvent qu'être revendus en pièces détachées.",
                        BcDisclaimerLink: "http://apps.icbc.com/registration/vchr/Limitation.html",
                        BcDisclaimerP1: "Les renseignements de l'ICBC sont fournis sous la forme d'un rapport sur l'état du véhicule et l'historique des réclamations le concernant. L'état du véhicule indique si celui-ci peut faire l'objet d'une immatriculation et sert à faire le suivi :",
                        BcDisclaimerP2: "Pour plusieurs raisons, l'état du véhicule n'est pas toujours véritablement représentatif de celui-ci, entre autres parce qu'un véhicule réformé peut ne pas avoir été inscrit au registre des véhicules de la Colombie-Britannique ou qu'un véhicule très endommagé peut avoir été réparé par son propriétaire. L'historique des réclamations automobiles est un rapport sur les dommages au véhicule et il inclut les réparations payées par l'ICBC ainsi que les estimations des dommages non réglés. Pour diverses raisons, il peut être incomplet, notamment parce que le propriétaire n'a pas fait de réclamation à l'ICBC ou que cette dernière a refusé la réclamation. De plus, les renseignements contenus dans l'estimation n'indiqueront pas nécessairement le coût réel des réparations, l'endroit du véhicule qui a subi la plus grande force d'impact ou la principale zone des dommages.",
                        BcDisclaimerP3: "Les consommateurs sont invités à lire au complet l'énoncé des limites de l'ICBC à",
                        BcDisclaimerP4: "L'ICBC recommande de faire inspecter le véhicule par un mécanicien qualifié pour obtenir une évaluation plus complète de l'état du véhicule.",
                        BcDisclaimerTitle: "ICBC"
                    },
                    BCUpgradeMessage: {
                        AddIcbcDataTitle: "Ajouter les données d'accidents de l'ICBC",
                        AutoIncludeICBC: "Pour obtenir ces données automatiquement, chaque fois l'immatriculation est détectée en C.-B., communiqué avec CARFAX Canada chez",
                        ContactSupportEnd: "et nous pourrons vous aider à obtenir cette information.",
                        ContactSupportStart: "Veuillez contacter CARFAX Canada au",
                        DealerSameDay: "Pour obtenir cette information, vous pouvez demander une mise à jour pour une additionnelle $\x3c!--AMOUNT--\x3e.",
                        ICBCChargesMoney: "L’ICBC facture \x3c!--AMOUNT--\x3e $ pour les données sur les réclamations soumises en vertu de son régime. Lors de la création d’un rapport d’historique pour un véhicule immatriculé en C.-B., nous recommandons la mise à niveau du rapport afin d’inclure les données de l’ICBC.",
                        MobilePleaseNote: "Veuillez noter",
                        MobileVehicleRegisteredInBC: "Ce véhicule a été immatriculé en Colombie-Britannique, mais ce rapport n’inclut pas d’informations fournies par l’ICBC, le fournisseur d’assurances de la province.",
                        NoICBCInfoEnd: "En nous fournissant plus d'information sur votre véhicule, vous nous permettez d'accéder à des données plus détaillées.",
                        NoICBCInfoTitle: "Ce rapport ne contient pas les renseignements de l'ICBC sur votre véhicule.",
                        NoICBCInfoStart: "Veuillez communiquer avec CARFAX Canada à l'adresse",
                        RetailICBC: "Ce véhicule a été immatriculé en Colombie-Britannique, mais ce rapport n’inclut pas d’informations fournies par l’ICBC, le fournisseur d’assurances de la province.",
                        RetailObtainICBC: "Pour obtenir les dossiers de l’ICBC pour ce véhicule,",
                        RetailFAQ: "veuillez consulter notre FAQ ",
                        RetailNextSteps: "pour les prochaines étapes.",
                        SuccessfulUpgradeBodyOne: "Nous allons maintenant commencer à collecter des informations à partir de nos sources de données.",
                        SuccessfulUpgradeTitle: "Votre rapport a été mis à jour avec succès!",
                        VehicleRegisteredInBC: "Ce véhicule a été enregistré en Colombie-Britannique, mais ce rapport ne comprend pas d'information de la part d'ICBC, l'assureur de la province."
                    },
                    DetailedHistory: {
                        AccidentReported: "Accident Rapporté",
                        ImportRecordTooltip: "Si un véhicule a été initialement fabriqué pour le marché américain et a été importé au Canada, il doit passer par le programme national d'immatriculation du Canada, d'inspection et de certification des véhicules (connu sous le nom de Registraire des véhicules importés). Ce programme vise à garantir que les véhicules importés de façon permanente au Canada respectent les normes canadiennes de sécurité routière.  Les détails se trouvent sur riv.ca. Ce rapport n'inclut pas les registres d'importation des véhicules entrant au Canada en provenance de pays autre que les États- Unis.",
                        PreviousUse: "Usage Antérieure",
                        TableHeadingDataSource: "Source de données",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Détails",
                        TableHeadingOdometer: "Odomètre",
                        TableHeadingRecordType: "Type de dossier",
                        Tooltip: "Voici la liste complète des informations dont CARFAX Canada dispose sur ce véhicule.",
                        SectionHeading: "Historique détaillé",
                        UnknownUnitOfMeasureMessage: "*Inconnu. L'unité de mesure pour la lecture de l'odomètre n'a pas été fournie et les données ne peuvent figurer dans ce rapport.",
                        DataSourceTypes: {
                            1: "Vente d'automobiles aux enchères",
                            2: "Centre de Service",
                            3: "Accident rapportées à la police",
                            4: "Dossiers d’assurance",
                            5: "Bureau des véhicules automobiles",
                            6: "Source Indépendante",
                            7: "Atelier de réparation",
                            8: "PAVAC",
                            9: "Air Pur",
                            10: "ESM",
                            11: "Service Auto Speedy",
                            12: "Dossiers de dommages",
                            13: "Accident rapporté"
                        },
                        DetailTypes: {
                            1: "Véhicule entretenu",
                            2: "ENCHÈRE ANNONCÉE COMME RACHAT DU MANUFACTURIER",
                            3: "ENCHÈRE ANNONCÉE COMME ODOMÈTRE DÉFECTUEUX OU FALSIFIÉ",
                            4: "ENCHÈRE ANNONCÉE COMME ODOMÈTRE EN MILLES",
                            5: "ENCHÈRE ANNONCÉE COMME ODOMÈTRE REMPLACÉ",
                            6: "ENCHÈRE ANNONCÉE COMME ODOMÈTRE RECULÉ",
                            7: "ENCHÈRE ANNONCÉE COMME VOLÉ ET RETROUVÉ",
                            8: "ENCHÈRE ANNONCÉE COMME KRI (KILOMÈTRES/MILLES RÉELS INCONNUS)",
                            9: "ENCHÈRE ANNONCÉE COMME VÉHICULE U.S.",
                            10: "ENCHÈRE ANNONCÉE COMME GARANTIE ANNULÉE",
                            11: "ENCHÈRE ANNONCÉE COMME ODOMÈTRE",
                            12: "ENCHÈRE ANNONCÉE COMME ANCIENNE LOCATION QUOTIDIENNE",
                            13: "ENCHÈRE ANNONCÉE COMME ANCIEN VÉHICULE D'URGENCE",
                            14: "ENCHÈRE ANNONCÉE COMME ANCIEN VÉHICULE DE POLICE",
                            15: "ENCHÈRE ANNONCÉE COMME ANCIEN TAXI OU LIMOUSINE",
                            16: "RAPPORTÉ À L'ENCAN D’AUTOMOBILES",
                            17: "Location Journalière",
                            18: "Inscription délivrée ou renouvelée",
                            19: "Premier propriétaire signalé",
                            20: "Nouveau propriétaire signalé",
                            21: "Titre émis ou mis à jour",
                            22: "Prêt ou droit de rétention signalé",
                            23: "Le concessionnaire a pris possession de ce véhicule alors qu'il était dans son inventaire",
                            24: "Titre ou inscription délivrée",
                            25: "Le véhicule a échoué l’inspection de sécurité et est considéré non sécuritaire",
                            26: "RÉPARATION D’ACCIDENT ANNONCÉE À L’ENCAN",
                            27: "ENCHÈRE ANNONCÉE COMME PANNEAUX ADJACENTS REMPLACÉS",
                            28: "ENCHÈRE ANNONCÉE COMME COUSSINS GONFLABLES MANQUANTS/DÉFECTUEUX",
                            29: "ENCHÈRE ANNONCÉE COMME ENDOMMAGÉ PAR LE FEU",
                            30: "ENCHÈRE ANNONCÉE COMME ENDOMMAGÉ PAR L'EAU",
                            31: "ENCHÈRE ANNONCÉE COMME IRRÉPARABLE",
                            32: "ENCHÈRE ANNONCÉE COMME PERTE TOTALE",
                            33: "ENCHÈRE ANNONCÉE COMME DOMMAGE STRUCTUREL",
                            34: "ENCHÈRE ANNONCÉE COMME STATUT ANORMAL DÉTECTÉ",
                            35: "ANNONCE D'ENCAN À L'ENCAN DE VÉHICULES RÉCUPÉRÉS",
                            36: "ENCHÈRE ANNONCÉE COMME RÉPARATIONS MAJEURES",
                            37: "Taxi",
                            38: "D'entreprise",
                            39: "Police",
                            40: "Non lucratif",
                            41: "Gouvernement",
                            42: "Location personnelle",
                            43: "STATUT DE RECONSTRUIT ÉMIS",
                            44: "Inspection de sécurité ou des émissions réussie",
                            45: "Entretien du véhicule effectué",
                            46: "Inspection de sécurité effectuée",
                            47: "Inspection des émissions effectuée",
                            48: "Inspection de sécurité réussie",
                            49: "Véhicule à échoué l'inspection de sécurité",
                            50: "Inspection des émissions réussie",
                            51: "Échec de l’inspection des émissions",
                            52: "Véhicule immatriculé comme véhicule d’occasion certifié",
                            53: "Véhicule vendu comme véhicule d’occasion certifié",
                            54: "Rachat de citron du manufacturier",
                            55: "Bail",
                            56: "Reconstruit/Reconstructible",
                            57: "Véhicule importé du Canada vers les États-Unis",
                            58: "Véhicule importé des États-Unis vers le Canada",
                            59: "Ex-Location Journalière",
                            60: "Coussins gonflables déployé",
                            61: "Devant",
                            62: "Devant gauche",
                            63: "Arrière gauche",
                            64: "Côté gauche",
                            65: "Arrière",
                            66: "Devant droite",
                            67: "Arrière droite",
                            68: "Côté droit",
                            69: "Toit",
                            70: "Châssis",
                            71: "Collision",
                            72: "Non-collision",
                            84: "Enregistré / Renouvelé",
                            85: "Flotte",
                            86: "Perte totale",
                            87: "VÉHICULE DÉCLARÉ PERTE TOTALE",
                            88: "Véhicule vendu aux enchères",
                            89: "Répertorié comme véhicule de concession",
                            90: "Structural alteration disclosed by seller",
                            91: "Vehicle sold",
                            92: "Listed as a manufacturer vehicle",
                            93: "SALVAGE TITLE/CERTIFICATE ISSUED",
                            94: "Sold at salvage auction",
                            95: "Collision damage reported",
                            96: "SEVERE DAMAGE HISTORY DISCLOSED BY SELLER",
                            100: "ENCHÈRE ANNONCÉE COMME MOTEUR DOIT ÊTRE RÉPARÉ",
                            101: "ENCHÈRE ANNONCÉE COMME CLIMATISATION DOIT ÊTRE RÉPARÉE",
                            102: "ENCHÈRE ANNONCÉE COMME CARBURANT ALTERNATIF OU CONVERSION",
                            103: "ENCHÈRE ANNONCÉE COMME COMPLÈTEMENT REPEINT",
                            104: "ENCHÈRE ANNONCÉE COMME ORDINATEUR DOIT ÊTRE RÉPARÉ",
                            105: "ENCHÈRE ANNONCÉE COMME SYSTÈME ÉLECTRIQUE DOIT ÊTRE RÉPARÉ",
                            106: "ENCHÈRE ANNONCÉE COMME SYSTÈME ANTIPOLLUTION DOIT ÊTRE RÉPARÉ",
                            107: "ENCHÈRE ANNONCÉE COMME ANCIENNE CARAVANE À SELLETTE",
                            108: "ENCHÈRE ANNONCÉE COMME BAIL PRÉCÉDENT",
                            109: "ENCHÈRE ANNONCÉE COMME ANTÉRIEUREMENT VÉHICULE CHASSE-NEIGE ",
                            110: "ENCHÈRE ANNONCÉE COMME SYSTÈME DE CARBURANT DOIT ÊTRE RÉPARÉ",
                            111: "ENCHÈRE ANNONCÉE COMME DOMMAGE CAUSÉ PAR LA GRÊLE",
                            112: "ENCHÈRE ANNONCÉE COMME ACCESSOIRE MAJEUR DOIT ÊTRE RÉPARÉ",
                            113: "ENCHÈRE ANNONCÉE COMME REMORQUAGE REQUIS",
                            114: "ENCHÈRE ANNONCÉE COMME CODES OBD-II PRÉSENTS",
                            115: "ENCHÈRE ANNONCÉE COMME GROUPE MOTOPROPULSEUR DOIT ÊTRE RÉPARÉ",
                            116: "ENCHÈRE ANNONCÉE COMME ANTÉRIEUREMENT VÉHICULE AUTO-ÉCOLE ",
                            117: "ENCHÈRE ANNONCÉE COMME REMPLACEMENT DE LA PLAQUE DE NIV PUBLIQUE ",
                            118: "ENCHÈRE ANNONCÉE COMME MODIFICATION STRUCTURELLE",
                            119: "ENCHÈRE ANNONCÉE COMME SUSPENSION DOIT ÊTRE RÉPARÉE",
                            120: "ENCHÈRE ANNONCÉE COMME TITRE TRANSFÉRABLE NON DISPONIBLE",
                            121: "ENCHÈRE ANNONCÉE COMME TRANSMISSION DOIT ÊTRE RÉPARÉE",
                            122: "ENCHÈRE ANNONCÉE COMME REMPLACEMENT DE DEUX PANNEAUX DE CARROSSERIE OU PLUS",
                            123: "ENCHÈRE ANNONCÉE COMME PROBLÈMES DE PLAQUE DE NIV",
                            124: "ENCHÈRE ANNONCÉE COMME DOMMAGES CAUSÉS PAR L’EAU",
                            125: "ENCHÈRE ANNONCÉE COMME ANTÉRIEUREMENT VÉHICULE DE POLICE OU D’URGENCE",
                            126: "ENCHÈRE ANNONCÉE COMME HORS PROVINCE",
                            127: "ENCHÈRE ANNONCÉE COMME ABS DÉFECTUEUX",
                            128: "ENCHÈRE ANNONCÉE COMME DIVULGATION SUPPLÉMENTAIRE",
                            129: "ENCHÈRE ANNONCÉE COMME MARQUAGE INCORRECT DU VÉHICULE",
                            130: "ENCHÈRE ANNONCÉE COMME VARIATION MATÉRIELLE PAR RAPPORT AUX SPÉCIFICATIONS DE PRODUCTION",
                            131: "Couleur du véhicule décrite comme amande",
                            132: "Couleur du véhicule décrite comme aluminum",
                            133: "Couleur du véhicule décrite comme améthyste",
                            134: "Couleur du véhicule décrite comme aigue-marine",
                            135: "Couleur du véhicule décrite comme beige",
                            136: "Couleur du véhicule décrite comme noir",
                            137: "Couleur du véhicule décrite comme bleu",
                            138: "Couleur du véhicule décrite comme bronze",
                            139: "Couleur du véhicule décrite comme brun",
                            140: "Couleur du véhicule décrite comme bourgogne",
                            141: "Couleur du véhicule décrite comme camouflage",
                            142: "Couleur du véhicule décrite comme chrome",
                            143: "Couleur du véhicule décrite comme cuivre",
                            144: "Couleur du véhicule décrite comme corail",
                            145: "Couleur du véhicule décrite comme crème",
                            146: "Couleur du véhicule décrite comme bleu foncé",
                            147: "Couleur du véhicule décrite comme brun foncé",
                            148: "Couleur du véhicule décrite comme gris foncé",
                            149: "Couleur du véhicule décrite comme vert foncé",
                            150: "Couleur du véhicule décrite comme or",
                            151: "Couleur du véhicule décrite comme gris",
                            152: "Couleur du véhicule décrite comme vert",
                            153: "Couleur du véhicule décrite comme ivorie",
                            154: "Couleur du véhicule décrite comme lavande",
                            155: "Couleur du véhicule décrite comme bleu pâle",
                            156: "Couleur du véhicule décrite comme brun pâle",
                            157: "Couleur du véhicule décrite comme gris pâle",
                            158: "Couleur du véhicule décrite comme vert pâle",
                            159: "Couleur du véhicule décrite comme marron",
                            160: "Couleur du véhicule décrite comme mauve",
                            161: "Couleur du véhicule décrite comme bleu moyen",
                            162: "Couleur du véhicule décrite comme brun moyen",
                            163: "Couleur du véhicule décrite comme gris moyen",
                            164: "Couleur du véhicule décrite comme vert moyen",
                            165: "Couleur du véhicule décrite comme orange",
                            166: "Couleur du véhicule décrite comme étain",
                            167: "Couleur du véhicule décrite comme rose",
                            168: "Couleur du véhicule décrite comme apprêt",
                            169: "Couleur du véhicule décrite comme violet",
                            170: "Couleur du véhicule décrite comme rouge",
                            171: "Couleur du véhicule décrite comme rouille",
                            172: "Couleur du véhicule décrite comme sauge",
                            173: "Couleur du véhicule décrite comme argent",
                            174: "Couleur du véhicule décrite comme tan",
                            175: "Couleur du véhicule décrite comme taupe",
                            176: "Couleur du véhicule décrite comme bleu sarcelle",
                            178: "Couleur du véhicule décrite comme turquoise",
                            179: "Couleur du véhicule décrite comme turquoise",
                            180: "Couleur du véhicule décrite comme blanc",
                            181: "Couleur du véhicule décrite comme bois",
                            182: "Couleur du véhicule décrite comme jaune"
                        },
                        RecordTypes: {
                            0: "Other",
                            1: "Déclaration à l'Encan",
                            2: "Renouvellement canadien",
                            3: "Dossier de certification",
                            4: "Condition Report",
                            5: "Événement de dommage",
                            6: "Merchant Annonce",
                            7: "Ajustement au dossier du DMV",
                            8: "Flotte/Bail",
                            9: "L'importation au Canada",
                            10: "Enregistrement initial",
                            11: "Rappel",
                            12: "Lecture d’odomètre",
                            13: "Rapport de police",
                            14: "Usage antérieure",
                            15: "Privé Annonce",
                            16: "Reconstruit/Reconstructible",
                            17: "Rappel",
                            18: "Événement d'immatriculation",
                            19: "Enregistrement initial",
                            20: "Récupéré",
                            21: "Dossier de service",
                            22: "Dossier de vente",
                            23: "Estimate Repair",
                            24: "Dossier de service",
                            25: "Émissions",
                            26: "Sécurité",
                            27: "Non-collision",
                            28: "Collision",
                            29: "Dossiers d'enregistrement",
                            30: "Estimate Record",
                            31: "COMPRÉHENSIF",
                            32: "COLLISION",
                            33: "Dossier de verre",
                            34: "COLLISION AVEC UN ANIMAL",
                            35: "VANDALISME",
                            36: "Historique des réparations",
                            37: "VERRE",
                            38: "RÉPARATIONS",
                            39: "Divulgué par le Vendeur"
                        },
                        GroupedDetailTypes: {
                            1: "Inscription délivrée ou renouvelée",
                            2: "Titre émis ou mis à jour",
                            3: "Prêt ou droit de rétention signalé",
                            4: "Titre ou inscription délivrée",
                            5: "Duplicate title issued",
                            6: "Premier propriétaire signalé",
                            7: "Nouveau propriétaire signalé",
                            8: "Nouveau propriétaire signalé",
                            9: "Le véhicule a échoué l’inspection de sécurité et est considéré non sécuritaire",
                            10: "Salvage Event",
                            11: "Rebuilt",
                            12: "Registration Event: Salvage",
                            13: "Salvage",
                            14: "Passed Safety Inspection",
                            15: "Registration Event: Rebuilt",
                            16: "Reconstruit/Reconstructible",
                            17: "Registration Event Salvage",
                            18: "Rebuilt Event",
                            19: "Non-Repairable",
                            20: "Vehicle declared unsafe",
                            21: "Reconstruit/Reconstructible",
                            22: "Registration Event: Rebuilt Event",
                            23: "Registration Event: Salvage Event",
                            24: "Clone Alert: VIN was fraudulently copied and used on another vehicle CARFAX suspects the records collected in California belong to the cloned vehicle, while the original vehicle remains in Quebec",
                            25: "VIN was fraudulently copied and used on another vehicle.CARFAX suspects the records collected in AL, OR, and ID belong to the cloned vehicle.The original vehicle remains in QC.",
                            26: "Personnel",
                            27: "Bail",
                            28: "Commercial",
                            29: "Rental",
                            30: "Location personnelle",
                            31: "Flotte",
                            32: "Taxi",
                            33: "D'entreprise",
                            34: "Gouvernement",
                            35: "Police",
                            36: "Non lucratif",
                            37: "Le concessionnaire a immatriculé ce véhicule alors qu'il était en inventaire",
                            38: "Le concessionnaire a immatriculé ce véhicule alors qu'il était en inventaire",
                            39: "Couleur du véhicule décrite comme amande",
                            40: "Couleur du véhicule décrite comme aluminum",
                            41: "Couleur du véhicule décrite comme améthyste",
                            42: "Couleur du véhicule décrite comme aigue-marine",
                            43: "Couleur du véhicule décrite comme beige",
                            44: "Couleur du véhicule décrite comme noir",
                            45: "Couleur du véhicule décrite comme bleu",
                            46: "Couleur du véhicule décrite comme bronze",
                            47: "Couleur du véhicule décrite comme brun",
                            48: "Couleur du véhicule décrite comme bourgogne",
                            49: "Couleur du véhicule décrite comme camouflage",
                            50: "Couleur du véhicule décrite comme chrome",
                            51: "Couleur du véhicule décrite comme cuivre",
                            52: "Couleur du véhicule décrite comme corail",
                            53: "Couleur du véhicule décrite comme crème",
                            54: "Couleur du véhicule décrite comme bleu foncé",
                            55: "Couleur du véhicule décrite comme brun foncé",
                            56: "Couleur du véhicule décrite comme gris foncé",
                            57: "Couleur du véhicule décrite comme vert foncé",
                            58: "Couleur du véhicule décrite comme or",
                            59: "Couleur du véhicule décrite comme gris",
                            60: "Couleur du véhicule décrite comme vert",
                            61: "Couleur du véhicule décrite comme ivorie",
                            62: "Couleur du véhicule décrite comme lavande",
                            63: "Couleur du véhicule décrite comme bleu pâle",
                            64: "Couleur du véhicule décrite comme brun pâle",
                            65: "Couleur du véhicule décrite comme gris pâle",
                            66: "Couleur du véhicule décrite comme vert pâle",
                            67: "Couleur du véhicule décrite comme marron",
                            68: "Couleur du véhicule décrite comme mauve",
                            69: "Couleur du véhicule décrite comme bleu moyen",
                            70: "Couleur du véhicule décrite comme brun moyen",
                            71: "Couleur du véhicule décrite comme gris moyen",
                            72: "Couleur du véhicule décrite comme vert moyen",
                            73: "Couleur du véhicule décrite comme orange",
                            74: "Couleur du véhicule décrite comme étain",
                            75: "Couleur du véhicule décrite comme rose",
                            76: "Couleur du véhicule décrite comme apprêt",
                            77: "Couleur du véhicule décrite comme violet",
                            78: "Couleur du véhicule décrite comme rouge",
                            79: "Couleur du véhicule décrite comme rouille",
                            80: "Couleur du véhicule décrite comme sauge",
                            81: "Couleur du véhicule décrite comme argent",
                            82: "Couleur du véhicule décrite comme tan",
                            83: "Couleur du véhicule décrite comme taupe",
                            84: "Couleur du véhicule décrite comme bleu sarcelle",
                            85: "Couleur du véhicule décrite comme turquoise",
                            86: "Couleur du véhicule décrite comme turquoise",
                            87: "Couleur du véhicule décrite comme blanc",
                            88: "Couleur du véhicule décrite comme bois",
                            89: "Couleur du véhicule décrite comme jaune"
                        }
                    },
                    ImportExports: {
                        CaseDossier: "Affaire/dossier:",
                        CustomsEntered: "Est entre aux douanes :",
                        CustomsInspected: "Date d’inspection :",
                        From: "De",
                        ImportDate: "Date d'importation :",
                        ImportedAs: "Importé au Canada en tant que :",
                        RivDescription: "Ce véhicule a été importé au Canada en provenance des États-Unis. Pour obtenir des renseignements qui ne sont pas indiqués ci-dessous, veuillez communiquer avec le RIV (<a href='http://www.riv.ca/fr-CA/Home.aspx' style='color=#1294ef;' target='_blank'>http://www.riv.ca/fr-CA/Home.aspx</a>).",
                        OtherRivData: "Le RVI a également fourni les renseignements suivants :",
                        To: "À",
                        "": ""
                    },
                    Lien: {
                        Canadian: "Canada",
                        Guarantee: "Si, pour une raison quelconque, notre vérification du droit de rétention ne reflète pas fidèlement le statut de droit de rétention exécutoire canadien d'un véhicule au moment de la recherche, CARFAX Canada remboursera la partie qui a acheté le rapport et s'est appuyée sur lui à leur détriment pour un montant maximum de (1) la valeur de l'automobile (2) la valeur du droit de rétention (3) Cinq mille dollars canadiens (5 000,00 $), selon le moindre de ceux-ci.",
                        GuaranteeTitle: "Garantie de droit de rétention canadien de CARFAX Canada",
                        HowWeCheck1: "CARFAX Canada utilise le NIV pour rechercher des dossiers gouvernementaux dans chaque province et territoire canadien (à l'exclusion des Territoires du Nord-Ouest) où le véhicule est actuellement immatriculé et où il a été historiquement immatriculé.  Nous ne vérifions pas les droits de rétention ou le titre dans aucun État américain.",
                        HowWeCheck2: "Si un NIV n'a aucun dossier d'enregistrement au Canada, nous ne pouvons pas vérifier les droits de rétention.  Nous ne pouvons garantir les droits de rétention sur les remorques, les véhicules récréatifs ou l'équipement lourd.",
                        HowWeCheck3: "Les acheteurs devraient toujours obtenir une confirmation écrite des vendeurs qu'il n'y a pas de droit de rétention sur le véhicule.",
                        HowWeCheckLE1: "CARFAX Canada utilise le NIV pour rechercher des dossiers gouvernementaux dans la province ou le territoire canadien sélectionné.",
                        HowWeCheckLE2: "Nous ne pouvons garantir les droits de rétention sur les remorques, les véhicules récréatifs ou l'équipement lourd.",
                        HowWeCheckLE3: "Les acheteurs devraient toujours obtenir une confirmation écrite des vendeurs qu'il n'y a pas de droit de rétention sur le véhicule.",
                        HowWeCheckTitle: "Comment nous vérifions les droits de rétention",
                        LienCheckRecordsFound: "Droit(s) de Rétention Trouvé(s)",
                        LienDetailHeading: "Droit de rétention",
                        LienExpressSectionHeading: "Droits de rétention Express",
                        LienMultipleOntario: "Veuillez noter que notre recherche a identifié plus d'un droit de rétention enregistré pour ce NIV. Par contre, en raison des exigences imposées par le registre des droits personnels et réels mobiliers en Ontario, nous ne pouvons vous fournir des informations supplémentaires sur un ou plusieurs de ces droits de rétentions. Les informations sur les droits de rétention de CARFAX Canada sont rapportées exactement comme ils le sont par le gouvernement au moment où la recherche a été faite. Pour plus d'informations concernant un ou plusieurs droits de rétention enregistrés pour ce NIV, veuillez communiquer avec le bureau des registres des droits personnels et réels mobiliers en Ontario.",
                        LienRecordsFound: "Droit(s) de rétention trouvé(s) dans la",
                        LienStatusNoLien: "Aucun droit de rétention trouvé",
                        LienTooltip: "Cette section comprend des détails sur les droits de rétention qui ont été trouvés contre le véhicule. Les informations sur les droits de rétention varient selon la province, elles peuvent donc différer d'un rapport à l'autre. Visitez la page des ressources à carfax.ca/resource-centre pour savoir comment vous assurer que les droits de rétention ont été effacés avant de prendre possession du véhicule.",
                        No: "Aucun historique d’immatriculation au",
                        NoRegistrationDetected: "détecté.",
                        PendingTooltip: "Vous remarquerez peut-être un retard dans la réception des informations sur les droits de rétention,",
                        SectionHeading: "Droits de rétention",
                        Tooltip: "Un droit de rétention est une créance ou une garantie qu'un prêteur a enregistrée sur un bien (comme une voiture).  Le prêteur utilise l'actif comme garantie ou collatéral pour s'assurer qu'il soit payé pour ce qui lui est dû. Si un véhicule a un droit de rétention, le nouveau propriétaire pourrait se retrouver responsable de la dette du propriétaire précédent. Dans cette section, vous verrez où nous avons vérifié les droits de rétention et si nous avons trouvé des droits de rétention enregistrés contre le véhicule.Si un droit de rétention est trouvé, d'autres détails apparaîtront à la fin du rapport.",
                        ViewLienDetails: "Voir les détails du droit de rétention",
                        NotAvailable: "Non disponible",
                        NoLienRecordsFound: "Aucun droit de rétention trouvé"
                    },
                    LienCheck: {
                        LienRecordsFound: "Droit(s) de Rétention Trouvé(s)"
                    },
                    OtherRecords: {
                        CamvapDescription: "Le PAVAC est un programme pancanadien auquel les consommateurs peuvent avoir recours pour régler les différends avec un constructeur automobile au sujet des défectuosités dans l'assemblage ou les matériaux du véhicule, ou de la façon dont le constructeur applique ou administre la garantie associée au nouveau véhicule. Un rachat PAVAC est un véhicule dont l'achat par le fabricant est exigé par le consommateur en vertu du Programme d'arbitrage pour les véhicules automobiles du Canada. Pour en savoir plus, consultez le",
                        CamvapUrl: "www.camvap.ca/accueil2/~french",
                        NotAvailable: "Non disponible",
                        OtherRecordsHeading: "Autres dossiers",
                        TableHeadingDataSource: "Source de données",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Détails",
                        TableHeadingOdometer: "Odomètre"
                    },
                    Registration: {
                        A: "avec un problème de",
                        An: "avec un problème de",
                        Branding: ".",
                        BrandingCheckCanada: "Inspection requise, Normal, Non réparable, Reconstruit, Récupéré et Volé.",
                        BrandingCheckUS: "Récupéré, Rebut, Reconstruit, Feu, Inondation, Grêle et Citron.",
                        BrandingInformation: {
                            0: "Ce véhicule a été immatriculé comme Normal dans cette administration.",
                            1: "Le véhicule a été volé à son propriétaire légitime.",
                            2: "Le véhicule doit être certifié ou doit passer une inspection (généralement mécanique). Le véhicule peut ne pas avoir été apte à reprendre la route ou l’administration dans laquelle il se trouve a exigé qu'une inspection soit effectuée avant qu'il puisse à nouveau être immatriculé.",
                            4: "Les dommages au véhicule sont si élevés que les coûts de réparation du véhicule pour le remettre sur la route dépassent la valeur marchande de ce dernier.",
                            5: "Véhicule immatriculé par ou exporté vers une autre administration.",
                            7: "Le véhicule a été rapporté vendu par le propriétaire enregistré.",
                            8: "Un véhicule récupéré qui a été réparé. Il doit avoir été certifié ou avoir passé avec succès une inspection avant de pouvoir à nouveau être immatriculé.",
                            9: "Le véhicule n’est pas apte à reprendre la route ou à circuler en toute sécurité. Il ne possède pas de valeur de revente autre que pour les pièces et est bon pour la ferraille."
                        },
                        BrandingValue: {
                            0: "Normal",
                            1: "Volé",
                            2: "Inspection Requise",
                            4: "Récupéré",
                            5: "Déplacé",
                            7: "Vendu",
                            8: "Reconstruit/Réparable",
                            9: "Non réparable",
                            V: "Inconnu",
                            X: "Inconnu",
                            99: "Inconnu"
                        },
                        BrandingValueUS: {
                            Normal: "Normal",
                            Salvage: "Récupéré",
                            "Non-Repairable": "Rebut",
                            Stolen: "Volé",
                            "Rebuilt/Rebuildable": "Reconstruit/Reconstructible",
                            Moved: "Déplacé",
                            FireBranded: "Feu",
                            Fire: "Feu",
                            Lemon: "Citron",
                            Flood: "Inondation",
                            Hail: "Grêle",
                            "Manufacturer Buyback Lemon": "Citron",
                            "Not Actual Mileage": "Kilométrage non réel",
                            "Exceeds Mechanical Limits": "Dépassement des limites mécaniques"
                        },
                        ImportImportedAs: "Importé en tant que:",
                        InCanada: "au <strong>Canada</strong> avec le statut de",
                        InUS: "aux <strong>États-Unis</strong>",
                        Issue: "",
                        NoMajorProblem: "Aucun problème de statut majeur n'a été rapporté.",
                        NoRegistrationFoundCanadaUS: "Aucun dossier d'immatriculation n'a été trouvé pour ce véhicule au Canada ou aux États-Unis.",
                        PendingTooltip: "Vous remarquerez peut-être un retard dans la réception des informations sur les immatriculations,",
                        ProvinceOf: "Dans la province",
                        RecordType_Import: "L'importation au Canada",
                        RegisteredInFollowingCA: "Ce véhicule a été immatriculé aux endroits suivants au <strong>Canada</strong> (du plus ancien au plus récent):",
                        RegisteredInFollowingUS: "Ce véhicule a été immatriculé aux endroits suivants aux <strong>États-Unis</strong> (du plus ancien au plus récent):",
                        RegisteredInProvince: "Ce véhicule a été immatriculé dans la province",
                        RegisteredInState: "Ce véhicule a été immatriculé dans l’état du",
                        SectionHeading: "Immatriculation",
                        StateOf: "Dans l'État",
                        Title: "",
                        TooltipBody: "Au Canada, lorsqu'un véhicule est immatriculé auprès du Ministère des transports, un “statut” est indiqué pour classer l'état du véhicule. Récupéré, Reconstruit, Rebut et Non réparable sont des exemples de statuts négatifs de véhicules au Canada. Aux États-Unis, lorsqu'un véhicule est immatriculé auprès du Department of Motor Vehicles, un “titre” est appliqué pour classer l'état du véhicule. Récupéré, Reconstruit, Rebut, Feu, Inondation, Grêle et Citron sont des exemples de titres négatifs de véhicules aux États-Unis. Pour en savoir plus sur chaque statut/titre, consultez le glossaire à carfax.ca/glossaire.",
                        WeCheckedFor: "Nous avons vérifié pour:",
                        With: "avec le statut "
                    },
                    ServiceHistory: {
                        CertificationRecord: "Dossier de certification",
                        NoOtherServiceRecordsFound: "Aucun autre dossier de conditions trouvé",
                        SectionDescription: "Ceux-ci sont les enregistrements de service réalisés sur le véhicule. Ceux-ci sont les enregistrements rapportés à CARFAX Canada lors de la demande du rapport – il est possible que lorsque le service s’est produit que le tout n’est pu être capturé.",
                        ServiceFacility: "Centre de Service",
                        SectionHeading: "Historique de service",
                        TableHeadingAddress: "Adresse",
                        TableHeadingDataSource: "Source de données",
                        TableHeadingDate: "Date",
                        TableHeadingDetail: "Détails",
                        TableHeadingOdometer: "Odomètre",
                        TableHeadingTypeOfRecord: "Type de dossier",
                        TooltipBody: "L'historique d'entretien vous donne une idée de la façon dont le véhicule a été entretenu et du type de condition dans laquelle il se trouve. Il est possible qu'un entretien ait été effectué mais qu'il ne soit pas capturé ici (par exemple, le propriétaire peut avoir effectué des changements d'huile réguliers dans son garage, ce qui n'apparaîtrait pas dans nos rapports). Nous recommandons toujours de faire inspecter le véhicule par un mécanicien certifié afin qu'il puisse évaluer la façon dont le véhicule a été entretenu.",
                        TooltipHeading: "Dossiers d'entretien",
                        UnspecifiedDate: "Date non précisée",
                        VehicleServiced: "Véhicule entretenu"
                    },
                    Recall: {
                        ExperianRecallMessage: "Avis de rappel provenant du manufacturier. Veuillez suivre le lien suivant pour plus d'information. <a href='{0}'>{1}</a>",
                        Honda_Info_Url: "http://honda.ca/recallsfre",
                        Kia_Info_Url: "http://www.kia.ca/pages/owner/recall.aspx",
                        Mazda_Info_Url: "http://www.mazda.ca/MciWeb/loadDealerSearch.action?locale=fr",
                        MazdaRecallMessage: "Recall notice issued by manufacturer. Please contact your local <a href='{0}'>{1}</a> for more information.",
                        ManufacturerRecallIssued: "Avis de rappel du constructeur<br/>",
                        RecallDate: "Date du rappel :",
                        RecallDescription: "Description du rappel",
                        RecallMessage: "Avis de rappel provenant du manufacturier. Veuillez suivre le lien suivant pour plus d'information. <a href='{0}'>{1}</a>",
                        RecallNumber: "Rappel no : ",
                        RecallNumberDetailedHistory: "Rappel no : ",
                        RecallRemedy: "Le correctif",
                        SectionHeading: "Rappels non réglés",
                        MoreInformation: "On avait procédé à ce rappel à la date/l'heure où ce rapport a été généré.  Pour obtenir de plus amples renseignements, ou pour savoir si le rappel est terminé, veuillez contacter",
                        NoRecalls: "Aucune information disponible à partir de la date que ce rapport a été généré. Veuillez contacter",
                        RecallsVehicle: "",
                        UnableToCheckRecalls: "Nous sommes dans l’incapacité de vérifier l’information sur les rappels pour ce véhicule. Veuillez visiter le site de",
                        UnableToCheckRecalls_Visit: " pour vérifier l’information la plus récente concernant celui-ci, ou pour tout véhicule",
                        TooltipBody: "Des avis de rappel sont émis lorsque le fabricant ou l'autorité de transport détecte un problème ou un défaut de sécurité potentiel pour un groupe de véhicules. Cette section décrit les rappels de sécurité ouverts (non réglés) sur le véhicule qui ont été rapportés à CARFAX Canada. Les rappels de sécurité antérieurs qui ont déjà été corrigés (réglés) n'apparaîtront pas dans cette section.",
                        URL_EXPERIAN_ACURA: "http://owners.acura.com/service-maintenance/recalls",
                        URL_EXPERIAN_HONDA: "http://owners.honda.com/service-maintenance/recalls",
                        URL_EXPERIAN_INFINITI: "http://www.infinitiusa.com/recalls-vin",
                        URL_EXPERIAN_NISSAN: "http://www.nissanusa.com/recalls-vin",
                        URL_EXPERIAN_SUZUKI: "http://www.suzukiauto.com/Campaigns.aspx",
                        RecallTypes: {
                            1: " ou visitez le site web d’<a href='http://www.acura.ca/recallsfre' target='_blank'>Acura.</a>",
                            2: " ou visitez le site web d’<a href='http://web.audiusa.com/recall/' target='_blank'>Audi.</a>",
                            3: " <a href='http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true' target='_blank' class=`recall-link'>http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true.</a>",
                            4: " ou visitez le site web de <a href='http://www.bentleytechinfo.com/BY00175_BSI_Web/BY00175_ClassicASP/pages/bsi_bulletin_1.asp?OnlyRecall=true' target='_blank'>Bentley.</a>",
                            5: " ou visitez le site web de <a href='https://www.bmw.ca/en/ssl/VehicleRecall.html' target='_blank'>BMW.</a>",
                            6: " ou visitez le site web de <a href='https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html' target='_blank'>Chrysler.</a>",
                            7: " ou visitez le site web de <a href='https://my.gm.ca/gm/fr/recalls#%2F' target='_blank'>GM.</a>",
                            8: " ou visitez le site web de <a href='https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html' target='_blank'>Dodge.</a>",
                            9: " ou visitez le site web de <a href='https://www.ferrari.com/fr-FR/auto/car-part-services' target='_blank'>Ferrari.</a>",
                            10: " ou visitez le site web de <a href='https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html' target='_blank'>Fiat.</a>",
                            11: " ou visitez le site web de <a href='https://www.ford.com/support/recalls/' target='_blank'>Ford.</a>",
                            12: " ou visitez le site web de <a href='https://owner.lincoln.com/tools/account/maintenance/recalls.html?pagename=Owner/Page/RecallsPage' target='_blank'>Lincoln.</a>",
                            13: " ou visitez le site web de <a href='http://owner.ford.com/servlet/ContentServer?pagename=Owner/Page/RecallsPage' target='_blank'>Mecury.</a>",
                            14: " ou visitez le site web d'<a href='http://www.honda.ca/recallsfre' target='_blank'>Honda.</a>",
                            15: " <a href='https://recall.hyundaicanada.com/fr' target='_blank'>https://recall.hyundaicanada.com/fr</a>.",
                            16: " ou visitez le site web d'<a href='https://recall.hyundaicanada.com/fr' target='_blank'>Hyundai.</a>",
                            17: " ou visitez le site web d'<a href='http://nna.force.com/support/ContactUsInfiniti?recallLookup' target='_blank'>Infiniti.</a>",
                            18: " ou visitez le site web de <a href='http://http://www.isuzu.com/index.jsp' target='_blank'>Isuzu.</a>",
                            19: " ou visitez le site web de <a href='http://www.jaguarusa.com/owners/vin-recall.html' target='_blank'>Jaguar.</a>",
                            20: " ou visitez le site web de <a href='https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html' target='_blank'>Jeep.</a>",
                            21: " ou visitez le site web de <a href='http://www.kia.ca/kia-recall' target='_blank'>Kia.</a>",
                            22: " ou visitez le site web de <a href='http://www.landroverusa.com/ownership/product-recall-search.html' target='_blank'>Land Rover.</a>",
                            23: " ou visitez le site web de <a href='https://www.lexus.ca/lexus/fr/maintain-your-lexus/campaigns' target='_blank'>Lexus.</a>",
                            24: " ou visitez le site web de <a href='https://www.maserati.com/ca/en/shopping-tools/recall-by-vin' target='_blank'>Maserati.</a>",
                            25: " ou visitez le site web de <a href='https://www.mazda.ca/fr/proprietaires/rappels/' target='_blank'>Mazda.</a>",
                            26: " ou visitez le site web de <a href='https://www.mercedes-benz.ca/fr/recalls' target='_blank'>Mercedes Benz.</a>",
                            27: " ou visitez le site web de <a href='http://www.miniusa.com/content/miniusa/en/owners/tools-support/recall.html' target='_blank'>Mini.</a>",
                            28: " ou visitez le site web de <a href='https://www.mitsubishicars.com/owners/service' target='_blank'>Mitsubishi.</a>",
                            29: " ou visitez le site web de <a href='https://nna.secure.force.com/support/ContactUsNissan?recallLookup' target='_blank'>Nissan</a>.",
                            30: " ou visitez le site web de <a href='https://recall.porsche.com/prod/pag/vinrecalllookup.nsf/VIN?ReadForm' target='_blank'>Porsche.</a>",
                            31: " ou visitez le site web de <a href='https://www.mopar.com/fr-ca/my-vehicle/recalls/search.html' target='_blank'>Ram.</a>",
                            32: " ou visitez le site web de <a href='http://www.rolls-roycemotorcars.com/recall/' target='_blank'>Rolls Royce.</a>",
                            33: " ou visitez le site web de <a href='https://www.toyota.ca/toyota/fr/owners/recalls' target='_blank'>Scion.</a>",
                            34: " ou visitez le site web de <a href='https://www.mercedes-benz.ca/fr/recalls' target='_blank'>Smart.</a>",
                            35: " ou visitez le site web de <a href='https://www.subaru.ca/WebPage.aspx?WebSiteID=284&WebPageID=21096' target='_blank'>Subaru.</a>",
                            36: ".",
                            37: " <a href='https://www.toyota.ca/toyota/fr/owners/recalls' target='_blank' class=`recall-link'>https://www.toyota.ca/toyota/fr/owners/recalls.</a>",
                            38: " ou visitez le site web de <a href='https://www.toyota.ca/toyota/fr/owners/recalls' target='_blank'>Toyota.</a>",
                            39: " ou visitez le site web de <a href='http://www.vw.ca/fr/owners/about_your_volkswagen/vin_recall.html' target='_blank'>Volkswagen.</a>",
                            40: " ou visitez le site web de <a href='https://www.volvocars.com/fr-ca/own/explore/recall-information' target='_blank'>Volvo.</a>",
                            41: "On avait procédé à ce rappel à la date/l'heure où ce rapport a été généré. Pour obtenir de plus amples renseignements, ou pour savoir si le rappel est terminé, veuillez communiquer avec votre détaillant local de BMW.",
                            42: "Aucune information disponible à partir de la date que ce rapport a été généré. Veuillez contacter détaillant local de BMW.",
                            43: " ou visitez le site web de <a href='https://recall.hyundaicanada.com/fr' target='_blank'>Genesis.</a>"
                        }
                    },
                    Stolen: {
                        CarfaxCanadaRecommends: "CARFAX Canada vous recommande de contacter la police locale pour demander de l'aide.",
                        IsCurrentlyDeclaredStolen: "Ce véhicule est actuellement rapporté <strong>VOLÉ</strong> dans la base de données du Centre d'information de la police canadienne (CIPC).",
                        NotCurrentlyDeclaredStolen: "Ce véhicule n’est pas actuellement déclaré volé.",
                        SectionHeading: "Vérification de véhicule volé",
                        StolenNotRecovered: "Le véhicule a été volé à son propriétaire légitime.",
                        TooltipHeading: "Si le véhicule est actuellement déclaré comme volé, nous vous en informerons dans cette section. Si le véhicule a déjà été volé (à un moment quelconque de sa vie) et a été récupéré, il ne sera pas reflété ici."
                    },
                    Shared: {
                        And: "et",
                        Detail_SoldDailyRental: "Véhicule vendu comme location quotidienne certifié",
                        Cancel: "Annuler",
                        CollapseAll: "Réduire tout",
                        Countries: {
                            Canada: "Canada",
                            "United States": "États-Unis",
                            "United States of America": "États-Unis d'Amérique"
                        },
                        DamageEvent: "Événement de dommage",
                        DialogErrorAlreadyUpgraded: "Il semble que le rapport actuel a déjà fait l’objet d’une mise à niveau",
                        DialogErrorForAssistance: "pour obtenir de l'aide.",
                        DialogErrorTitle: "Oh-oh!  Malheureusement, nous n'avons pas pu mettre à jour votre rapport.",
                        DialogErrorTryAgain: "Veuillez réessayer plus tard.  Si ce problème persiste, veuillez nous contacter au",
                        ExpandAll: "Développer tout",
                        LearnMore: "En savoir plus",
                        LemonBuyback: "Rachat de citron du manufacturier",
                        NotAvailableAbbreviation: "n/a",
                        OrVisitOur: "ou visitez le",
                        PendingDataFrom: "Presque terminé! Nous recueillons simplement des informations de",
                        Rebuilt: "Reconstruit/Reconstructible",
                        RegistrationEvent: "Événement d'immatriculation",
                        Salvage: "Récupéré",
                        Pending: "En suspens",
                        PendingTooltipOne: "si un rapport est commandé en dehors des heures normales de bureau, y compris les fins de semaine et les jours fériés, certains fournisseurs de données peuvent être fermés.",
                        PendingTooltipTwo: "cependant votre rapport sera complété rapidement lorsque les fournisseurs de données reviendront au bureau, généralement le jour ouvrable suivant.",
                        PhoneNumberSupport: "1.866.835.8612",
                        PleaseNote: "Remarque",
                        PendingCollectionData: "Presque terminé! Il suffit de collecter un peu plus de données pour compléter votre rapport.",
                        CarfaxPhone: "1.866.835.8612",
                        CustomerSupportPortal: "Portail de service à la clientèle",
                        CustomerSupport: "Service à la clientèle",
                        SupportPortalLink: "https://support.carfax.ca/fr/support/home",
                        SupportPortalAddIcbcLink: "https://support.carfax.ca/fr/support/solutions/articles/17000131694-comment-puis-je-ajouter-l%E2%80%99icbc-%C3%A0-mon-rapport-d-historique-de-v%C3%A9hicule-",
                        SupportLinkText: "support.carfax.ca",
                        VisitUsAt: "Visitez-nous à",
                        CarfaxAddress: "100 Kellogg Ln Suite 301, London ON",
                        CarfaxAddressLine1: "100 Kellogg Ln Suite 301,",
                        CarfaxAddressLine2: "London ON N5W 0B4",
                        CarfaxPostalCode: "N5W 0B4",
                        SupportFaqLink: "https://support.carfax.ca/fr/support/solutions",
                        CountryCA: "Canada",
                        CountryUS: "États-Unis",
                        CountryUSA: "États-Unis d'Amérique",
                        MobileOrderButton: "Ordre Chronologique",
                        Provinces: {
                            AB: "Alberta",
                            AK: "Alaska",
                            AL: "Alabama",
                            AR: "Arkansas",
                            AZ: "Arizona",
                            Alabama: "Alabama",
                            Alaska: "Alaska",
                            Alberta: "Alberta",
                            Arizona: "Arizona",
                            Arkansas: "Arkansas",
                            BC: "Colombie-Britannique",
                            "British Columbia": "Colombie-Britannique",
                            CA: "Californie",
                            CO: "Colorado",
                            CT: "Connecticut",
                            California: "Californie",
                            Colorado: "Colorado",
                            Connecticut: "Connecticut",
                            DC: "District of Columbia",
                            DE: "Delaware",
                            Delaware: "Delaware",
                            "District of Columbia": "District of Columbia",
                            FL: "Floride",
                            Florida: "Floride",
                            GA: "Géorgie",
                            Georgia: "Géorgie",
                            HI: "Hawaï",
                            Hawaii: "Hawaï",
                            IA: "Iowa",
                            ID: "Idaho",
                            IL: "Illinois",
                            IN: "Indiana",
                            Idaho: "Idaho",
                            Illinois: "Illinois",
                            Indiana: "Indiana",
                            Iowa: "Iowa",
                            KS: "Kansas",
                            KY: "Kentucky",
                            Kansas: "Kansas",
                            Kentucky: "Kentucky",
                            LA: "Louisiane",
                            Louisiana: "Louisiane",
                            MA: "Massachusetts",
                            MB: "Manitoba",
                            MD: "Maryland",
                            ME: "Maine",
                            MI: "Michigan",
                            MN: "Minnesota",
                            MO: "Missouri",
                            MS: "Mississippi",
                            MT: "Montana",
                            Maine: "Maine",
                            Manitoba: "Manitoba",
                            Maryland: "Maryland",
                            Massachusetts: "Massachusetts",
                            Michigan: "Michigan",
                            Minnesota: "Minnesota",
                            Mississippi: "Mississippi",
                            Missouri: "Missouri",
                            Montana: "Montana",
                            NB: "Nouveau-Brunswick",
                            NC: "Caroline du Nord",
                            ND: "Dakota du Nord",
                            NE: "Nebraska",
                            NF: "Terre-Neuve",
                            NH: "New Hampshire",
                            NJ: "New Jersey",
                            NM: "Nouveau Mexique",
                            NS: "Nouvelle-Écosse",
                            NT: "Territoire du Nord-Ouest",
                            NU: "Nunavut",
                            NV: "Nevada",
                            NY: "New York",
                            Nebraska: "Nebraska",
                            Nevada: "Nevada",
                            "New Brunswick": "Nouveau-Brunswick",
                            "New Hampshire": "New Hampshire",
                            "New Jersey": "New Jersey",
                            "New Mexico": "Nouveau Mexique",
                            "New York": "New York",
                            Newfoundland: "Terre-Neuve",
                            "North Carolina": "Caroline du Nord",
                            "North Dakota": "Dakota du Nord",
                            "Northwest Territories": "Territoire du Nord-Ouest",
                            "Nova Scotia": "Nouvelle-Écosse",
                            Nunavut: "Nunavut",
                            OH: "Ohio",
                            OK: "Oklahoma",
                            ON: "Ontario",
                            OR: "Oregon",
                            Ohio: "Ohio",
                            Oklahoma: "Oklahoma",
                            Ontario: "Ontario",
                            Oregon: "Oregon",
                            PA: "Pennsylvanie",
                            PE: "Île-du-Prince-Édouard",
                            PR: "Puerto Rico",
                            Pennsylvania: "Pennsylvanie",
                            "Prince Edward Island": "Île-du-Prince-Édouard",
                            "Puerto Rico": "Puerto Rico",
                            QC: "Québec",
                            Quebec: "Québec",
                            RI: "Rhode Island",
                            "Rhode Island": "Rhode Island",
                            SC: "Caroline du Sud",
                            SD: "Dakota du Sud",
                            SK: "Saskatchewan",
                            Saskatchewan: "Saskatchewan",
                            "South Carolina": "Caroline du Sud",
                            "South Dakota": "Dakota du Sud",
                            TN: "Tennessee",
                            TX: "Texas",
                            Tennessee: "Tennessee",
                            Texas: "Texas",
                            UT: "Utah",
                            Utah: "Utah",
                            VA: "Virginie",
                            VT: "Vermont",
                            Vermont: "Vermont",
                            Virginia: "Virginie",
                            WA: "Washington",
                            WI: "Wisconsin",
                            WV: "Virginie-Occidentale",
                            WY: "Wyoming",
                            Washington: "Washington",
                            "West Virginia": "Virginie-Occidentale",
                            Wisconsin: "Wisconsin",
                            Wyoming: "Wyoming",
                            YT: "Yukon",
                            "Yukon Territories": "Yukon",
                            Yukon: "Yukon"
                        },
                        VIN: "NIV",
                        YouCanVisitOur: "ou vous pouvez visiter notre"
                    },
                    VehicleDetails: {
                        BodyStyleATV: "TTV",
                        BodyStyleAUTOTRANSPORTER: "Transporteur d'Auto",
                        BodyStyleBEVERAGE: "Boisson",
                        BodyStyleBUSNONSCHOOL: "Autobus Non-Scolaire",
                        BodyStyleBUSSCHOOL: "Autobus Scolaire",
                        BodyStyleCABCHASSIS: "Châssis-Cabine",
                        BodyStyleCOMMERCIALCHASSIS: "Châssis-Commerciale",
                        BodyStyleCOMPETITION: "Compétition",
                        BodyStyleCONTAINCHASSIS: "Contient Châssis",
                        BodyStyleCONVERTIBLE: "Convertible",
                        BodyStyleCOUPE: "Coupé",
                        BodyStyleCRUISER: "Croiseur",
                        BodyStyleCUTAWAY: "Modèle en coupe",
                        BodyStyleDIRTBIKE: "Moto hors route",
                        BodyStyleDUMP: "Déverser",
                        BodyStyleENDURO: "Enduro",
                        BodyStyleFIRETRUCK: "Camion d'Incendie",
                        BodyStyleFLATBED: "Plate-forme",
                        BodyStyleGLIDERS: "Planeurs",
                        BodyStyleGRAIN: "Grain",
                        BodyStyleHATCHBACK: "Hayon",
                        BodyStyleHATCHBACK1: "HAYON",
                        BodyStyleHEARSE: "Corbillard",
                        BodyStyleINCOMPLETEPICKUP: "Camion Incomplète",
                        BodyStyleINCOMPLETESTRIPCHASSIS: "Incomplet (bande châssis)",
                        BodyStyleLIMOUSINE: "Limousine",
                        BodyStyleLIVESTOCK: "Bétail",
                        BodyStyleLOGGING: "Grumier",
                        BodyStyleLOWBED: "Lit bas",
                        BodyStyleMOTORHOME: "Auto-caravane",
                        BodyStylePICKUP: "Camion",
                        BodyStyleROLLOFF: "Camion Roulier",
                        BodyStyleSCOOTER: "Scooter",
                        BodyStyleSEDAN: "Berline",
                        BodyStyleSPORT: "Sport",
                        BodyStyleSPORTUTILITYTRUCK: "Camion Utilitaire Sport",
                        BodyStyleSPORTUTILITYVEHICLE: "Véhicule Utilitaire Sport",
                        BodyStyleSTEPVAN: "Fourgonnette à étape",
                        BodyStyleSTRAIGHTTRUCK: "Camion Porteur",
                        BodyStyleTANK: "Réservoir",
                        BodyStyleTOURING: "Tourning",
                        BodyStyleTRACTORTRUCK: "Camion-Tracteur",
                        BodyStyleTRADITIONAL: "Traditionnel",
                        BodyStyleTRANSFER: "Transfert",
                        BodyStyleUNKNOWN: "Inconnu",
                        BodyStyleUTILITY: "Utilitaire",
                        BodyStyleVAN: "Fourgonnette",
                        BodyStyleVANCAMPER: "Fourgonnette de Camping",
                        BodyStyleVANCARGO: "Fourgonnette de Fret",
                        BodyStyleVANPASSENGER: "Fourgonnette Passager",
                        BodyStyleWAGON: "Wagon",
                        CountryOfAssembly: "Pays d'assemblage",
                        Cylinders: "Cylindres",
                        FuelTypeCOMPRESSEDNATURALGAS: "Gaz Naturel Compressé",
                        FuelTypeCONVERTIBLE: "Convertible",
                        FuelTypeDIESEL: "Diesel",
                        FuelTypeELECTRIC: "Électrique",
                        FuelTypeELECTRICANDGASHYBRID: "Électrique et Gaz Hybride",
                        FuelTypeFLEXIBLE: "Flexible",
                        FuelTypeGAS: "Gaz",
                        FuelTypeGAS1: "GAZ",
                        FuelTypePROPANE: "Propane",
                        FuelTypeSTYLE: "Style",
                        LastReportedOdometer: "Dernière lecture d’odomètre rapportée",
                        LastReportedOdometerTooltip: "Les lectures d’odomètre sont une partie importante de l’historique d’un véhicule, car elles indiquent la distance parcourue par un véhicule, ce qui peut avoir un impact sur son état et sa valeur.  La dernière lecture d’odomètre indiquée dans ce rapport est le plus récent enregistrement reçu par CARFAX Canada.  La lecture actuelle de l’odomètre sur le véhicule peut être différente de ce qui est indiqué ici, donc la vérification physique de l’odomètre sur le véhicule est le meilleur moyen de vérifier le kilométrage.",
                        Rotary: "Rotatif",
                        Unknown: "Nombre de cylindres inconnu",
                        VinDidNotDecode: "NIV non identifié"
                    },
                    Date: {
                        1: "janv.",
                        2: "févr.",
                        3: "mars",
                        4: "avr.",
                        5: "mai",
                        6: "juin",
                        7: "juil.",
                        8: "août",
                        9: "sept.",
                        10: "oct.",
                        11: "nov.",
                        12: "déc."
                    },
                    VehicleHistory: {
                        Complete: "Complet",
                        Pending: "En suspens"
                    },
                    Summary: {
                        Badge: {
                            AccidentFreeBadgeImage: "accident-free_fr@1x.svg",
                            FCACertifiedBadgeImage: "FCA.png",
                            KiaCPOBadgeImage: "KIA_FR.svg",
                            KiaCPOBadgeImageOld: "KIA_FR.png",
                            LowKilometerBadgeImage: "low-kilometers_fr@1x.svg",
                            OneOwnerBadgeImage: "one-owner_fr@1x.svg",
                            TopConditionBadgeImage: "top-condition_fr@1x.svg"
                        },
                        ReportDetailDate: "Date du rapport",
                        ReportDetailStatus: "Statut du rapport",
                        ReportDetailReference: "Référence",
                        VHRPlusLienCheckBC: "RHV + Droits de Rétention (C.-B.)",
                        VHRPlusLienCheck: "RHV + Droits de Rétention",
                        ReportType: {
                            Lien: "Droit de Rétention",
                            LienExpress: "Droit de Rétention Express",
                            VehicleHistoryReport: "Rapport d’Historique de Véhicule",
                            VehicleHistoryReportBC: "Rapport d’Historique de Véhicule (C.-B.)",
                            VehicleHistoryReportBCPlusLienExpress: "Rapport d’Historique de Véhicule (C.-B.) + Droits de Rétention Express",
                            VehicleHistoryReportPlusLienCheck: "Rapport d’Historique de Véhicule + Droits de Rétention",
                            VehicleHistoryReportPlusLienCheckBC: "Rapport d’Historique de Véhicule + Droits de Rétention (C.-B.)",
                            VehicleHistoryReportPlusLienExpress: "Rapport d’Historique de Véhicule + Droits de Rétention Express",
                            VehicleHistoryReportPlusLienExpressQC: "Rapport d’Historique de Véhicule + Droits de Rétention Express (QC)"
                        }
                    },
                    ReportDate: {
                        1: "janvier",
                        2: "février",
                        3: "mars",
                        4: "avril",
                        5: "mai",
                        6: "juin",
                        7: "juillet",
                        8: "août",
                        9: "septembre",
                        10: "octobre",
                        11: "novembre",
                        12: "décembre"
                    },
                    WebReportType: {
                        2: "Rapport d’Historique de Véhicule + Droits de Rétention",
                        3: "Rapport d’Historique de Véhicule + Droits de Rétention (C.-B.)",
                        4: "Rapport d’Historique de Véhicule",
                        5: "Droit de Rétention",
                        6: "Droit de Rétention Express",
                        9: "Rapport d’Historique de Véhicule (C.-B.)",
                        10: "Rapport d’Historique de Véhicule + Droits de Rétention Express (QC)",
                        11: "Rapport d’Historique de Véhicule + Droits de Rétention Express",
                        12: "Rapport d’Historique de Véhicule (C.-B.) + Droits de Rétention Express"
                    },
                    Legal: {
                        LegalText: "Le rapport d'historique de véhicule est compilé à partir de multiples sources de données. Il n’est pas toujours possible pour CARFAX Canada ULC et pour ses fournisseurs de sources de données d’obtenir des renseignements complets sur un véhicule. Par exemple, il se peut que d’autres statuts, immatriculations, déclarations, renseignements sur les accidents, dossiers d’entretien, renseignements au sujet des rappels, relevés d’odomètres ou d’autres renseignements ou des contradictions relatives à un véhicule ne figurent pas dans le rapport correspondant. CARFAX Canada et ses fournisseurs de sources de données reçoivent des renseignements de sources externes considérées comme fiables, mais tant CARFAX Canada que ses fournisseurs et ses agents n’assument aucune responsabilité quant à d’éventuelles erreurs, inexactitudes ou omissions en ce qui a trait à ces renseignements. Les rapports sont fournis strictement « tels quels », et CARFAX Canada et ses fournisseurs de sources de données refusent formellement d’honorer toute garantie, expresse ou implicite, y compris toute garantie de rapidité, d’exactitude, de qualité marchande ou de convenance à un usage particulier en ce qui a trait à ce rapport ou à son contenu. Ni CARFAX Canada ni ses fournisseurs de sources de données ne peuvent être tenus responsables de tout dommage, perte ou dépense concernant les rapports ou les renseignements figurant dans un rapport, y compris l’exactitude ou un quelconque retard ou défaut dans la prestation d’un rapport précis ou des renseignements. D'autres informations sur le véhicule faisant l'objet de ce rapport d'historique de véhicule, y compris les problèmes, peuvent ne pas avoir été rapportés à CARFAX Canada.  Utilisez ce rapport comme un outil important, ainsi qu'une inspection du véhicule et un essai routier, pour prendre une meilleure décision concernant l'achat de votre prochaine voiture usagée. En obtenant, en examinant ou en utilisant le rapport d'historique de ce véhicule, vous vous engagez à respecter toutes les conditions d’utilisation et tous les accords de licence d’utilisateur final de CARFAX Canada qui sont tous susceptibles d’être modifiés de temps à autre par CARFAX Canada.",
                        CarfaxCanadaPrivacyLegalURL: "https://www.carfax.ca/fr-ca/about-carfax/privacy-legal/conditions-of-use",
                        TermsConditions: "Conditions D'Utilisation",
                        CopyrightText1: "© ",
                        CopyrightText2: "CARFAX Canada ULC. Tous droits réservés.",
                        OneOwnerDisclaimerText: "Le sceau Un seul propriétaire™ de CARFAX Canada est basé sur les informations d'immatriculation communiquées à CARFAX Canada.  Le sceau est disponible pour les véhicules personnels et commerciaux qui n'ont été immatriculés que dans les provinces de la Colombie-Britannique, de l'Alberta, de la Saskatchewan, du Manitoba, de l'Ontario, du Québec, de la Nouvelle-Écosse, du Nouveau-Brunswick ou de l'Île-du-Prince-Édouard.",
                        OneOwnerDisclaimerTitle: "Sceau Un propriétaire<sup>MC</sup> de CARFAX Canada",
                        LowKilometresDisclaimerText: "Le sceau Bas kilométrage™ de CARFAX Canada est basé sur les informations des odomètres communiquées à CARFAX Canada.  Le sceau Bas kilométrage™ de CARFAX Canada est disponible pour les véhicules immatriculés au Canada qui ont accumulé, tel que rapporté à CARFAX Canada via les relevés d’odomètres, moins de 18 000 kilomètres par an depuis le début de septembre de l'année précédant l'année de modèle du véhicule jusqu'à la date à laquelle ce rapport a été généré.",
                        LowKilometresDisclaimerTitle: "Sceau Bas kilométrage<sup>MC</sup> de CARFAX Canada",
                        TopConditionDisclaimerText: "Le sceau Meilleure condition™ de CARFAX Canada est basé sur les données des véhicules d'occasion certifiés (VOC), des données de véhicules de location quotidienne précédente certifiée (VLQPC) et/ou des informations sur l'historique des véhicules signalées à CARFAX Canada.  Le sceau est disponible pour les véhicules immatriculés au Canada qui satisfont aux conditions du programme CPO ou VLQPC du fabricant, selon le cas, et/ou aux normes que CARFAX Canada établit de temps à autre comme exigences pour que les véhicules obtiennent le statut de Meilleure condition™ de CARFAX Canada.",
                        TopConditionDisclaimerTitle: "Sceau Meilleure condition<sup>MC</sup> de CARFAX Canada",
                        AccidentFreeDisclaimerText: "Le sceau Aucun accident™ de CARFAX Canada est basé sur les dossiers de dommages et/ou les informations de statuts rapportés à CARFAX Canada.  Le sceau est disponible pour les véhicules personnels qui n'ont été immatriculés qu'au Canada et qui n'ont pas été déclarés volés au moment où ce rapport a été généré.",
                        AccidentFreeDisclaimerTitle: "Sceau Aucun accident<sup>MC</sup> de CARFAX Canada",
                        KiaExplanation: "Les véhicules d'occasion certifiés KIA munis du Sceau Meilleure condition dépassent les exigences les plus strictes en matière de conditions et d'entretien et ont été inspectés minutieusement par des techniciens de KIA afin de s'assurer qu'ils respectent les normes de KIA Canada.",
                        FcaExplanation: "<b>LE SAVIEZ-VOUS?</b> Un ancien véhicule de Location Quotidienne Certifié par FCA doit surpasser des normes strictes d’entretien et de condition afin d’obtenir le sceau Meilleure Condition.",
                        SummaryLegalShortText1: "Ce Rapport d'Historique de Véhicule est basé sur les <a target='_blank' href='https://www.carfax.ca/fr-ca/vehicle-history-data'>informations</a> <span class='disclaimer-information-print'>(https://www.carfax.ca/fr-ca/vehicle-history-data)</span> qui ont été rapportées et étaient disponibles pour CARFAX Canada au",
                        SummaryLegalShortText2: "(ou une fois que toutes les données ont été collectées à partir de nos sources de données et que le rapport était complet). CARFAX Canada puise dans des milliards de dossiers de données provenant de milliers de sources à travers l'Amérique du Nord, et nous recevons chaque jour de nouveaux dossiers de données d’historiques.",
                        SummaryLegalShortText3: "Il peut y avoir d'autres renseignements sur ce véhicule qui n'ont pas été rapportés à CARFAX Canada.",
                        SummaryLegalShortText4: "Lors de l'achat d'un véhicule usagé, nous recommandons toujours d'utiliser un Rapport d'Historique de Véhicule de CARFAX Canada, ainsi qu'une inspection du véhicule et un essai routier, afin de prendre une décision éclairée."
                    },
                    Upgrade: {
                        AccessReport: "Accéder à Rapport",
                        AddLienCheck: "Achetez un Rapport historique de véhicule + Droits de rétention",
                        AddLienExpress: "Ajoutez Droits de rétention Express",
                        BuyNow: "Acheter Maintenant",
                        BuyVHRLCheckModalBodyText: "Un Rapport historique de véhicule de CARFAX Canada + Droits de rétention recherche les dossiers gouvernementaux dans chaque province et territoire du Canada (à l'exception des Territoires du Nord-Ouest) où le véhicule est actuellement immatriculé et où il a déjà été immatriculé.",
                        ErrorAlreadyUpgraded: "Il semble que le rapport actuel a déjà fait l’objet d’une mise à niveau",
                        ErrorForAssistance: "pour obtenir de l'aide.",
                        ErrorTitle: "Oh-oh!  Malheureusement, nous n'avons pas pu mettre à jour votre rapport.",
                        ErrorTryAgain: "Veuillez réessayer plus tard.  Si ce problème persiste, veuillez nous contacter au",
                        LienExpressLegal: "Si vous sélectionnez le bouton “Acheter maintenant” ci-dessus, nous rechercherons les Droits de rétention dans les provinces/territoires canadiens répertoriés.",
                        LienExpressPopUpBodyOne: "Nous avons relevé des dossiers d’immatriculation concernant ce véhicule dans les provinces et les territoires indiqués ci-dessous à la date de la production de ce rapport.",
                        LienExpressPopUpBodyTwo: "Aimeriez-vous chercher les droits de rétention pouvant être enregistrés à ce véhicule dans ces provinces et territoires?",
                        PurchaseLienCheck: "Achetez Droits:",
                        ReportAlreadyUpgraded: "Ce rapport a déjà été mis à jour!",
                        SuccessfulUpgrade: "Votre rapport a été mis à jour avec succès!",
                        SuccessfulUpgradeBodyOne: "Nous allons maintenant commencer à collecter des informations à partir de nos sources de données.",
                        SuccessfulUpgradeBodyTwo: "si un rapport est commandé en dehors des heures normales de bureau, y compris les fin de semaines et les journées fériés, vous remarquerez peut-être un retard dans la réception des informations de droits de rétention.",
                        Total: "Totale",
                        ViewUpgradedReport: "Afficher le rapport mis à jour"
                    },
                    VehicleHistoryTiles: {
                        AccidentDamage: "Accident/Dommage",
                        AccidentDamageRecordsFound: "Dossiers d’accidents/dommages trouvés",
                        AccidentDamageRecordsFoundFlyout: "Dossiers<br/>d’accidents​&#8203;/​&#8203;dommages trouvés",
                        CollectingData: "Collecte de données...",
                        GlassRecordsFound: "Dossiers de verres trouvés",
                        GlassRecordsFoundFlyout: "Dossiers de<br/>verres trouvés",
                        ImportRecordFound: "Dossier d’importation trouvé",
                        ImportRecordFoundFlyout: "Dossier<br/>d’importation trouvé",
                        LastRegisteredIn: "Lieu de la dernière immatriculation",
                        LienRecordFoundFlyout: "Droit de<br/>Rétention Trouvé",
                        LienRecordsFoundFlyout: "Droits de<br/>Rétention Trouvés",
                        LienRecordsNotFoundFlyout: "Aucun droit de<br/>rétention trouvé",
                        NoAccidentDamageRecordsFound: "Aucun dossier d’accident/dommage trouvé",
                        ICBCNotIncludedAccidentTile: "Informations de l'ICBC non incluses",
                        NoAccidentDamageRecordsFoundFlyout: "Aucun dossier d’accident&#8203;/​&#8203;dommage trouvé",
                        NoImportRecordsFound: "Aucun dossier d’importation trouvé",
                        NoImportRecordsFoundFlyout: "Aucun dossier<br/>d’importation trouvé",
                        NoRegistrationFound: "Aucun registres d'immatriculation trouvé",
                        NoRegistrationFoundFlyout: "Aucun registres d'immatriculation trouvé",
                        OpenRecall: "Rappels non réglés",
                        RecallFound: "Rappel non réglé trouvé",
                        RecallFoundFlyout: "Rappel non<br/>réglé trouvé",
                        RecallsFound: "Rappels non réglés trouvés",
                        RecallsFoundFlyout: "Rappels non<br/>réglés trouvés",
                        RecallsNotFound: "Aucun rappel non réglé trouvé",
                        RecallsNotFoundFlyout: "Aucun rappel<br/>non réglé trouvé",
                        RecallsUnableToCheck: "Nous sommes dans l’incapacité de vérifier l’information sur les rappels",
                        Registration: "Immatriculation",
                        ServiceRecordFound: "Dossier d’entretien trouvé",
                        ServiceRecordFoundFlyout: "Dossier<br/>d’entretien trouvé",
                        ServiceRecordsFound: "Dossiers d’entretien trouvés",
                        ServiceRecordsFoundFlyout: "Dossiers<br/>d’entretien trouvés",
                        Stolen: "Volé",
                        StolenFlyout: "Actuellement<br/>déclaré volé",
                        StolenStatusNotFound: "Actuellement non déclaré volé",
                        StolenStatusNotFoundFlyout: "Actuellement non<br/>déclaré volé",
                        UsHistory: "Historique des États-Unis",
                        USHistoryFound: "Dossiers trouvés aux États-Unis",
                        USHistoryFoundFlyout: "Dossiers<br/>trouvés aux États-Unis",
                        USHistoryNotFound: "Aucun dossier trouvé aux États-Unis",
                        USHistoryNotFoundFlyout: "Aucun dossier trouvé<br/>aux États-Unis",
                        ImportRecord: "Dossiers d’importation"
                    },
                    Email: "Courriel",
                    FooterGlossary: "Glossaire",
                    FooterHeadingQuestionText: "Des Questions",
                    FooterHeadingText: "Nous serons heureux de vous aider.",
                    ClickToFindMore: "Cliquez ici pour en savoir plus",
                    Language: "Langue",
                    Print: "Imprimer",
                    InformationDisclaimer: {
                        SAAQDisclaimerBody: "<p class='information-paragraph'><span>Veuillez Noter:</span> La Société de l'Assurance du Québec (SAAQ), a annoncé qu'elle mettra à jour ses systèmes au cours des prochaines semaines, ce qui empêchera toute mise à jour d'immatriculation des véhicules dans la province du Québec.</p><p class='information-paragraph'>Par conséquent, CARFAX Canada continuera à rapporter les dossiers d'immatriculation et le statut du véhicule au Québec jusqu'à la période de transition référencée sur le <a target='_blank' href='https://saaq.gouv.qc.ca/salle-presse/disponibilite-services'>site internet de la SAAQ</a>. Aucune autre donnée sur nos rapports d’historiques de véhicules n'est impactée.</p><p class='information-paragraph'>Pour votre référence, les informations d'immatriculation et le statut du véhicule continuent d'être disponibles sur le certificat d’immatriculation.</p>",
                        SeeRegistrationSection: "<p><span>Veuillez consulter la section Immatriculation pour des informations importantes sur les données d’immatriculation au Québec.</span></p>"
                    },
                    BackToTop: "Retour en haut",
                    FoxImage: "img-fox-fr.png",
                    FoxImage3x: "img-fox-fr@3x.png"
                },
                common: {
                    English: "English",
                    French: "Français",
                    EasternTimeZone: "EST"
                }
            }
        }
        ,
        324: (e,t,a)=>{
            "use strict";
            a.r(t),
            a.d(t, {
                Vhr: ()=>H
            });
            var n = a(171)
              , i = a(596);
            class r extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = new URLSearchParams(window.location.search)
                      , a = `/en/?id=${t.get("id")}`
                      , r = `/fr/?id=${t.get("id")}`;
                    this.innerHTML = `<div class="print-wrapper">\n\t\t\t<nav class="summary-nav">\n\t\t\t\t<a class="desktop-print copy-print" href="javascript:window.print()">${n.p[e].Print}</a>\n\t\t\t\t<a class="desktop-email copy-email" href="mailto:?body=${window.location.href}">${n.p[e].Email}</a>\n\t\t\t\t<a class="desktop-en" href="${a}">EN</a>\n\t\t\t\t<a class="desktop-fr" href="${r}">FR</a>\n\t\t\t</nav>\n\t\t\t<section class="menu-container default">\n\t\t\t\t<nav>\n\t\t\t\t\t<button id="openMenuOne" class="menu-button menu-open" aria-label="Menu" tabindex="0"><span class="icon-hamburger"></span></button>\n\t\t\t\t\t<button id="menuBack" class="menu-button menu-back" aria-label="Back" tabindex="0"><span class="icon-arrow-left"></span></button>\n\t\t\t\t\t<h3 class="copy-questions">${n.p[e].FooterHeadingQuestionText}</h3>\n\t\t\t\t\t<button id="menuClose" class="menu-button menu-close" aria-label="Close" tabindex="0"><span class="icon-x"></span></button>\n\t\t\t\t</nav>\n\t\t\t\t<section class="menu menu-one">\n\t\t\t\t\t<a class="menu-action copy-print" href="javascript:window.print()"><span class="menu-link">${n.p[e].Print}</span></a>\n\t\t\t\t\t<a class="menu-action copy-email" href="mailto:?body=${window.location.href}"><span class="menu-link">${n.p[e].Email}</span></a>\n\t\t\t\t\t<button id="openMenuTwo" class="menu-action menu-button menu-question">\n\t\t\t\t\t\t<span class="copy-questions menu-link">${n.p[e].FooterHeadingQuestionText}<span class="icon-sort"></span></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class="menu-action menu-language">\n\t\t\t\t\t\t<span class="copy-language">${n.p[e].Language}: </span><a class="language-en copy-english" href="${a}">${n.p.common.English}</a>|<a id="frenchLink" class="language-fr copy-french" href="${r}">${n.p.common.French}</a>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t<section class="menu menu-two">\n\t\t\t\t\t<h3 class="copy-footer-heading">${n.p[e].FooterHeadingText}</h3>\n\t\t\t\t\t<a class="menu-action" href="https://support.carfax.ca/${e}/support/home"><span class="menu-link copy-customer-support">${n.p[e].Shared.CustomerSupportPortal}</span></a>\n\t\t\t\t\t<a id="glossaryLink" class="menu-action" href="https://support.carfax.ca/${e}/support/solutions" target="_blank"><span class="menu-link copy-footer">FAQ &amp; ${n.p[e].FooterGlossary}</span></a>\n\t\t\t\t</section>\n\t\t\t</section>\n\t\t</div>`,
                    this.dispatchEvent(i.RenderedEvent),
                    null !== document.querySelector(i.toggleKeys.summaryMenu.MenuContainer) && document.querySelector(i.toggleKeys.summaryMenu.MenuContainer).addEventListener("click", (e=>{
                        const t = e.target;
                        t.classList.contains(i.toggleKeys.summaryMenu.MenuClass) && (t.id === i.toggleKeys.summaryMenu.OpenMenuOne && this.ToggleMenuOne(),
                        t.id === i.toggleKeys.summaryMenu.OpenMenuTwo && this.ToggleMenuTwo(),
                        t.id === i.toggleKeys.summaryMenu.MenuBack && this.ToggleMenuOne(),
                        t.id === i.toggleKeys.summaryMenu.MenuClose && this.ToggleMenuDefault())
                    }
                    )),
                    null !== document.querySelector(i.toggleKeys.summaryMenu.MenuContainer) && document.querySelector(i.toggleKeys.summaryMenu.MenuContainer).addEventListener("keydown", (e=>{
                        i.toggleKeys.summaryMenu.MenuOpen && ("Tab" === e.key && (e.shiftKey ? (i.toggleKeys.summaryMenu.MenuOneOpen && e.target.id === i.toggleKeys.summaryMenu.MenuClose && (document.getElementById(i.toggleKeys.summaryMenu.FrenchLang).focus(),
                        e.preventDefault()),
                        e.target.id === i.toggleKeys.summaryMenu.MenuBack && (document.getElementById(i.toggleKeys.summaryMenu.GlossaryLink).focus(),
                        e.preventDefault())) : (e.target.id === i.toggleKeys.summaryMenu.FrenchLang && (document.getElementById(i.toggleKeys.summaryMenu.MenuClose).focus(),
                        e.preventDefault()),
                        e.target.id === i.toggleKeys.summaryMenu.GlossaryLink && (document.getElementById(i.toggleKeys.summaryMenu.MenuBack).focus(),
                        e.preventDefault()))),
                        "Esc" !== e.key && "Escape" !== e.key || this.ToggleMenuDefault())
                    }
                    ), !0)
                }
                ToggleMenuOne() {
                    const e = document.querySelector(i.toggleKeys.summaryMenu.MenuContainer);
                    e.classList.remove(i.toggleKeys.summaryMenu.Default),
                    e.classList.add(i.toggleKeys.summaryMenu.OneActive),
                    e.classList.remove(i.toggleKeys.summaryMenu.TwoActive),
                    document.body.classList.add(i.toggleKeys.summaryMenu.BodyMenuOpen),
                    i.toggleKeys.summaryMenu.MenuOpen = !0,
                    i.toggleKeys.summaryMenu.MenuOneOpen = !0,
                    document.getElementById(i.toggleKeys.summaryMenu.MenuClose).focus()
                }
                ToggleMenuTwo() {
                    const e = document.querySelector(i.toggleKeys.summaryMenu.MenuContainer);
                    e.classList.remove(i.toggleKeys.summaryMenu.Default),
                    e.classList.remove(i.toggleKeys.summaryMenu.OneActive),
                    e.classList.add(i.toggleKeys.summaryMenu.TwoActive),
                    document.body.classList.add(i.toggleKeys.summaryMenu.BodyMenuOpen),
                    i.toggleKeys.summaryMenu.MenuOneOpen = !1,
                    document.getElementById(i.toggleKeys.summaryMenu.MenuBack).focus()
                }
                ToggleMenuDefault() {
                    const e = document.querySelector(i.toggleKeys.summaryMenu.MenuContainer);
                    e.classList.add(i.toggleKeys.summaryMenu.Default),
                    e.classList.remove(i.toggleKeys.summaryMenu.OneActive),
                    e.classList.remove(i.toggleKeys.summaryMenu.TwoActive),
                    document.body.classList.remove(i.toggleKeys.summaryMenu.BodyMenuOpen),
                    i.toggleKeys.summaryMenu.MenuOpen = !1,
                    i.toggleKeys.summaryMenu.MenuOneOpen = !1,
                    document.getElementById(i.toggleKeys.summaryMenu.OpenMenuOne).focus()
                }
            }
            class o extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    document.getElementById("vhr").classList.contains("sample");
                    const e = new URLSearchParams(window.location.search)
                      , t = null !== e.get("isMobileAppRequest") && "true" === e.get("isMobileAppRequest")
                      , a = this._data.DynamicUpgradeViewModel
                      , i = this._data.WebReportType
                      , r = a.ShowLienCheckUpgrade || a.ShowLienExpressUpgrade
                      , o = this._data.BCUpgradeViewModel
                      , s = 6 !== i && 5 !== i
                      , l = document.getElementsByTagName("HTML")[0].getAttribute("lang");
                    n.p[l],
                    this.innerHTML = `\n\t\t<section class="summary" id="vhr-summary">\n\t\t\t ${-1 === location.pathname.indexOf("sample") && !1 === t ? '<vhr-menu id="vhrMenu"></vhr-menu>' : ""}\n            <vhr-report-info id="vhrReportInfo"></vhr-report-info>\n\t\t\t<vhr-vehicle-detail id="vhrVehicleDetail"></vhr-vehicle-detail>\n            ${a.ShowLien && (!1 === t || t && !1 === r) ? '<vhr-lien-summary id="vhrLienSummary"></vhr-lien-summary>' : ""}\n            ${a.ShowUpgrade && (!1 === t || t && !1 === r) ? '<vhr-upgrade id="vhrUpgrade"></vhr-upgrade>' : ""}\n            <div>\n                ${null !== o && 6 !== o.BCUpgradeNoticeStatus ? '<vhr-bc-upgrade id="vhrBCUpgrade"></vhr-bc-upgrade>' : ""}\n                ${6 !== i && 5 !== i ? '<vhr-vehicle-history-tile id="vhrVehicleHistoryTile"></vhr-vehicle-history-tile>' : ""}\n            </div>\n            ${s ? '<vhr-disclaimer id="vhrDisclaimer"></vhr-disclaimer>' : ""}\n\t\t</section>`;
                    const c = document.getElementById("vhrMenu");
                    null !== c && (c.data = this._data);
                    const d = document.getElementById("vhrReportInfo");
                    null !== d && (d.data = this._data);
                    const u = document.getElementById("vhrVehicleDetail");
                    null !== u && (u.data = this._data);
                    const p = document.getElementById("vhrVehicleHistoryTile");
                    null !== p && (p.data = this._data);
                    const h = document.getElementById("vhrDisclaimer");
                    null !== h && (h.data = this._data);
                    const m = document.getElementById("vhrLienSummary");
                    null !== m && (m.data = this._data);
                    const g = document.getElementById("vhrUpgrade");
                    null !== g && (g.data = this._data);
                    const v = document.getElementById("vhrBCUpgrade");
                    null !== v && (v.data = this._data)
                }
            }
            class s extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.LienViewModel
                      , r = this._data.VehicleHistoryTilesViewModel.LienExpressProvince
                      , o = this._data.DynamicUpgradeViewModel
                      , s = this._data.WebReportType
                      , l = "fr" === t
                      , c = this._data.IsReportComplete
                      , d = `\n            <section id="lien-section" class="lien ${6 === s || 5 === s ? "lien-report" : ""} content">\n                <header class="section-header">\n                    <img class="icon" src="${e}/lien.svg" alt="" />\n                    <h2 id="lien">${function(e, a) {
                        let i = "";
                        return 6 === a || e.LienExpressesAdded || 10 === a ? i += `${n.p[t].Lien.LienExpressSectionHeading}` : i += `${n.p[t].Lien.SectionHeading}`,
                        i
                    }(o, s)}</h2>\n                    <vhr-tooltip>${n.p[t].Lien.Tooltip}</vhr-tooltip>\n                </header>\n                <div class="card">\n                    ${function(e, a, i, r) {
                        if (6 === i) {
                            if (!r)
                                return `<vhr-pending-section data-tooltiptext="${u()}" inline-tooltip>${n.p[t].Shared.PendingDataFrom} <strong>${n.p[t].Shared.Provinces[a]}...</strong> ${n.p[t].Shared.LearnMore}</vhr-pending-section>`
                        } else if (e.PendingLiens.length > 0)
                            return `<vhr-pending-section data-tooltiptext="${u()}" inline-tooltip>${function(e) {
                                let a = [];
                                e.PendingLiens.forEach((e=>{
                                    a.push(n.p[t].Shared.Provinces[e.Province])
                                }
                                )),
                                a.sort(((e,t)=>e.localeCompare(t, "en", {
                                    sentivity: "base"
                                })));
                                let i = `${n.p[t].Shared.PendingDataFrom}<strong>`;
                                if (1 === a.length)
                                    i += ` ${a[0]}`;
                                else if (2 === a.length)
                                    i += ` ${a[0]} ${n.p[t].Shared.And} ${a[1]}`;
                                else
                                    for (let e = 0, r = a.length; e < r; e++) {
                                        const r = a[e];
                                        a.indexOf(r) !== a.length - 1 ? i += ` ${r},` : i += `</strong> ${n.p[t].Shared.And} <strong>${r}`
                                    }
                                return `${i}</strong>...`
                            }(e)}</vhr-pending-section>`;
                        return ""
                    }(a, r, s, c)}\n                    ${function(e) {
                        let a = "";
                        return void 0 !== e.ActiveLiens && Object.keys(e.ActiveLiens).length > 0 && (a += `\n                <div class="card-content status dirty">\n                    ${function(e) {
                            let a = "";
                            if (0 !== Object.keys(e.ActiveLiens).length)
                                for (let[i] of Object.entries(e.ActiveLiens)) {
                                    const e = i;
                                    a += `\n                            <div class="lien-text-wrapper">\n                                <span class="icon-bad"></span>\n                                <div>\n                                    <span>${n.p[t].Lien.LienRecordsFound} <strong>${n.p[t].Shared.Provinces[e]}.</strong></span>\n                                    <a href="#lien-${e}" class="lien-link">${n.p[t].Lien.ViewLienDetails}</a>\n                                </div>\n                            </div>`
                                }
                            return a
                        }(e)}\n                </div>`),
                        a
                    }(a)}\n                    ${function(e) {
                        let a = "";
                        if (void 0 !== e.NoLiens && 0 !== Object.keys(e.NoLiens).length) {
                            a += '<div class="card-content status clean">';
                            for (let[i,r] of Object.entries(e.NoLiens))
                                a += `\n                            <div class="lien-text-wrapper">\n                                <span class="icon-good"></span>\n                                <div>\n                                    <span>${n.p[t].Lien.LienStatusNoLien} <strong>${n.p[t].Shared.Provinces[r.Province]}.</strong></span>\n                                </div>\n                            </div>`;
                            a += "</div>"
                        }
                        return a
                    }(a)}\n                    ${function(e) {
                        let a = "";
                        return e.HasNoCanadianRegistrations && (a += `\n                        <div class="card-content status pending">\n                            <div class="lien-text-wrapper">\n                                <span class="icon-bad icon-warning"></span>\n                                    <div>\n                                        <span>${n.p[t].Lien.No} <strong>${n.p[t].Lien.Canadian}</strong> ${n.p[t].Lien.NoRegistrationDetected}</span>\n                                    </div>\n                            </div>\n                        </div>`),
                        a
                    }(a)}\n                    <div class="lien-legal-text">\n                        <div class="check-text">\n                            <h3>${n.p[t].Lien.HowWeCheckTitle}</h3>\n                            ${function(e, a) {
                        let i = "";
                        return 6 === a || e.LienExpressesAdded || 10 === a ? (i += `<p>${n.p[t].Lien.HowWeCheckLE1}</p>`,
                        i += `<p>${n.p[t].Lien.HowWeCheckLE2}</p>`,
                        i += `<p>${n.p[t].Lien.HowWeCheckLE3}</p>`) : (i += `<p>${n.p[t].Lien.HowWeCheck1}</p>`,
                        i += `<p>${n.p[t].Lien.HowWeCheck2}</p>`,
                        i += `<p>${n.p[t].Lien.HowWeCheck3}</p>`),
                        i
                    }(o, s)}\n                        </div>\n                        <div class="guarantee">\n                            <h3>${n.p[t].Lien.GuaranteeTitle}</h3>\n                            <div>\n                                ${l ? `<img class="guarantee-icon" src="${e}/lien-guarantee-fr.svg" alt="" />` : `<img class="guarantee-icon" src="${e}/lien-guarantee.svg" alt="" />`}\n                            </div>\n                            <p>${n.p[t].Lien.Guarantee}</p>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        `;
                    function u() {
                        return `<strong>${n.p[t].Shared.PleaseNote}:</strong> ${n.p[t].Shared.PendingTooltipOne} <strong>${n.p[t].Lien.PendingTooltip}</strong> ${n.p[t].Shared.PendingTooltipTwo}`
                    }
                    this.innerHTML = d,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class l extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.AccidentDamagesViewModel.AccidentRollupTableGroups
                      , r = this._data.AccidentDamagesViewModel.OtherDamagesRollupTableGroups
                      , o = a.length
                      , s = r.length
                      , l = this._data.PendingSectionFlags
                      , c = null !== this._data.AccidentDamagesViewModel.AccidentRollupTableGroups && null !== this._data.AccidentDamagesViewModel.OtherDamagesRollupTableGroups ? o + s : 0
                      , d = this._data.DynamicUpgradeViewModel.BCUpgradeNoticeStatus
                      , u = this._data.DynamicUpgradeViewModel.BCUpgradePrice
                      , p = new URLSearchParams(window.location.search)
                      , h = null !== p.get("isMobileAppRequest") && "true" === p.get("isMobileAppRequest");
                    let m = "";
                    switch (d) {
                    case 4:
                        m += `\n                    <div>\n                        <vhr-bc-upgrade id="vhrBCUpgrade">\n                            <section class="bcupgrade-section">\n                                <div class="warning-notice">\n                                    <span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="consumer-notice">\n\t\t\t\t\t\t\t\t\t\t\t<strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailICBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailObtainICBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<a href="${n.p[t].Shared.SupportPortalAddIcbcLink}" target="_blank">${n.p[t].BCUpgradeMessage.RetailFAQ}</a>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailNextSteps}</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n                                </div>\n                            </section>\n                        </vhr-bc-upgrade>\n                    </div>`;
                        break;
                    case 2:
                        m += `\n                    <div>\n                        <vhr-bc-upgrade id="vhrBCUpgrade">\n                            <section class="bcupgrade-section">\n                                <div class="warning-notice">\n                                    <span class="icon-info icon-warning"></span>\n\t\t\t\t\t                    <p class="consumer-notice">\n\t\t\t\t\t\t                    <strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.RetailICBC}</span>\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.ContactSupportStart}</span>\n\t\t\t\t\t\t                    ${P(d)}\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.ContactSupportEnd}</span>\n\t\t\t\t\t                    </p>\n                                </div>\n                            </section>\n                        </vhr-bc-upgrade>\n                    </div>`;
                        break;
                    case 1:
                        m += `\n                    <div>\n                        <vhr-bc-upgrade id="vhrBCUpgrade">\n                            <section class="bcupgrade-section">\n                                <div class="warning-notice">\n                                    <span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="dealer-same-day">\n\t\t\t\t\t\t\t\t\t\t\t<strong>${n.p[t].Shared.PleaseNote}:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.VehicleRegisteredInBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<strong>${g = n.p[t].BCUpgradeMessage.DealerSameDay,
                        v = u,
                        g.replace(/&lt;!--AMOUNT--&gt;|<!--AMOUNT-->/g, v)}</strong>\n\t\t\t\t\t\t\t\t\t\t\t<button id="icbc-upgrade-button-text-buynow" class="icbc-upgrade"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-dialogid="icbc-upgrade"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-reportid="${function() {
                            const e = new URLSearchParams(window.location.search);
                            return encodeURIComponent(e.get("id"))
                        }(n.p[t].BCUpgradeMessage.DealerSameDay)}"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-onload="${3 === d || 1 === d}">\n\t\t\t\t\t\t\t\t\t\t\t\t ${n.p[t].Upgrade.BuyNow}\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</p> \n                                </div>\n                            </section>\n                        </vhr-bc-upgrade>\n                    </div>`;
                        break;
                    case 5:
                        m += `\n                    <div>\n                        <vhr-bc-upgrade id="vhrBCUpgrade">\n                            <section class="bcupgrade-section">\n                                <div class="warning-notice">\n                                    <span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="icbc-error">\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoTitle}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoStart}</span>\n\t\t\t\t\t\t\t\t\t\t\t ${P(d)}\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoEnd}</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n                                </div>\n                            </section>\n                        </vhr-bc-upgrade>\n                    </div>`
                    }
                    var g, v;
                    h && 1 === d && (m = `\n                    <div>\n                        <vhr-bc-upgrade id="vhrBCUpgrade">\n                            <section class="bcupgrade-section">\n                                <div class="warning-notice">\n                                    <span class="icon-info icon-warning"></span>\n\t\t\t\t\t                    <p class="consumer-notice">\n\t\t\t\t\t\t                    <strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.RetailICBC}</span>\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.ContactSupportStart}</span>\n\t\t\t\t\t\t                    ${P(d)}\n\t\t\t\t\t\t                    <span>${n.p[t].BCUpgradeMessage.ContactSupportEnd}</span>\n\t\t\t\t\t                    </p>\n                                </div>\n                            </section>\n                        </vhr-bc-upgrade>\n                    </div>`);
                    const C = `\n\t\t\t<section id="accident-damage-section" class="accident-damage content">\n\t\t\t\t<header class="section-header">\n\t\t\t\t\t<img class="icon" src="${function(t, a) {
                        return t > 0 ? `${e}/accident-damage-bad.svg` : 4 === a || 2 === a || 1 === a || 5 === a ? `${e}/accident-damage-icbc-warning.svg` : `${e}/accident-damage.svg`
                    }(c, d)}" alt="" />\n\t\t\t\t\t<h2 id="accidentDamageHeader">${n.p[t].Accident.SectionHeading}</h2>\n\t\t\t\t\t<vhr-tooltip class="heading-tooltip">${n.p[t].Accident.SectionHeadingTooltip}</vhr-tooltip>\n\t\t\t\t</header>\n                ${m}\n                ${function(a, r, o, s) {
                        return l.HasPendingEstimateAccidents || l.HasPendingInsuranceClaims || l.HasPendingPoliceAccidents || l.HasPendingOtherDamages ? `<vhr-pending-section data-tooltiptext="">${n.p[t].Shared.PendingCollectionData}</vhr-pending-section>` : a > 0 ? `${R(r)}\n                    ${o.length > 0 ? function(a) {
                            return `<h3 class="other-damage-title">${n.p[t].Accident.TableMainHeadingOtherDamage}</h3>\n                    ${function(t) {
                                return `<section class="content-mobile">\n                        <div>\n                            ${function(t) {
                                    let a = "";
                                    for (let n = 0, r = t.length; n < r; n++) {
                                        const r = t[n];
                                        a += `\n                                <div class="card">\n                                    <div class="card-inner">\n                                        <header>\n                                            <h3>${O(r)}</h3>\n                                            ${r.IsUsRecord ? `<img src="${e}/icon-flag-us-alert.svg" class="us-alert-flag" />` : '<span class="icon-bad"></span>'}\n                                        </header>\n                                        <div class="location">\n                                            <strong>${(0,
                                        i.TranslateLocationString)(r.LocationHeading)}</strong>\n                                        </div>\n\n                                        <div class="card-content">\n                                            <div class="mobile-table-row">\n                                                ${S(r)}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>`
                                    }
                                    return a
                                }(t)}\n                        </div>\n                    </section>`
                            }(a)}\n                    ${function(a) {
                                let r = `\n                    <section class="content-desktop card">\n                        <table>\n                            <colgroup>\n                                <col class="col-icon">\n                                <col class="col-date">\n                                <col class="col-details">\n                                <col class="col-amount">\n                                <col>\n                            </colgroup>\n                            <thead>\n                                <tr>\n                                    <td></td>\n                                    <th><h4 class="table-heading-record-date">${n.p[t].Accident.TableHeadingRecordDate}</h4></th>\n                                    <th class="print-details"><h4 class="table-heading-details">${n.p[t].Accident.TableHeadingDetails}</h4></th>\n                                    <th class="amount-heading"><h4 class="table-heading-damage-amount">${n.p[t].Accident.TableHeadingDamageAmount}</h4></th>\n                                </tr>\n                            </thead>\n                            ${function(t) {
                                    let a = "";
                                    for (let n = 0, r = t.length; n < r; n++) {
                                        const r = t[n];
                                        a += `\n                                <tbody>\n                                    <tr>\n                                        ${r.IsUsRecord ? `<td><img src="${e}/icon-flag-us-alert.svg" class="us-alert-flag" /></td>` : '<td><span class="icon-bad"></span></td>'}\n                                        <td><strong>${O(r)}</strong></td>\n                                        <td class="print-bar" colspan="2"><strong>${(0,
                                        i.TranslateLocationString)(r.LocationHeading)}</strong></td>\n                                    </tr>\n                                    ${w(r)}\n                                </tbody>`
                                    }
                                    return a
                                }(a)}\n                        </table>\n                    </section>`;
                                return r
                            }(a)}`
                        }(o) : ""}` : 4 === s || 2 === s || 1 === s || 5 === s ? "" : `\n                    <div class="card status clean">\n                        <span class="icon-good"></span>\n                        <div><p id="noAccident">${n.p[t].Accident.NoAccidentDamage}</p></div>\n                    </div>`
                    }(c, a, r, d)}\n            </section>`;
                    function R(a) {
                        return null === a || 0 === a.length ? r.length > 0 ? `\n                    <div class="warning-notice">\n                        <span class="icon-bad icon-warning"></span>\n                        <div><p id="noAccidentOtherDamage">${n.p[t].Accident.NoAccidentDamageHasOtherDamage}</p></div>\n                    </div>\n                    <br /><br />` : `\n                    <div class="card status clean">\n                        <span class="icon-good"></span>\n                        <div><p id="noAccidentDamage">${n.p[t].Accident.NoAccidentDamage}</p></div>\n                    </div>` : `${o = a,
                        `\n\t\t\t    <section class="content-mobile">\n\t\t\t\t    <div>\n                        ${function(t) {
                            let a = "";
                            for (let n = 0, r = t.length; n < r; n++) {
                                const r = t[n];
                                a += `\n                                <div class="card">\n                                    <div class="card-inner">\n                                        <header>\n                                            <h3>${O(r)}</h3>\n                                            ${r.IsUsRecord ? `<img src="${e}/icon-flag-us-alert.svg" class="us-alert-flag" />` : '<span class="icon-bad"></span>'}\n                                        </header>\n                                        <div class="location">\n                                            <strong>${(0,
                                i.TranslateLocationString)(r.LocationHeading)}</strong>\n                                        </div>\n                                        <div class="card-content">\n                                            <div class="mobile-table-row">\n                                                ${y(r.Incidents)}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>`
                            }
                            return a
                        }(o)}\n\t\t\t\t    </div>\n\t\t\t    </section>`}\n                                ${function(a) {
                            let r = `\n                    <section class="content-desktop card">\n                        <table>\n                                <colgroup>\n                                    <col class="col-icon">\n                                    <col class="col-date">\n                                    <col class="col-details">\n                                    <col class="col-amount">\n                                    <col>\n                                </colgroup>\n                                <thead>\n                                    <tr>\n                                        <td></td>\n                                        <th><h4 class="table-heading-incident-date">${n.p[t].Accident.TableHeadingIncidentDate}</h4></th>\n                                        <th class="print-details"><h4 class="table-heading-details">${n.p[t].Accident.TableHeadingDetails}</h4></th>\n                                        <th class="amount-heading-update"><h4 id="table-heading-damage-amount">${n.p[t].Accident.TableHeadingDamageAmount}</h4></th>\n                                    </tr>\n                                </thead>\n                                ${function(t) {
                                let a = "";
                                for (let n = 0, r = t.length; n < r; n++) {
                                    const r = t[n];
                                    a += `\n                                    <tbody>\n                                        <tr>\n                                            ${r.IsUsRecord ? `<td><img src="${e}/icon-flag-us-alert.svg" class="us-alert-flag" /></td>` : '<td><span class="icon-bad"></span></td>'}\n                                            <td><strong>${O(r)}</strong></td>\n                                            <td class="print-bar" colspan="2"><strong>${(0,
                                    i.TranslateLocationString)(r.LocationHeading)}</strong></td>\n                                        </tr>\n                                        ${N(r)}\n                                    </tbody>`
                                }
                                return a
                            }(a)}\n                        </table>\n                    </section>`;
                            return r
                        }(a)}`;
                        var o
                    }
                    function y(e) {
                        let t = "";
                        for (let a = 0, n = e.length; a < n; a++) {
                            const n = e[a];
                            t += `\n                                        ${f(n)}\n                                        ${b(n)}\n                                        ${A(n)}\n                                        ${E(n)}`
                        }
                        return t
                    }
                    function f(e) {
                        return "" !== e.LocationSubHeading && null !== e.LocationSubHeading ? `<div class="location multi-country-heading">\n                            <div><strong>${(0,
                        i.TranslateLocationString)(e.LocationSubHeading)}</strong></div>\n                        </div>` : ""
                    }
                    function b(e) {
                        return function(e) {
                            return null !== e.AccidentDetailTypeList && e.AccidentDetailTypeList.length > 0 || null !== e.ClaimType && 0 !== e.ClaimType || null !== e.ClaimDescriptionType && 0 !== e.ClaimDescriptionType || null !== e.RawDetailText && "" !== e.RawDetailText
                        }(e) ? `<div class="mobile-table-cell">\n                                                <div class="mobile-table-title"><strong>${H(e.TitleType)}</strong></div>\n                                                <div class="mobile-table-title-detail">\n                                                    <div class="multi-line-detail">\n                                                        ${L(e, !0)}\n                                                    </div>\n                                                </div>\n                                                ${U(e.RecordType)}\n                                            </div>` : ""
                    }
                    function A(e) {
                        return "" !== e.DisplayDate && null !== e.DisplayDate ? `<div class="mobile-table-cell">\n                            <div class="mobile-table-detail">${O(e)}</div>\n                        </div>` : ""
                    }
                    function E(e) {
                        return null !== e.RawAmount ? 82 === e.ReportDataSourceID && "MB" === e.Location.ProvinceCode && 0 === e.RawAmount ? `\n                        <div class="mobile-table-cell">\n                            <div class="mobile-table-detail">\n                                ${n.p[t].Accident.NotReported}\n                            </div>\n                            <vhr-tooltip class="section-tooltip">${n.p[t].Accident.NotReportedTooltip}</vhr-tooltip>\n                        </div>` : `\n                        <div class="mobile-table-cell">\n                            <div class="mobile-table-detail">${(0,
                        i.FormatCurrency)(t, e.RawAmount)}</div>\n                        </div>` : ""
                    }
                    function N(e) {
                        let a = "";
                        for (let n = 0, r = e.Incidents.length; n < r; n++) {
                            const r = e.Incidents[n];
                            null !== r.LocationSubHeading && "" !== r.LocationSubHeading && (a += `<tr class="accident-first-row">\n                                                <td colspan="2"></td>\n                                                <td colspan="2">\n                                                    <div><strong>${(0,
                            i.TranslateLocationString)(r.LocationSubHeading)}</strong></div>\n                                                </td>\n                                            </tr>`),
                            a += `<tr>\n                                            <td colspan="2"></td>\n                                            <td class="print-bar">\n                                                <div class="incident">\n                                                    <strong>${H(r.TitleType)}</strong>\n                                                    <div class="multi-line-detail">\n                                                        ${L(r, !1)}\n                                                    </div>\n                                                    ${U(r.RecordType)}\n                                                </div>                                        \n                                            </td>\n                                            ${V(t, r)}\n                                        </tr>`
                        }
                        return a
                    }
                    function S(e) {
                        let t = "";
                        for (let a = 0, n = e.OtherDamages.length; a < n; a++) {
                            const n = e.OtherDamages[a]
                              , i = M(n);
                            ("" === n.Title || null !== n.Details || n.Details.length > 0) && (t += `<div class="mobile-table-cell">\n                                                        <div class="mobile-table-title"><strong>${$(n)}</strong></div>\n                                                        <div class="mobile-table-title-detail">\n                                                            <div class="multi-line-detail">\n                                                                ${D(i)}\n                                                            </div>\n                                                        </div>\n                                                    </div>`),
                            t += T(n)
                        }
                        return t
                    }
                    function T(e) {
                        return null !== e.Amount ? `<div class="mobile-table-cell">\n                            <div class="mobile-table-detail">${(0,
                        i.FormatCurrency)(t, e.Amount)}</div>\n                        </div>` : ""
                    }
                    function w(e) {
                        let a = "";
                        for (let n = 0, r = e.OtherDamages.length; n < r; n++) {
                            const r = e.OtherDamages[n];
                            a += `\n                <tr>\n                    <td colspan="2"></td>\n                    <td class="print-bar">\n                        <div class="incident">\n                            <strong>${$(r)}</strong>\n                            <div class="multi-line-detail">\n                                ${D(M(r))}\n                            </div>\n                        </div>\n                    </td>\n                    <td class="amount">${(0,
                            i.FormatCurrency)(t, r.Amount)}</td>\n                </tr>`
                        }
                        return a
                    }
                    function D(e) {
                        let t = "";
                        for (let a = 0, n = e.length; a < n; a++)
                            t += `<p>${e[a]}</p>`;
                        return t
                    }
                    function L(e, a) {
                        let i = ""
                          , r = (1 === e.RecordType && !1 === a ? `${I(e)} | ${n.p[t].Accident.TableHeadingEstimateDate}: ${O(e)}` : I(e)).split("\n");
                        for (var o = 0, s = r.length; o < s; o++)
                            i += `<p>${r[o]}</p>`;
                        return 0 === r.length && (i += "<p></p>"),
                        i
                    }
                    function I(e) {
                        switch (e.RecordType) {
                        case 0:
                            return function(e) {
                                if (82 === e.ReportDataSourceID && null !== e.AccidentDetailTypeList && e.AccidentDetailTypeList.length > 0) {
                                    let a = "";
                                    for (let i = 0, r = e.AccidentDetailTypeList.length; i < r; i++)
                                        a += `${n.p[t].Accident.AccidentDetailTypes[e.AccidentDetailTypeList[i]]}`;
                                    return a
                                }
                                return e.RawDetailText
                            }(e);
                        case 1:
                            return function(e) {
                                return 82 == e.ReportDataSourceID ? 0 === e.ClaimType ? B(e.RawDetailText) ? "" : e.RawDetailText : B(e.RawDetailText) ? e.ClaimType : e.RawDetailText : (60 === e.ReportDataSourceID || 58 === e.ReportDataSourceID || 7 === e.ReportDataSourceID || 6 === e.ReportDataSourceID) && B(e.RawDetailText) ? "" : e.RawDetailText
                            }(e);
                        case 2:
                            return function(e) {
                                return 5 === e.ReportDataSourceID ? 122 === e.ClaimType ? n.p[t].Accident.ClaimType[121] : x(e, !0, !1) : 16 === e.ReportDataSourceID ? B(e.RawClaimDescriptionText) ? "" : x(e, !1, !0) : 18 === e.ReportDataSourceID || 82 === e.ReportDataSourceID ? B(e.RawClaimDescriptionText) && 0 != e.ClaimType ? n.p[t].Accident.ClaimType[e.ClaimType] : x(e, !0, !0) : e.RawClaimDescriptionText
                            }(e);
                        case 4:
                            return function(e) {
                                return 84 === e.ReportDataSourceID || 18 === e.ReportDataSourceID || 5 === e.ReportDataSourceID || 16 === e.ReportDataSourceID ? "" : e.RawDetailText
                            }(e);
                        default:
                            return ""
                        }
                    }
                    function O(e) {
                        return null === e.DateDay || null === e.DateMonth || null === e.DateYear || null !== e.DateYear && 1 === e.DateYear ? n.p[t].Shared.NotAvailableAbbreviation : "fr" === t ? `${e.DateDay} ${n.p[t].Date[e.DateMonth]} ${e.DateYear}` : `${e.DateYear} ${n.p[t].Date[e.DateMonth]} ${e.DateDay}`
                    }
                    function $(e) {
                        let a = "";
                        switch (e.DamageCategoryType) {
                        case "DamageEvent":
                        case "RegistrationEvent":
                        case "Rebuilt":
                        case "Salvage":
                            a = n.p[t].Shared[e.DamageCategoryType];
                            break;
                        case "DamageDetail":
                        case "GlassRecord":
                        case "FixAutoRepair":
                            a = n.p[t].Accident[e.DamageCategoryType];
                            break;
                        default:
                            a = e.Title
                        }
                        return null === e.Details || 0 === e.Details.length || -1 !== a.indexOf(":") ? a : `${a}:`
                    }
                    function M(e) {
                        switch (e.DamageDetailType) {
                        case "AccidentRepair":
                        case "AdjacentPanelsReplaced":
                        case "AirBagsMissingDefective":
                        case "FireDamage":
                        case "FloodDamage":
                        case "Irreparable":
                        case "MajorRepair":
                        case "StructuralDamage":
                        case "TitleBranded":
                        case "TitleBrandedAtSalvageAuction":
                        case "TotalLoss":
                        case "AirConditioningNeedsRepair":
                        case "ComputerNeedsRepair":
                        case "ElectricalSystemNeedsRepair":
                        case "EmissionsSystemNeedsRepair":
                        case "EngineNeedsRepair":
                        case "FuelSystemNeedsRepair":
                        case "HailDamage":
                        case "MajorAccessoryNeedsRepair":
                        case "PowerTrainNeedsRepair":
                        case "SuspensionNeedsRepair":
                        case "TransmissionNeedsRepair":
                        case "TwoOrMoreBodyPanelsReplaced":
                        case "WaterDamage":
                            return [n.p[t].Auction[e.DamageDetailType]];
                        case "Rebuilt":
                        case "LemonBuyback":
                            return [n.p[t].Shared[e.DamageDetailType]];
                        case "Glass26":
                            return [n.p[t].Accident[e.DamageDetailType]];
                        default:
                            return e.Details
                        }
                    }
                    function U(e) {
                        let a = "";
                        return 1 === e ? a = n.p[t].Accident.EstimateTooltip : 2 === e && (a = n.p[t].Accident.ClaimTooltip),
                        "" !== a ? `<vhr-tooltip class="section-tooltip">${a}</vhr-tooltip>` : ""
                    }
                    function H(e) {
                        const a = document.querySelector("vhr-base")._hasUsRecords;
                        switch (e) {
                        case 1:
                            return n.p[t].Accident.IncidentTitles.Estimate;
                        case 2:
                            return `${n.p[t].Accident.IncidentTitles.Estimate}:`;
                        case 3:
                            return n.p[t].Accident.IncidentTitles.ClaimReported;
                        case 4:
                            return `${n.p[t].Accident.IncidentTitles.Claim}:`;
                        case 5:
                            return a ? n.p[t].Accident.IncidentTitles.AccidentReported : n.p[t].Accident.IncidentTitles.PoliceReportedAccident;
                        case 6:
                            return a ? `${n.p[t].Accident.IncidentTitles.AccidentReported}:` : `${n.p[t].Accident.IncidentTitles.PoliceReportedAccident}:`;
                        case 7:
                            return n.p[t].Accident.IncidentTitles.DamageRepair;
                        case 8:
                            return `${n.p[t].Accident.IncidentTitles.DamageDetail}:`;
                        default:
                            return ""
                        }
                    }
                    function B(e) {
                        return !e || !e.trim()
                    }
                    function x(e, a, i) {
                        let r = 0 === e.ClaimDescriptionType ? e.RawClaimDescriptionText : n.p[t].Accident.ClaimType[e.ClaimDescriptionType]
                          , o = 0 === e.ClaimType ? e.RawClaimTypeText : n.p[t].Accident.ClaimType[e.ClaimType];
                        return a && i ? `${o} ${r}` : a && !i ? `${o}` : !a && i ? `${r}` : ""
                    }
                    function V(e, t) {
                        return 82 === t.ReportDataSourceID && "MB" === t.Location.ProvinceCode && 0 === t.RawAmount ? `\n                    <td class="not-reported-amount">\n                        <div class="not-reported-div">\n                            <p class="not-reported-text">${n.p[e].Accident.NotReported}</p>\n                            <vhr-tooltip class="section-tooltip">${n.p[e].Accident.NotReportedTooltip}</vhr-tooltip>\n                        </div>\n                    </td>` : `<td class="amount new-amount-padding">${(0,
                        i.FormatCurrency)(e, t.RawAmount)}</td>`
                    }
                    function P(e) {
                        return `<span class="contact-info">\n                        <a href="tel:${n.p[t].Shared.PhoneNumberSupport}">${n.p[t].Shared.PhoneNumberSupport}</a>\n                        <span class="contact-or-not-bold">${n.p[t].Shared.OrVisitOur}</span>\n                        <a href="${n.p[t].Shared.SupportPortalLink}" target="_blank">${n.p[t].Shared.CustomerSupportPortal}</a>${function(e) {
                            switch (e) {
                            case 4:
                            case 2:
                            case 1:
                            default:
                                return ",";
                            case 0:
                            case 3:
                                return "";
                            case 5:
                                return "."
                            }
                        }(e)}\n                    </span>`
                    }
                    this.innerHTML = C,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class c extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.ServiceHistoryViewModel.ServiceHistoryItems
                      , r = this._data.ServiceHistoryViewModel.ServiceHistoryYearGroups
                      , o = "fr" === t;
                    let s = `\n            <section id="service-history-section" class="service-history content">\n                <header class="section-header">\n                    <img class="icon" src="${e}/service-records.svg"))" alt="" />\n                    <h2>${n.p[t].ServiceHistory.SectionHeading}</h2>\n                    <vhr-tooltip>${n.p[t].ServiceHistory.TooltipBody}</vhr-tooltip>\n                </header>`;
                    function l(e) {
                        let a = "";
                        for (let s = 0, l = e.length; s < l; s++) {
                            const l = e[s]
                              , p = 0 === l.OdometerDisplay.length || !l.OdometerDisplay;
                            a += `\n                                <div class="mobile-table-row">\n                                    <div class="mobile-table-row-header">\n                                        ${d(l, !0)}\n                                        ${c(l.Location.IsUsRecord, !1)}\n                                    </div>\n                                    <div class="mobile-table-cell">\n                                        <p class="mobile-label">${n.p[t].ServiceHistory.TableHeadingOdometer}:</p>\n                                        ${u(p, l.OdometerDisplay, !0)}\n                                    </div>\n                                    <div class="mobile-table-cell">     \n                                        <p class="mobile-label">${n.p[t].ServiceHistory.TableHeadingDataSource}:</p>\n                                        <div>\n                                        ${r = l,
                            o = void 0,
                            (o = r.ServiceProviderWebsite) && o.trim() ? `<a href="${r.ServiceProviderWebsite}">${"Service Facility" === r.DataSource ? n.p[t].ServiceHistory.ServiceFacility : r.DataSource}</a>` : `<p>${"Service Facility" === r.DataSource ? n.p[t].ServiceHistory.ServiceFacility : r.DataSource}</p>`}\n                                        <p>${(0,
                            i.TranslateLocationString)(l.Location.LocationString)}</p>\n                                        </div>\n                                    </div>\n                                    <div class="mobile-table-cell">\n                                        <p class="mobile-label">${n.p[t].ServiceHistory.TableHeadingDetail}:</p>\n                                        ${h(l, !0)}\n                                    </div>\n                                </div>`
                        }
                        var r, o;
                        return a
                    }
                    function c(t, a) {
                        return t && !0 === a ? `<img src="${e}/icon-flag-us.svg" class="desktop-flag"/>` : t && !1 === a ? `<img src="${e}/icon-flag-us.svg" class="mobile-flag"/>` : ""
                    }
                    function d(e, a) {
                        return "9999" === e.DateYear || "" === e.DateDay || "" === e.DateMonth || "" === e.DateYear ? a ? `<h4>${n.p[t].Shared.NotAvailableAbbreviation}</h4>` : `${n.p[t].Shared.NotAvailableAbbreviation}` : a ? o ? `<h4>${e.DateDay} ${n.p[t].Date[e.DateMonth]} ${e.DateYear}</h4>` : `<h4>${e.DateYear} ${n.p[t].Date[e.DateMonth]} ${e.DateDay}</h4>` : o ? `${e.DateDay} ${n.p[t].Date[e.DateMonth]} ${e.DateYear}` : `${e.DateYear} ${n.p[t].Date[e.DateMonth]} ${e.DateDay}`
                    }
                    function u(e, a, r) {
                        return e ? "<p></p>" : r ? o ? `<p><span aria-label="${n.p[t].ServiceHistory.TableHeadingOdometer}">${(0,
                        i.TranslateOdometer)(t, a)}</span></p>` : `<p><span aria-label="${n.p[t].ServiceHistory.TableHeadingOdometer}">${a}</span></p>` : o ? `<p class="odometer-value"><span aria-label="${n.p[t].ServiceHistory.TableHeadingOdometer}">${(0,
                        i.TranslateOdometer)(t, a)}</span></p>` : `<p class="odometer-value"><span aria-label="${n.p[t].ServiceHistory.TableHeadingOdometer}">${a}</span></p>`
                    }
                    function p(e) {
                        let a = "";
                        null === e.ServiceProviderWebsite || 0 === e.ServiceProviderWebsite.length ? "Service Facility" === e.DataSource && o ? a += n.p[t].ServiceHistory.ServiceFacility : a += e.DataSource : a += `<a href="${e.ServiceProviderWebsite}">${e.DataSource}</a><br/>`;
                        const r = 0 !== e.ServiceAddress ? `${e.ServiceAddress}<br/>` : ""
                          , s = null === e.ServicePhone ? "" : e.ServicePhone;
                        return `${a}\n                                 ${r}\n                                 ${(0,
                        i.TranslateLocationString)(e.Location.LocationString)}<br/>\n                                 ${s}`
                    }
                    function h(e, a) {
                        let i = a ? "mobile-label" : "desktop-label"
                          , r = ""
                          , o = e.Sections ? e.Sections : [""];
                        if (e.TypeOfRecord)
                            if ("service record" === e.TypeOfRecord.toLowerCase())
                                r = '<div class="detail-list">',
                                o.forEach((function(e) {
                                    var a = e.split("\n");
                                    r += `<p class="${i}">${n.p[t].ServiceHistory.VehicleServiced}</p>\n                                   <ul class="service-history-detail-list">\n                                       ${m(a)}\n                                   </ul>`
                                }
                                )),
                                r += "</div>";
                            else {
                                var s = e.Detail.split("\n");
                                r = `<div class="detail-list"><p class="${i}">${"Certification Record" === e.TypeOfRecord ? n.p[t].ServiceHistory.CertificationRecord : e.TypeOfRecord}</p>`,
                                s && s.length > 0 && (r += `<ul class="service-history-detail-list">\n                                        ${m(s)}\n                                    </ul>`),
                                r += "</div>"
                            }
                        else
                            r = `<div class="detail-list"><p class="${i}">${n.p[t].ServiceHistory.VehicleServiced}</p></div>`;
                        return r
                    }
                    function m(e) {
                        let a = "";
                        return e.forEach((function(e) {
                            e && (a += o && "Vehicle Sold as Certified Previous Daily Rental" === e ? `<li class="service-history-detail-list-item">${n.p[t].Shared.Detail_SoldDailyRental}</li>` : `<li class="service-history-detail-list-item">${e}</li>`)
                        }
                        )),
                        a
                    }
                    function g(e) {
                        return e ? "" : "collapse"
                    }
                    function v(e) {
                        return "9999" === e ? n.p[t].ServiceHistory.UnspecifiedDate : e
                    }
                    s += function(a) {
                        let i = `\n                            <section id="servicehistory-cards" class="content-mobile sort-default mobile-card">\n                                <div class="card-sort">\n                                    <button class="content-sort service-history-sort" aria-label="Sort" tabindex="0" data-sorttable="servicehistory-table" data-sortcards="servicehistory-cards">\n                                        <h3>${n.p[t].Shared.MobileOrderButton}</h3>\n                                        <img class="image-chevron" src="${e}/icon-chevron.svg"/>\n                                        <img class="image-arrow" src="${e}/icon-arrow.svg" />\n                                    </button>\n                                    \x3c!-- Start Expand/Collapse All --\x3e\n                                    <vhr-expand data-cardsection="servicehistory-cards"></vhr-expand>\n                                    \x3c!-- End Expand/Collapse All --\x3e\n                                </div>\n                                <div class="card-container">\n                                ${function(e) {
                            let t = ""
                              , a = !0;
                            for (let[n,i] of Object.entries(e)) {
                                const e = n;
                                t += `\n                                    <div class="card ${g(a)}">\n                                        <div class="card-inner">\n                                            <header class="card-toggle" arial-label="Collapse">\n                                                <h3>${v(e)}</h3>\n                                                <button class="content-toggle" aria-label="Collapse" tabindex="0"><span class="icon-sort"></span></button>\n                                            </header>\n                                            <div class="card-content">\n                                                ${l(i)}\n                                            </div>\n                                        </div>\n                                    </div>`,
                                a = !1
                            }
                            return t
                        }(a)}\n                                </div>`;
                        return i
                    }(r),
                    s += "</section>",
                    s += function(a) {
                        let i = `\n                    <section class="content-desktop card">\n                        <table id="servicehistory-table" class="sort-default desktop-table">\n                            <colgroup>\n                                <col class="col-flag">\n                                <col class="col-date">\n                                <col class="col-odo">\n                                <col class="col-source">\n                                <col class="col-details">\n                            </colgroup>\n                            <thead>\n                                <tr>\n                                    <td></td>\n                                    <th>\n                                        <div class="table-sort-wrapper">\n                                            <button class="content-sort service-history-sort" aria-label="Sort" tabindex="0" data-sorttable="servicehistory-table" data-sortcards="servicehistory-cards">\n                                                <h4>${n.p[t].ServiceHistory.TableHeadingDate}</h4>\n                                                <img class="image-chevron" src="${e}/icon-chevron.svg" />\n                                                <img class="image-arrow" src="${e}/icon-arrow.svg" />\n                                            </button>\n                                        </div>\n                                    </th>\n                                    <th class="odometer-heading"><h4>${n.p[t].ServiceHistory.TableHeadingOdometer}</h4></th>\n                                    <th><h4>${n.p[t].ServiceHistory.TableHeadingDataSource}</h4></th>\n                                    <th><h4>${n.p[t].ServiceHistory.TableHeadingDetail}</h4></th>\n                                </tr>\n                            </thead>\n                            ${function(e) {
                            let t = "";
                            t += "<tbody>";
                            for (let a = 0, n = e.length; a < n; a++) {
                                const n = e[a]
                                  , i = 0 === n.OdometerDisplay.length || !n.OdometerDisplay
                                  , r = i ? 'class="odometer-not-available"' : "";
                                t += `<tr>\n                                            <td>${c(n.Location.IsUsRecord, !0)}</td>\n                                            <td>${d(n, !1)}</td>\n                                            <td ${r}>${u(i, n.OdometerDisplay, !1)}</td>\n                                            <td>${p(n)}</td>\n                                            <td>${h(n, !1)}</td>\n                                        </tr>`
                            }
                            return t += "</tbody>",
                            t
                        }(a)}\n                        </table>\n                    </section>\n                </section>`;
                        return i
                    }(a),
                    this.innerHTML = s,
                    this.dispatchEvent(i.RenderedEvent),
                    this.addEventListener("click", i.AddAndRemoveToggleClass),
                    this.addEventListener("click", i.sortData)
                }
            }
            class d extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = this._data.ShowLienExpressFooter ? "lien-express-footer" : ""
                      , t = this._data.VehicleDetailsViewModel.Vin ? `<p class="print-footer-vin">${this._data.VehicleDetailsViewModel.Vin}</p>` : ""
                      , a = this._data.DisplayFlags.ShowClaimsEstimates ? '<vhr-accident id="vhrAccident"></vhr-accident>' : ""
                      , n = this._data.DisplayFlags.ShowServiceHistory ? ' <vhr-service-history id="vhrServiceHistory"></vhr-service-history>' : "";
                    let i = "";
                    const r = this._data.DynamicUpgradeViewModel
                      , o = !1 === this._data.HideLiens && void 0 !== this._data.LienViewModel.ActiveLiens && Object.keys(this._data.LienViewModel.ActiveLiens).length > 0 ? '<vhr-lien-details id="vhrLienDetails"></vhr-lien-details>' : ""
                      , s = this._data.OtherRecordsViewModel.ListOfOtherRecords.length > 0 ? '<vhr-other id="vhrOther"></vhr-other>' : "";
                    (!1 === this._data.HideLiens && r.ShowLien || r.ShowSubscriptionLiens && r.LienExpressesAdded && !1 === this._data.HideLiens) && (i = '<vhr-lien id="vhrLien"></vhr-lien>'),
                    6 === this._data.WebReportType ? this.innerHTML = `\n\t\t\t\t<section class="vhr">\n\t\t\t\t\t<vhr-lien id="vhrLien"></vhr-lien>\n\t\t\t\t\t<footer id="report-footer" class="${e} report-footer content">\n\t\t\t\t\t\t<vhr-footer id="vhrFooter"></vhr-footer>\n\t\t\t\t\t\t<vhr-legal id="vhrLegal"></vhr-legal>\n\t\t\t\t\t</footer>\n\t\t\t\t\t ${o}\n\t\t\t\t\t<vhr-back-to-top id="vhrBackToTop"></vhr-back-to-top>\n\t\t\t\t</section>` : this.innerHTML = `\n\t\t\t\t<vhr-report-type id="vhrReportType"></vhr-report-type>\n\t\t\t\t<section class="vhr">\n\t\t\t\t\t ${i}\n\t\t\t\t\t ${a}\n                    <vhr-registration id="vhrRegistration"></vhr-registration>\n\t\t\t\t\t ${n}\n\t\t\t\t\t<vhr-recall id="vhrRecall"></vhr-recall>\n\t\t\t\t\t<vhr-stolen id="vhrStolen"></vhr-stolen>\n\t\t\t\t\t<vhr-detailed-history id="vhrDetailedHistory"></vhr-detailed-history>\n\t\t\t\t\t ${s}\n\t\t\t\t\t<footer id="report-footer" class="${e} report-footer content">\n\t\t\t\t\t\t<vhr-footer id="vhrFooter"></vhr-footer>\n\t\t\t\t\t\t<vhr-legal id="vhrLegal"></vhr-legal>\n\t\t\t\t\t</footer>\n\t\t\t\t\t ${o}\n\t\t\t\t\t<vhr-back-to-top id="vhrBackToTop"></vhr-back-to-top>\n\t\t\t\t</section>\n\t\t\t\t ${t}`;
                    const l = document.getElementById("vhrLien");
                    null !== l && (l.data = this._data);
                    const c = document.getElementById("vhrAccident");
                    null !== c && (c.data = this._data);
                    const d = document.getElementById("vhrRegistration");
                    null !== d && (d.data = this._data);
                    const u = document.getElementById("vhrServiceHistory");
                    null !== u && (u.data = this._data);
                    const p = document.getElementById("vhrRecall");
                    null !== p && (p.data = this._data);
                    const h = document.getElementById("vhrStolen");
                    null !== h && (h.data = this._data);
                    const m = document.getElementById("vhrDetailedHistory");
                    null !== m && (m.data = this._data);
                    const g = document.getElementById("vhrOther");
                    null !== g && (g.data = this._data);
                    const v = document.getElementById("vhrFooter");
                    null !== v && (v.data = this._data);
                    const C = document.getElementById("vhrLegal");
                    null !== C && (C.data = this._data);
                    const R = document.getElementById("vhrLienDetails");
                    null !== R && (R.data = this._data);
                    const y = document.getElementById("vhrReportType");
                    null !== y && (y.data = this._data)
                }
                UpdateCopy() {}
            }
            class u extends HTMLElement {
                constructor() {
                    super(),
                    this._tooltipKeys = {
                        tooltipFocusWrapper: "tooltip-focus-wrapper",
                        iconInfo: "icon-info",
                        phoneOnly: "only screen and (max-width: 577px)",
                        tabletUp: "only screen and (min-width: 577px)",
                        tooltipInfo: "tooltip-info",
                        sectionHeader: "section-header",
                        tooltip: "tooltip",
                        tooltipContent: "tooltip-content",
                        tooltipClose: "tooltip-close",
                        tooltipOpen: "tooltip-open",
                        tooltipShowBottom: "show-bottom",
                        tooltipShowTop: "show-top",
                        tooltipWrapper: "tooltip-wrapper"
                    },
                    this._viewportEdges = {
                        top: 230
                    },
                    this.RenderElement()
                }
                RenderElement() {
                    const e = null !== this.getAttribute("inline")
                      , t = this.innerHTML;
                    this.innerHTML = `\n            <div class="tooltip-focus-wrapper">\n                <button class="tooltip-info">\n                    ${e ? '<span class="icon-info"></span>' : '<span class="icon-info" title="Section Description"></span>'}\n                    <div class="tooltip-content">\n                        ${t}\n                    </div>\n                </button>\n                <div class="tooltip-wrapper">\n                    <p role="tooltip" class="tooltip">\n                        <button class="tooltip-close" tabindex="0" aria-label="Close"><span class="icon-x"></span></button>\n                        ${t}\n                    </p>\n                </div>\n            </div>`;
                    const a = this.querySelector(`.${this._tooltipKeys.tooltipInfo}`);
                    null !== a && (a.addEventListener("mouseout", (e=>{
                        window.matchMedia(this._tooltipKeys.tabletUp).matches && (null === e.relatedTarget || e.relatedTarget.classList.contains(this._tooltipKeys.iconInfo) || e.relatedTarget.classList.contains(this._tooltipKeys.tooltipInfo) || e.relatedTarget.classList.contains(this._tooltipKeys.tooltipContent) || this.HideTooltip())
                    }
                    )),
                    a.addEventListener("mouseenter", (()=>{
                        window.matchMedia(this._tooltipKeys.tabletUp).matches && this.ShowTooltip()
                    }
                    )),
                    a.addEventListener("blur", (()=>{
                        window.matchMedia(this._tooltipKeys.tabletUp).matches && this.HideTooltip()
                    }
                    )),
                    this.addEventListener("click", (e=>{
                        window.matchMedia(this._tooltipKeys.phoneOnly).matches && (e.target.classList.contains(this._tooltipKeys.tooltipInfo) && (this.ShowTooltip(),
                        this.querySelector(`.${this._tooltipKeys.tooltipClose}`).focus()),
                        e.target.classList.contains(this._tooltipKeys.tooltipClose) && (this.HideTooltip(),
                        this.querySelector(`.${this._tooltipKeys.tooltipInfo}`).focus())),
                        window.matchMedia(this._tooltipKeys.tabletUp).matches && document.body.classList.contains(i.toggleKeys.summaryMenu.BodyMenuOpen) && !target.classList.contains(this._tooltipKeys.tooltipClose) && (this.HideTooltip(),
                        this.querySelector(`.${this._tooltipKeys.tooltipInfo}`).focus())
                    }
                    )),
                    this.addEventListener("focusin", (e=>{
                        window.matchMedia(this._tooltipKeys.tabletUp).matches && e.target.classList.contains(this._tooltipKeys.tooltipInfo) && this.ShowTooltip()
                    }
                    )))
                }
                ShowTooltip() {
                    const e = this.querySelector(`.${this._tooltipKeys.tooltipInfo}`);
                    null !== e && (this.FlipTooltip() ? e.classList.add(this._tooltipKeys.tooltipShowBottom) : e.classList.add(this._tooltipKeys.tooltipShowTop)),
                    window.matchMedia(this._tooltipKeys.phoneOnly).matches && document.body.classList.add(i.toggleKeys.summaryMenu.BodyMenuOpen),
                    this.classList.add(this._tooltipKeys.tooltipOpen)
                }
                HideTooltip() {
                    const e = document.querySelector(`.${this._tooltipKeys.tooltipInfo}.${this._tooltipKeys.tooltipShowBottom}`)
                      , t = document.querySelector(`.${this._tooltipKeys.tooltipInfo}.${this._tooltipKeys.tooltipShowTop}`);
                    null !== e && (e.classList.remove(this._tooltipKeys.tooltipShowBottom),
                    window.matchMedia(this._tooltipKeys.phoneOnly).matches && document.body.classList.remove(i.toggleKeys.summaryMenu.BodyMenuOpen)),
                    null !== t && (t.classList.remove(this._tooltipKeys.tooltipShowTop),
                    window.matchMedia(this._tooltipKeys.phoneOnly).matches && document.body.classList.remove(i.toggleKeys.summaryMenu.BodyMenuOpen)),
                    this.classList.remove(this._tooltipKeys.tooltipOpen)
                }
                FlipTooltip() {
                    return this.getBoundingClientRect().top <= this._viewportEdges.top
                }
            }
            class p extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {},
                    this.RenderElement()
                }
                RenderElement() {
                    const e = this.innerHTML
                      , t = this.dataset.tooltiptext
                      , a = null !== this.getAttribute("inline-tooltip")
                      , n = `\n            <div class="card-content status pending">\n                <span class="icon-pending"></span>\n                <div>\n                    <p class="pending-text">${e}</p>\n                    ${function(e) {
                        return (t = e) && t.trim() && "" !== e ? `<vhr-tooltip ${a ? "inline" : ""}>${e}</vhr-tooltip>` : "";
                        var t
                    }(t)}\n                </div>\n            </div>`;
                    this.innerHTML = n
                }
            }
            class h extends HTMLElement {
                constructor() {
                    super(),
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = `<button class="expand-collapse-all expand" data-role="expand" data-cardsection="${this.dataset.cardsection}">\n\t\t\t\t<h3 class="button-h3-expand">${n.p[e].Shared.ExpandAll}</h3>\n\t\t\t\t<h3 class="button-h3-collapse">${n.p[e].Shared.CollapseAll}</h3>\n\t\t\t</button>`;
                    this.innerHTML = t,
                    this.querySelector(".expand-collapse-all").addEventListener("click", (e=>{
                        !function(e) {
                            const t = document.getElementById(e)
                              , a = t.querySelector(".card-container")
                              , n = Array.prototype.slice.apply(a.querySelectorAll(".card"))
                              , i = t.querySelector(".expand-collapse-all");
                            if (i.classList.contains("expand")) {
                                for (let e = 0; e < n.length; e++) {
                                    const t = n[e];
                                    t.classList.contains("collapse") && t.classList.remove("collapse")
                                }
                                i.classList.toggle("expand")
                            } else {
                                for (let e = 0; e < n.length; e++) {
                                    const t = n[e];
                                    t.classList.contains("collapse") || t.classList.add("collapse")
                                }
                                i.classList.toggle("expand")
                            }
                        }(e.currentTarget.dataset.cardsection)
                    }
                    ))
                }
            }
            class m extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = new URLSearchParams(window.location.search)
                      , a = null !== t.get("isMobileAppRequest") && "true" === t.get("isMobileAppRequest")
                      , r = this._data.DynamicUpgradeViewModel
                      , o = r.ShowLienCheckUpgrade || r.ShowLienExpressUpgrade
                      , s = !a || !a && !0 === o
                      , l = this._data.VehicleDetailsViewModel
                      , c = this._data.PendingSectionFlags.HasPendingVinDecode
                      , d = r.ShowLien || r.ShowUpgrade
                      , u = this._data.DisplayFlags
                      , p = this._data.WebReportType;
                    let h = "";
                    h = a ? d && !s ? "lien-padding" : "" : d ? "lien-padding" : "";
                    const m = `\n            <section id="vehicle-details-section" class="vehicle-details ${h} disclaimer-details">\n                <div class="details-wrapper">\n                    <h1>${function(t, a) {
                        return t.VinDecodeSuccess ? `<span>${t.VehicleYear} ${null !== t.VehicleMake ? t.VehicleMake : ""} ${null !== t.VehicleModel ? t.VehicleModel : ""} ${null !== t.VehicleTrim ? t.VehicleTrim : ""}</span>` : a ? n.p[e].Shared.Pending : `<span class="vin">${t.Vin}</span>`
                    }(l, c)}</h1>\n                    ${function(e, t) {
                        let a = "";
                        return C(e.BodyStyle) && C(e.Cylinders) && C(e.FuelType) || (a += `\n                <p class="detail-text">\n                    ${function(e, t) {
                            if (null !== e.BodyStyle) {
                                const a = null !== e.Cylinders || null !== e.FuelType ? "detail-text-bar" : "";
                                if (R(t)) {
                                    if ("" !== e.BodyStyle) {
                                        const i = /\s/g
                                          , r = "BodyStyle" + e.BodyStyle.toUpperCase().replace(i, "").replace("(", "").replace(")", "");
                                        return void 0 !== n.p[t].VehicleDetails[r] ? `<span class="body-text ${a}">${n.p[t].VehicleDetails[r].charAt(0).toUpperCase() + n.p[t].VehicleDetails[r].slice(1).toLowerCase()}</span>` : `<span class="body-text ${a}">${e.BodyStyle.charAt(0).toUpperCase() + e.BodyStyle.slice(1).toLowerCase()}</span>`
                                    }
                                    return `<span class="body-text ${a}">${e.BodyStyle.charAt(0).toUpperCase() + e.BodyStyle.slice(1).toLowerCase()}</span>`
                                }
                                return `<span class="body-text ${a}">${e.BodyStyle.charAt(0).toUpperCase() + e.BodyStyle.slice(1).toLowerCase()}</span>`
                            }
                            return ""
                        }(e, t)}${v(e)}${function(e, t) {
                            if (null !== e.FuelType) {
                                if (R(t)) {
                                    const a = /\s/g
                                      , i = "FuelType" + e.FuelType.toUpperCase().replace(a, "").replace("(", "").replace(")", "");
                                    return `<span>${n.p[t].VehicleDetails[i]}</span>`
                                }
                                return `<span>${e.FuelType}</span>`
                            }
                            return ""
                        }(e, t)}\n                </p>`),
                        a
                    }(l, e)}\n                    ${function(e) {
                        return null !== e.Vin && !0 === e.VinDecodeSuccess ? `<p class="vin-text">${e.Vin}</p>` : ""
                    }(l)}\n                    ${function(t) {
                        return null !== t.VehicleYear && -1 !== t.VehicleYear ? `\n                    <div class="coa-text">\n                        <p class="coa-title">${n.p[e].VehicleDetails.CountryOfAssembly}: </p>\n                        <div class="coa-value">\n                            ${function(t) {
                            return C(t.CountryOfAssembly) ? `<p>${n.p[e].Shared.NotAvailableAbbreviation}</p>` : `<p>${t.CountryOfAssembly}</p>`
                        }(t)}\n                        </div>\n                    </div>` : ""
                    }(l)}\n                    ${function(e, t, a) {
                        return 6 !== t ? `\n                    <div class="odo-text">\n                        <p class="odo-title">${n.p[a].VehicleDetails.LastReportedOdometer}: </p>\n                        <div class="odo-value">\n                            ${function(e, t) {
                            return null !== e.LastReportedOdometer ? `<p>${e.LastReportedOdometer && R(t) ? (0,
                            i.TranslateOdometer)(t, e.LastReportedOdometer) : e.LastReportedOdometer}</p>` : `<p>${n.p[t].Shared.NotAvailableAbbreviation}</p>`
                        }(e, a)}\n                            <vhr-tooltip>${n.p[a].VehicleDetails.LastReportedOdometerTooltip}</vhr-tooltip>\n                        </div>\n                    </div>` : ""
                    }(l, p, e)}\n                </div>\n                ${function(e) {
                        return e.ShowHighlights ? '<vhr-vehicle-highlight id="vhrVehicleHighlight"></vhr-vehicle-highlight>' : ""
                    }(u)}\n            </section>`;
                    this.innerHTML = m;
                    const g = document.getElementById("vhrVehicleHighlight");
                    function v(t) {
                        const a = null !== t.FuelType ? "detail-text-bar" : "";
                        return null !== t.Cylinders ? "U" === t.Cylinders ? `<span class="${a}">${n.p[e].VehicleDetails.Unknown}</span>` : "R" === t.Cylinders ? `<span class="${a}">${n.p[e].VehicleDetails.Rotary}</span>` : `<span class="${a}">${t.Cylinders} ${n.p[e].VehicleDetails.Cylinders}</span>` : ""
                    }
                    function C(e) {
                        return null === e || null !== e.match(/^ *$/)
                    }
                    function R(e) {
                        return "fr" === e
                    }
                    null !== g && (g.data = this._data)
                }
            }
            class g extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.HighlightsViewModel
                      , r = this._data.DynamicUpgradeViewModel
                      , o = `\n            <section class="vhr-highlights-section ${r.ShowLien || r.ShowUpgrade ? "lien-width" : ""}">\n                <span>\n                    ${function(a) {
                        let i = "";
                        return a.OneOwner && (i += `<img id="one-owner-badge" class="cfc-badge" src="${e}/Badges/${n.p[t].Summary.Badge.OneOwnerBadgeImage}" alt="One Owner" /> `),
                        a.LowKilometer && (i += `<img id="low-kilometer-badge" class="cfc-badge" src="${e}/Badges/${n.p[t].Summary.Badge.LowKilometerBadgeImage}" alt="Low Kilometers" /> `),
                        a.TopCondition && (i += `<img id="top-condition-badge" class="cfc-badge" src="${e}/Badges/${n.p[t].Summary.Badge.TopConditionBadgeImage}" alt="Top Condition" /> `),
                        a.AccidentFree && (i += `<img id="accident-free-badge" class="cfc-badge" src="${e}/Badges/${n.p[t].Summary.Badge.AccidentFreeBadgeImage}" alt="Accident Free" /> `),
                        a.FCA && (i += `<img id="fca-badge" class="fca-badge" src="${e}/VehicleUse/${n.p[t].Summary.Badge.FCACertifiedBadgeImage}" alt="Fiat Chrysler Automobiles" /> `),
                        a.KiaCPO && (i += `<img id="kia-cpo-badge" class="kia-badge" src="${e}/VehicleUse/${n.p[t].Summary.Badge.KiaCPOBadgeImage}" alt="Kia Certified Pre-Owned" /> `),
                        i
                    }(a)}\n                </span>\n            </section>`;
                    this.innerHTML = o,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class v extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = "fr" === t
                      , r = this._data.RecallsViewModel
                      , o = this._data.PendingSectionFlags
                      , s = this._data.VehicleDetailsViewModel.VehicleMake
                      , l = o.HasPendingRecalls ? `<vhr-pending-section data-tooltiptext="">${n.p[t].Shared.PendingCollectionData}</vhr-pending-section>` : function(e) {
                        if (e.Recalls && e.Recalls.length > 0) {
                            let i = "<div>";
                            return e.Recalls.forEach((function(r) {
                                i += function(e, i, r, o) {
                                    const s = n.p[t].Recall.RecallDate + " " + function(e, a) {
                                        return a ? `${e.RecallDateDay} ${n.p[t].Date[e.RecallDateMonth]} ${e.RecallDateYear}` : `${e.RecallDateYear} ${n.p[t].Date[e.RecallDateMonth]} ${e.RecallDateDay}`
                                    }(e, a);
                                    return `<div class="card active-recall">\n                            <div class="card-inner">\n                                <header>\n                                    <div class="card-header">\n                                        <div class="card-title">\n                                            <span class="recall-header">${n.p[t].Recall.RecallNumber}</span>\n                                            <span class="recall-title-description">\n                                                ${e.ViewRecallTitle}\n                                                </span>\n                                        </div>\n                                        <span class="date-text header-date">${s}</span>\n                                    </div>\n                                    <button class="content-toggle" aria-label="Collapse" tabindex="0"><span class="icon-sort"></span></button>\n                                </header>\n                                <div class="card-content">\n                                    ${function(e) {
                                        let a = "";
                                        return e.RecallDescription && !/^\s*$/.test(e.RecallDescription) && (a += `<p class="card-simple-p">\n                                <strong>${n.p[t].Recall.RecallDescription}</strong>\n                                <br />\n                                ${e.RecallDescription}\n                            </p>`),
                                        e.RemedyDescription && !/^\s*$/.test(e.RemedyDescription) && (a += `<p class="card-simple-p">\n                                <strong>${n.p[t].Recall.RecallRemedy}</strong>\n                                <br />\n                                ${e.RemedyDescription}\n                            </p>`),
                                        a
                                    }(e)}\n                                    <p class="card-simple-p">${c(i, r, o)}</p>\n                                </div>\n                            </div>\n                        </div>`
                                }(r, e, e.RecallMakeTypes, s)
                            }
                            )),
                            i += "</div>"
                        }
                        return e.UnableToCheckRecalls ? `<div class="card status warning">\n                            <span class="icon-warning-triangle"></span>\n                            <div>\n                                <p>${c(e, e.RecallMakeTypes, s)}</p>\n                            </div>\n                        </div>` : `<div class="card status clean">\n                            <span class="icon-good"></span>\n                            <span class="icon-info"></span>\n                            <div>\n                                <p>${c(e, e.RecallMakeTypes, s)}</p>\n                            </div>\n                        </div>`
                    }(r);
                    function c(e, a, i) {
                        return 41 === e.RecallMakeTypes || 42 === e.RecallMakeTypes ? n.p[t].Recall.RecallTypes[a] : e.Recalls.length > 0 ? `${n.p[t].Recall.MoreInformation} ${i}${n.p[t].Recall.RecallTypes[a]}` : e.UnableToCheckRecalls ? `${n.p[t].Recall.UnableToCheckRecalls} ${i}${n.p[t].Recall.UnableToCheckRecalls_Visit} ${i} ${n.p[t].Recall.RecallsVehicle}${n.p[t].Recall.RecallTypes[a]}` : 0 === a ? `${n.p[t].Recall.NoRecalls} ${i}.` : `${n.p[t].Recall.NoRecalls} ${i}${n.p[t].Recall.RecallTypes[a]}`
                    }
                    this.innerHTML = `\n            <section id="recalls-section" class="recalls content">\n                <header class="section-header">\n                    ${function(t) {
                        return t.Recalls && t.Recalls.length > 0 ? `<img class="icon" src="${e}/recalls-bad.svg" alt = "" />` : !1 === t.UnableToCheckRecalls ? `<img class="icon" src="${e}/recalls.svg" alt="" />` : `<img class="icon" src="${e}/recalls-warning.svg" alt="" />`
                    }(r)}\n                    <h2 id="recall">${n.p[t].Recall.SectionHeading}</h2>\n                    <vhr-tooltip>${n.p[t].Recall.TooltipBody}</vhr-tooltip>\n                </header>\n                ${l}\n            </section>`,
                    this.dispatchEvent(i.RenderedEvent),
                    this.addEventListener("click", i.AddAndRemoveToggleClass)
                }
            }
            class C extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.RegistrationViewModel
                      , r = this._data.PendingSectionFlags.HasPendingRegistrations || a.PendingRegistrations.length > 0
                      , o = `<section class="registrations content" id="registration-section">\n                                    <header class="section-header">\n                                        ${function(t) {
                        return !t.RegistrationViewModel.HasBadCanadianRegistrations && !t.RegistrationViewModel.HasBadUSRegistrations || t.PendingSectionFlags.HasPendingRegistrations ? `<img class="icon" src="${e}/registration.svg" alt="" />` : `<img class="icon" src="${e}/registration-bad.svg" alt="" />`
                    }(this._data)}\n                                        <h2>${n.p[t].Registration.SectionHeading}</h2>\n                                        <vhr-tooltip>${n.p[t].Registration.TooltipBody}</vhr-tooltip>\n                                    </header>\n                                    ${r ? `<vhr-pending-section data-tooltiptext="<strong>${n.p[t].Shared.PleaseNote}:</strong> ${n.p[t].Shared.PendingTooltipOne} <strong>${n.p[t].Registration.PendingTooltip}</strong> ${n.p[t].Shared.PendingTooltipTwo}" inline-tooltip>${function(e) {
                        let a = [];
                        e.forEach((e=>{
                            a.push(n.p[t].Shared.Provinces[e.Jurisdiction])
                        }
                        )),
                        a.sort(((e,t)=>e.localeCompare(t, "en", {
                            sentivity: "base"
                        })));
                        let i = `${n.p[t].Shared.PendingDataFrom}<strong>`;
                        return 1 === a.length ? i += ` ${a[0]}` : 2 === a.length ? i += ` ${a[0]} ${n.p[t].Shared.And} ${a[1]}` : a.forEach((function(e) {
                            a.indexOf(e) !== a.length - 1 ? i += ` ${e},` : i += `</strong> ${n.p[t].Shared.And} <strong>${e}`
                        }
                        )),
                        `${i}</strong>...`
                    }(a.PendingRegistrations)}</vhr-pending-section>` : ""}\n                                    <div class="card-box">\n                                        ${function(e) {
                        const a = e.NonPendingCanadianRegistrations;
                        return null !== a && 0 !== a.length ? `<div class="card status ${e.HasBadCanadianRegistrations ? "dirty" : "clean"}">\n                            <span class="${e.HasBadCanadianRegistrations ? "icon-bad" : "icon-good"}"></span>\n                            <div class="card-content">\n                                ${i = a,
                        1 === i.length ? function(e) {
                            let a = `<p>${n.p[t].Registration.RegisteredInProvince} ${c(n.p[t].Shared.Provinces[e.Jurisdiction])} ${n.p[t].Registration.InCanada}`;
                            return l(e) ? a += `<strong><span class='dirty'> ${n.p[t].Registration.BrandingValue[e.BrandingValue]}</span></strong>${n.p[t].Registration.Branding}` : a += `<strong> ${n.p[t].Registration.BrandingValue[e.BrandingValue]}</strong>${n.p[t].Registration.Branding}`,
                            a += "</p>",
                            !1 === e.BrandingValue.toLowerCase().includes("normal") && !1 === e.BrandingValue.includes("0") && !1 === e.BrandingValue.includes("5") && (a += ` <br/>\n                            <p class="detail">\n                                <strong>${n.p.en.Registration.Details}</strong>\n                            </p>\n                            <p class="detail">\n                                ${n.p[t].Registration.BrandingInformation[e.BrandingValue]}\n                            </p>`),
                            a
                        }(i[0]) : function(e) {
                            let a = `<p>${n.p[t].Registration.RegisteredInFollowingCA}</p>\n                                <ul>\n                                    ${function(e) {
                                let a = "";
                                return e.forEach((function(e) {
                                    a += "<li>\n                                    <p>",
                                    a += `${n.p[t].Registration.ProvinceOf} ${c(n.p[t].Shared.Provinces[e.Jurisdiction])} ${n.p[t].Registration.With} `,
                                    l(e) ? a += `<strong><span class='dirty'>${n.p[t].Registration.BrandingValue[e.BrandingValue]}</span></strong>${n.p[t].Registration.Branding} ` : a += `<strong>${n.p[t].Registration.BrandingValue[e.BrandingValue]}</strong>${n.p[t].Registration.Branding}`,
                                    a += "</p>\n                            </li>"
                                }
                                )),
                                a
                            }(e)}\n                                </ul>`;
                            return a
                        }(i)}\n                                <p class="checked-for">\n                                    <strong>${n.p[t].Registration.WeCheckedFor}</strong> ${n.p[t].Registration.BrandingCheckCanada}\n                                </p>\n                            </div>\n                        </div>` : "";
                        var i
                    }(a)}\n                                        ${function(e) {
                        if (null !== e.USRegistrations && 0 !== e.USRegistrations.length && function(e) {
                            return e.forEach((function(e) {
                                if (null !== e.BrandingValue)
                                    return !1
                            }
                            )),
                            !0
                        }(e.USRegistrations)) {
                            const a = `<div class="card status ${e.HasBadUSRegistrations ? "dirty" : "clean"}">\n                                        <span class="${e.HasBadUSRegistrations ? "icon-bad" : "icon-good"}"></span>\n                                        <div class="card-content">\n                                            ${function(e) {
                                return 1 === e.length ? function(e) {
                                    const a = `<p>${function(e, a) {
                                        return e.BrandingValue.toLowerCase().includes(n.p.en.Registration.BrandingValueUS["Not Actual Mileage"].toLowerCase()) ? `${n.p[t].Registration.RegisteredInState} &nbsp; <strong>${a}</strong> ${n.p[t].Registration.InUS} ${n.p[t].Registration.With} ${n.p[t].Registration.A} <strong><span class='dirty'>${n.p[t].Registration.BrandingValueUS["Not Actual Mileage"]}</span></strong> ${n.p[t].Registration.Title}` : e.BrandingValue.toLowerCase().includes(n.p.en.Registration.BrandingValueUS["Exceeds Mechanical Limits"].toLowerCase()) ? `${n.p[t].Registration.RegisteredInState} &nbsp; <strong>${a}</strong> ${n.p[t].Registration.InUS} ${n.p[t].Registration.With} ${n.p[t].Registration.An} <strong><span class='dirty'>${n.p[t].Registration.BrandingValueUS["Exceeds Mechanical Limits"]}</span></strong> ${n.p[t].Registration.Issue}` : e.BrandingValue.toLowerCase().includes("normal") || e.BrandingValue.toLowerCase().includes("0") ? `${n.p[t].Registration.RegisteredInState} <strong>${a}</strong> ${n.p[t].Registration.InUS}. ${n.p[t].Registration.NoMajorProblem}` : `${n.p[t].Registration.RegisteredInState} &nbsp; <strong>${a}</strong> ${n.p[t].Registration.InUS} ${n.p[t].Registration.With} ${n.p[t].Registration.A} <strong><span class='dirty'>${n.p[t].Registration.BrandingValueUS[e.BrandingValue]}</span></strong>${n.p[t].Registration.Branding}`
                                    }(e, n.p[t].Shared.Provinces[e.Jurisdiction])}</p>`;
                                    return a
                                }(e[0]) : function(e) {
                                    let a = `<p>${n.p[t].Registration.RegisteredInFollowingUS}</p>\n                                <ul>\n                                    ${function(e) {
                                        let a = "";
                                        return e.forEach((function(e) {
                                            a += "<li><p>",
                                            "normal" === e.BrandingValue.toLowerCase() || "0" === e.BrandingValue.toLowerCase() ? a += `${n.p[t].Registration.StateOf} <strong>${n.p[t].Shared.Provinces[e.Jurisdiction]}</strong>. ${n.p[t].Registration.NoMajorProblem}` : a += `${n.p[t].Registration.StateOf} <strong>${n.p[t].Shared.Provinces[e.Jurisdiction]}</strong> ${n.p[t].Registration.With} <strong><span class='dirty'>${n.p[t].Registration.BrandingValueUS[e.BrandingValue]}</span></strong> ${n.p[t].Registration.Title}`,
                                            a += "</p></li>"
                                        }
                                        )),
                                        a
                                    }(e)}\n                                </ul>`;
                                    return a
                                }(e)
                            }(e.USRegistrations)}\n                                            <p class="checked-for">\n                                                <strong>${n.p[t].Registration.WeCheckedFor}</strong> ${n.p[t].Registration.BrandingCheckUS}\n                                            </p>\n                                        </div>\n                                    </div>`;
                            return a
                        }
                        return ""
                    }(a)}\n                                        ${s = this._data,
                    null !== s.RegistrationViewModel.CanadianRegistrations && 0 !== s.RegistrationViewModel.CanadianRegistrations.length || null !== s.RegistrationViewModel.USRegistrations && 0 !== s.RegistrationViewModel.USRegistrations.length ? "" : n.p[t].Registration.NoRegistrationFoundCanadaUS}\n                                    </div>\n                                </section>`;
                    var s;
                    function l(e) {
                        return "1" === e.BrandingValue || "2" === e.BrandingValue || "4" === e.BrandingValue || "8" === e.BrandingValue || "9" === e.BrandingValue
                    }
                    function c(e) {
                        if ("fr" === t) {
                            let t = "";
                            switch (e) {
                            case "Terre-Neuve":
                            case "l’Ile du Prince Édouard":
                            case "Territoire du Nord-Ouest":
                            case "Nunavut":
                                t = "de";
                                break;
                            case "Nouveau-Brunswick":
                            case "Québec":
                            case "Manitoba":
                            case "Yukon":
                                t = "du";
                                break;
                            case "Nouvelle-Ecosse":
                            case "Saskatchewan":
                            case "Colombie-Britannique":
                                t = "de la"
                            }
                            return `${t} <strong>${"Ontario" === e || "Alberta" === e ? `l'${e}` : e}</strong>`
                        }
                        return `<strong>${e}</strong>`
                    }
                    this.innerHTML = o,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class R extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementById("vhr").classList.contains("sample")
                      , a = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , r = `<header>\n\t\t<img class="logo" src="${e}/carfax-canada.svg" alt="Carfax Canada">\n\t\t<section class="info">\n            ${o = this._data,
                    t ? `<p><span class="info-label">${o.ReportName} #:</span>&nbsp;XXXXXXXX</p>` : `<p><span class="info-label">${n.p[a].WebReportType[o.WebReportType]} #:</span>&nbsp;${o.ReportNumber}</p>`}\n            ${function(e) {
                        return `<p><span class="info-label">${n.p[a].Summary.ReportDetailDate}:</span>&nbsp;${function(e) {
                            return "fr" === a ? `${t = e.ReportDay,
                            t < 10 ? `0 ${t.toString()}` : t} ${n.p[a].ReportDate[e.ReportMonth]} ${e.ReportYear}` : `${n.p[a].ReportDate[e.ReportMonth]} ${e.ReportDay}, ${e.ReportYear}`;
                            var t
                        }(e)}&nbsp;|&nbsp;${function(e) {
                            return "fr" === a && null != e.ReportTimeFrench ? e.ReportTimeFrench : e.ReportTime
                        }(e)}</p>`
                    }(this._data)}\n            ${function(e) {
                        const t = e.IsReportComplete ? n.p[a].VehicleHistory.Complete : n.p[a].VehicleHistory.Pending;
                        let i = `<p> <span class="info-label">${n.p[a].Summary.ReportDetailStatus}:</span>&nbsp;${t}</p>`;
                        return e.ShowRefnum && (i += `<p><span class="info-label">${n.p[a].Summary.ReportDetailReference}:</span>&nbsp;${e.DisplayRefNum}</p>`),
                        i
                    }(this._data)}\n        </section></header>`;
                    var o;
                    this.innerHTML = r,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class y extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.StolenViewModel
                      , r = a.IsCurrentlyDeclaredStolen || a.IsCurrentlyReportedStolen ? `${e}/stolen-bad.svg` : `${e}/stolen.svg`
                      , o = this._data.PendingSectionFlags
                      , s = `\n        <section id="stolen-section" class="stolen content">\n            <header class="section-header">\n                <img class="icon" src="${r}" alt="" />\n                <h2>${n.p[t].Stolen.SectionHeading}</h2>\n                <vhr-tooltip class="heading-tooltip">${n.p[t].Stolen.TooltipHeading}</vhr-tooltip>\n            </header>\n            ${function(e) {
                        return o.HasPendingStolenStatus ? `<vhr-pending-section data-tooltiptext="">${n.p[t].Shared.PendingCollectionData}</vhr-pending-section>` : e.IsCurrentlyDeclaredStolen ? `\n                        <div class="card status dirty">\n                            <span class="icon-info"></span>\n                            <div>\n                                <span class='stolen-description'>${n.p[t].Stolen.IsCurrentlyDeclaredStolen}</span> <strong class='stolen-description'>${n.p[t].Stolen.CarfaxCanadaRecommends}</strong>\n                            </div>\n                        </div>` : e.IsCurrentlyReportedStolen ? `\n                        <div class="card status dirty">\n                            <span class="icon-info"></span>\n                            <div>\n                                ${n.p[t].Stolen.StolenNotRecovered}\n                            </div>\n                        </div>` : `\n                    <div class="card status clean">\n                        <span class="icon-good"></span>\n                        <div>\n                            ${n.p[t].Stolen.NotCurrentlyDeclaredStolen}\n                        </div>\n                    </div>`
                    }(a)}\n        </section>`;
                    this.innerHTML = s,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class f extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang");
                    this.innerHTML = `<div class="footer-content">\n                                <div class="carfox-image">\n                                    <img class="carfox" srcset="${e}/Footer/${n.p[t].FoxImage}, ${e}/Footer/${n.p[t].FoxImage3x} 2x, ${e}/Footer/${n.p[t].FoxImage3x} 3x"\n                                         src=".${e}/Footer/${n.p[t].FoxImage}" alt="Carfox">\n                                    <h3 class="footer-text-mobile">${n.p[t].FooterHeadingQuestionText}?<br /><span> ${n.p[t].FooterHeadingText}</span></h3>\n                                </div>\n                                <div class="inner-footer">\n                                    <h3 class="footer-text-desktop">${n.p[t].FooterHeadingQuestionText}?<span> ${n.p[t].FooterHeadingText}</span></h3>\n                                    <div class="links-print">\n                                        <a class="carfax-email" href="${n.p[t].Shared.SupportPortalLink}" target="_blank"><span class="print-text">${n.p[t].Shared.VisitUsAt}</span> ${n.p[t].Shared.SupportLinkText}</a>\n                                    </div>\n                                    <div class="address">\n                                        <div class="carfax-address-mobile">${n.p[t].Shared.CarfaxAddressLine1}<br />&nbsp;${n.p[t].Shared.CarfaxAddressLine2}</div>\n                                        <div class="carfax-address">${n.p[t].Shared.CarfaxAddress}</div>\n                                        <div class="carfax-postal">&nbsp;${n.p[t].Shared.CarfaxPostalCode}</div>\n                                    </div>\n                                    <div class="links">\n                                        <a class="carfax-phone" href="${n.p[t].Shared.SupportPortalLink}" target="_blank">${n.p[t].Shared.CustomerSupport}</a>\n                                        <span class="separator">|</span>\n                                        <a target="_blank" class="carfax-faq" href="${n.p[t].Shared.SupportFaqLink}">FAQ &amp; ${n.p[t].FooterGlossary}</a>\n                                    </div>\n                                </div>\n                            </div>`,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class b extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = (new Date).getFullYear()
                      , a = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , r = 9 === this._data.WebReportType || 3 === this._data.WebReportType ? `<div class="bc-disclaimer">\n                        <h4>${n.p[a].BCDisclaimer.BcDisclaimerTitle}</h4>\n                        <p>${n.p[a].BCDisclaimer.BcDisclaimerP1}</p>\n                        <ul>\n                            <li>${n.p[a].BCDisclaimer.BcDisclaimerLi1}</li>\n                            <li>${n.p[a].BCDisclaimer.BcDisclaimerLi2}</li>\n                            <li>${n.p[a].BCDisclaimer.BcDisclaimerLi3}</li>\n                        </ul>\n                        <p>${n.p[a].BCDisclaimer.BcDisclaimerP2}</p>\n                        <p>${n.p[a].BCDisclaimer.BcDisclaimerP3} <a href="${n.p[a].BCDisclaimer.BcDisclaimerLink}" target="_blank">${n.p[a].BCDisclaimer.BcDisclaimerLink}</a>.</p>\n                        <p>${n.p[a].BCDisclaimer.BcDisclaimerP4}</p>\n                    </div>` : ""
                      , o = this._data.HighlightsViewModel
                      , s = this._data.DisplayFlags
                      , l = (o.AccidentFree || o.OneOwner || o.LowKilometer || o.TopCondition || o.FCA || o.KiaCPO) && s.ShowHighlights ? `<div class="badge-disclaimer">\n                        ${o.OneOwner ? `<div id="oneowner-disclaimer">\n                                                                <h4>${n.p[a].Legal.OneOwnerDisclaimerTitle}</h4>\n                                                                    <p>${n.p[a].Legal.OneOwnerDisclaimerText}</p>\n                                                            </div>` : ""}\n                        ${o.LowKilometer ? `<div id="lowkilometer-disclaimer">\n                                                                    <h4>${n.p[a].Legal.LowKilometresDisclaimerTitle}</h4>\n                                                                    <p>${n.p[a].Legal.LowKilometresDisclaimerText}</p>\n                                                                </div>` : ""}\n                        ${o.TopCondition ? `<div id="topcondition-disclaimer">\n                                                                    <h4>${n.p[a].Legal.TopConditionDisclaimerTitle}</h4>\n                                                                    <p>${n.p[a].Legal.TopConditionDisclaimerText}</p>\n                                                                </div>` : ""}\n                        ${o.AccidentFree ? `<div id="accidentfree-disclaimer">\n                                                                    <h4>${n.p[a].Legal.AccidentFreeDisclaimerTitle}</h4>\n                                                                    <p>${n.p[a].Legal.AccidentFreeDisclaimerText}</p>\n                                                                </div>` : ""}\n                        ${o.KiaCPO ? `<div id="kiacpo-disclaimer">\n                                                            <h4>KIA</h4>\n                                                            <p>\n                                                                ${n.p[a].Legal.KiaExplanation}\n                                                            </p>\n                                                            <a target="_blank" class="kia-link" href="http://www.kia.ca/certified-pre-owned-vehicles#benefitsAnchor">${n.p[a].ClickToFindMore}</a>\n                                                        </div>` : ""}\n                        ${o.FCA ? `<div id="fca-disclaimer">\n                                                        <h4>FCA</h4>\n                                                        <p>${n.p[a].Legal.FcaExplanation}</p>\n                                                    </div>` : ""}\n                    </div>` : "";
                    this.innerHTML = `<div id="copyright" class="legal">\n                            ${r}\n                            ${l}\n                            <div class="legal-text">\n                                <p>${n.p[a].Legal.LegalText} <a target="_blank" class="conditions-of-use" href="${n.p[a].Legal.CarfaxCanadaPrivacyLegalURL}">${n.p[a].Legal.TermsConditions}</a></p>\n                            </div>\n                            <div class="legal-copyright">\n                                <span>\n                                    ${n.p[a].Legal.CopyrightText1}\n                                    ${t}\n                                    ${n.p[a].Legal.CopyrightText2}\n                                </span>\n                                <img class="logo" src="${e}/carfax-canada.svg" alt="Carfax Canada">\n                            </div>\n                        </div>`,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class A extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.LienViewModel
                      , r = `\n            <section class="lien-details content" id="lien-details-section">\n            <header class="section-header">\n                <img class="icon" src="${e}/lien.svg" alt="" />\n                <h2>${n.p[t].Lien.LienDetailHeading}</h2>\n                <vhr-tooltip class="heading-tooltip">${n.p[t].Lien.LienTooltip}</vhr-tooltip>\n            </header>\n            ${function(e) {
                        return e.MultipleOntarioLiens ? `<div class="status dirty" id="lien-Ontario">\n                    <span class="icon-info"></span>\n                    <div class="card-content">\n                        <p>${n.p[t].Lien.LienMultipleOntario}</p>\n                    </div>\n                </div>` : ""
                    }(a)}\n            <div class="card-container">\n                ${function(e) {
                        let a = "";
                        for (let[i,r] of Object.entries(e.ActiveLiens))
                            a += `\n                    <div class="card" id="${e.MultipleOntarioLiens ? "" : `lien-${i}`}">\n                        <div class="card-inner">\n                            <header class="card-toggle" aria-label="Collapse">\n                                <div class="card-header">\n                                    <div class="card-title">\n                                        <h3>${n.p[t].Lien.LienRecordsFound} ${n.p[t].Shared.Provinces[i]}</h3>\n                                    </div>\n                                </div>\n                                <button class="content-toggle" aria-label="Collapse" tabindex="0"><span class="icon-sort"></span></button>\n                            </header>\n                            <div class="card-content">\n                                ${o(r)}\n                            </div>\n                        </div>\n                    </div>`;
                        return a
                    }(a)}\n            </div>\n        </section>`;
                    function o(e) {
                        let t = "";
                        for (let a = 0, n = e.length; a < n; a++)
                            t += `<pre>${e[a].LienText}\n</pre>`;
                        return t
                    }
                    this.innerHTML = r,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class E extends HTMLElement {
                constructor() {
                    super(),
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang");
                    this.innerHTML = `\n                <a class="back-to-top" href="#vhr-summary" id="back-to-top">\n                    <img class="icon" src="${e}/back-to-top.svg" />\n                    <p>${n.p[t].BackToTop}</p>\n                </a>`,
                    (0,
                    i.BackToTop)()
                }
            }
            class N extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.ChronologyViewModel.ChronologyItems
                      , r = this._data.PendingSectionFlags
                      , o = this._data.ImportRecordsViewModel
                      , s = this._data.ChronologyViewModel.DetailedHistoryYearGroups
                      , l = "fr" === t
                      , c = a.find((e=>e.Location.Country === n.p.en.Shared.CountryUS || e.Location.Country === n.p.en.Shared.CountryUSA))
                      , d = r.HasPendingRegistrations || r.HasPendingUsRecords || r.HasPendingPoliceAccidents || r.HasPendingInsuranceClaims || r.HasPendingEstimateAccidents || r.HasPendingOtherDamages || r.HasPendingRecalls;
                    let u = `<section class="detailed-history content" id="detailed-history-section">\n                                        <header class="section-header">\n                                            <img class="icon" src="${e}/detailed-history.svg" alt="" />\n                                            <h2>${n.p[t].DetailedHistory.SectionHeading}</h2>\n                                            <vhr-tooltip>${n.p[t].DetailedHistory.Tooltip}</vhr-tooltip>\n                                        </header>\n                                        ${function(a, r, o) {
                        let l = "";
                        return a ? l += `<vhr-pending-section data-tooltiptext="">${n.p[t].Shared.PendingCollectionData}</vhr-pending-section>` : (l += `${function(a, i) {
                            let r = `\n                <section class="content-mobile sort-default mobile-card" id="detailed-history-cards">\n                    <div class="card-sort">\n                        <button class="content-sort detailed-history-sort" aria-label="Sort" tabindex="0" data-sorttable="detailed-history-table" data-sortcards="detailed-history-cards">\n                            <h3>${n.p[t].Shared.MobileOrderButton}</h3>\n                            <img class="image-chevron" src="${e}/icon-chevron.svg" />\n\t\t\t\t            <img class="image-arrow" src="${e}/icon-arrow.svg" />\n                        </button>\n                        \x3c!-- Start Expand/Collapse All --\x3e\n                        <vhr-expand data-cardsection="detailed-history-cards"></vhr-expand>\n                        \x3c!-- End Expand/Collapse All --\x3e\n                    </div>\n                    <div class="card-container">\n                        ${function(e, t) {
                                let a = ""
                                  , n = !0;
                                for (let[t,i] of Object.entries(e)) {
                                    const e = t;
                                    a += `\n                    <div class="card ${T(n)}">\n                        <div class="card-inner">\n                            <header class="card-toggle" aria-label="Collapse">\n                                <h3>${e}</h3>\n                                <button class="content-toggle" aria-label="Collapse" tabindex="0"><span class="icon-sort"></span></button>\n                            </header>\n                            <div class="card-content">\n                                ${p(i)}\n                            </div>\n                        </div>\n                    </div>`,
                                    n = !1
                                }
                                return a
                            }(a)}\n                    </div>\n                </section>`;
                            return r
                        }(s)}`,
                        l += `${function(a, r) {
                            let o = `\n                <section class="content-desktop card">\n                    <table id="detailed-history-table" class="sort-default">\n                        <colgroup>\n                            <col class="col-flag">\n                            <col class="col-date">\n                            <col class="col-odo">\n                            <col class="col-source">\n                            <col class="col-record-type">\n                            <col>\n                        </colgroup>\n                        <thead>\n                            <tr>\n                                <td></td>\n                                <th>\n                                    <div class="table-sort-wrapper" id="detailed-history-table-sort">\n                                        <button class="content-sort detailed-history-sort"  aria-label="Sort" tabindex="0" data-sorttable="detailed-history-table" data-sortcards="detailed-history-cards">\n                                            <h4>${n.p[t].DetailedHistory.TableHeadingDate}</h4>\n                                            <img class="image-chevron" src="${e}/icon-chevron.svg" />\n                                            <img class="image-arrow" src="${e}/icon-arrow.svg" />\n                                        </button>\n                                    </div>\n                                </th>\n                                <th><h4>${n.p[t].DetailedHistory.TableHeadingOdometer}</h4></th>\n                                <th><h4>${n.p[t].DetailedHistory.TableHeadingDataSource}</h4></th>\n                                <th><h4>${n.p[t].DetailedHistory.TableHeadingRecordType}</h4></th>\n                                <th><h4>${n.p[t].DetailedHistory.TableHeadingDetail}</h4></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            ${function(e, t) {
                                let a = "";
                                for (let n = 0, r = e.length; n < r; n++) {
                                    const r = e[n]
                                      , o = S(r.OdometerDisplay);
                                    a += `\n                    <tr>\n                        <td>\n                            ${C(r, !0)}\n                        </td>\n                        <td>\n                            ${R(r)}\n                        </td>\n                        <td class="${o ? "odometer-not-available" : ""}">\n                            ${y(r, o)}\n                        </td>\n                        <td>\n                            ${w(r)}\n                            <br />\n                            ${(0,
                                    i.TranslateLocationString)(r.Location.LocationString)}\n                        </td>\n                        <td>\n                            ${f(r)}\n                        </td>\n                        <td class="item-detail">\n                            ${b(r, t)}\n                        </td>\n                    </tr>`
                                }
                                return a
                            }(a, r)}\n                        </tbody>\n                    </table>\n                </section>`;
                            return o
                        }(r, o)}`),
                        l
                    }(d, a, o)}\n                                        ${this._data.ChronologyViewModel.HasUnknownOdometerUnitOfMeasure ? `<p class="vhr-chronology-unknown">${n.p[t].DetailedHistory.UnknownUnitOfMeasureMessage}</p>` : ""}\n                                    </section>`;
                    function p(e, a) {
                        let r = "";
                        for (let a = 0, o = e.length; a < o; a++) {
                            const o = e[a]
                              , s = 9 === o.RecordTypeEnumList[0]
                              , l = o.Location.IsUsRecord
                              , c = S(o.OdometerDisplay);
                            r += `\n                    <div class="mobile-table-row ${s || l ? "flag-record" : ""}">\n                    <h4>${h(l, o)}</h4>\n                    ${C(o, !1)}\n                    <div class="mobile-row-content">\n                        <div class="mobile-table-cell">\n                            <p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingOdometer}:</p>\n                            ${y(o, c)}\n                        </div>\n                        <div class="mobile-table-cell ${s ? "import-record-source" : ""}">\n                            <p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingDataSource}:</p>\n                            <div>\n                                <p>${w(o)}</p>\n                                <p>${(0,
                            i.TranslateLocationString)(o.Location.LocationString)}</p>\n                            </div>\n                        </div>\n                        ${m(s, o)}\n                    </div>\n                </div>`
                        }
                        return r
                    }
                    function h(e, t) {
                        let n = "";
                        const i = a.find((e=>e.Date === t.Date));
                        return n += e && c === i ? `<span id="us-record-mobile">${R(t)}</span>` : R(t),
                        n
                    }
                    function m(e, a) {
                        let i = ""
                          , r = "";
                        if (a.GroupDetailEnumList.length > 1) {
                            r += `\n                    <div class="mobile-table-cell">\n                        <p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingRecordType}:</p>\n\t\t\t\t\t\t<p>${f(a)}</p>\n                    </div>\n                    <div class="mobile-table-cell">\n\t\t\t\t        <p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingDetail}:</p>`;
                            for (let e = 0, t = a.GroupDetailEnumList.length; e < t; e++)
                                r += N(a.GroupDetailEnumList[e]);
                            return r += "</div>",
                            r
                        }
                        return i += e ? `\n                    <div class="inline-tooltip-wrapper">\n                        <div class="mobile-table-cell">\n\t\t\t\t\t\t\t<p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingRecordType}:</p>\n                            ${f(a)}\n\t\t\t\t\t\t</div>\n                        ${g(a)}\n                    </div>` : `\n                    <div class="mobile-table-cell">\n\t\t\t\t\t\t<p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingRecordType}:</p>\n\t\t\t\t\t\t<p>${f(a)}</p>\n\t\t\t\t\t</div>\n                    ${g(a)}`,
                        i
                    }
                    function g(e) {
                        let a = `\n                <div class="mobile-table-cell">\n\t\t\t\t    <p class="mobile-label">${n.p[t].DetailedHistory.TableHeadingDetail}:</p>`;
                        for (let t = 0, n = e.DetailEnumList.length; t < n; t++)
                            a += `${v(e, e.DetailEnumList[t])}`;
                        return a += "</div>",
                        a
                    }
                    function v(e, t) {
                        let a = "";
                        return e.Detail.includes("Imported as:") ? a += `<span id="import-record-mobile">${A(o)}</span>` : a += `${E(e, t)}`,
                        a
                    }
                    function C(t, a) {
                        return "Import Record" === t.TypeOfRecord ? `<img src="${e}/icon-import.svg" class=${a ? "desktop-import" : "mobile-import"} />` : t.Location.IsUsRecord ? `<img src="${e}/icon-flag-us.svg" class=${a ? "desktop-flag" : "mobile-flag"} />` : ""
                    }
                    function R(e) {
                        const a = null === e.DateDay ? "" : e.DateDay
                          , i = null === e.DateMonth ? "" : e.DateMonth
                          , r = null === e.DateYear ? "" : e.DateYear;
                        return l ? `${a} ${n.p[t].Date[i]} ${r}` : `${r} ${n.p[t].Date[i]} ${a}`
                    }
                    function y(e, a) {
                        if (!1 === a) {
                            const a = l ? (0,
                            i.TranslateOdometer)(t, e.OdometerDisplay) : e.OdometerDisplay;
                            return `<p class="odometer-value"><span aria-label="${n.p[t].DetailedHistory.TableHeadingOdometer}">${a}</span></p>`
                        }
                        return ""
                    }
                    function f(e) {
                        let a = "";
                        if (null !== e.RecordTypeEnumList)
                            for (let i = 0; i < e.RecordTypeEnumList.length; i++) {
                                const r = e.RecordTypeEnumList[i];
                                n.p[t].DetailedHistory.RecordTypes[r] === n.p[t].Registration.RecordType_Import ? (0 === i && (a += '\n                                <div class="import-record-type">\n                                    <p>'),
                                a += `${String.raw`${n.p[t].DetailedHistory.RecordTypes[r]}`}`,
                                i === e.RecordTypeEnumList.length - 1 ? a += `\n                                </p>\n                                <vhr-tooltip>${n.p[t].DetailedHistory.ImportRecordTooltip}</vhr-tooltip>\n                            </div>` : a += "<br/>") : 0 === r ? a += `${String.raw`${e.TypeOfRecord}`}` : 13 === r && document.querySelector("vhr-base")._hasUsRecords ? a += `${String.raw`${n.p[t].DetailedHistory.RecordTypes[5]}`}` : (a += `${String.raw`${n.p[t].DetailedHistory.RecordTypes[r]}`}`,
                                i < e.RecordTypeEnumList.length - 1 && (a += "<br/>"))
                            }
                        return a
                    }
                    function b(e, i) {
                        let r = "";
                        for (let o = 0, s = e.DetailEnumList.length; o < s; o++) {
                            const s = e.DetailEnumList[o];
                            for (let o = 0, l = e.GroupDetailEnumList.length; o < l; o++) {
                                const l = e.GroupDetailEnumList[o];
                                if (e.GroupDetailEnumList.length > 1)
                                    r += N(l);
                                else if (e.Detail.includes("Imported as:"))
                                    r += `<span id="import-record">${A(i)}</span>`;
                                else if (e.Location.Country === n.p[t].Shared.CountryUS || e.Location.Country === n.p[t].Shared.CountryUSA) {
                                    const i = a.find((t=>t.Date === e.Date));
                                    r += c === i ? 0 === s ? E(e, s) : `<span id="us-record-desktop">${n.p[t].DetailedHistory.DetailTypes[s]}</span>` : E(e, s)
                                } else
                                    r += E(e, s)
                            }
                        }
                        return r
                    }
                    function A(e) {
                        null === e?.RivImportRecord && (e.RivImportRecord = {
                            BrandingStatusEnum: "",
                            CaseDossier: ""
                        });
                        const a = e?.RivImportRecord
                          , i = "" === a.BrandingStatusEnum ? "" : n.p[t].Registration.BrandingValue[a.BrandingStatusEnum];
                        return `\n                <strong>${n.p[t].ImportExports.From}:</strong> ${n.p[t].Shared.CountryUS}\n                <br />\n                <strong>${n.p[t].ImportExports.To}:</strong> ${n.p[t].Shared.CountryCA}\n                <br />\n                <br />\n                ${String.raw`${n.p[t].ImportExports.RivDescription}`}\n                <br />\n                <br />\n                ${n.p[t].ImportExports.ImportedAs} <strong>${i}</strong>\n                <br />\n                ${n.p[t].ImportExports.CaseDossier} <strong>${a.CaseDossier}</strong>\n                <br />\n                ${function(e, a, i) {
                            let r = "";
                            return r += "" !== a && "" !== e && "" !== i ? l ? `${n.p[t].ImportExports.ImportDate} <strong>${a < 10 ? "0" + a : a}-${e < 10 ? "0" + e : e}-${i}</strong>` : `${n.p[t].ImportExports.ImportDate} <strong>${a}/${e}/${i}</strong>` : `${n.p[t].ImportExports.ImportDate}`,
                            r
                        }(e.ImportDateDay, e.ImportDateMonth, e.ImportDateYear)}\n                <br />\n                ${function(e, a, i) {
                            let r = "";
                            return r += "" !== a && "" !== e && "" !== i ? l ? `${n.p[t].ImportExports.CustomsEntered} <strong>${a < 10 ? "0" + a : a}-${e < 10 ? "0" + e : e}-${i}</strong>` : `${n.p[t].ImportExports.CustomsEntered} <strong>${a}/${e}/${i}</strong>` : `${n.p[t].ImportExports.CustomsEntered}`,
                            r
                        }(e.CustomsEnteredDateDay, e.CustomsEnteredDateMonth, e.CustomsEnteredDateYear)}\n                <br />\n                ${function(e, a, i) {
                            let r = "";
                            return r += "" !== a && "" !== e && "" !== i ? l ? `${n.p[t].ImportExports.CustomsInspected} <strong>${a < 10 ? "0" + a : a}-${e < 10 ? "0" + e : e}-${i}</strong>` : `${n.p[t].ImportExports.CustomsInspected} <strong>${a}/${e}/${i}</strong>` : `${n.p[t].ImportExports.CustomsInspected}`,
                            r
                        }(e.CustomsInspectedDateDay, e.CustomsInspectedDateMonth, e.CustomsInspectedDateYear)}\n                ${function(e) {
                            let a = "";
                            return e.HasOtherData && (a += `\n                    <br />\n                    <br />\n                    <strong>${n.p[t].ImportExports.OtherRivData}</strong>\n                    <br />\n                    <span class='import-branding-other-data'>\n                        ${e.OtherData}\n                    </span>`),
                            a
                        }(a)}`
                    }
                    function E(e, a) {
                        return 0 === a ? e.Detail.toLowerCase().includes("accident reported") ? function(e, a) {
                            let i = [];
                            i = (e = e.Detail.replace("<pre>", "").replace("</pre>", "")).split(new RegExp([": ", "\n", "<br/>", "<br />"].join("|", "g")));
                            let r = `\n                <div class="detail-list">\n                    <span>${n.p[t].DetailedHistory.AccidentReported}:</span>\n                    <ul>\n                        ${function(e, t, a) {
                                let n = "";
                                return a.forEach((function(e) {
                                    var t = e;
                                    t.toLowerCase().includes("accident reported") ? n += "" : n += `<li>${t}</li>`
                                }
                                )),
                                n
                            }(0, 0, i)}\n                    </ul>\n                </div>`;
                            return r
                        }(e) : e.Detail.toLowerCase().includes("exceed") ? String.raw`${n.p[t].Registration.BrandingValueUS.ExceedsMechanicalLimits}` : e.Detail.toLowerCase().includes("actual mileage") ? String.raw`${n.p[t].Registration.BrandingValueUS.NotActualMileage}` : l && e.Detail.toLowerCase().includes("estimate date") ? function(e) {
                            const t = /(\d{1,2})\/(\d{1,2})\/(\d{4})/m
                              , a = e.match(t);
                            if (null !== a) {
                                const n = a[1].length < 2 ? `0 ${a[1]}` : a[1]
                                  , i = a[2].length < 2 ? `0 ${a[2]}` : a[2]
                                  , r = a[3];
                                return e.replace(t, `${n}-${i}-${r}`)
                            }
                            return e
                        }(e.Detail).replace("Estimate Date", n.p[t].Accident.TableHeadingEstimateDate) : "$" === e.Detail.toLowerCase().charAt(0) ? (0,
                        i.FormatCurrency)(t, e.Detail.replace(",", "").replace("$", "")) : String.raw`${e.Detail}` : 73 === a || 74 === a || 75 === a || 76 === a || 78 === a || 79 === a || 80 === a || 81 === a || 82 === a || 83 === a ? D(a, e) : String.raw`${n.p[t].DetailedHistory.DetailTypes[a]}<br/>`
                    }
                    function N(e) {
                        let a = "";
                        return a += 26 === e || 27 === e || 28 === e || 29 === e || 30 === e || 31 === e || 32 === e || 33 === e || 34 === e || 35 === e || 36 === e ? n.p[t].DetailedHistory.PreviousUse + ": " + n.p[t].DetailedHistory.GroupedDetailTypes[e] + "<br>" : n.p[t].DetailedHistory.GroupedDetailTypes[e] + "<br>",
                        a
                    }
                    function S(e) {
                        return !e || !e.trim()
                    }
                    function T(e) {
                        return e ? "" : "collapse"
                    }
                    function w(e) {
                        let a = n.p[t].DetailedHistory.DataSourceTypes[e.SourceEnum];
                        return 0 === e.SourceEnum && (a = e.DataSource),
                        3 === e.SourceEnum && document.querySelector("vhr-base")._hasUsRecords && (a = n.p[t].DetailedHistory.DataSourceTypes[13]),
                        a
                    }
                    function D(e, a) {
                        return 73 === e ? `${n.p[t].Recall.RecallMessage.replace("{0}", n.p[t].Recall.Kia_Info_Url).replace("{1}", n.p[t].Recall.Kia_Info_Url)}` : 74 === e ? `${n.p[t].Recall.RecallMessage.replace("{0}", n.p[t].Recall.Honda_Info_Url).replace("{1}", n.p[t].Recall.Honda_Info_Url)}` : 75 === e ? `${n.p[t].Recall.MazdaRecallMessage.replace("{0}", n.p[t].Recall.Mazda_Info_Url).replace("{1}", n.p[t].Recall.Mazda_Info_Url)}` : 76 === e ? `${n.p[t].Recall.ManufacturerRecallIssued}${n.p[t].Recall.RecallNumberDetailedHistory} ${a.Detail.replace("Manufacturer Recall Issued<br/>Recall # ", "").replace("Avis de rappel du constructeur<br/>Rappel no : ", "")}` : 78 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_ACURA).replace("{1}", n.p[t].Recall.URL_EXPERIAN_ACURA)}` : 79 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_HONDA).replace("{1}", n.p[t].Recall.URL_EXPERIAN_HONDA)}` : 80 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_INFINITI).replace("{1}", n.p[t].Recall.URL_EXPERIAN_INFINITI)}` : 81 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_ACURA).replace("{1}", n.p[t].Recall.URL_EXPERIAN_ACURA)}` : 82 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_NISSAN).replace("{1}", n.p[t].Recall.URL_EXPERIAN_NISSAN)}` : 83 === e ? `${n.p[t].Recall.ExperianRecallMessage.replace("{0}", n.p[t].Recall.URL_EXPERIAN_SUZUKI).replace("{1}", n.p[t].Recall.URL_EXPERIAN_SUZUKI)}` : D += ""
                    }
                    this.innerHTML = u,
                    this.dispatchEvent(i.RenderedEvent),
                    this.addEventListener("click", i.AddAndRemoveToggleClass),
                    this.addEventListener("click", i.sortData)
                }
            }
            class S extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {},
                    this._lang = document.getElementsByTagName("HTML")[0].getAttribute("lang"),
                    this._copy = n.p[this._lang]
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    this.innerHTML = this.BuildHtml(this._data.OtherRecordsViewModel),
                    this.dispatchEvent(i.RenderedEvent)
                }
                BuildHtml(e) {
                    const t = document.getElementById("vhr").dataset.imageSrc;
                    return `\n        <section class="other-records content" id="other-records-section">\n            <header class="section-header">\n                <img class="icon" src="${t}/other-records.svg" alt="" />\n                <h2>${this._copy.OtherRecords.OtherRecordsHeading}</h2>\n            </header>\n            <section class="content-mobile sort-default" id="other-records-cards">\n                <div class="card-sort">\n                    <button class="content-sort" aria-label="Sort" tabindex="0" data-sorttable="other-records-table" data-sortcards="other-records-cards">\n                        <h3>${this._copy.Shared.MobileOrderButton}</h3>\n                        <img class="image-chevron" src="${t}/icon-chevron.svg" />\n                        <img class="image-arrow" src="${t}/icon-arrow.svg" />\n                    </button>\n                </div>\n                <div class="card-container">\n                    <div class="card">\n                        <div class="card-inner">\n                            <header>\n                                <h3>\n                                    ${this._copy.OtherRecords.NotAvailable}\n                                </h3>\n                                <button class="content-toggle" aria-label="Collapse" tabindex="0"><span class="icon-sort"></span></button>\n                            </header>\n                            <div class="card-content">\n                                ${this.BuildOtherRecordsMobileHtml(e.ListOfOtherRecords)}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <section class="content-desktop card">\n                <table id="other-records-table" class="sort-default">\n                    <colgroup>\n                        <col class="col-flag">\n                        <col class="col-date">\n                        <col class="col-odo">\n                        <col class="col-source">\n                    </colgroup>\n                    <thead>\n                        <tr>\n                            <td></td>\n                            <th>\n                                <div class="table-sort-wrapper" id="other-records-table-sort">\n                                    <button class="content-sort" aria-label="Sort" tabindex="0" data-sorttable="other-records-table" data-sortcards="other-records-cards">\n                                        <h4>${this._copy.OtherRecords.TableHeadingDate}</h4>\n                                        <img class="image-chevron" src="${t}/icon-chevron.svg"))" />\n                                        <img class="image-arrow" src="${t}/icon-arrow.svg"))" />\n                                    </button>\n                                </div>\n                            </th>\n                            <th class="odometer-heading"><h4>${this._copy.OtherRecords.TableHeadingOdometer}</h4></th>\n                            <th><h4>${this._copy.OtherRecords.TableHeadingDataSource}</h4></th>\n                            <th><h4>${this._copy.OtherRecords.TableHeadingDetail}</h4></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        ${this.BuildOtherRecordsDesktopHtml(e.ListOfOtherRecords)}\n                    </tbody>\n                </table>\n            </section>\n            <section class="camvap">\n                <img src="${t}/OtherRecords/camvap-logo.gif" />\n                <p>${this._copy.OtherRecords.CamvapDescription} <a href="https://${this._copy.OtherRecords.CamvapUrl}">${this._copy.OtherRecords.CamvapUrl}</a>.</p>\n            </section>\n        </section>`
                }
                BuildOtherRecordsMobileHtml(e) {
                    let t = "";
                    for (let a = 0, n = e.length; a < n; a++) {
                        const n = e[a];
                        t += `\n                <div class="mobile-table-row">\n                    <div class="mobile-table-cell">\n                        <p class="mobile-label">${this._copy.OtherRecords.TableHeadingOdometer}:</p>\n                        <p aria-hidden="true"><span aria-label="${this._copy.OtherRecords.NotAvailable}">${this._copy.Shared.NotAvailableAbbreviation}</span></p>\n                    </div>\n                    <div class="mobile-table-cell">\n                        <p class="mobile-label">${this._copy.OtherRecords.TableHeadingDataSource}:</p>\n                        <div>\n                            <p>${n.DataSource}</p>\n                            <p>${(0,
                        i.TranslateLocationString)(n.Location.LocationString)}</p>\n                        </div>\n                    </div>\n                    <div class="mobile-table-cell">\n                        <p class="mobile-label">${this._copy.OtherRecords.TableHeadingDetail}:</p>\n                        <p>${n.Detail}</p>\n                    </div>\n                </div>`
                    }
                    return t
                }
                BuildOtherRecordsDesktopHtml(e) {
                    let t = "";
                    for (let a = 0, n = e.length; a < n; a++) {
                        const n = e[a];
                        t += `\n                <tr>\n                    <td></td>\n                    <td>\n                        <span class="odometer-not-available">${this._copy.Shared.NotAvailableAbbreviation}</span>\n                    </td>\n                    <td class="odometer-not-available">\n                        <p aria-hidden="true"><span aria-label="${this._copy.OtherRecords.NotAvailable}">${this._copy.Shared.NotAvailableAbbreviation}</span></p>\n                    </td>\n                    <td>\n                        ${n.DataSource}\n                        <br />\n                        ${(0,
                        i.TranslateLocationString)(n.Location.LocationString)}\n                    </td>\n                    <td>\n                        ${n.Detail}\n                    </td>\n                </tr>`
                    }
                    return t
                }
            }
            class T extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.VehicleHistoryTilesViewModel
                      , r = this._data.PendingSectionFlags
                      , o = r.HasPendingEstimateAccidents || r.HasPendingInsuranceClaims || r.HasPendingPoliceAccidents || r.HasPendingOtherDamages
                      , s = this._data.RecallsViewModel
                      , l = this._data.DynamicUpgradeViewModel.BCUpgradeNoticeStatus;
                    let c = `\n            <svg class="icon-defs" focusable="false">\n                <defs>\n                    <filter id="drop-shadow">\n                        <feGaussianBlur in="SourceAlpha" stdDeviation="5" />\n                        <feOffset dx="0" dy="6" result="offsetblur" />\n                        <feFlood flood-color="rgb(109,114,120)" flood-opacity=".2" />\n                        <feComposite in2="offsetblur" operator="in" />\n                        <feMerge>\n                            <feMergeNode />\n                            <feMergeNode in="SourceGraphic" />\n                        </feMerge>\n                    </filter>\n                    <path xmlns="http://www.w3.org/2000/svg" id="circle-error-overlay" d="M 69.48264,10.073043 A 59.289001,59.289001 0 0 0 10.193578,69.362105 59.289001,59.289001 0 0 0 69.48264,128.65116 59.289001,59.289001 0 0 0 128.7717,69.362105 59.289001,59.289001 0 0 0 113.2971,29.418746 14.5,14.5 0 0 1 111.19358,29.573043 14.5,14.5 0 0 1 96.791234,16.737105 59.289001,59.289001 0 0 0 69.48264,10.073043 Z" />\n                    <path xmlns="http://www.w3.org/2000/svg" id="circle-warning-overlay" d="M 65.181641 9.5820312 A 59.289021 59.289021 0 0 0 5.8925781 68.871094 A 59.289021 59.289021 0 0 0 65.181641 128.16016 A 59.289021 59.289021 0 0 0 124.4707 68.871094 A 59.289021 59.289021 0 0 0 111.27539 31.582031 L 108.67969 31.582031 C 107.29898 31.582031 106.04935 31.02201 105.14453 30.117188 C 104.23971 29.212365 103.67969 27.962743 103.67969 26.582031 C 103.67969 25.77694 103.87853 24.986314 104.25 24.273438 A 59.289021 59.289021 0 0 0 65.181641 9.5820312 z" />\n                    <circle xmlns="http://www.w3.org/2000/svg" id="circle-overlay" cy="59.289" r="59.289" cx="59.289" transform="translate(10 4)" />\n                    <circle xmlns="http://www.w3.org/2000/svg" id="error-icon-overlay" cx="111" cy="15" r="11.84" />\n                    <path xmlns="http://www.w3.org/2000/svg" id="warning-icon-overlay" d="m 116.11584,7.0489986 c 1.13751,-0.3251341 2.39973,-0.2186282 3.51702,0.3965827 0.75973,0.4183316 1.38571,1.0409782 1.80627,1.7966741 v 0 l 6.54807,11.7658576 1.5115,2.715945 c 0.6185,1.111349 0.72559,2.36685 0.39871,3.498317 -0.32687,1.131466 -1.08769,2.138897 -2.20497,2.754108 -0.68553,0.377471 -1.45624,0.575498 -2.2398,0.575498 v 0 H 109.3335 c -1.27705,0 -2.43321,-0.514878 -3.27011,-1.347322 -0.8369,-0.832446 -1.35453,-1.982458 -1.35453,-3.252726 0,-0.779387 0.19909,-1.545994 0.57857,-2.227875 v 0 L 113.347,9.2422554 c 0.6185,-1.1113488 1.63133,-1.8681228 2.76884,-2.1932568 z" />\n                </defs>\n            </svg>\n            <section class="tiles">\n                <div class="tile">\n                    ${function(a) {
                        return `\n                <a href="#accident-damage-section" aria-label="Jump to Accident Damage Section">\n                    ${function(a) {
                            return 1 === a.AccidentDamagesType ? `\n                <svg class="tile-image" focusable="false" viewBox="0 0 138 139" xmlns="http://www.w3.org/2000/svg">\n                    <title>${n.p[t].VehicleHistoryTiles.AccidentDamage}</title>\n                    <image height="100%" width="100%" href="${e}/accident-damage-bad-tile.svg" />\n                    <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                        <use href="#circle-error-overlay" />\n                        <use href="#error-icon-overlay" />\n                    </g>\n                </svg>` : 3 === a.AccidentDamagesType || 4 === l || 2 === l || 1 === l || 5 === l ? `\n                <svg class="tile-image" focusable="false" viewBox="0 0 134 145" xmlns="http://www.w3.org/2000/svg">\n                    <title>${n.p[t].VehicleHistoryTiles.AccidentDamage}</title>\n                    <image height="100%" width="100%" href="${e}/accident-damage-icbc-warning-tile.svg" />\n                    <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                        <use xlink:href="#circle-warning-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        <use xlink:href="#warning-icon-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                    </g>\n                </svg>` : `\n                    <svg class="tile-image ${p(o)}" focusable="false" viewBox="0 0 138 132" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.AccidentDamage}</title>\n                        <image height="100%" width="100%" href="${e}/accident-damage-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>`
                        }(a)}\n                </a>\n                ${function(e) {
                            return o ? `<p class="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : 1 == e.AccidentDamagesType ? `<p class="dirty">${n.p[t].VehicleHistoryTiles.AccidentDamageRecordsFound}` : 4 === l || 2 === l || 1 === l || 5 === l ? `<p>${n.p[t].VehicleHistoryTiles.ICBCNotIncludedAccidentTile}</p>` : 2 == e.AccidentDamagesType ? `<p>${n.p[t].VehicleHistoryTiles.GlassRecordsFound}</p>` : 0 == e.AccidentDamagesType ? `<p>${n.p[t].VehicleHistoryTiles.NoAccidentDamageRecordsFound}</p>` : ""
                        }(a)}`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        return a.LastRegistration.Clean ? `\n                    <a href="#registration-section">\n                        <svg class="tile-image ${p(a.LastRegistration.Pending)}" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                            <title>${n.p[t].VehicleHistoryTiles.Registration}</title>\n                            <image height="100%" width="100%" href="${e}/registration-tile.svg" />\n                            <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                                <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                            </g>\n                        </svg>\n                    </a>\n                    ${d(a)}` : `\n                <a href="#registration-section">\n                    <svg class="tile-image" focusable="false" viewBox="0 0 138 139" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.Registration}</title>\n                        <image height="100%" width="100%" href="${e}/registration-bad-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use href="#circle-error-overlay" />\n                            <use href="#error-icon-overlay" />\n                        </g>\n                    </svg>\n                </a>\n                ${d(a)}`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        const i = 1 === a.ServiceRecords ? n.p[t].VehicleHistoryTiles.ServiceRecordFound : n.p[t].VehicleHistoryTiles.ServiceRecordsFound;
                        return `\n                <a href="#service-history-section" aria-label="Jump to Service Record Section">\n                    <svg class="tile-image" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>@VehicleHistoryTiles.ServiceRecord</title>\n                        <image height="100%" width="100%" href="${e}/service-records-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>\n                </a>\n                <p id="service-history-tile-records" class="clean"><strong>${a.ServiceRecords}</strong> ${i}</p>`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        const i = a.HasUsRecords ? "" : "no-hover";
                        return `\n                <a class="image-anchor desktop-link" ${a.HasUsRecords ? "href=#us-record-desktop" : ""} aria-label="Jump to first US Record">\n                    <svg class="tile-image ${i} ${p(r.HasPendingUsRecords)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.UsHistory}</title>\n                        <image height="100%" width="100%" href="${e}/us-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>\n                </a>\n                <a class="image-anchor mobile-link" ${a.HasUsRecords ? "href=#us-record-mobile" : ""} aria-label="Jump to first US Record">\n                    <svg class="tile-image ${i} ${p(r.HasPendingUsRecords)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.UsHistory}</title>\n                        <image height="100%" width="100%" href="${e}/us-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>\n                </a>\n                ${function(e) {
                            return r.HasPendingUsRecords ? `<p class="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : `\n                <p>\n                    ${e.HasUsRecords ? n.p[t].VehicleHistoryTiles.USHistoryFound : n.p[t].VehicleHistoryTiles.USHistoryNotFound}\n                </p>`
                        }(a)}`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        if (r.HasPendingRecalls || null === a.RecallCount || 0 === a.RecallCount)
                            return `\n                    <a href="#recalls-section">\n                        ${s.UnableToCheckRecalls ? `\n                    <svg class="tile-image" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.OpenRecall}</title>\n                        <image height="100%" width="100%" href="${e}/recalls-warning-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-warning-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                            <use xlink:href="#warning-icon-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>` : `\n                <svg class="tile-image ${p(r.HasPendingRecalls)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                    <title>${n.p[t].VehicleHistoryTiles.OpenRecall}</title>\n                    <image height="100%" width="100%" href="${e}/recalls-tile.svg" />\n                    <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                        <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                    </g>\n                </svg>`}\n                    </a>\n                    ${r.HasPendingRecalls ? `<p clas="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : s.UnableToCheckRecalls ? `<p>${n.p[t].VehicleHistoryTiles.RecallsUnableToCheck}</p>` : `<p>${n.p[t].VehicleHistoryTiles.RecallsNotFound}</p>`}`;
                        const i = 1 === a.RecallCount ? `${a.RecallCount} ${n.p[t].VehicleHistoryTiles.RecallFound}` : `${a.RecallCount} ${n.p[t].VehicleHistoryTiles.RecallsFound}`;
                        return `\n                    <a href="#recalls-section">\n                        <svg class="tile-image" focusable="false" viewBox="0 0 138 139" xmlns="http://www.w3.org/2000/svg">\n                            <title>${n.p[t].VehicleHistoryTiles.OpenRecall}</title>\n                            <image height="100%" width="100%" href="${e}/recalls-bad-tile.svg" />\n                            <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                                <use href="#circle-error-overlay" />\n                                <use href="#error-icon-overlay" />\n                            </g>\n                        </svg>\n                    </a>\n                    <p class="dirty">${i}</p>`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        return r.HasPendingStolenStatus || !1 === a.Stolen ? `\n                    <a href="#stolen-section" aria-label="Jump to Stolen Section">\n                        <svg class="tile-image ${p(r.HasPendingStolenStatus)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                            <title>${n.p[t].VehicleHistoryTiles.Stolen}</title>\n                            <image height="100%" width="100%" href="${e}/stolen-tile.svg" />\n                            <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                                <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                            </g>\n                        </svg>\n                    </a>\n                    ${r.HasPendingStolenStatus ? `<p clas="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : `<p>${n.p[t].VehicleHistoryTiles.StolenStatusNotFound}</p>`}` : `\n                <a href="#stolen-section" aria-label="Jump to Stolen Section">\n                    <svg class="tile-image" viewBox="0 0 138 139" focusable="false" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.Stolen}</title>\n                        <image height="100%" width="100%" href="${e}/stolen-bad-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-error-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                            <use href="#error-icon-overlay" />\n                        </g>\n                    </svg>\n                </a>\n                <p class="dirty">${n.p[t].VehicleHistoryTiles.Stolen}</p>`
                    }(a)}\n                </div>\n                <div class="tile">\n                    ${function(a) {
                        const i = a.HasImportRecords ? "" : "no-hover";
                        return `\n                <a class="image-anchor desktop-link" ${a.HasImportRecords ? "href=#import-record" : ""} aria-label="Jump to Import Record">\n                    <svg class="tile-image ${i} ${p(r.HasPendingRegistrations)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.ImportRecord}</title>\n                        <image height="100%" width="100%" href="${e}/import-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>\n                </a>\n                <a class="image-anchor mobile-link" ${a.HasImportRecords ? "href=#import-record-mobile" : ""} aria-label="Jump to Import Record">\n                    <svg class="tile-image ${i} ${p(r.HasPendingRegistrations)}" focusable="false" viewBox="0 0 138 133" xmlns="http://www.w3.org/2000/svg">\n                        <title>${n.p[t].VehicleHistoryTiles.ImportRecord}</title>\n                        <image height="100%" width="100%" href="${e}/import-tile.svg" />\n                        <g class="overlay" xmlns="http://www.w3.org/2000/svg">\n                            <use xlink:href="#circle-overlay" xmlns:xlink="http://www.w3.org/1999/xlink" />\n                        </g>\n                    </svg>\n                </a>\n                ${function(e) {
                            return r.HasPendingRegistrations ? `<p class="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : `\n                <p>\n                    ${e.HasImportRecords ? n.p[t].VehicleHistoryTiles.ImportRecordFound : n.p[t].VehicleHistoryTiles.NoImportRecordsFound}\n                </p>`
                        }(a)}`
                    }(a)}\n                </div>\n                <div class="questions-tile">\n                    \n                    <h2><span>${n.p[t].FooterHeadingQuestionText}?</span> ${n.p[t].FooterHeadingText}</h2>\n                    <div class="links">\n                        <p><span class="carfax-phone"><a href="${n.p[t].Shared.SupportPortalLink}" target="_blank">${n.p[t].Shared.CustomerSupport}</a></span><span class="carfax-divider">|</span></p>\n                        <p><a class="carfax-email" href="${n.p[t].Shared.SupportFaqLink}" target="_blank">FAQ &amp; ${n.p[t].FooterGlossary}</a></p>\n                    </div>\n                    <div class="links-print">\n                        <a class="carfax-email" href="${n.p[t].Shared.SupportPortalLink}" target="_blank"><span class="print-text">${n.p[t].Shared.VisitUsAt}</span> ${n.p[t].Shared.SupportLinkText}</a>\n                    </div>\n                </div>\n            </section>`;
                    function d(e) {
                        const a = e.LastRegistration.SummaryData;
                        return e.LastRegistration.Clean ? e.LastRegistration.Pending ? `<p class="pending">${n.p[t].VehicleHistoryTiles.CollectingData}</p>` : null === a.BrandingValue ? `<p>${n.p[t].VehicleHistoryTiles.NoRegistrationFound}</p>` : `\n                    <p>\n                        ${n.p[t].VehicleHistoryTiles.LastRegisteredIn}:\n                        <br />\n                        <strong>${n.p[t].Shared.Provinces[a.Jurisdiction]} (${u(a)})</strong>\n                    </p>` : `\n                <p>\n                    ${n.p[t].VehicleHistoryTiles.LastRegisteredIn}:\n                    <br />\n                    <strong class="dirty">${n.p[t].Shared.Provinces[a.Jurisdiction]} (${u(a)})</strong>\n                </p>`
                    }
                    function u(e) {
                        switch (e.BrandingValue) {
                        case "0":
                        case "1":
                        case "2":
                        case "4":
                        case "5":
                        case "7":
                        case "8":
                        case "9":
                        case "V":
                        case "X":
                            return n.p[t].Registration.BrandingValue[e.BrandingValue];
                        case "Normal":
                        case "Salvage":
                        case "Non-Repairable":
                        case "Stolen":
                        case "Rebuilt/Rebuildable":
                        case "Lemon":
                        case "Moved":
                        case "FireBranded":
                        case "Fire":
                        case "Flood":
                        case "Hail":
                        case "Manufacturer Buyback Lemon":
                        case "Not Actual Mileage":
                        case "Exceeds Mechanical Limits":
                            return n.p[t].Registration.BrandingValueUS[e.BrandingValue];
                        default:
                            return ""
                        }
                        return test
                    }
                    function p(e) {
                        return e ? "pending" : ""
                    }
                    this.innerHTML = c,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class w extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = n.p[t];
                    function r(e) {
                        return e < 10 ? `0 ${e.toString()}` : e
                    }
                    this.innerHTML = `<div class="disclaimer-container">\n                            <div class="disclaimer">\n                                <img class="disclaimer-svg" src="${e}/alert-circle.svg" />\n                                <div class="disclaimer-div">\n                                    <p>\n                                        <span>${a.Legal.SummaryLegalShortText1} ${function(e, t, n, i) {
                        return "fr" === e ? `${r(t)} ${a.ReportDate[n]} ${i}` : `${a.ReportDate[n]} ${r(t)}, ${i}`
                    }(t, this._data.ReportDay, this._data.ReportMonth, this._data.ReportYear)}</span> ${a.Legal.SummaryLegalShortText2}<span> ${a.Legal.SummaryLegalShortText3}</span> ${a.Legal.SummaryLegalShortText4}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>`,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class D extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {},
                    this.RenderElement()
                }
                RenderElement() {
                    const e = this.innerHTML;
                    this.renderedHTML = `<div class="information">\n                                <div class="card status warning">\n                                    <span class="icon-warning-triangle"></span>\n                                    <div class="card-content">\n                                        ${e}\n                                    </div>\n                                </div>\n                            </div>`,
                    this.innerHTML = this.renderedHTML
                }
            }
            class L extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = `${function(t) {
                        let a = "";
                        return 5 === t ? "" : (a += `\n                    <header class="report-type">\n                        <h1>${function(t) {
                            switch (t) {
                            case 2:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportPlusLienCheck;
                            case 3:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportPlusLienCheckBC;
                            case 4:
                                return n.p[e].Summary.ReportType.VehicleHistoryReport;
                            case 5:
                                return n.p[e].Summary.ReportType.Lien;
                            case 6:
                                return n.p[e].Summary.ReportType.LienExpress;
                            case 9:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportBC;
                            case 10:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportPlusLienExpressQC;
                            case 11:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportPlusLienExpress;
                            case 12:
                                return n.p[e].Summary.ReportType.VehicleHistoryReportBCPlusLienExpress;
                            default:
                                return ""
                            }
                        }(t)}</h1>\n                    </header>`,
                        a)
                    }(this._data.WebReportType)}`;
                    this.innerHTML = t,
                    this.dispatchEvent(i.RenderedEvent)
                }
            }
            class I extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = this._data.LienViewModel
                      , a = t.PendingLiens.length > 0
                      , i = this._data.DynamicUpgradeViewModel
                      , r = this._data.IsReportComplete
                      , o = 6 === this._data.WebReportType || i.LienExpressesAdded || 10 === this._data.WebReportType;
                    let s = 0;
                    Object.keys(t.ActiveLiens).forEach((function(e) {
                        "Ontario" === e && t.NumberOfOntarioLiens > 0 ? s += t.NumberOfOntarioLiens : s += t.ActiveLiens[e].length
                    }
                    ));
                    const l = `\n            <div id="lien-check" class="lien-check-wrapper">\n                <div class="lien-check ${a ? " lien-upgrade" : ""}">\n                    <div class="lien-check-results-wrapper">\n\t\t\t            <h3 class="lien-check-h3">\n                            ${c(o)}\n                        </h3>\n                        <div class="lien-check-results">\n                            ${function(e, t, a, n) {
                        let i = "";
                        return e.PendingLiens.length > 0 && !1 === t.ShowLienExpressUpgrade && !1 === t.ShowLienCheckUpgrade && !1 === n ? i += '<span class="icon-pending"></span>' : e.HasNoCanadianRegistrations ? i += '<span class="icon-bad icon-warning"></span>' : a > 0 ? i += '<span class="icon-bad"></span>' : 0 === a && !1 === t.ShowLienExpressUpgrade && !1 === t.ShowLienCheckUpgrade && (i += '<span class="icon-good"></span>'),
                        i
                    }(t, i, s, r)}\n                            <p>\n                                ${function(t, a, i, r, o) {
                        let s = "";
                        return i > 0 && (s += `\n                    <span class="lien-check-title">${c(r)}:</span>\n                    ${n.p[e].Lien.LienCheckRecordsFound}\n                    `),
                        t.PendingLiens.length > 0 && !1 === a.ShowLienExpressUpgrade && !1 === a.ShowLienCheckUpgrade && !1 === o ? `${n.p[e].VehicleHistoryTiles.CollectingData}` : t.HasNoCanadianRegistrations ? `${n.p[e].Lien.NotAvailable}` : i > 0 ? `${s}` : `${n.p[e].Lien.NoLienRecordsFound}`
                    }(t, i, s, o, r)}\n                            </p>\n                        </div>\n                        <a href="#lien-section" class="lien-section-link"></a>\n                    </div>\n                </div>\n            </div>\n        `;
                    function c(t) {
                        return t ? n.p[e].Lien.LienExpressSectionHeading : n.p[e].Lien.SectionHeading
                    }
                    this.innerHTML = l
                }
            }
            class O extends HTMLElement {
                constructor() {
                    super()
                }
                RenderElement() {
                    const e = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , t = this.querySelector(".header-subtitle")
                      , a = this.querySelector(".body-text")
                      , i = `\n            <div id="${this.dataset.id}" class="dialog-content ${void 0 !== this.dataset.class ? ` ${this.dataset.class}` : ""}">\n                ${p = this.dataset.iconPath,
                    void 0 !== p ? `<img class="icon" src="${p}" />` : ""}\n                ${u = this.dataset.title,
                    void 0 !== u ? `<h2 class="header-title">${u}</h2>` : ""}\n                ${null !== t ? t.outerHTML : (d = this.dataset.subtitle,
                    void 0 !== d ? `<h3 class="header-subtitle">${d}</h3>` : "")}\n                ${null !== a ? a.outerHTML : (c = this.dataset.bodyText,
                    void 0 !== c ? `<div class="body-text"><p>${c}</p></div>` : "")}\n                ${s = this.dataset.buttonId,
                    l = this.dataset.buttonText,
                    void 0 !== l ? `<button ${void 0 !== s ? `id="${s}"` : ""} class="dialog-action">${l}</button>` : ""}\n                ${o = this.dataset.hideCancel,
                    void 0 === o ? `<button class="dialog-cancel dialog-close">${n.p[e].Shared.Cancel}</button>` : ""}\n                ${r = this.dataset.legalText,
                    void 0 !== r && "" !== r ? `<p class="dialog-legal-text">${r}</p>` : ""}\n            </div>`;
                    var r, o, s, l, c, d, u, p;
                    this.outerHTML = i
                }
            }
            class $ extends HTMLElement {
                constructor() {
                    super(),
                    this._dialogKeys = {
                        activeDialogContent: ".dialog-content:not(.hide)",
                        dialogClose: "dialog-close",
                        dialogWidthSet: "dialog-width-set",
                        dialogWrapper: "dialog-wrapper",
                        hide: "hide",
                        loading: "loading",
                        lockout: "lockout",
                        show: "show"
                    },
                    this._dialogElement = null
                }
                RenderElement() {
                    const e = this.innerHTML
                      , t = `\n            <div id="${this.dataset.id}" class="dialog-wrapper" tabindex="-1">\n                <div class="dialog-width-set">\n                    <div class="dialog">\n                        <button class="dialog-close dialog-close-icon"><span class="icon-x"></span></button>\n                        ${e}\n                        <div class="dialog-loading">\n                            <div class="spinner"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>`;
                    this.outerHTML = t,
                    this._dialogElement = this.querySelector(this.dataset.id);
                    const a = document.querySelectorAll("vhr-dialog-content");
                    for (let e = 0, t = a.length; e < t; e++)
                        a[e].RenderElement();
                    const n = document.getElementById(this.dataset.id);
                    n.addEventListener("keydown", (e=>{
                        if ("Esc" !== e.key && "Escape" !== e.key || !1 === e.currentTarget.classList.contains(this._dialogKeys) && this.CloseDialog(),
                        "Tab" === e.key)
                            if (!1 === e.currentTarget.classList.contains(this._dialogKeys.loading)) {
                                var t = n.querySelector(this._dialogKeys.activeDialogContent).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                                if (t.length > 0) {
                                    var a = n.querySelector(`.${this._dialogKeys.dialogClose}`)
                                      , i = t[t.length - 1];
                                    e.shiftKey || e.target !== i || (a.focus(),
                                    e.preventDefault()),
                                    e.shiftKey && e.target === a && (i.focus(),
                                    e.preventDefault())
                                } else
                                    e.preventDefault()
                            } else
                                e.preventDefault()
                    }
                    ), !0),
                    n.addEventListener("click", (e=>{
                        (e.target.classList.contains(this._dialogKeys.dialogWrapper) || e.target.classList.contains(this._dialogKeys.dialogWidthSet) || e.target.classList.contains(this._dialogKeys.dialogClose)) && this.CloseDialog(e.currentTarget)
                    }
                    ))
                }
                CloseDialog() {
                    const e = document.getElementById(this.dataset.id);
                    !1 === e.classList.contains(this._dialogKeys.loading) && !1 === e.classList.contains(this._dialogKeys.lockout) && (e.classList.remove(this._dialogKeys.show),
                    document.body.style.overflow = "")
                }
                ShowDialog() {
                    const e = document.getElementById(this.dataset.id);
                    e.classList.add(this._dialogKeys.show),
                    e.focus(),
                    document.body.style.overflow = "hidden"
                }
                LockoutDialog() {
                    document.getElementById(this.dataset.id).classList.add(this._dialogKeys.lockout)
                }
                ShowDialogLoading() {
                    document.getElementById(this.dataset.id).classList.add(this._dialogKeys.loading)
                }
            }
            class M extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = this._data.DynamicUpgradeViewModel
                      , r = this._data.VehicleDetailsViewModel
                      , o = 6 === this._data.ReportTypeId || a.LienExpressesAdded || 10 === this._data.WebReportType
                      , s = function(e) {
                        return e.ShowLienCheckUpgrade ? n.p[t].Upgrade.AddLienCheck : n.p[t].Upgrade.AddLienExpress
                    }(a)
                      , l = `\n            <div id="lien-check" class="lien-check-wrapper">\n                <div class="lien-check lien-upgrade">\n                    <div class="lien-check-results-wrapper">\n\t\t\t            <h3 class="lien-check-h3">\n                            ${function(e) {
                        return e ? n.p[t].Lien.LienExpressSectionHeading : n.p[t].Lien.SectionHeading
                    }(o)}\n                        </h3>\n                        <div class="lien-check-results">\n                            <p>\n                                <button class="upgrade-dialog" id="lien-upgrade"\n\t\t\t\t\t\t\t    data-reportid="${function() {
                        const e = new URLSearchParams(window.location.search);
                        return encodeURIComponent(e.get("id"))
                    }()}"\n\t\t\t\t\t\t\t    data-lientype="${a.ShowLienCheckUpgrade ? "lien" : "lienexpress"}">\n\t\t\t\t\t\t\t        ${s}\n\t\t\t\t\t\t        </button>\n                            </p>\n                        </div>\n                        <vhr-dialog id="dialog" data-id="lien-check-dialog">\n                            <vhr-dialog-content data-id="lien-upgrade-screenOne"\n                            data-icon-path="${e}/icon-warning.svg"\n                            data-title="${s}"\n                            data-button-id="lien-upgrade-final-button"\n                            data-button-text="${n.p[t].Upgrade.BuyNow}"\n                            data-legal-text="${function(e) {
                        return e.ShowLienCheckUpgrade ? "" : n.p[t].Upgrade.LienExpressLegal
                    }(a)}">\n                                <h3 class="header-subtitle">${n.p[t].Shared.VIN}: <span class="vin">${r.Vin}</span></h3>\n                                <div class="body-text">\n                                    ${function(e) {
                        const a = e.PricingDictionary;
                        let r = ""
                          , o = "";
                        if (e.ShowLienCheckUpgrade)
                            r = n.p[t].Upgrade.PurchaseLienCheck,
                            o = (0,
                            i.FormatCurrency)(t, e.Price);
                        else
                            for (let[e,s] of Object.entries(a))
                                r += `<p>${n.p[t].Shared.Provinces[e]}:</p>`,
                                o += `<p>${(0,
                                i.FormatCurrency)(t, s)}</p>`;
                        return `<p>${function(e) {
                            return e.ShowLienCheckUpgrade ? n.p[t].Upgrade.BuyVHRLCheckModalBodyText : `${n.p[t].Upgrade.LienExpressPopUpBodyOne} <strong>${n.p[t].Upgrade.LienExpressPopUpBodyTwo}</strong>`
                        }(e)}</p>\n                <div class="upgrade-price-wrapper">\n                    <div class="upgrade-label">\n\t                    <div>${r}</div>\n\t                    <div><strong>${n.p[t].Upgrade.Total}:</strong></div>\n                    </div>\n                    <div class="upgrade-price">\n\t                    <div>${o}</div>\n\t                    <div><strong>${(0,
                        i.FormatCurrency)(t, e.Total)}</strong></div>\n                    </div>\n                </div>`
                    }(a)}\n                                </div>\n                            </vhr-dialog-content>\n                            <vhr-dialog-content data-id="lien-upgrade-success"\n                            data-icon-path="${e}/icon-check.svg"\n                            data-class="hide"\n                            data-title="${n.p[t].Upgrade.SuccessfulUpgrade}"\n                            data-button-id="lien-upgrade-success-button"\n                            data-button-text="${n.p[t].Upgrade.AccessReport}"\n                            data-hide-cancel="true">\n                                <div class="body-text">\n                                    <p class="lien-check-upgrade-success">${n.p[t].Upgrade.SuccessfulUpgradeBodyOne}</p>\n                    </br>\n                    <p><span class="lien-check-upgrade-note"><strong>${n.p[t].Shared.PleaseNote}:</strong></span> ${n.p[t].Upgrade.SuccessfulUpgradeBodyTwo}</p>\n                                </div>\n                            </vhr-dialog-content>\n                            <vhr-dialog-content data-id="lien-upgrade-error"\n                            data-icon-path="${e}/icon-error.svg"\n                            data-class="hide"\n                            data-title="${n.p[t].Upgrade.ErrorTitle}"\n                            data-button-id="lien-upgrade-error-button"\n                            data-button-text="${n.p[t].Upgrade.AccessReport}"\n                            data-hide-cancel="true">\n                                <div class="body-text">\n                                    <p>\n                        ${n.p[t].Upgrade.ErrorTryAgain}\n                        ${d()}\n                    </p>\n                                </div>\n                            </vhr-dialog-content>\n                            <vhr-dialog-content data-id="lien-upgraded"\n                            data-icon-path="${e}/icon-warning.svg"\n                            data-class="hide"\n                            data-title="${n.p[t].Upgrade.ReportAlreadyUpgraded}"\n                            data-button-id="lien-upgraded-button"\n                            data-button-text="${n.p[t].Upgrade.ViewUpgradedReport}">\n                                <div class="body-text">\n                                    <p>\n                        ${n.p[t].Upgrade.ErrorAlreadyUpgraded}\n                        ${d()}\n                    </p>\n                                </div>\n                            </vhr-dialog-content>\n                        </vhr-dialog>\n                    </div>\n                </div>\n            </div>`;
                    this.outerHTML = l;
                    const c = document.getElementById("dialog");
                    function d() {
                        return `<span class="contact-info">\n                            <a href="tel:${n.p[t].Shared.CarfaxPhone}">${n.p[t].Shared.CarfaxPhone}</a>\n                            <span class="contact-or">${n.p[t].Shared.YouCanVisitOur}</span>\n                            <a href="${n.p[t].Shared.SupportPortalLink}">${n.p[t].Shared.CustomerSupportPortal}</a>\n                        </span>\n                        ${n.p[t].Upgrade.ErrorForAssistance}`
                    }
                    null !== c && c.RenderElement(),
                    document.addEventListener("click", (e=>{
                        e.target.classList.contains("upgrade-dialog") && c.ShowDialog()
                    }
                    ));
                    const u = document.getElementById("lien-upgrade-screenOne")
                      , p = document.getElementById("lien-upgrade")
                      , h = document.getElementById("lien-check-dialog");
                    function m() {
                        u.classList.add("hide"),
                        document.getElementById("lien-upgrade-error").classList.remove("hide"),
                        h.classList.remove("loading")
                    }
                    if (null !== p) {
                        let e = "";
                        const t = p.dataset.reportid
                          , a = document.documentElement.getAttribute("lang")
                          , n = p.dataset.lientype;
                        p.addEventListener("click", (()=>{
                            c.ShowDialog()
                        }
                        )),
                        "True" === p.dataset.onload && (window.onload = ()=>c.ShowDialog()),
                        document.getElementById("lien-upgrade-final-button").addEventListener("click", (()=>{
                            c.ShowDialogLoading(),
                            fetch(`/Update/CheckIfUpgradeExists?reportId=${t}&upgradeType=lien`).then((e=>{
                                if (200 === e.status)
                                    return e.text();
                                throw e.status
                            }
                            )).then((a=>{
                                "" !== a ? (e = "lien" === n ? a : t,
                                u.classList.add("hide"),
                                document.getElementById("lien-upgraded").classList.remove("hide"),
                                h.classList.remove("loading")) : fetch(`/Update/UpgradeVhr?reportId=${t}`).then((e=>{
                                    if (200 === e.status)
                                        return e.text();
                                    throw e.status
                                }
                                )).then((t=>{
                                    e = t,
                                    u.classList.add("hide"),
                                    document.getElementById("lien-upgrade-success").classList.remove("hide"),
                                    h.classList.remove("loading")
                                }
                                )).catch((()=>{
                                    m()
                                }
                                ))
                            }
                            )).catch((()=>{
                                m()
                            }
                            ))
                        }
                        )),
                        document.getElementById("lien-upgrade-success-button").addEventListener("click", (()=>{
                            window.location.href = "/" + a + "/?id=" + e
                        }
                        )),
                        document.getElementById("lien-upgrade-error-button").addEventListener("click", (()=>{
                            location.reload()
                        }
                        )),
                        document.getElementById("lien-upgraded-button").addEventListener("click", (()=>{
                            window.location.href = "/" + a + "/?id=" + e
                        }
                        ))
                    }
                }
            }
            class U extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {}
                }
                set data(e) {
                    this._data = e,
                    this.RenderElement()
                }
                RenderElement() {
                    const e = document.getElementById("vhr").dataset.imageSrc
                      , t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                      , a = new URLSearchParams(window.location.search)
                      , i = null !== a.get("isMobileAppRequest") && "true" === a.get("isMobileAppRequest")
                      , r = this._data.VehicleDetailsViewModel
                      , o = this._data.DynamicUpgradeViewModel.BCUpgradePrice
                      , s = this._data.DynamicUpgradeViewModel.BCUpgradeNoticeStatus
                      , l = `\n\t\t\t<section class="bcupgrade-section">\n\t\t\t\t<div class="warning-notice">\n\t\t\t\t\t ${!i || 4 !== s && 0 !== s && 3 !== s && 1 !== s && 2 !== s ? function(a, i, r) {
                        let o = "";
                        switch (i) {
                        case 4:
                            o += `<span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="consumer-notice">\n\t\t\t\t\t\t\t\t\t\t\t<strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailICBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailObtainICBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<a href="${n.p[t].Shared.SupportPortalAddIcbcLink}" target="_blank">${n.p[t].BCUpgradeMessage.RetailFAQ}</a>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailNextSteps}</span>\n\t\t\t\t\t\t\t\t\t\t</p>`;
                            break;
                        case 2:
                            o += `<span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="consumer-notice">\n\t\t\t\t\t\t\t\t\t\t\t<strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.RetailICBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.ContactSupportStart}</span>\n\t\t\t\t\t\t\t\t\t\t\t ${d(i)}\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.ContactSupportEnd}</span>\n\t\t\t\t\t\t\t\t\t\t</p>`;
                            break;
                        case 0:
                        case 3:
                        case 1:
                            o += `<span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="dealer-same-day">\n\t\t\t\t\t\t\t\t\t\t\t<strong>${n.p[t].Shared.PleaseNote}:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.VehicleRegisteredInBC}</span>\n\t\t\t\t\t\t\t\t\t\t\t<strong>${u(n.p[t].BCUpgradeMessage.DealerSameDay, a)}</strong>\n\t\t\t\t\t\t\t\t\t\t\t<button id="icbc-upgrade-button-text-buynow" class="icbc-upgrade"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-dialogid="icbc-upgrade"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-reportid="${function() {
                                const e = new URLSearchParams(window.location.search);
                                return encodeURIComponent(e.get("id"))
                            }(n.p[t].BCUpgradeMessage.DealerSameDay)}"\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-onload="${3 === i || 1 === i}">\n\t\t\t\t\t\t\t\t\t\t\t\t ${n.p[t].Upgrade.BuyNow}\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<vhr-dialog id="bc-upgrade-dialog" data-id="icbc-upgrade">\n\t\t\t\t\t\t\t\t\t\t\t<vhr-dialog-content data-id="icbc-upgrade-screen-one"\n\t\t\t\t\t\t\t\t\t\t\tdata-icon-path="${e}/icon-warning.svg"\n\t\t\t\t\t\t\t\t\t\t\tdata-title="${n.p[t].BCUpgradeMessage.AddIcbcDataTitle}"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-id="icbc-upgrade-final-button"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-text="${n.p[t].Upgrade.BuyNow}">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="header-subtitle">${n.p[t].Shared.VIN}: <span class="vin">${r.Vin}</span></h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="body-text">\n\t\t\t\t\t\t\t\t\t\t\t\t\t ${function(e, a) {
                                return `<p class="icbc-upgrade-price">\n\t\t\t\t\t\t ${u(n.p[t].BCUpgradeMessage.ICBCChargesMoney, e)}\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>${n.p[t].BCUpgradeMessage.AutoIncludeICBC} ${d(a)}</p>`
                            }(a, i)}\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</vhr-dialog-content>\n\n\t\t\t\t\t\t\t\t\t\t\t<vhr-dialog-content data-id="icbc-upgrade-success"\n\t\t\t\t\t\t\t\t\t\t\tdata-icon-path="${e}/icon-check.svg"\n\t\t\t\t\t\t\t\t\t\t\tdata-title="${n.p[t].BCUpgradeMessage.SuccessfulUpgradeTitle}"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-id="icbc-upgrade-success-access-report-button"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-text="${n.p[t].Upgrade.AccessReport}"\n\t\t\t\t\t\t\t\t\t\t\tdata-hide-cancel="true"\n\t\t\t\t\t\t\t\t\t\t\tdata-class="hide">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="body-text">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="icbc-upgrade-success">${n.p[t].BCUpgradeMessage.SuccessfulUpgradeBodyOne}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</vhr-dialog-content>\n\n\t\t\t\t\t\t\t\t\t\t\t<vhr-dialog-content data-id="icbc-upgrade-error"\n\t\t\t\t\t\t\t\t\t\t\tdata-icon-path="${e}/icon-error.svg"\n\t\t\t\t\t\t\t\t\t\t\tdata-title="${n.p[t].Shared.DialogErrorTitle}"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-id="icbc-upgrade-error-access-report-button"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-text="${n.p[t].Upgrade.AccessReport}"\n\t\t\t\t\t\t\t\t\t\t\tdata-hide-cancel="true"\n\t\t\t\t\t\t\t\t\t\t\tdata-class="hide">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="body-text">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>${n.p[t].Shared.DialogErrorTryAgain} ${d(i)} ${n.p[t].Shared.DialogErrorForAssistance}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</vhr-dialog-content>\n\n\t\t\t\t\t\t\t\t\t\t\t<vhr-dialog-content data-id="icbc-report-upgraded"\n\t\t\t\t\t\t\t\t\t\t\tdata-icon-path="${e}/icon-warning.svg"\n\t\t\t\t\t\t\t\t\t\t\tdata-title="${n.p[t].Upgrade.ReportAlreadyUpgraded}"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-id="icbc-report-upgraded-button"\n\t\t\t\t\t\t\t\t\t\t\tdata-button-text="${n.p[t].Upgrade.ViewUpgradedReport}"\n\t\t\t\t\t\t\t\t\t\t\tdata-class="hide">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="body-text">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>${n.p[t].Shared.DialogErrorAlreadyUpgraded} ${d(i)} ${n.p[t].Shared.DialogErrorForAssistance}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</vhr-dialog-content>\n\t\t\t\t\t\t\t\t\t\t</vhr-dialog>`;
                            break;
                        case 5:
                            o += `<span class="icon-info icon-warning"></span>\n\t\t\t\t\t\t\t\t\t\t<p class="icbc-error">\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoTitle}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoStart}</span>\n\t\t\t\t\t\t\t\t\t\t\t ${d(i)}\n\t\t\t\t\t\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.NoICBCInfoEnd}</span>\n\t\t\t\t\t\t\t\t\t\t</p>`
                        }
                        return o
                    }(o, s, r) : function(e) {
                        return `<span class="icon-info icon-warning"></span>\n\t\t\t\t\t<p class="consumer-notice">\n\t\t\t\t\t\t<strong>${n.p[t].BCUpgradeMessage.MobilePleaseNote}:</strong>\n\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.MobileVehicleRegisteredInBC}</span>\n\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.ContactSupportStart}</span>\n\t\t\t\t\t\t ${d(e)}\n\t\t\t\t\t\t<span>${n.p[t].BCUpgradeMessage.ContactSupportEnd}</span>\n\t\t\t\t\t</p>`
                    }(s)}\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t`;
                    this.innerHTML = l;
                    const c = document.getElementById("bc-upgrade-dialog");
                    function d(e) {
                        return `<span class="contact-info">\n                        <a href="tel:${n.p[t].Shared.PhoneNumberSupport}">${n.p[t].Shared.PhoneNumberSupport}</a>\n                        <span class="contact-or-not-bold">${n.p[t].Shared.OrVisitOur}</span>\n                        <a href="${n.p[t].Shared.SupportPortalLink}" target="_blank">${n.p[t].Shared.CustomerSupportPortal}</a>${function(e) {
                            switch (e) {
                            case 4:
                            case 2:
                            case 1:
                            default:
                                return ",";
                            case 0:
                            case 3:
                                return "";
                            case 5:
                                return "."
                            }
                        }(e)}\n                    </span>`
                    }
                    function u(e, t) {
                        return e.replace(/&lt;!--AMOUNT--&gt;|<!--AMOUNT-->/g, t)
                    }
                    null !== c && c.RenderElement(),
                    document.addEventListener("click", (e=>{
                        e.target.classList.contains("icbc-upgrade") && c.ShowDialog()
                    }
                    ));
                    const p = document.getElementById("icbc-upgrade-screen-one")
                      , h = document.getElementById("icbc-upgrade")
                      , m = document.getElementById("icbc-upgrade-button-text-buynow");
                    function g() {
                        p.classList.add("hide"),
                        document.getElementById("icbc-upgrade-error").classList.remove("hide"),
                        h.classList.remove("loading")
                    }
                    if (null !== m) {
                        let e = "";
                        const t = m.dataset.reportid
                          , a = document.documentElement.getAttribute("lang")
                          , n = !0;
                        m.addEventListener("click", (()=>{
                            c.ShowDialog()
                        }
                        )),
                        "true" === m.dataset.onload && (window.onload = ()=>c.ShowDialog()),
                        document.getElementById("icbc-upgrade-final-button").addEventListener("click", (()=>{
                            c.ShowDialogLoading(),
                            fetch(`/Update/CheckIfUpgradeExists?reportId=${t}&upgradeType=icbc`).then((e=>{
                                if (200 === e.status)
                                    return e.text();
                                throw e.status
                            }
                            )).then((a=>{
                                "" !== a ? (e = a,
                                p.classList.add("hide"),
                                document.getElementById("icbc-report-upgraded").classList.remove("hide"),
                                h.classList.remove("loading")) : fetch(`/Update/UpgradeToBC?uvipRequestId=${t}&upgradeValue=${n}`).then((e=>{
                                    if (200 === e.status)
                                        return e.text();
                                    throw e.status
                                }
                                )).then((t=>{
                                    e = t,
                                    p.classList.add("hide"),
                                    document.getElementById("icbc-upgrade-success").classList.remove("hide"),
                                    h.classList.remove("loading")
                                }
                                )).catch((()=>{
                                    g()
                                }
                                ))
                            }
                            )).catch((()=>{
                                g()
                            }
                            ))
                        }
                        )),
                        document.getElementById("icbc-upgrade-success-access-report-button").addEventListener("click", (()=>{
                            window.location.href = "/" + a + "/?id=" + e
                        }
                        )),
                        document.getElementById("icbc-upgrade-error-access-report-button").addEventListener("click", (()=>{
                            location.reload()
                        }
                        )),
                        document.getElementById("icbc-report-upgraded-button").addEventListener("click", (()=>{
                            window.location.href = "/" + a + "/?id=" + e
                        }
                        ))
                    }
                }
            }
            class H extends HTMLElement {
                constructor() {
                    super(),
                    this._data = {},
                    this._renderedSections = {
                        Menu: !1,
                        ReportInfo: !1,
                        Highlight: !1,
                        Tile: !1,
                        Disclaimer: !1,
                        ReportType: !1,
                        Lien: !1,
                        Accident: !1,
                        Registration: !1,
                        Service: !1,
                        Recalls: !1,
                        Stolen: !1,
                        Detailed: !1,
                        OtherRecords: !1,
                        Footer: !1,
                        Legal: !1,
                        LienDetails: !1
                    },
                    this._hasUsRecords = !1
                }
                connectedCallback() {
                    this.innerHTML = '\n\t\t\t<vhr-summary id="vhrSummary"></vhr-summary>\n\t\t\t<vhr-body id="vhrBody"></vhr-body>\n\t\t';
                    const e = document.getElementById("vhrSummary")
                      , t = document.getElementById("vhrBody")
                      , a = new URLSearchParams(window.location.search);
                    this.addEventListener("rendered", (e=>{
                        !function(e, t) {
                            "vhrMenu" === e.target.id && (t.Menu = !0),
                            "vhrReportInfo" === e.target.id && (t.ReportInfo = !0),
                            "vhrVehicleHighlight" === e.target.id && (t.Highlight = !0),
                            "vhrVehicleHistoryTile" === e.target.id && (t.Tile = !0),
                            "vhrDisclaimer" === e.target.id && (t.Disclaimer = !0),
                            "vhrDisclaimer" === e.target.id && (t.Disclaimer = !0),
                            "vhrReportType" === e.target.id && (t.ReportType = !0),
                            "vhrLien" === e.target.id && (t.Lien = !0),
                            "vhrAccident" === e.target.id && (t.Accident = !0),
                            "vhrRegistration" === e.target.id && (t.Registration = !0),
                            "vhrServiceHistory" === e.target.id && (t.Service = !0),
                            "vhrRecall" === e.target.id && (t.Recalls = !0),
                            "vhrStolen" === e.target.id && (t.Stolen = !0),
                            "vhrDetailedHistory" === e.target.id && (t.Detailed = !0),
                            "vhrOther" === e.target.id && (t.OtherRecords = !0),
                            "vhrFooter" === e.target.id && (t.Footer = !0),
                            "vhrLegal" === e.target.id && (t.Legal = !0),
                            "vhrLienDetails" === e.target.id && (t.LienDetails = !0)
                        }(e, this._renderedSections),
                        function(e) {
                            let t = !0;
                            for (let a in e._renderedSections)
                                t = t && e._renderedSections[a];
                            if (t) {
                                const t = window.location.hash;
                                "" !== t && (location.hash = "",
                                location.hash = t),
                                e.setAttribute("data-loaded", "true")
                            }
                        }(this)
                    }
                    ));
                    const n = -1 !== location.pathname.indexOf("sample");
                    if (this._data = reportJson,
                    n) {
                        const e = new Date
                          , t = e.getDate();
                        this._data.ReportDay = t.toString(),
                        this._data.ReportMonth = `${e.getMonth() + 1}`,
                        this._data.ReportYear = e.getFullYear().toString()
                    }
                    this._data.VehicleHistoryTilesViewModel.HasUsRecords && (this._hasUsRecords = !0),
                    function(e, t) {
                        const n = null !== a.get("isMobileAppRequest") && "true" === a.get("isMobileAppRequest")
                          , i = !1 === e.HideLiens && void 0 !== e.LienViewModel.ActiveLiens && Object.keys(e.LienViewModel.ActiveLiens).length > 0;
                        if (n && (t.Menu = !0),
                        !1 === e.DisplayFlags.ShowHighlights && (t.Highlight = !0),
                        6 === e.WebReportType && 5 === e.WebReportType && (t.Disclaimer = !0),
                        6 === e.WebReportType)
                            t.Highlight = !0,
                            t.Tile = !0,
                            t.ReportType = !0,
                            t.Accident = !0,
                            t.Registration = !0,
                            t.Service = !0,
                            t.Recalls = !0,
                            t.Stolen = !0,
                            t.Detailed = !0,
                            t.OtherRecords = !0,
                            t.Disclaimer = !0,
                            t.LienDetails = !i;
                        else {
                            const a = e.DynamicUpgradeViewModel
                              , n = !1 === e.HideLiens && a.ShowLien || a.ShowSubscriptionLiens && a.LienExpressesAdded && !1 === e.HideLiens
                              , r = e.DisplayFlags.ShowClaimsEstimates
                              , o = e.DisplayFlags.ShowServiceHistory
                              , s = e.OtherRecordsViewModel.ListOfOtherRecords.length > 0;
                            t.Lien = !1 === n,
                            t.Accident = !1 === r,
                            t.Service = !1 === o,
                            t.LienDetails = !1 === i,
                            t.OtherRecords = !1 === s,
                            5 === e.WebReportType && (t.Highlight = !0,
                            t.Disclaimer = !0,
                            t.Tile = !0,
                            t.ReportType = !0,
                            t.Accident = !0)
                        }
                    }(this._data, this._renderedSections),
                    document.querySelector(".loading-screen").dataset.loaded = "true",
                    document.querySelector(".loading-screen").style.display = "none",
                    e.data = reportJson,
                    t.data = reportJson
                }
            }
            customElements.define("vhr-tooltip", u),
            customElements.define("vhr-pending-section", p),
            customElements.define("vhr-expand", h),
            customElements.define("vhr-menu", r),
            customElements.define("vhr-report-info", R),
            customElements.define("vhr-vehicle-detail", m),
            customElements.define("vhr-vehicle-highlight", g),
            customElements.define("vhr-vehicle-history-tile", T),
            customElements.define("vhr-dialog-content", O),
            customElements.define("vhr-dialog", $),
            customElements.define("vhr-upgrade", M),
            customElements.define("vhr-bc-upgrade", U),
            customElements.define("vhr-summary", o),
            customElements.define("vhr-lien", s),
            customElements.define("vhr-accident", l),
            customElements.define("vhr-registration", C),
            customElements.define("vhr-service-history", c),
            customElements.define("vhr-recall", v),
            customElements.define("vhr-stolen", y),
            customElements.define("vhr-detailed-history", N),
            customElements.define("vhr-other", S),
            customElements.define("vhr-footer", f),
            customElements.define("vhr-legal", b),
            customElements.define("vhr-lien-details", A),
            customElements.define("vhr-back-to-top", E),
            customElements.define("vhr-disclaimer", w),
            customElements.define("vhr-information-banner", D),
            customElements.define("vhr-report-type", L),
            customElements.define("vhr-lien-summary", I),
            customElements.define("vhr-body", d),
            customElements.define("vhr-base", H)
        }
        ,
        596: (e,t,a)=>{
            "use strict";
            a.r(t),
            a.d(t, {
                AddAndRemoveToggleClass: ()=>R,
                BackToTop: ()=>C,
                FormatCurrency: ()=>m,
                RenderedEvent: ()=>v,
                TranslateLocationString: ()=>u,
                TranslateOdometer: ()=>g,
                flipImages: ()=>r,
                reverseElements: ()=>s,
                sortCards: ()=>c,
                sortData: ()=>d,
                sortTable: ()=>l,
                switchSortImages: ()=>o,
                toggleKeys: ()=>i
            });
            var n = a(171);
            const i = {
                sortKeys: {
                    Sorter: "content-sort"
                },
                cardContent: {
                    Vhr: ".vhr",
                    Key: "content-toggle",
                    KeyTwo: "card-toggle",
                    ToggleClass: "collapse"
                },
                summaryMenu: {
                    Default: "default",
                    MenuContainer: ".menu-container",
                    MenuClass: "menu-button",
                    OpenMenuOne: "openMenuOne",
                    OpenMenuTwo: "openMenuTwo",
                    MenuClose: "menuClose",
                    MenuBack: "menuBack",
                    OneActive: "menu-one",
                    TwoActive: "menu-two",
                    BodyMenuOpen: "menu-open",
                    FrenchLang: "frenchLink",
                    GlossaryLink: "glossaryLink",
                    MenuOneOpen: !1
                }
            };
            function r(e, t, a) {
                e.classList.contains(t) ? e.className = e.className.replace(t, a) : e.className = e.className.replace(a, t)
            }
            function o(e) {
                e.classList.contains("sort-default") ? (e.classList.remove("sort-default"),
                e.classList.add("sort-desc")) : r(e, "sort-asc", "sort-desc")
            }
            function s(e, t) {
                t.reverse();
                for (let a = 0, n = t.length; a < n; a++)
                    e.appendChild(t[a])
            }
            function l(e) {
                const t = document.getElementById(e);
                o(t),
                s(t.querySelector("tbody"), Array.prototype.slice.apply(t.querySelectorAll("tbody > tr")))
            }
            function c(e) {
                const t = document.getElementById(e);
                o(t);
                const a = t.querySelector(".card-container")
                  , n = Array.prototype.slice.apply(a.querySelectorAll(".card"));
                n.reverse();
                for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e]
                      , i = t.querySelector(".card-inner > .card-content")
                      , r = Array.prototype.slice.apply(i.querySelectorAll(".mobile-table-row"));
                    s(i, r),
                    a.appendChild(t)
                }
            }
            function d(e) {
                const t = e.target;
                if (t.classList.contains("content-sort")) {
                    const e = t.dataset.sorttable
                      , a = t.dataset.sortcards;
                    l(e),
                    c(a)
                }
            }
            function u(e) {
                const t = document.getElementsByTagName("HTML")[0].getAttribute("lang")
                  , a = e.split(", ");
                let i = "";
                for (let e = 0, r = a.length; e < r; e++) {
                    const o = a[e];
                    let s = n.p[t].Shared.Countries[o];
                    void 0 === s && (s = n.p[t].Shared.Provinces[o]),
                    void 0 === s && (s = o),
                    i += s,
                    r > 1 && e < r - 1 && (i += ", ")
                }
                return i
            }
            const p = new Intl.NumberFormat("fr",{
                style: "currency",
                currency: "CAD",
                currencyDisplay: "symbol",
                currencySign: "accounting"
            })
              , h = new Intl.NumberFormat("en",{
                style: "currency",
                currency: "CAD",
                currencyDisplay: "symbol",
                currencySign: "accounting"
            });
            function m(e, t) {
                return null !== t ? "fr" === e ? p.format(t).replace("CA", "") : h.format(t).replace("CA", "") : ""
            }
            function g(e, t) {
                const a = /,/g;
                return t.includes("KM") && "fr" === e ? t.replace(a, " ").replace("*U", "*I").toLowerCase() : t.replace(a, " ").replace("*U", "*I")
            }
            const v = new CustomEvent("rendered",{
                bubbles: !0
            });
            function C() {
                const e = document.getElementById("back-to-top");
                new IntersectionObserver((t=>{
                    t.forEach((t=>{
                        t.target.classList.contains("summary") && null !== e && (t.intersectionRatio < .5 ? e.classList.add("show") : e.classList.remove("show"))
                    }
                    ))
                }
                ),{
                    threshold: .5
                }).observe(document.querySelector(".summary"))
            }
            function R(e) {
                if (!e.target.classList.contains(i.cardContent.Key)) {
                    const t = e.target.parentElement.parentElement;
                    t.classList.contains(i.cardContent.ToggleClass) ? t.classList.remove(i.cardContent.ToggleClass) : t.classList.add(i.cardContent.ToggleClass)
                }
                if (e.target.classList.contains(i.cardContent.Key)) {
                    const t = e.target.parentElement.parentElement.parentElement;
                    t.classList.contains(i.cardContent.ToggleClass) ? t.classList.remove(i.cardContent.ToggleClass) : t.classList.add(i.cardContent.ToggleClass)
                }
            }
        }
        ,
        857: (e,t,a)=>{
            "use strict";
            a.r(t),
            document.addEventListener("keydown", (e=>{
                if ("Esc" === e.key || "Escape" === e.key) {
                    const e = document.querySelectorAll("vhr-tooltip.tooltip-open");
                    if (null !== e)
                        for (let t = 0, a = e.length; t < a; t++)
                            e[t].HideTooltip()
                }
                if ("Tab" === e.key) {
                    const t = document.querySelectorAll("vhr-tooltip.tooltip-open");
                    if (null !== t)
                        for (let a = 0, n = t.length; a < n; a++)
                            window.matchMedia("only screen and (min-width: 577px)").matches && t[a].HideTooltip(),
                            window.matchMedia("only screen and (max-width: 577px)").matches && (document.querySelector("vhr-tooltip.tooltip-open .tooltip-close").focus(),
                            e.preventDefault())
                }
            }
            ), !0)
        }
    }
      , t = {};
    function a(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, a),
        r.exports
    }
    a.d = (e,t)=>{
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    a.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a(324),
    a(857),
    a(596),
    a(249),
    window.addEventListener("message", (function(e) {
        e.origin.indexOf("dealer") > 0 && e.origin.indexOf(".carfax.ca") > 0 && "print" === e.data && (this.print(),
        e.source.postMessage("printed", e.origin))
    }
    ))
}
)();
