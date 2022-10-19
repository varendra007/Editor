clc; 
clear all;
close all;

modType = "QPSK";
snr = [0:1:20];

numTxBits = 20;

rng(2022); %To fix the bits that are randomly generated!

%Generating the random variables
transmissionBits = rand(numTxBits,1) > 0.5; % if greater than 0.5 then 1

%Calling the modulator function
modulatedSignal = myModulator(transmissionBits, modType);
[demodSymbols,demodBits] = myDemodulator(modulatedSignal, modType);
symDemod = bin2dec(demodBits);
t = 1;