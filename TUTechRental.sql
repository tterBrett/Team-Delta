CREATE DATABASE if not exists Inventory; 
use Inventory; 
-- Current Inventory and Cataloging as of the Spring of 2023 semester:
-- Amount of items in commented tags listed may change for future additions and removals of devices.

-- Mouses Table:

DROP TABLE IF EXISTS MSE; 

CREATE TABLE MSE 
(
	unique_ID varchar(4) PRIMARY KEY,
	brand char(10), 
	checked_Out bit 
); 

INSERT INTO MSE VALUES ('0001', 'Dell', 0); 
INSERT INTO MSE VALUES ('0002', 'Dell', 0); 
INSERT INTO MSE VALUES ('0003', 'Dell', 0); 
INSERT INTO MSE VALUES ('0004', 'Dell', 0); 
INSERT INTO MSE VALUES ('0005', 'Dell', 0); 
INSERT INTO MSE VALUES ('0006', 'Dell', 0); 
INSERT INTO MSE VALUES ('0007', 'Dell', 0); 
INSERT INTO MSE VALUES ('0008', 'Dell', 0); 
INSERT INTO MSE VALUES ('0009', 'Dell', 0); 
INSERT INTO MSE VALUES ('0010', 'Dell', 0); 

INSERT INTO MSE VALUES ('0011', 'Dell', 0); 
INSERT INTO MSE VALUES ('0012', 'Dell', 0); 
INSERT INTO MSE VALUES ('0013', 'Dell', 0); 
INSERT INTO MSE VALUES ('0014', 'Dell', 0); 
INSERT INTO MSE VALUES ('0015', 'Dell', 0); 
INSERT INTO MSE VALUES ('0016', 'Dell', 0); 
INSERT INTO MSE VALUES ('0017', 'Dell', 0); 
INSERT INTO MSE VALUES ('0018', 'Dell', 0); 
INSERT INTO MSE VALUES ('0019', 'Dell', 0); 
INSERT INTO MSE VALUES ('0020', 'Dell', 0); 

INSERT INTO MSE VALUES ('0021', 'Dell', 0); 
INSERT INTO MSE VALUES ('0022', 'Dell', 0); 
INSERT INTO MSE VALUES ('0023', 'Dell', 0); 
INSERT INTO MSE VALUES ('0024', 'Dell', 0); 
INSERT INTO MSE VALUES ('0025', 'Dell', 0); 
INSERT INTO MSE VALUES ('0026', 'Dell', 0); 
INSERT INTO MSE VALUES ('0027', 'Dell', 0); 
INSERT INTO MSE VALUES ('0028', 'Dell', 0); 
INSERT INTO MSE VALUES ('0029', 'Dell', 0); 
INSERT INTO MSE VALUES ('0030', 'Dell', 0); 

INSERT INTO MSE VALUES ('0031', 'Dell', 0); 
INSERT INTO MSE VALUES ('0032', 'Dell', 0); 
INSERT INTO MSE VALUES ('0033', 'Dell', 0); 
INSERT INTO MSE VALUES ('0034', 'Dell', 0); 
INSERT INTO MSE VALUES ('0035', 'Dell', 0); 
INSERT INTO MSE VALUES ('0036', 'Dell', 0); 
INSERT INTO MSE VALUES ('0037', 'Dell', 0); 
INSERT INTO MSE VALUES ('0038', 'Dell', 0); 
INSERT INTO MSE VALUES ('0039', 'Dell', 0); 
INSERT INTO MSE VALUES ('0040', 'Dell', 0); 

INSERT INTO MSE VALUES ('0041', 'Dell', 0); 
INSERT INTO MSE VALUES ('0042', 'Dell', 0); 
INSERT INTO MSE VALUES ('0043', 'Dell', 0); 
INSERT INTO MSE VALUES ('0044', 'Dell', 0); 
INSERT INTO MSE VALUES ('0045', 'Dell', 0); 
INSERT INTO MSE VALUES ('0046', 'Dell', 0); 
INSERT INTO MSE VALUES ('0047', 'Dell', 0); 
INSERT INTO MSE VALUES ('0048', 'Dell', 0); 
INSERT INTO MSE VALUES ('0049', 'Dell', 0); 
INSERT INTO MSE VALUES ('0050', 'Dell', 0); 

INSERT INTO MSE VALUES ('0051', 'Dell', 0); 
INSERT INTO MSE VALUES ('0052', 'Dell', 0); 
INSERT INTO MSE VALUES ('0053', 'Dell', 0); 
INSERT INTO MSE VALUES ('0054', 'Dell', 0); 
INSERT INTO MSE VALUES ('0055', 'Dell', 0); 
INSERT INTO MSE VALUES ('0056', 'Dell', 0); 
INSERT INTO MSE VALUES ('0057', 'Dell', 0); 
INSERT INTO MSE VALUES ('0058', 'Dell', 0); 
INSERT INTO MSE VALUES ('0059', 'Dell', 0); 
INSERT INTO MSE VALUES ('0060', 'Dell', 0); 

INSERT INTO MSE VALUES ('0061', 'Dell', 0); 
INSERT INTO MSE VALUES ('0062', 'Dell', 0); 
INSERT INTO MSE VALUES ('0063', 'Dell', 0); 
INSERT INTO MSE VALUES ('0064', 'Dell', 0); 
INSERT INTO MSE VALUES ('0065', 'Dell', 0); 
INSERT INTO MSE VALUES ('0066', 'Dell', 0); 
INSERT INTO MSE VALUES ('0067', 'Dell', 0); 
INSERT INTO MSE VALUES ('0068', 'Dell', 0); 
INSERT INTO MSE VALUES ('0069', 'Dell', 0); 
INSERT INTO MSE VALUES ('0070', 'Dell', 0); 

