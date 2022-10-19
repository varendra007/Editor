clear all
clear
clc
Mode = input('Enter "1" if you want "BPSK modulation",\nEnter "2" if you want "QPSK modulation",\nEnter "4" if you want "16-QAM modulation":');
if Mode ~= 1 && Mode ~= 2 && Mode ~= 4 
    disp('wrong input');
    return;
end
n_bits    = 1000; % number of bits
M_bits    = rand(n_bits,1) > 0.5;  %message signal generated with rand function
SNR_db    = [-3:8]; % multiple Eb/N0 values
PE_bits   = zeros(5,length(SNR_db)); %error probability of bits  
PE_symbol = zeros(5,length(SNR_db)); %error probability of symbols
for e = 1  %e=2 with burst noise
for b = 2 %b=1 with interleaver
for m = 3 %1 : 2 : 5 %no.of repetetions
    n=2;
    for i = 1:length(SNR_db)
        repeated_bits = My_repeater(M_bits,m);
        if b == 1
            int_bits   = My_interleaver(repeated_bits,n); %interlever bits
        else
            int_bits   = repeated_bits;
        end
        mod_bits   = My_modulator(int_bits,Mode);
        nm = length(mod_bits);
        noise      = 1/sqrt(2)*[randn(nm,1) + 1i*randn(nm,1)]; %guassian noise
        if e ==2
        for c = 24*nm/50 : 26*nm/50
            for d = 1 : m
            noise(c,d) = 3/sqrt(2)*[randn(1,1) + 1i*randn(1,1)]';
            end
        end
        end
        rec_bits   = mod_bits + 10^(-SNR_db(i)/20)*noise; % recieved symbols
        demod_bits = My_demodulator(rec_bits,Mode);
        if b == 1
            deint_bits = My_deinterleaver(demod_bits,n);
        else
            deint_bits = demod_bits;
        end
        final_bits = My_decoder(deint_bits,m);
        error =0;
        errorl =0;
        
          if Mode == 1
              for j = 1:n_bits
                  if M_bits(j) ~= final_bits(j) 
                    error = error + 1;
                  end
              end
              errorl = error ;
              theory_graph = 0.5*erfc(sqrt(10.^(SNR_db/10)));
              
          elseif Mode == 2
            for j = 1:2:n_bits
              if M_bits(j,1) ~= final_bits(j,1) || M_bits(j+1,1) ~= final_bits(j+1,1)
                error = error + 1;
              end
            end
              for j = 1:n_bits
                  if M_bits(j,1) ~= final_bits(j,1)
                      errorl = errorl + 1;
                  end
              end
              theory_graph = erfc(sqrt(0.5*(10.^(SNR_db/10)))) - (1/4)*(erfc(sqrt(0.5*(10.^(SNR_db/10))))).^2;
          elseif Mode == 4
              for j = 1:4:n_bits
              if M_bits(j,1) ~= final_bits(j,1) || M_bits(j+1,1) ~= final_bits(j+1,1) || M_bits(j+2,1) ~= final_bits(j+2,1) || M_bits(j+3,1) ~= final_bits(j+3,1)
                error = error + 1;
              end
              end
              for j = 1:n_bits
                  if M_bits(j,1) ~= final_bits(j,1)
                      errorl = errorl + 1;
                  end
              end
              theory_graph = 3/2*erfc(sqrt(0.1*(10.^(SNR_db/10))));
          end
        
     PE_bits(m,i) = errorl/n_bits;    
     PE_symbol(m,i) =error/(n_bits)*Mode;
    end
end
figure(1)
    semilogy(SNR_db,PE_symbol(1,:));
    hold on
    semilogy(SNR_db,PE_symbol(3,:));
    %semilogy(SNR_db,PE_symbol(5,:));
    %semilogy(SNR_db,theory_graph);
    grid on
    xlabel('SNR, dB');
    ylabel('Symbol Error Rate');
    title('Symbol error probability curve');
figure(2)
    semilogy(SNR_db,PE_bits(1,:));
    hold on
    semilogy(SNR_db,PE_bits(3,:));
    %semilogy(SNR_db,PE_bits(5,:));
    grid on
    xlabel('SNR, dB');
    ylabel('Bit Error Rate');
    title('Bit error probability curve');
end
end