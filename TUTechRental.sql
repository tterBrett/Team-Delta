CREATE DATABASE Inventory; 

DROP TABLE IF EXISTS MSE; 

CREATE TABLE MSE 
(
	unique_ID varchar(4) PRIMARY KEY,
	Brand char(10), 
	Checked_out bit 
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

DROP TABLE IF EXISTS KeyB; 

CREATE TABLE KeyB
(
	unique_ID varchar(4) PRIMARY KEY, 
	Brand char(10), 
	checked_Out bit
); 

INSERT INTO KeyB VALUES ('0001', 'Dell', 0); 

DROP TABLE IF EXISTS USB;

CREATE TABLE USB
(
	unique_ID varchar(4) PRIMARY KEY,
	checked_Out bit
);

INSERT INTO USB VALUES ('0001', 0); 

DROP TABLE IF EXISTS Ethernet; 

CREATE TABLE Ethernet
(
	unique_ID varchar(4) PRIMARY KEY, 
	is_Long bit, 
	checked_Out bit
);

--Short Ethernet Cables;
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

--Long Ethernet Cables:
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

--All Queries:

--Grab all Mouses:
SELECT * FROM MSE; 

--Grab all keyboards:
SELECT *FROM KeyB;

--Grab all USBs: 
SELECT * FROM USB; 

--Grab all Ethernet Cables: 
SELECT * FROM Ethernet; 
--Grab all short Ethernet Cables: 
SELECT Ethernet.unique_ID, is_Long, Ethernet.checked_Out FROM Ethernet
WHERE Ethernet.is_Long = 0; 
--Grab all long Ethernet Cables:
SELECT Ethernet.unique_ID, Ethernet.checked_Out, is_Long FROM Ethernet
WHERE is_Long = 1; 