INSERT INTO MSE VALUES ('0071', 'Dell', 0); 
INSERT INTO MSE VALUES ('0072', 'Dell', 0); 
INSERT INTO MSE VALUES ('0073', 'Dell', 0); 
INSERT INTO MSE VALUES ('0074', 'Dell', 0); 
INSERT INTO MSE VALUES ('0075', 'Dell', 0); 
INSERT INTO MSE VALUES ('0076', 'Dell', 0); 
INSERT INTO MSE VALUES ('0077', 'Dell', 0); 
INSERT INTO MSE VALUES ('0078', 'Dell', 0); 
INSERT INTO MSE VALUES ('0079', 'Dell', 0); 
INSERT INTO MSE VALUES ('0080', 'Dell', 0); 

INSERT INTO MSE VALUES ('0081', 'Dell', 0); 
INSERT INTO MSE VALUES ('0082', 'Dell', 0); 
INSERT INTO MSE VALUES ('0083', 'Dell', 0); 
INSERT INTO MSE VALUES ('0084', 'Dell', 0); 
INSERT INTO MSE VALUES ('0085', 'Dell', 0); 
INSERT INTO MSE VALUES ('0086', 'Dell', 0); 
INSERT INTO MSE VALUES ('0087', 'Dell', 0); 
INSERT INTO MSE VALUES ('0088', 'Dell', 0); 
INSERT INTO MSE VALUES ('0089', 'Dell', 0); 
INSERT INTO MSE VALUES ('0090', 'Dell', 0); 

INSERT INTO MSE VALUES ('0091', 'Dell', 0); 
INSERT INTO MSE VALUES ('0092', 'Dell', 0); 
INSERT INTO MSE VALUES ('0093', 'Dell', 0); 
INSERT INTO MSE VALUES ('0094', 'Dell', 0); 
INSERT INTO MSE VALUES ('0095', 'Dell', 0); 
INSERT INTO MSE VALUES ('0096', 'Dell', 0); 
INSERT INTO MSE VALUES ('0097', 'Dell', 0); 
INSERT INTO MSE VALUES ('0098', 'Dell', 0); 
INSERT INTO MSE VALUES ('0099', 'Dell', 0); 
INSERT INTO MSE VALUES ('0100', 'Dell', 0); 

INSERT INTO MSE VALUES ('0101', 'Apple', 0); 
INSERT INTO MSE VALUES ('0102', 'Apple', 0);
INSERT INTO MSE VALUES ('0103', 'Apple', 0);
INSERT INTO MSE VALUES ('0104', 'Apple', 0);

-- Keyboards Table:

DROP TABLE IF EXISTS KeyB; 

CREATE TABLE KeyB
(
	unique_ID varchar(4) PRIMARY KEY, 
	brand char(10), 
	checked_Out bit
); 
-- 57 Keyboards and then 1 Keyboard with a Mouse included but it is counted as just a keyboard.
INSERT INTO KeyB VALUES ('0001', 'Dell', 0);
INSERT INTO KeyB VALUES ('0002', 'Dell', 0);
INSERT INTO KeyB VALUES ('0003', 'Dell', 0);
INSERT INTO KeyB VALUES ('0004', 'Dell', 0);
INSERT INTO KeyB VALUES ('0005', 'Dell', 0);
INSERT INTO KeyB VALUES ('0006', 'Dell', 0);
INSERT INTO KeyB VALUES ('0007', 'Dell', 0);
INSERT INTO KeyB VALUES ('0008', 'Dell', 0);
INSERT INTO KeyB VALUES ('0009', 'Dell', 0);
INSERT INTO KeyB VALUES ('0010', 'Dell', 0);

INSERT INTO KeyB VALUES ('0011', 'Dell', 0);
INSERT INTO KeyB VALUES ('0012', 'Dell', 0);
INSERT INTO KeyB VALUES ('0013', 'Dell', 0);
INSERT INTO KeyB VALUES ('0014', 'Dell', 0);
INSERT INTO KeyB VALUES ('0015', 'Dell', 0);
INSERT INTO KeyB VALUES ('0016', 'Dell', 0);
INSERT INTO KeyB VALUES ('0017', 'Dell', 0);
INSERT INTO KeyB VALUES ('0018', 'Dell', 0);
INSERT INTO KeyB VALUES ('0019', 'Dell', 0);
INSERT INTO KeyB VALUES ('0020', 'Dell', 0);

INSERT INTO KeyB VALUES ('0021', 'Dell', 0);
INSERT INTO KeyB VALUES ('0022', 'Dell', 0);
INSERT INTO KeyB VALUES ('0023', 'Dell', 0);
INSERT INTO KeyB VALUES ('0024', 'Dell', 0);
INSERT INTO KeyB VALUES ('0025', 'Dell', 0);
INSERT INTO KeyB VALUES ('0026', 'Dell', 0);
INSERT INTO KeyB VALUES ('0027', 'Dell', 0);
INSERT INTO KeyB VALUES ('0028', 'Dell', 0);
INSERT INTO KeyB VALUES ('0029', 'Dell', 0);
INSERT INTO KeyB VALUES ('0030', 'Dell', 0);

INSERT INTO KeyB VALUES ('0031', 'Dell', 0);
INSERT INTO KeyB VALUES ('0032', 'Dell', 0);
INSERT INTO KeyB VALUES ('0033', 'Dell', 0);
INSERT INTO KeyB VALUES ('0034', 'Dell', 0);
INSERT INTO KeyB VALUES ('0035', 'Dell', 0);
INSERT INTO KeyB VALUES ('0036', 'Dell', 0);
INSERT INTO KeyB VALUES ('0037', 'Dell', 0);
INSERT INTO KeyB VALUES ('0038', 'Dell', 0);
INSERT INTO KeyB VALUES ('0039', 'Dell', 0);
INSERT INTO KeyB VALUES ('0040', 'Dell', 0);

INSERT INTO KeyB VALUES ('0041', 'Dell', 0);
INSERT INTO KeyB VALUES ('0042', 'Dell', 0);
INSERT INTO KeyB VALUES ('0043', 'Dell', 0);
INSERT INTO KeyB VALUES ('0044', 'Dell', 0);
INSERT INTO KeyB VALUES ('0045', 'Dell', 0);
INSERT INTO KeyB VALUES ('0046', 'Dell', 0);
INSERT INTO KeyB VALUES ('0047', 'Dell', 0);
INSERT INTO KeyB VALUES ('0048', 'Dell', 0);
INSERT INTO KeyB VALUES ('0049', 'Dell', 0);
INSERT INTO KeyB VALUES ('0050', 'Dell', 0);

