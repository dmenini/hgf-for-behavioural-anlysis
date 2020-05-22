# HGF for Behavioural Analysis: Perceptual Model for Anxiety Patients During Lockdown

### Francesco Branca, Davide Menini, Sara Sangalli

### Repo tree
- matlab/ --------- matlab code (input generation and postprocessing)
- webapp/ --------- javasript code to create the experiment on webapp
- interface/ ------ interface to handle communication between matlab and webapp (online database handled manually)
- img/ ------------ output images from matlab
- report/ --------- report and presentation

### Input generation
1. Generate cues randomly [0-1]
2. Probability of u given cues as a step function p(u|cues) = (0.1, 0.9, 0.5, 0.1, 0.9)
3. Generative model to generate hidden states x3~norm(.), x2~norm(.), x1~bern(s(x2), p(u|cues)) 
4. Ground truth of user belief (u) based on both x1 and p(u|cues)
5. Export cues and ground truth to the webapp 

### Experiment
1. Objective test: biscuits in supermarket A (yes|no) ---> are there biscuits in supermarket B?
2. Subjective test: sanitizers in supermarket A (yes|no) ---> are there sanitizers in supermarket B?
3. Anxiety test: 20 questions ---> 4 levels of anxiety ---> only interested in 2 (anxious or not) = ground truth of patients
- Tests 1 and 2 have the same cues and ground truths
- Tests 1 and 2 ranodmly inverted to avoid side effects (boredom, learning, ...)
- NaN treated randomly as 0, 1
- Anxiety test from online source 

### Postprocessing
For both test 1 (biscuits) and test 2 (virus):
1. Estimate perceptual parameters om2, om3 and mu3 using tapas_Fit function (tapas_unitsq_sgm_config)
2. Estimate ideal model using bayesian model in tapas_Fit
3. K-Means to cluster the estimations into 2 groups (health controls and anxious patients)
4. Compute score of K-means using the anxiety test as ground truth
5. Compute MSE of users responses using the ideal model as ground truth
6. Correlation between estimated parameters

### Conclusions
- Hypothesis verified: lockdown has made people more anxious of not finding sanitizers in supermarkets.
- tapas_unitsq_sgm generates estimates that are accurate (good clusters), but mu3 and om2 are completely correlated. This is confermed by the correlation plot and by the MSE of mu3, which is equal to the MSE of om2.
- tapas_unitsq_sgm_mu3 generates estimates that are not accurate, but mu3 and om2 are not correlated.
- K-means fed with other configurations of parameters (e.g. om2, om3, ze) gives worse results
- Due to the correlation, K-means with only om2 and om3 gives the same result as the 3d version
- ka2 fixed because of what said in exercise 2 (i.e. leads to a better estimation) 