INSERT INTO KeyB VALUES ('0051', 'Dell', 0);
INSERT INTO KeyB VALUES ('0052', 'Dell', 0);
INSERT INTO KeyB VALUES ('0053', 'Dell', 0);
INSERT INTO KeyB VALUES ('0055', 'Dell', 0);
INSERT INTO KeyB VALUES ('0056', 'Dell', 0);
INSERT INTO KeyB VALUES ('0057', 'Dell', 0);
INSERT INTO KeyB VALUES ('0058', 'Dell', 0);
INSERT INTO KeyB VALUES ('0059', 'Dell', 0);

-- Ethernet Cables Table:
DROP TABLE IF EXISTS Ethernet; 

CREATE TABLE Ethernet
(
	unique_ID varchar(4) PRIMARY KEY, 
	is_Long bit, 
	checked_Out bit
);

-- 53 Short Ethernet Cables;
INSERT INTO Ethernet VALUES ('0001', 0, 0); 
INSERT INTO Ethernet VALUES ('0002', 0, 0);
INSERT INTO Ethernet VALUES ('0003', 0, 0);
INSERT INTO Ethernet VALUES ('0004', 0, 0);
INSERT INTO Ethernet VALUES ('0005', 0, 0);
INSERT INTO Ethernet VALUES ('0006', 0, 0);
INSERT INTO Ethernet VALUES ('0007', 0, 0);
INSERT INTO Ethernet VALUES ('0008', 0, 0);
INSERT INTO Ethernet VALUES ('0009', 0, 0);
INSERT INTO Ethernet VALUES ('0010', 0, 0);

INSERT INTO Ethernet VALUES ('0011', 0, 0); 
INSERT INTO Ethernet VALUES ('0012', 0, 0);
INSERT INTO Ethernet VALUES ('0013', 0, 0);
INSERT INTO Ethernet VALUES ('0014', 0, 0);
INSERT INTO Ethernet VALUES ('0015', 0, 0);
INSERT INTO Ethernet VALUES ('0016', 0, 0);
INSERT INTO Ethernet VALUES ('0017', 0, 0);
INSERT INTO Ethernet VALUES ('0018', 0, 0);
INSERT INTO Ethernet VALUES ('0019', 0, 0);
INSERT INTO Ethernet VALUES ('0020', 0, 0);

INSERT INTO Ethernet VALUES ('0021', 0, 0); 
INSERT INTO Ethernet VALUES ('0022', 0, 0);
INSERT INTO Ethernet VALUES ('0023', 0, 0);
INSERT INTO Ethernet VALUES ('0024', 0, 0);
INSERT INTO Ethernet VALUES ('0025', 0, 0);
INSERT INTO Ethernet VALUES ('0026', 0, 0);
INSERT INTO Ethernet VALUES ('0027', 0, 0);
INSERT INTO Ethernet VALUES ('0028', 0, 0);
INSERT INTO Ethernet VALUES ('0029', 0, 0);
INSERT INTO Ethernet VALUES ('0030', 0, 0);

INSERT INTO Ethernet VALUES ('0031', 0, 0); 
INSERT INTO Ethernet VALUES ('0032', 0, 0);
INSERT INTO Ethernet VALUES ('0033', 0, 0);
INSERT INTO Ethernet VALUES ('0034', 0, 0);
INSERT INTO Ethernet VALUES ('0035', 0, 0);
INSERT INTO Ethernet VALUES ('0036', 0, 0);
INSERT INTO Ethernet VALUES ('0037', 0, 0);
INSERT INTO Ethernet VALUES ('0038', 0, 0);
INSERT INTO Ethernet VALUES ('0039', 0, 0);
INSERT INTO Ethernet VALUES ('0040', 0, 0);

INSERT INTO Ethernet VALUES ('0041', 0, 0); 
INSERT INTO Ethernet VALUES ('0042', 0, 0);
INSERT INTO Ethernet VALUES ('0043', 0, 0);
INSERT INTO Ethernet VALUES ('0044', 0, 0);
INSERT INTO Ethernet VALUES ('0045', 0, 0);
INSERT INTO Ethernet VALUES ('0046', 0, 0);
INSERT INTO Ethernet VALUES ('0047', 0, 0);
INSERT INTO Ethernet VALUES ('0048', 0, 0);
INSERT INTO Ethernet VALUES ('0049', 0, 0);
INSERT INTO Ethernet VALUES ('0050', 0, 0);
INSERT INTO Ethernet VALUES ('0051', 0, 0);
INSERT INTO Ethernet VALUES ('0052', 0, 0);
INSERT INTO Ethernet VALUES ('0053', 0, 0);

-- 19 Long Ethernet Cables:
INSERT INTO Ethernet VALUES ('0054', 1, 0); 
INSERT INTO Ethernet VALUES ('0055', 1, 0); 
INSERT INTO Ethernet VALUES ('0056', 1, 0); 
INSERT INTO Ethernet VALUES ('0057', 1, 0); 
INSERT INTO Ethernet VALUES ('0058', 1, 0); 
INSERT INTO Ethernet VALUES ('0059', 1, 0); 
INSERT INTO Ethernet VALUES ('0060', 1, 0); 
INSERT INTO Ethernet VALUES ('0061', 1, 0); 
INSERT INTO Ethernet VALUES ('0062', 1, 0); 
INSERT INTO Ethernet VALUES ('0063', 1, 0); 
INSERT INTO Ethernet VALUES ('0064', 1, 0); 
INSERT INTO Ethernet VALUES ('0065', 1, 0); 
INSERT INTO Ethernet VALUES ('0066', 1, 0); 
INSERT INTO Ethernet VALUES ('0067', 1, 0); 
INSERT INTO Ethernet VALUES ('0068', 1, 0); 
INSERT INTO Ethernet VALUES ('0069', 1, 0); 
INSERT INTO Ethernet VALUES ('0070', 1, 0); 
INSERT INTO Ethernet VALUES ('0071', 1, 0); 
INSERT INTO Ethernet VALUES ('0072', 1, 0); 

DROP TABLE IF EXISTS Audio;

CREATE TABLE Audio
(
	unique_ID varchar(4) PRIMARY KEY,
	cable_type varchar(10),
	name varchar(20),
	checked_Out bit
);

-- 1 iRig Mic:
INSERT INTO Audio VALUES ('0001', 'mic', 'iRigMic', 0);

-- 3.5mm 3-ring headset ext;
INSERT INTO Audio VALUES ('0002', 'mic', '3RingExt', 0); 

-- Apple Lightning Headphone Jack:
INSERT INTO Audio VALUES ('0003', 'aux', 'AppleHeadJack', 0);

-- Red and White and Yellow Cables:
INSERT INTO Audio VALUES ('0004', 'con', 'RWYCables', 0);

-- 3.5mm R/Y/W headset extension:
INSERT INTO Audio VALUES ('0005', 'misc', 'RYWHeadExt', 0);

-- 3 AWM E101344 Style 3527 Cable: 
INSERT INTO Audio VALUES ('0006', 'misc', '3AWMCable', 0);
INSERT INTO Audio VALUES ('0007', 'misc', '3AWMCable', 0);
INSERT INTO Audio VALUES ('0008', 'misc', '3AWMCable', 0);

-- Red White to Aux splitter:
INSERT INTO Audio VALUES ('0009', 'aux', 'RWAuxSplit', 0);

-- USBC to 3.5mm audio splitter:
INSERT INTO Audio VALUES ('0010', 'aux', 'USBctoAuxSplitter', 0);

-- Apple Lightning Headphone Jack:
INSERT INTO Audio VALUES ('0011', 'aux', 'AppleHeadJack', 0);

-- 1 iRig Mic:
INSERT INTO Audio VALUES ('0012', 'mic', 'iRigMic', 0);

-- 2 AWM2464VW Cable:
INSERT INTO Audio VALUES ('0013', 'con', 'AWMCable', 0);
INSERT INTO Audio VALUES ('0014', 'con', 'AWMCavle', 0);

-- YellowWhite Aux Splitter:
INSERT INTO Audio VALUES ('0015', 'aux', 'YellowWhiteSplit', 0);

-- RC59/U coax Cable (MaletoMale):
INSERT INTO Audio VALUES ('0016', 'con', 'rc59/uCable', 0);

-- Berkelin Aux Table: 
INSERT INTO Audio VALUES ('0017', 'aux', 'BerkelinTable', 0);

-- Labtec Aux:
INSERT INTO Audio VALUES ('0018', 'aux', 'LabtecAux', 0);

-- Aux Male to Female:
INSERT INTO Audio VALUES ('0019', 'aux', 'MaleToFemale', 0);

-- Small mic:
INSERT INTO Audio VALUES ('0020', 'mic', 'SmallMic', 0);

-- Ezolink Green/Red Aux Splitter:
INSERT INTO Audio VALUES ('0021', 'aux', 'GreenRedAux', 0);

-- Belkin Stereo Extension Cord:
INSERT INTO Audio VALUES ('0022', 'aux', 'BelkinStereoExt', 0);

-- 2 3.5mm aux stereo cable:
INSERT INTO Audio VALUES ('0023', 'aux', '3.5mmStereoCable', 0);
INSERT INTO Audio VALUES ('0024', 'aux', '3.5mmStereoCable', 0);

-- USB-C to audio jack:
INSERT INTO Audio VALUES ('0025', 'misc', 'USBCtoAudioJack', 0);

-- Berlin Headphone Splitter:
INSERT INTO Audio VALUES ('0026', 'misc', 'BerlinSplitter', 0);

-- Aux Splitter:
INSERT INTO Audio VALUES ('0027', 'aux', 'AuxSplitter', 0); 

-- Ezolink Green/Red Splitter:
INSERT INTO Audio VALUES ('0028', 'misc', 'GreenRedSplitter', 0);

-- Wooded Voip adapter:
INSERT INTO Audio VALUES ('0029', 'misc', 'WoodedVoipAdapt', 0); 

-- Star tech 3.5mm headset adapter MMF
INSERT INTO Audio VALUES ('0030', 'misc', 'HeadsetAdapt', 0);

-- 4 Headset buddy phone aux splitter:
INSERT INTO Audio VALUES ('0031', 'aux', 'HeadsetAuxSplit', 0);
INSERT INTO Audio VALUES ('0032', 'aux', 'HeadsetAuxSplit', 0);
INSERT INTO Audio VALUES ('0033', 'aux', 'HeadsetAuxSplit', 0);
INSERT INTO Audio VALUES ('0034', 'aux', 'HeadsetAuxSplit', 0);
-- mic, con, aux, or misc

DROP TABLE IF EXISTS Visuals; 

CREATE TABLE Visuals
(
	unique_ID varchar(4) PRIMARY KEY,
	cable_type varchar(10),
	name varchar(20),
	checked_Out bit
);

-- 43 DVI Cables:
INSERT INTO Visuals VALUES ('0001', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0002', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0003', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0004', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0005', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0006', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0007', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0008', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0009', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0010', 'dvi', 'DVIcable', 0);

INSERT INTO Visuals VALUES ('0011', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0012', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0013', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0014', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0015', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0016', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0017', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0018', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0019', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0020', 'dvi', 'DVIcable', 0);

INSERT INTO Visuals VALUES ('0021', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0022', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0023', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0024', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0025', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0026', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0027', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0028', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0029', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0030', 'dvi', 'DVIcable', 0);

INSERT INTO Visuals VALUES ('0040', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0041', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0042', 'dvi', 'DVIcable', 0);
INSERT INTO Visuals VALUES ('0043', 'dvi', 'DVIcable', 0);

-- 17 VGA Cables: 
INSERT INTO Visuals VALUES ('0044', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0045', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0046', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0047', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0048', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0049', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0050', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0051', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0052', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0053', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0054', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0055', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0056', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0057', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0058', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0059', 'vga', 'VGAcable', 0);
INSERT INTO Visuals VALUES ('0060', 'vga', 'VGAcable', 0);

-- 2 VGA to DVI Cables:
INSERT INTO Visuals VALUES ('0061', 'vga', 'VGAtoDVI', 0);
INSERT INTO Visuals VALUES ('0062', 'vga', 'VGAtoDVI', 0);

-- 4 Ethernet to VGA Cables: 
INSERT INTO Visuals VALUES ('0063', 'vga', 'EthernettoVGA', 0);
INSERT INTO Visuals VALUES ('0064', 'vga', 'EthernettoVGA', 0);
INSERT INTO Visuals VALUES ('0065', 'vga', 'EthernettoVGA', 0);
INSERT INTO Visuals VALUES ('0066', 'vga', 'EthernettoVGA', 0);

-- 4 DVI to HDMI Cables:
INSERT INTO Visuals VALUES ('0067', 'dvi', 'DVItoHDMI', 0); 
INSERT INTO Visuals VALUES ('0068', 'dvi', 'DVItoHDMI', 0); 
INSERT INTO Visuals VALUES ('0069', 'dvi', 'DVItoHDMI', 0); 
INSERT INTO Visuals VALUES ('0070', 'dvi', 'DVItoHDMI', 0); 

-- 25 HDMI Cables: 
INSERT INTO Visuals VALUES ('0071', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0072', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0073', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0074', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0076', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0077', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0078', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0079', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0080', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0081', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0082', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0083', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0084', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0085', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0086', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0087', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0088', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0089', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0090', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0091', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0092', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0093', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0094', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0095', 'hdmi', 'HDMIcable', 0);
INSERT INTO Visuals VALUES ('0096', 'hdmi', 'HDMIcable', 0);

-- 5 DVI to VGA Adapter Cables:
INSERT INTO Visuals VALUES ('0097', 'dvi', 'DVItoVGAAdapt', 0); 
INSERT INTO Visuals VALUES ('0098', 'dvi', 'DVItoVGAAdapt', 0); 
INSERT INTO Visuals VALUES ('0099', 'dvi', 'DVItoVGAAdapt', 0); 
INSERT INTO Visuals VALUES ('0100', 'dvi', 'DVItoVGAAdapt', 0); 
INSERT INTO Visuals VALUES ('0101', 'dvi', 'DVItoVGAAdapt', 0); 

-- 1 Dock to iPad:
INSERT INTO Visuals VALUES ('0102', 'misc', 'DocktoIpad', 0);

-- 1 IP5 to HDMI:
INSERT INTO Visuals VALUES ('0103', 'hdmi', 'IP5toHDMI', 0);

-- 4 Display Ports: 
INSERT INTO Visuals VALUES ('0104', 'display', 'DisplayPort', 0);
INSERT INTO Visuals VALUES ('0105', 'display', 'DisplayPort', 0);
INSERT INTO Visuals VALUES ('0106', 'display', 'DisplayPort', 0);
INSERT INTO Visuals VALUES ('0107', 'display', 'DisplayPort', 0);

-- 3 Display Port to HDMI:
INSERT INTO Visuals VALUES ('0108', 'display', 'DisiplaytoHDMI', 0);
INSERT INTO Visuals VALUES ('0109', 'display', 'DisiplaytoHDMI', 0);
INSERT INTO Visuals VALUES ('0110', 'display', 'DisiplaytoHDMI', 0);

-- 3 Display to DVI:
INSERT INTO Visuals VALUES ('0111', 'display', 'DisplaytoDVI', 0);
INSERT INTO Visuals VALUES ('0112', 'display', 'DisplaytoDVI', 0);
INSERT INTO Visuals VALUES ('0113', 'display', 'DisplaytoDVI', 0);

-- 4 miniHDMI to HDMI:
INSERT INTO Visuals VALUES ('0114', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0115', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0116', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0117', 'hdmi', 'miniHDMI to HDMI', 0);

-- 9 more HDMI to miniHDMI:
INSERT INTO Visuals VALUES ('0118', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0119', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0120', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0121', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0122', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0123', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0124', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0125', 'hdmi', 'miniHDMI to HDMI', 0);
INSERT INTO Visuals VALUES ('0126', 'hdmi', 'miniHDMI to HDMI', 0);

-- 1 minihdmi to usb:
INSERT INTO Visuals VALUES ('0127', 'hdmi', 'miniHDMItoUSB', 0); 

-- 7 more Display Port Cables:
INSERT INTO Visuals VALUES ('0128', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0129', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0130', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0131', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0132', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0133', 'display', 'DisplayPort', 0); 
INSERT INTO Visuals VALUES ('0134', 'display', 'DisplayPort', 0); 

-- 1 micro HDMI:
INSERT INTO Visuals VALUES ('0135', 'hdmi', 'MicroHDMI', 0);

-- 4 Display to HDMI:
INSERT INTO Visuals VALUES ('0136', 'display', 'DisplaytoHDMI', 0);
INSERT INTO Visuals VALUES ('0137', 'display', 'DisplaytoHDMI', 0);
INSERT INTO Visuals VALUES ('0138', 'display', 'DisplaytoHDMI', 0);
INSERT INTO Visuals VALUES ('0139', 'display', 'DisplaytoHDMI', 0);

-- 1 Display Port to VGA:
INSERT INTO Visuals VALUES ('0140', 'display', 'DisplaytoVGA', 0);

-- 2 Display Port to mini Display Port:
INSERT INTO Visuals VALUES ('0141', 'display', 'DisplaytoMiniDisplay', 0);
INSERT INTO Visuals VALUES ('0142', 'display', 'DisplaytoMiniDisplay', 0);

-- 1 Dell S2240T Touch Monitor:
INSERT INTO Visuals VALUES ('0143', 'misc', 'TouchMonitor', 0);



-- vga, hdmi, display, adapt, misc

DROP TABLE IF EXISTS PowerSupply;

CREATE TABLE PowerSupply
(
	unique_ID varchar(4) PRIMARY KEY,
	device_type varchar(10),
	name varchar(20),
	checked_Out bit
);

-- 84 Computer Power Cables:
INSERT INTO PowerSupply VALUES ('0001', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0002', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0003', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0004', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0005', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0006', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0007', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0008', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0009', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0010', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0011', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0012', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0013', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0014', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0015', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0016', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0017', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0018', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0019', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0020', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0021', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0022', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0023', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0024', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0025', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0026', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0027', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0028', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0029', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0030', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0031', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0032', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0033', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0034', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0035', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0036', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0037', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0038', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0039', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0040', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0041', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0042', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0043', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0044', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0045', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0046', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0047', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0048', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0049', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0050', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0051', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0052', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0053', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0054', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0055', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0056', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0057', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0058', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0059', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0060', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0061', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0062', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0063', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0064', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0065', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0066', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0067', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0068', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0069', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0070', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0071', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0072', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0073', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0074', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0075', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0076', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0077', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0078', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0079', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0080', 'power', 'PCPowerCable', 0);

INSERT INTO PowerSupply VALUES ('0081', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0082', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0083', 'power', 'PCPowerCable', 0);
INSERT INTO PowerSupply VALUES ('0084', 'power', 'PCPowerCable', 0);

-- 1 Lenovo Charger:
INSERT INTO PowerSupply VALUES ('0085', 'charg', 'LenovoCharger', 0);

-- 1 Dell 7040 mini:
INSERT INTO PowerSupply VALUES ('0086', 'misc', 'Dell7040mini', 0);

-- 1 AC Adapter MS Surface Laptop:
INSERT INTO PowerSupply VALUES ('0087', 'misc', 'ACAdapterMSSurface', 0);

-- 1 XPS 12:
INSERT INTO PowerSupply VALUES ('0088', 'misc', 'XP1S12', 0);

-- 2 8+ robotics power cable:
INSERT INTO PowerSupply VALUES ('0089', 'power', 'RoboticsPowCable', 0);
INSERT INTO PowerSupply VALUES ('0090', 'power', 'RoboticsPowCable', 0);

-- 1 HP 65W Laptop Charger:
INSERT INTO PowerSupply VALUES ('0091', 'charg', 'HP65WCharger', 0);

-- 3 Normal Power Strip:
INSERT INTO PowerSupply VALUES ('0092', 'strip', 'NormalPowerStrip', 0);
INSERT INTO PowerSupply VALUES ('0093', 'strip', 'NormalPowerStrip', 0);
INSERT INTO PowerSupply VALUES ('0094', 'strip', 'NormalPowerStrip', 0);

-- 1 Small Power Strip:
INSERT INTO PowerSupply VALUES ('0095', 'strip', 'SmallPowerStrip', 0);

-- 2 15 inch heavy duty extension cord:
INSERT INTO PowerSupply VALUES ('0096', 'misc', 'HeavyDutyExtCord', 0);
INSERT INTO PowerSupply VALUES ('0097', 'misc', 'HeavyDutyExtCord', 0); 

-- 2 ISO Bar Ultra Diagnostic Surge Supressor:
INSERT INTO PowerSupply VALUES ('0098', 'misc', 'SurgeSupressor', 0);
INSERT INTO PowerSupply VALUES ('0099', 'misc', 'SurgeSupressor', 0);

-- 2 Altiva Extender:
INSERT  INTO PowerSupply VALUES ('0100', 'misc', 'AltivaExtender', 0);
INSERT INTO PowerSupply VALUES ('0101', 'misc', 'AtivaExtender', 0);

-- 1 App Surge Assist Power Strip:
INSERT INTO PowerSupply VALUES ('0102', 'strip', 'AppSurgeStrip', 0);

-- 1 smart usb charger:
INSERT INTO PowerSupply VALUES ('0103', 'charg', 'SmartUSBCharger', 0);

-- 2 Long Orange Extension Cord:
INSERT INTO PowerSupply VALUES ('0104', 'misc', 'OrangeExtCord', 0);
INSERT INTO PowerSupply VALUES ('0105', 'misc', 'OrangeExtCord', 0);

-- 1 Long Red and Black Extension Cord:
INSERT INTO PowerSupply VALUES ('0106', 'misc', 'ExtensionCord', 0); 



-- power, charg, strip, misc

DROP TABLE IF EXISTS FireWall;

CREATE TABLE FireWall
(
	unique_ID varchar(4) PRIMARY KEY,
	brand varchar(10),
	name varchar(10),
	checked_Out bit

);

INSERT INTO FireWall VALUES ('0001', 'Cisco', 'pix501', 0);
INSERT INTO FireWall VALUES ('0002', 'Cisco', 'pix515e', 0);

-- 2 Cisco FireWalls

DROP TABLE IF EXISTS  Switches;

CREATE TABLE Switches
(
	unique_ID varchar(4) PRIMARY KEY,
	brand varchar(10),
	name varchar(15),
	checked_Out bit
);
-- 18 Total Switches:
INSERT INTO Switches VALUES ('0001', 'Juniper', 'srx210', 0);
INSERT INTO Switches VALUES ('0002', 'Juniper', 'ex2200c', 0); 
INSERT INTO Switches VALUES ('0003', 'Cisco', '3560', 0); 
INSERT INTO Switches VALUES ('0004', 'Cisco', '3560', 0); 
INSERT INTO Switches VALUES ('0005', 'Cisco', '3560G', 0); 
INSERT INTO Switches VALUES ('0006', 'Cisco', '3560CG', 0); 
INSERT INTO Switches VALUES ('0007', 'Cisco', '3560CG', 0); 
INSERT INTO Switches VALUES ('0008', 'Cisco', '3750', 0); 
INSERT INTO Switches VALUES ('0009', 'Cisco', '2950', 0);
INSERT INTO Switches VALUES ('0010', 'Cisco', '2950', 0);
INSERT INTO Switches VALUES ('0011', 'Cisco', '2960G', 0); 
INSERT INTO Switches VALUES ('0012', 'Cisco', '1800', 0); 
INSERT INTO Switches VALUES ('0013', 'Cisco', 'SG300-10', 0); 
INSERT INTO Switches VALUES ('0014', 'Cisco', 'SG300-10', 0); 
INSERT INTO Switches VALUES ('0015', 'Cisco', 'SR2024', 0); 
INSERT INTO Switches VALUES ('0016', 'Cisco', 'Wifi Card', 0);
INSERT INTO Switches VALUES ('0017', 'Cisco', 'Wi-Spy', 0);
INSERT INTO Switches VALUES ('0018', 'Cisco', 'Wi-Spy', 0); 


-- USB Table:

DROP TABLE IF EXISTS USB;

CREATE TABLE USB
(
	unique_ID varchar(4) PRIMARY KEY,
	connector varchar(10),
	name varchar(20),
	checked_Out bit
);

-- ext, usbC, adapt, micro, flash, atob, type3, misc

-- 6 USB Extension Cables
INSERT INTO USB VALUES ('0001', 'ext', 'USBExt', 0);
INSERT INTO USB VALUES ('0002', 'ext', 'USBExt', 0); 
INSERT INTO USB VALUES ('0003', 'ext', 'USBExt', 0);
INSERT INTO USB VALUES ('0004', 'ext', 'USBExt', 0);
INSERT INTO USB VALUES ('0005', 'ext', 'USBExt', 0); 
INSERT INTO USB VALUES ('0006', 'ext', 'USBExt', 0); 

-- 5 USB 2.O Extension Cables
INSERT INTO USB VALUES ('0007', 'ext', 'USB2.0', 0); 
INSERT INTO USB VALUES ('0008', 'ext', 'USB2.0', 0);
INSERT INTO USB VALUES ('0009', 'ext', 'USB2.0', 0); 
INSERT INTO USB VALUES ('0010', 'ext', 'USB2.0', 0);
INSERT INTO USB VALUES ('0011', 'ext', 'USB2.0', 0);

-- 8 6in USB 3.0 Extension Cables:
INSERT INTO USB VALUES ('0012', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0013', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0014', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0015', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0016', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0017', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0018', 'ext', 'USB3', 0); 
INSERT INTO USB VALUES ('0019', 'ext', 'USB3', 0); 

-- 3 USB A extension Cables: 
INSERT INTO USB VALUES ('0020', 'ext', 'USBA', 0); 
INSERT INTO USB VALUES ('0021', 'ext', 'USBA', 0);
INSERT INTO USB VALUES ('0022', 'ext', 'USBA', 0);

-- 1 USB A-B: 
INSERT INTO USB VALUES ('0023', 'misc', 'USBAtoB', 0);

-- 10 micro-usb cables: 
INSERT INTO USB VALUES ('0024', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0025', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0026', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0027', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0028', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0029', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0030', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0031', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0032', 'micro', 'microUSB', 0);
INSERT INTO USB VALUES ('0033', 'micro', 'microUSB', 0);

-- 4 USB to type 3: 
INSERT INTO USB VALUES ('0034', 'type3', 'usbtotype3', 0);
INSERT INTO USB VALUES ('0035', 'type3', 'usbtotype3', 0);
INSERT INTO USB VALUES ('0036', 'type3', 'usbtotype3', 0);
INSERT INTO USB VALUES ('0037', 'type3', 'usbtotype3', 0);

-- 6 USBC to male type A:
INSERT INTO USB VALUES ('0038', 'usbc', 'USBCtoMaleA', 0);
INSERT INTO USB VALUES ('0039', 'usbc', 'USBCtoMaleA', 0);
INSERT INTO USB VALUES ('0040', 'usbc', 'USBCtoMaleA', 0);
INSERT INTO USB VALUES ('0041', 'usbc', 'USBCtoMaleA', 0);
INSERT INTO USB VALUES ('0042', 'usbc', 'USBCtoMaleA', 0);
INSERT INTO USB VALUES ('0043', 'usbc', 'USBCtoMaleA', 0);

-- 3 USBC to USBC:
INSERT INTO USB VALUES ('0044', 'usbc', 'USBCtoC', 0); 
INSERT INTO USB VALUES ('0045', 'usbc', 'USBCtoC', 0);
INSERT INTO USB VALUES ('0046', 'usbc', 'USBCtoC', 0); 

-- 6 USBC to female tpye A: 
INSERT INTO USB VALUES ('0047', 'usbc', 'USBCtoFemaleA', 0);
INSERT INTO USB VALUES ('0048', 'usbc', 'USBCtoFemaleA', 0);
INSERT INTO USB VALUES ('0049', 'usbc', 'USBCtoFemaleA', 0);
INSERT INTO USB VALUES ('0050', 'usbc', 'USBCtoFemaleA', 0);
INSERT INTO USB VALUES ('0051', 'usbc', 'USBCtoFemaleA', 0);
INSERT INTO USB VALUES ('0052', 'usbc', 'USBCtoFemaleA', 0);

-- 1 Fire Wire to Micro USB:
INSERT INTO USB VALUES ('0053', 'misc', 'FireWiretoMicroUSB', 0);

-- 1 USB to Ethernet adapter:
INSERT INTO USB VALUES ('0054', 'misc', 'USBtoEthernetAdapter', 0); 

-- 1 USB Male Type A to USB External Female Type A: 
INSERT INTO USB VALUES ('0055', 'misc', 'MaleAtoFemaleA', 0); 

-- 1 Type A to micro B:
INSERT INTO USB VALUES ('0056', 'misc', 'TypeAtoMicroB', 0); 

-- 1 USB to VGA:
INSERT INTO USB VALUES ('0057', 'misc', 'USBtoVGA', 0);

-- 2 16gb usb flash drive:
INSERT INTO USB VALUES ('0058', 'flash', '16gbUSBDrive', 0);
INSERT INTO USB VALUES ('0059', 'flash', '16gbUSBDrive', 0);

-- 1 USB Block:
INSERT INTO USB VALUES ('0060', 'misc', 'USBBlock', 0);

-- USB-C to Type B:
INSERT INTO USB VALUES ('0061', 'usbc', 'USBCtoTypeB', 0);

-- 3 Fire Wires:
INSERT INTO USB VALUES ('0062', 'misc', 'FireWire', 0);
INSERT INTO USB VALUES ('0063', 'misc', 'FireWire', 0);
INSERT INTO USB VALUES ('0064', 'misc', 'FireWire', 0);

-- 2 USBC to miniHDMI:
INSERT INTO USB VALUES ('0065', 'misc', 'USBCtominiHDMI', 0);
INSERT INTO USB VALUES ('0066', 'misc', 'USBCtominiHDMI', 0);

-- 1 USBC to headphone jack:
INSERT INTO USB VALUES ('0067', 'misc', 'USBCtoHeadphoneJack', 0);

-- 1 Micro USB to HDMI:
INSERT INTO USB VALUES ('0068', 'micro', 'MicrotoHDMI', 0);

-- 1 USBC to USBC:
INSERT INTO USB VALUES ('0069', 'usbc', 'USBCtoUSBC', 0);

-- 1 USBC to USBB: 
INSERT INTO USB VALUES ('0070', 'usbc', 'USBCtoUSBB', 0);

-- Potentially add in name descriptions but search in the query by the varchars.



-- All Queries: (Some will be used for admin account and some for the users view for checking items out.

-- All MSE Queries
-- Grab all Mouses:
SELECT * FROM MSE; 
-- Grab all available Mouses:
SELECT MSE.unique_ID, MSE.brand, MSE.checked_Out FROM MSE
WHERE MSE.checked_Out = 0; 
-- Grab all checked out Mouses: 
SELECT MSE.unique_ID, MSE.brand, MSE.checked_Out FROM MSE
WHERE MSE.checked_Out = 1;

-- All KeyB Queries:
-- Grab all Keyboards:
SELECT *FROM KeyB;
-- Grab all checked out keyboards: 
SELECT KeyB.unique_ID, KeyB.brand, Keyb.checked_Out FROM KeyB
WHERE KeyB.checked_Out = 0;
-- Grab all avaiable keyboards: 
SELECT KeyB.unique_ID, KeyB.brand, Keyb.checked_Out FROM KeyB
WHERE KeyB.checked_Out = 1;


-- All USB Queries:
-- Grab all USBs: 
SELECT * FROM USB; 
-- Grab all available USBs:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.checked_Out = 0; 

-- Grab all checked out USBs:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.checked_Out = 1;

-- Grab all available USB Extension Cables: 
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'ext' AND USB.checked_Out = 0;

-- Grab all available USBC USBs:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'usbc' AND USB.checked_Out = 0;

-- Grab all available USB tpye 3:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'type3' AND USB.checked_Out = 0;

-- Grab all available Micro USBs:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'micro' AND USB.checked_Out = 0;

-- Grab all available USB flash drives:
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'flash' AND USB.checked_Out = 0;

-- Grab all available Miscellaneous USBs: 
SELECT USB.unique_ID, USB.connector, USB.name, USB.checked_Out FROM USB
WHERE USB.connector = 'misc' AND USB.checked_Out = 0;


-- All Ethernet Queries:
-- Grab all Ethernet Cables: 
SELECT * FROM Ethernet; 
-- Grab all short Ethernet Cables: 
SELECT Ethernet.unique_ID, is_Long, Ethernet.checked_Out FROM Ethernet
WHERE Ethernet.is_Long = 0;

-- Grab all long Ethernet Cables:
SELECT Ethernet.unique_ID, Ethernet.checked_Out, is_Long FROM Ethernet
WHERE is_Long = 1;

-- Grab all available Ethernet cables: 
SELECT Ethernet.unique_ID, Ethernet.is_Long, Ethernet.checked_Out FROM Ethernet
WHERE Ethernet.checked_Out = 0;

-- Grab all checked out Ethernet Cables:
SELECT Ethernet.unique_ID, Ethernet.is_Long, Ethernet.checked_Out FROM Ethernet
WHERE Ethernet.checked_Out = 1; 

-- All Switches Queries: 
-- Grab all Switches: 
SELECT * FROM Switches;
-- Grab all available Switches: 
SELECT Switches.unique_ID, Switches.brand, Switches.name, Switches.checked_Out FROM Switches
WHERE Switches.checked_Out = 0; 

-- Grab all checked out Swtiches: 
SELECT Switches.unique_ID, Switches.brand, Switches.name, Switches.checked_Out FROM Switches
WHERE Switches.checked_Out = 1; 

-- Grab all available Juniper Switches: 
SELECT Switches.unique_ID, Switches.brand, Switches.name, Switches.checked_Out FROM Switches
WHERE Switches.checked_Out = 0 AND Switches.brand = 'Juniper';

-- Grab all available Cisco Switches:
SELECT Switches.unique_ID, Switches.brand, Switches.name, Switches.checked_Out FROM Switches
WHERE Switches.checked_Out = 0 AND Switches.brand = 'Cisco';

-- Grab all Firewalls: 
SELECT * FROM FireWall; 
-- Grab all available FireWalls: 
SELECT FireWall.unique_ID, FireWall.brand, FireWall.name, FireWall.checked_Out FROM FireWall
WHERE FireWall.checked_Out = 0; 

-- Grab all checked out Firewalls:
SELECT FireWall.unique_ID, FireWall.brand, FireWall.name, FireWall.checked_Out FROM FireWall
WHERE FireWall.checked_Out = 1;

-- All Visuals Queries: 
-- Grab all Visual Cables:
SELECT * FROM Visuals; 
-- Grab all available Visuals:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.checked_Out = 0;

-- Grab all checked out Visual Cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.checked_Out = 1;

-- Grab all available Display Port Cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.cable_type = 'display' AND Visuals.checked_Out = 0;

-- Grab all available HDMI cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.cable_type = 'hdmi' AND Visuals.checked_Out = 0;

-- Grab all available VGA cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.cable_type = 'vga' AND Visuals.checked_Out = 0;

-- Grab all available DVI cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.cable_type = 'dvi' AND Visuals.checked_Out = 0;

-- Grab all Miscellaneous Visual Cables:
SELECT Visuals.unique_ID, Visuals.cable_type, Visuals.name, Visuals.checked_Out FROM Visuals
WHERE Visuals.cable_type = 'misc' AND Visuals.checked_Out = 0;
